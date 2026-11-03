import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeShiki from "@shikijs/rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const CONTENT_DIR = path.join(process.cwd(), "content");
const BLOG_DIR = path.join(CONTENT_DIR, "blog");

export type BlogAuthor = {
  id: string;
  name: string;
  url?: string;
  avatar?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: Date;
  author: BlogAuthor;
  draft: boolean;
  excerpt?: string;
  tags: string[];
  body: string;
};

type AuthorFile = Record<string, { name: string; url?: string; avatar?: string }>;

function readAuthors(): AuthorFile {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "authors.json"), "utf8");
  return JSON.parse(raw) as AuthorFile;
}

function toDate(value: unknown): Date {
  if (value instanceof Date) return value;
  return new Date(String(value));
}

export function publishedPosts(options: { includeDrafts?: boolean } = {}): BlogPost[] {
  const authors = readAuthors();
  const includeDrafts = options.includeDrafts ?? process.env.NODE_ENV !== "production";

  const posts = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const file = path.join(BLOG_DIR, entry.name, "index.md");
      if (!fs.existsSync(file)) return [];
      const raw = fs.readFileSync(file, "utf8");
      const { data, content } = matter(raw);
      const authorId = String(data.author ?? "");
      const author = authors[authorId];
      if (!author) throw new Error(`Unknown blog author "${authorId}" in ${entry.name}`);
      return [
        {
          slug: String(data.slug ?? entry.name.replace(/^\d{4}-\d{2}-\d{2}-/, "")),
          title: String(data.title ?? ""),
          date: toDate(data.date),
          author: { id: authorId, ...author },
          draft: data.draft === true,
          excerpt: typeof data.excerpt === "string" ? data.excerpt : undefined,
          tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
          body: content,
        } satisfies BlogPost,
      ];
    })
    .filter((post) => includeDrafts || !post.draft);

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) throw new Error(`Duplicate blog slug "${post.slug}"`);
    seen.add(post.slug);
  }
  return posts;
}

export function postPath(post: Pick<BlogPost, "slug">): string {
  return `/blog/${post.slug}/`;
}

/** Relative `./images/...` references resolve to the post's public folder. */
function rewriteImagePaths(markdown: string, slug: string): string {
  return markdown.replace(/\]\(\.?\/?images\//g, `](/blog/${slug}/images/`);
}

export async function renderMarkdown(markdown: string, slug: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShiki, {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(rewriteImagePaths(markdown, slug));

  return String(file);
}
