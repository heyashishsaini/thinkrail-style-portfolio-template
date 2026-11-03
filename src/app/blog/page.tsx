import type { Metadata } from "next";
import Link from "next/link";
import { BlogLayout } from "../../components/BlogLayout";
import { postPath, publishedPosts } from "../../lib/blog";
import { formatPostDate, readingTimeMinutes } from "../../lib/postMeta";

export const metadata: Metadata = {
  title: "Blog | Ashish Kumar",
  description: "Notes on web development, product thinking, and building reliable interfaces.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog | Ashish Kumar",
    description: "Notes on web development, product thinking, and building reliable interfaces.",
    url: "/blog/",
  },
};

export default function BlogIndexPage() {
  const posts = publishedPosts();

  return (
    <BlogLayout>
      <header className="blog-index-header">
        <h1 className="blog-index-title">Blog</h1>
        <p className="blog-index-subtitle">Notes on web development, product thinking, and useful interfaces.</p>
      </header>

      <div className="blog-posts-list">
        {posts.map((post) => (
          <Link key={post.slug} href={postPath(post)} className="blog-post-card">
            <h2 className="blog-post-card-title">{post.title}</h2>
            <div className="blog-post-card-meta">
              <time dateTime={post.date.toISOString()}>{formatPostDate(post.date)}</time>
              <span className="blog-post-card-reading-time">
                {readingTimeMinutes(post.body ?? "")} min read
              </span>
            </div>
            {post.excerpt && <p className="blog-post-card-excerpt">{post.excerpt}</p>}
            {post.tags.length > 0 && (
              <div className="blog-post-card-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </BlogLayout>
  );
}
