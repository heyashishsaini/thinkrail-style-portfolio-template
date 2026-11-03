import Link from "next/link";
import { IdeShell } from "../components/IdeShell";
import { projectPath, projects } from "../lib/projects";

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"],
  tools: ["Git & GitHub", "Docker", "Figma", "Vercel"],
};

export default function HomePage() {
  const filetree = (
    <>
      <a className="ft-row file" href="#readme"><svg className="i" aria-hidden="true"><use href="#i-file" /></svg>README.md</a>
      <a className="ft-row file depth-1" href="#about"><svg className="i" aria-hidden="true"><use href="#i-file-text" /></svg>ABOUT.md</a>
      <a className="ft-row file depth-1" href="#skills"><svg className="i" aria-hidden="true"><use href="#i-blocks" /></svg>SKILLS.md</a>
      <a className="ft-row file depth-1" href="#experience"><svg className="i" aria-hidden="true"><use href="#i-branch" /></svg>EXPERIENCE.md</a>
      <a className="ft-row file depth-1" href="#contact"><svg className="i" aria-hidden="true"><use href="#i-message-square" /></svg>CONTACT.md</a>
    </>
  );

  return (
    <IdeShell workspace="portfolio" nav="portfolio" skipHref="#readme" filetree={filetree}>
      <nav className="tabstrip" aria-label="Editor tabs" />
      <main className="editor editor-scroll" id="editor-scroll" aria-label="Portfolio content">
        <section className="file-section hero" id="readme" data-file="README.md">
          <p className="file-comment">&lt;!-- README.md --&gt;</p>
          <p className="hero-kicker"><span className="pill pill-accent">Full-stack developer</span><span className="pill">Available for work</span></p>
          <h1 className="hero-title">Ashish Kumar</h1>
          <p className="hero-tagline">I build useful, polished web products.</p>
          <p className="hero-lede">I turn ideas into responsive, accessible applications with thoughtful UX and maintainable engineering. I enjoy owning the details—from the first interface to a reliable production release.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn" href="#contact">Let&apos;s talk</a>
            <a className="btn" href="https://github.com/heyashishsaini/thinkrail-style-portfolio-template" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>

        <section className="file-section" id="about" data-file="ABOUT.md">
          <p className="file-comment">&lt;!-- ABOUT.md --&gt;</p>
          <h2>About me</h2>
          <p>I&apos;m a developer focused on building web experiences that are simple to use, quick to load, and easy to evolve. My work sits at the intersection of product thinking, frontend craft, and practical backend engineering.</p>
          <div className="beats">
            <div className="beat"><h3>Product-minded</h3><p>I start with the user problem and make technical choices that support a clear, usable outcome.</p></div>
            <div className="beat"><h3>Detail-oriented</h3><p>I care about responsive layouts, accessible interactions, honest loading states, and the small decisions that make a product feel finished.</p></div>
            <div className="beat"><h3>Reliable collaborator</h3><p>I communicate progress clearly and leave projects with a structure that the next developer can confidently work in.</p></div>
          </div>
        </section>

        <section className="file-section" id="skills" data-file="SKILLS.md">
          <p className="file-comment">&lt;!-- SKILLS.md --&gt;</p>
          <h2>Skills &amp; toolkit</h2>
          <div className="feature-grid">
            {Object.entries(skills).map(([group, items]) => <div className="feature-card" key={group}><h3>{group}</h3><p>{items.join(" · ")}</p></div>)}
          </div>
          <pre className="code-block"><code><span className="sx-cm">// The way I work</span>{"\n"}ship <span className="sx-kw">responsive</span> interfaces{"\n"}design <span className="sx-kw">clear</span> systems{"\n"}keep <span className="sx-kw">quality</span> visible</code></pre>
        </section>

        <section className="file-section" id="projects" data-file="PROJECTS/index.md">
          <p className="file-comment">&lt;!-- PROJECTS/ --&gt;</p>
          <h2>Selected projects</h2>
          <p>A few examples of the kind of digital products I like to build. Each project has its own route and case-study page.</p>
          <div className="feature-grid">
            {projects.map((project) => <Link className="feature-card" href={projectPath(project)} key={project.slug}><h3>{project.title}</h3><p>{project.summary}</p><p className="mt-3 font-mono text-xs text-accent">Open case study →</p></Link>)}
          </div>
          <Link className="btn" href="/projects/">Browse all projects</Link>
        </section>

        <section className="file-section" id="experience" data-file="EXPERIENCE.md">
          <p className="file-comment">&lt;!-- EXPERIENCE.md --&gt;</p>
          <h2>Experience</h2>
          <div className="beats">
            <div className="beat"><h3>Full-stack development</h3><p>Build and improve applications across the frontend and backend, with a focus on useful features, maintainable code, and dependable releases.</p></div>
            <div className="beat"><h3>Product delivery</h3><p>Translate requirements into scoped work, collaborate across design and engineering, and iterate based on user and team feedback.</p></div>
            <div className="beat"><h3>Continuous learning</h3><p>Explore modern web tooling and apply it when it meaningfully improves performance, developer experience, or user outcomes.</p></div>
          </div>
        </section>

        <section className="file-section" id="contact" data-file="CONTACT.md">
          <p className="file-comment">&lt;!-- CONTACT.md --&gt;</p>
          <h2>Let&apos;s build something useful</h2>
          <p>I&apos;m open to full-time roles, freelance work, and collaborations on interesting web products.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="mailto:hello@example.com">Email me</a>
            <a className="btn" href="https://www.linkedin.com/in/your-linkedin-handle/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href="https://github.com/heyashishsaini/thinkrail-style-portfolio-template" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className="file-comment mt-6">Update the email, GitHub username, LinkedIn handle, experience, and project data before publishing.</p>
        </section>
      </main>
    </IdeShell>
  );
}
