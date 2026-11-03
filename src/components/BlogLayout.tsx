import Link from "next/link";
import type { ReactNode } from "react";
import { IdeShell } from "./IdeShell";
import { postPath, publishedPosts } from "@/lib/blog";

export function BlogLayout({
  currentSlug,
  children,
}: {
  currentSlug?: string;
  children: ReactNode;
}) {
  const posts = publishedPosts();

  const filetree = (
    <>
      {posts.map((post) => {
        const isCurrent = currentSlug === post.slug;
        return (
          <Link
            key={post.slug}
            href={postPath(post)}
            className={`ft-row file ${isCurrent ? "active font-medium text-ink bg-accent-active" : ""}`}
            aria-current={isCurrent ? "page" : undefined}
          >
            <svg className="i" aria-hidden="true">
              <use href="#i-file-text" />
            </svg>
            {post.title}
          </Link>
        );
      })}
    </>
  );

  return (
    <IdeShell workspace="blog" nav="blog" skipHref="#blog-content" filetree={filetree}>
      <main className="editor editor-scroll" id="editor-scroll" aria-label="Page content">
        <div className="blog-main" id="blog-content">
          {children}
        </div>
      </main>
    </IdeShell>
  );
}
