import Link from "next/link";
import type { ReactNode } from "react";
import { IdeShell } from "./IdeShell";
import { projectPath, projects } from "@/lib/projects";

export function ProjectLayout({ children, currentSlug }: { children: ReactNode; currentSlug?: string }) {
  const filetree = (
    <>
      <Link className="ft-row file" href="/projects/">
        <svg className="i" aria-hidden="true"><use href="#i-folder" /></svg>
        PROJECTS/
      </Link>
      {projects.map((project) => (
        <Link
          key={project.slug}
          className={`ft-row file depth-1 ${currentSlug === project.slug ? "active font-medium text-ink bg-accent-active" : ""}`}
          href={projectPath(project)}
          aria-current={currentSlug === project.slug ? "page" : undefined}
        >
          <svg className="i" aria-hidden="true"><use href="#i-file-text" /></svg>
          {project.title}
        </Link>
      ))}
    </>
  );

  return (
    <IdeShell workspace="portfolio" nav="portfolio" skipHref="#project-content" filetree={filetree}>
      <main className="editor editor-scroll" id="editor-scroll" aria-label="Project content">
        <div className="blog-main" id="project-content">{children}</div>
      </main>
    </IdeShell>
  );
}
