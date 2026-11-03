import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogLayout } from "../../../components/BlogLayout";
import { postPath, publishedPosts, renderMarkdown } from "../../../lib/blog";
import { formatPostDate, readingTimeMinutes } from "../../../lib/postMeta";

export async function generateStaticParams() {
  const posts = publishedPosts({ includeDrafts: true });
  return posts.map((post) => ({ slug: post.slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = publishedPosts({ includeDrafts: true });
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found | Ashish Kumar" };
  }

  const canonicalUrl = `/blog/${post.slug}/`;

  return {
    title: `${post.title} | Ashish Kumar`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: `${post.title} | Ashish Kumar`,
      description: post.excerpt,
      url: canonicalUrl,
      publishedTime: post.date.toISOString(),
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = publishedPosts({ includeDrafts: true });
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const post = posts[index];
  const newer = index > 0 ? posts[index - 1] : null;
  const older = index < posts.length - 1 ? posts[index + 1] : null;

  const contentHtml = await renderMarkdown(post.body, post.slug);

  return (
    <BlogLayout currentSlug={slug}>
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">
              {post.author.url ? (
                <a className="blog-post-author-link" href={post.author.url} rel="author">
                  {post.author.name}
                </a>
              ) : (
                post.author.name
              )}
            </span>
            <time className="blog-post-date" dateTime={post.date.toISOString()}>
              {formatPostDate(post.date)}
            </time>
            <span className="blog-post-reading-time">
              {readingTimeMinutes(post.body ?? "")} min read
            </span>
            {post.tags.length > 0 && (
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div
          className="blog-post-content blog-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <nav className="blog-post-nav">
          {newer ? (
            <Link href={postPath(newer)} className="blog-nav-prev">
              ← {newer.title}
            </Link>
          ) : (
            <span></span>
          )}
          <Link href="/blog/" className="blog-nav-home">
            All Posts
          </Link>
          {older ? (
            <Link href={postPath(older)} className="blog-nav-next">
              {older.title} →
            </Link>
          ) : (
            <span></span>
          )}
        </nav>
      </article>
    </BlogLayout>
  );
}
