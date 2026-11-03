import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectLayout } from "../../../components/ProjectLayout";
import { projectBySlug, projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return project ? { title: `${project.title} | Ashish Kumar`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <ProjectLayout currentSlug={project.slug}>
      <article className="blog-post">
        <header className="blog-post-header">
          <p className="file-comment">// projects/{project.slug}.md</p>
          <h1 className="blog-post-title">{project.title}</h1>
          <p className="blog-post-content">{project.description}</p>
          <div className="blog-post-tags">
            {project.stack.map((item) => <span key={item} className="blog-tag">{item}</span>)}
          </div>
        </header>
        <div className="blog-post-content">
          <h2>What I built</h2>
          <p>{project.summary}</p>
          <h2>Highlights</h2>
          <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          <p className="hero-ctas">
            <a className="btn btn-primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View source</a>
            {project.liveUrl && <a className="btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo</a>}
          </p>
          <p><Link href="/projects/">← Back to all projects</Link></p>
        </div>
      </article>
    </ProjectLayout>
  );
}
