import type { Metadata } from "next";
import Link from "next/link";
import { ProjectLayout } from "../../components/ProjectLayout";
import { projectPath, projects } from "../../lib/projects";

export const metadata: Metadata = {
  title: "Projects | Ashish Kumar",
  description: "Selected web development projects by Ashish Kumar.",
};

export default function ProjectsPage() {
  return (
    <ProjectLayout>
      <header className="blog-index-header">
        <p className="file-comment">// PROJECTS/</p>
        <h1 className="blog-index-title">Selected projects</h1>
        <p className="blog-index-subtitle">Case studies, experiments, and production-minded builds.</p>
      </header>
      <div className="blog-posts-list">
        {projects.map((project) => (
          <Link key={project.slug} href={projectPath(project)} className="blog-post-card">
            <h2 className="blog-post-card-title">{project.title}</h2>
            <p className="blog-post-card-excerpt">{project.summary}</p>
            <div className="blog-post-card-tags">
              {project.stack.map((item) => <span key={item} className="blog-tag">{item}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </ProjectLayout>
  );
}
