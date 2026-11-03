export type PortfolioProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
};

/** Replace these starter entries and profile URLs with your own work before publishing. */
export const projects: PortfolioProject[] = [
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    summary: "An IDE-inspired portfolio built for clarity, speed, and a strong mobile experience.",
    description: "A personal site that turns a developer portfolio into a familiar workspace: project files, editor tabs, and focused case studies.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: ["Designed a responsive editor-shell layout with an accessible navigation drawer.", "Built static project routes and a Markdown-powered blog workflow.", "Optimized metadata, keyboard navigation, and reduced-motion behaviour."],
    githubUrl: "https://github.com/your-github-username",
  },
  {
    slug: "product-dashboard",
    title: "Product Dashboard",
    summary: "A data-rich workspace that helps teams monitor product performance and act on it.",
    description: "A case-study starter for a dashboard or SaaS product. Replace the content with your project’s problem, approach, and results.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    highlights: ["Created clear information hierarchy for dense operational data.", "Added reusable UI primitives and stateful filtering patterns.", "Focused on fast loading and reliable empty, loading, and error states."],
    githubUrl: "https://github.com/your-github-username",
  },
  {
    slug: "commerce-platform",
    title: "Commerce Platform",
    summary: "A polished storefront experience with a maintainable engineering foundation.",
    description: "A case-study starter for an e-commerce project. Use it to show the user problem, technical choices, and measurable outcome.",
    stack: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    highlights: ["Implemented a mobile-first purchase flow with clear feedback at every step.", "Structured server and client boundaries for maintainable performance.", "Connected payments, order management, and transactional email workflows."],
    githubUrl: "https://github.com/your-github-username",
  },
];

export function projectPath(project: Pick<PortfolioProject, "slug">): string {
  return `/projects/${project.slug}/`;
}

export function projectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((project) => project.slug === slug);
}
