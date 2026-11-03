# ThinkRail-Style Portfolio Template
 
A developer portfolio template that looks and feels like an IDE. Your site is a workspace: a file tree, editor tabs, and content written as `README.md`, `ABOUT.md`, `SKILLS.md` and so on. It is styled after the [thinkrail.ai](https://thinkrail.ai) landing page, with a dark chrome, a neon-green accent, and Geist, JetBrains Mono and Orbitron type.
 
Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4. Pages are statically generated, so the site is fast and easy to host.
 
## Features
 
- **IDE-style shell** with a title bar, file-tree sidebar, editor tabs and a scrollable editor pane
- **Portfolio home page** with hero, about, skills, selected projects, experience and contact sections
- **Project case studies** at `/projects` and `/projects/[slug]`, generated from a single typed data file
- **Markdown blog** at `/blog` and `/blog/[slug]`, with frontmatter, tags, draft posts and an author registry
- **Syntax highlighting** for code blocks via Shiki, with GitHub-flavoured Markdown (tables, task lists) and inline HTML
- **RSS feed** at `/blog/rss.xml`
- **Dark and light themes** with a toggle. The choice is saved in `localStorage` and falls back to the system preference without a flash on load
- **Accessible by default**: skip-to-content link, semantic landmarks, visible focus ring and an accessible navigation drawer on mobile
- **SEO basics**: per-page metadata, canonical URLs, Open Graph and Twitter cards, `robots.txt` and an OG image
## Tech stack
 
| Area | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, `tw-animate-css`, custom CSS variables |
| Fonts | Geist Variable, JetBrains Mono Variable, Orbitron Variable (via `@fontsource-variable`) |
| Icons | Lucide React plus an inline SVG sprite |
| Content | Markdown with `gray-matter`, `unified`, `remark-gfm`, `rehype-raw`, `@shikijs/rehype` |
 
## Getting started
 
### Prerequisites
 
- Node.js 20 or newer
- npm (a `package-lock.json` is included)
### Install and run
 
```bash
git clone https://github.com/heyashishsaini/thinkrail-style-portfolio-template.git
cd thinkrail-style-portfolio-template
npm install
npm run dev
```
 
Open <http://localhost:3000>.
 
### Scripts
 
| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload (drafts are visible) |
| `npm run build` | Create a production build (drafts are excluded) |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js linting |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
 
### Environment variables
 
Create a `.env.local` file:
 
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
 
This sets `metadataBase` for canonical URLs and social cards. It defaults to a placeholder if unset.
 
## Project structure
 
```
.
├── content/
│   ├── authors.json            # Blog author registry, keyed by author id
│   └── blog/
│       └── YYYY-MM-DD-slug/
│           └── index.md        # One post per folder
├── public/                     # favicon, og.png, robots.txt, logos
└── src/
    ├── app/
    │   ├── layout.tsx          # Site metadata, theme bootstrap script
    │   ├── page.tsx            # Portfolio home page
    │   ├── projects/           # Project index and [slug] case studies
    │   ├── blog/               # Blog index, [slug] posts, rss.xml route
    │   └── not-found.tsx
    ├── components/             # IdeShell, ProjectLayout, BlogLayout, Icon, SiteClient
    ├── lib/
    │   ├── projects.ts         # Project data and helpers
    │   ├── blog.ts             # Markdown loading and rendering
    │   ├── postMeta.ts         # Post metadata helpers
    │   └── theme.ts            # Theme storage and normalisation
    └── styles.css              # Design tokens and component styles
```
 
## Make it yours
 
Everything is placeholder content. Work through this checklist before publishing:
 
1. **Your details.** Replace the name, tagline, bio, skills, experience and contact links in `src/app/page.tsx`.
2. **Site metadata.** Update the title, description and Open Graph text in `src/app/layout.tsx`.
3. **Social links.** The GitHub and LinkedIn links in the title bar are in `src/components/IdeShell.tsx`. Search the repo for `your-github-username`, `your-linkedin-handle` and `hello@example.com` to catch the rest.
4. **Projects.** Edit the `projects` array in `src/lib/projects.ts`. Each entry becomes a case-study page automatically.
5. **Blog.** Replace the sample posts in `content/blog/` and add yourself to `content/authors.json`.
6. **Branding.** Replace `public/favicon.svg`, `public/og.png` and the logo files in `public/vibecoding/`. Update `public/robots.txt` to point to your own sitemap URL.
7. **Colours and fonts.** Change the design tokens at the top of `src/styles.css`, such as `--accent`, `--chrome` and `--font-*`.
### Adding a project
 
Add an entry to `src/lib/projects.ts`:
 
```ts
{
  slug: "my-project",
  title: "My Project",
  summary: "One line for the project card.",
  description: "A longer intro for the case-study page.",
  stack: ["Next.js", "TypeScript"],
  highlights: ["What you built", "What you improved"],
  githubUrl: "https://github.com/you/my-project",
  liveUrl: "https://my-project.example.com", // optional
}
```
 
### Writing a blog post
 
Create `content/blog/2026-11-03-my-post/index.md`:
 
```md
---
title: "My Post Title"
slug: my-post-title
date: 2026-11-03
author: your-author-key   # must exist in content/authors.json
excerpt: "A one or two sentence summary."
draft: false              # true hides it in production builds
tags:
  - frontend
---
 
Write your post in Markdown. Don't repeat the title as an H1, because it is rendered from frontmatter.
```
 
An unknown author key throws an error at build time. See `content/blog/BLOG.md` for the full author guide.
 
## Deployment
 
The site is statically generated and deploys to any Next.js-compatible host. [Vercel](https://vercel.com) is the simplest route: import the repo, set `NEXT_PUBLIC_SITE_URL`, and deploy.
 
## Credits
 
The visual design is inspired by the [ThinkRail](https://thinkrail.ai) website. This is an independent template and is not affiliated with ThinkRail. If you reuse ThinkRail's branding assets (logo, wordmark, OG images), replace them with your own before publishing.
 
## License
 
Add a license of your choice (for example MIT) in a `LICENSE` file.
