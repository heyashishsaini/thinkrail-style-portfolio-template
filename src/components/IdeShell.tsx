import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { IconSprite } from "./IconSprite";
import { SiteClient } from "./SiteClient";

const WORDMARK_PATH =
  "m 460.1 294.06 l -2.04 -3.26 c 7.4 -6.37 13.71 -13.31 18.99 -20.72 c 15.49 -21.7 22.25 -47.43 22.13 -74.72 l -0.07 -15.38 c 0.64 -6.21 0.89 -9.98 0.89 -9.98 l -0.02 -71.65 c -0.02 -54.32 -44.07 -98.35 -98.39 -98.35 h -61.59 v 31.11 c 0 4.91 3.98 8.89 8.89 8.89 l 50.02 0.78 c 34.18 0.39 61.81 27.98 62.22 62.17 l 1.07 88.19 c 0.43 28.75 -0.16 67.01 -62.89 86.49 l 104.13 171.57 h 52.92 l -55.98 -90.56 Z m -85.96 -44.06 c 30.95 0 56.02 -25.11 55.98 -56.05 l -0.12 -82.65 c 0 -22.81 -18.49 -41.3 -41.3 -41.3 h -208.7 v 31.775 c 0 4.543 3.682 8.225 8.225 8.225 h 186.645 c 8.356 0 15.13 6.774 15.13 15.13 v 63.87 c 0 9.542 -7.808 17.35 -17.35 17.35 h -60.79 c -57.12 0 -81.27 15.75 -88.22 21.54 c -0.9 0.76 -2.28 0.12 -2.29 -1.07 l -0.921 -79.961 c -0.044 -3.801 -3.138 -6.859 -6.938 -6.859 h -33.491 v 309.2 h 40 v -127.96 c 0 -43.97 24.37 -71.24 79.74 -71.24 Z m -233.57 -180 h -140.57 v 40 h 110 v 339.2 h 40 v -369.77 c 0 -5.21 -4.22 -9.43 -9.43 -9.43 Z m 169.43 -38.12 v -31.88 h -310 v 40 h 301.88 c 4.49 0 8.12 -3.64 8.12 -8.12 Z m 41.9 248.12 h -63.24 c -21.87 0 -39.61 17.74 -39.61 39.61 v 129.59 h 40.06 l 0.62 -108.59 c 0.06 -11.4 9.32 -20.61 20.72 -20.61 h 23.39 c 3.84 0 7.42 1.95 9.5 5.18 l 79.72 124.02 h 45.34 l -96.56 -158.01 c -4.25 -6.95 -11.8 -11.19 -19.94 -11.19 Z";

type IdeShellProps = {
  workspace: string;
  nav: "portfolio" | "blog";
  skipHref: string;
  filetree: ReactNode;
  children: ReactNode;
};

export function IdeShell({ workspace, nav, skipHref, filetree, children }: IdeShellProps) {
  return (
    <>
      <IconSprite />

      <a
        href={skipHref}
        className="fixed -top-12 left-3 z-100 rounded bg-accent px-3.5 py-2 text-on-accent transition-[top] duration-120 focus:top-3"
      >
        Skip to content
      </a>

      <div className="fixed inset-0 flex flex-col bg-chrome">
        {/* ══ Title bar ══ */}
        <header className="flex min-w-0 shrink-0 items-center gap-3.5 border-b border-line2 bg-chrome px-3.5 py-2">
          <span className="inline-flex w-6 shrink-0 items-center text-accent" aria-hidden="true">
            <svg viewBox="0 0 556.36 449.2" fill="currentColor" aria-hidden="true" className="block h-auto w-full">
              <path d={WORDMARK_PATH} />
            </svg>
          </span>
          <div className="flex min-w-0 items-center gap-3.5 whitespace-nowrap text-[13px] max-[560px]:hidden">
            <span className="flex items-center gap-1 border-l border-line2 pl-3.5">
              <span className="hidden font-sans text-ink">thinkrail</span>
              <Icon name="chevron-right" className="hidden" />
              <span className="font-mono text-ink">{workspace}</span>
            </span>
            <span className="flex items-center gap-1 border-l border-line2 pl-3.5 font-mono text-[13px] text-muted max-[840px]:hidden">
              <Icon name="branch" />
              workspace/{workspace} · from main
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2.5">
            <a
              className="inline-flex cursor-pointer items-center gap-[7px] rounded px-2 py-1.5 text-[13px] text-muted hover:bg-hover hover:text-ink hover:no-underline"
              href="https://github.com/heyashishsaini/thinkrail-style-portfolio-template"
              aria-label="Source Code"
            >
              <Icon name="github" filled />
            </a>
            <a
              className="inline-flex cursor-pointer items-center gap-[7px] rounded px-2 py-1.5 text-[13px] text-muted hover:bg-hover hover:text-ink hover:no-underline"
              href="https://www.linkedin.com/in/your-linkedin-handle/"
              aria-label="Ashish Kumar on LinkedIn"
            >
              <Icon name="linkedin" filled />
            </a>
            <button
              type="button"
              id="theme-toggle"
              aria-label="Switch to light theme"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded border border-line2 text-muted hover:bg-hover hover:text-ink"
            >
              <Icon name="sun" className="theme-icon-sun size-4" />
              <Icon name="moon" className="theme-icon-moon size-4" />
            </button>
            <button
              type="button"
              id="nav-toggle"
              aria-expanded="false"
              aria-controls="rail-right"
              aria-label="Open file tree"
              className="hidden cursor-pointer items-center gap-[7px] rounded px-2 py-1.5 text-[13px] text-muted hover:bg-hover hover:text-ink max-rail:inline-flex"
            >
              <Icon name="menu" />
            </button>
          </div>
        </header>

        <div
          className="ide-layout grid min-h-0 flex-1 grid-cols-[220px_minmax(0,1fr)_380px] max-rail:grid-cols-[200px_minmax(0,1fr)]"
        >
          {/* ══ Left rail: projects ══ */}
          <aside className="rail-left-scroll flex flex-col gap-2.5 overflow-y-auto border-r border-line p-3 max-[840px]:hidden" aria-label="Projects">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-1 py-0.5 text-[11px] font-medium uppercase tracking-[0.5px] text-hint">
                Projects <Icon name="plus" />
              </div>
              <div className="flex flex-col gap-px font-mono text-[13px]">
                <div className="flex items-center gap-1.5 overflow-hidden rounded px-2 py-[5px] text-ink whitespace-nowrap">
                  <Icon name="chevron-down" className="text-hint" />
                  <Icon name="folder" className="text-hint" />
                  <span className="overflow-hidden text-ellipsis">ashish-kumar</span>
                </div>
                <div className="flex items-center gap-1.5 overflow-hidden rounded py-[5px] pl-[26px] text-ink whitespace-nowrap">
                  <Icon name="branch" className="text-hint" />
                  <span className="overflow-hidden text-ellipsis">portfolio</span>
                </div>
                <Link
                  href="/"
                  aria-current={nav === "portfolio" ? "page" : undefined}
                  className={[
                    "flex items-center gap-1.5 overflow-hidden rounded py-[5px] pl-11 whitespace-nowrap no-underline hover:bg-hover hover:text-ink hover:no-underline",
                    nav === "portfolio" ? "bg-accent-active text-ink" : "text-muted",
                  ].join(" ")}
                >
                  <Icon name="file" className={nav === "portfolio" ? "text-accent" : "text-hint"} />
                  <span className="overflow-hidden text-ellipsis">README.md</span>
                </Link>
                <Link href="/projects/" className="flex items-center gap-1.5 overflow-hidden rounded py-[5px] pl-11 text-muted whitespace-nowrap no-underline hover:bg-hover hover:text-ink hover:no-underline"><Icon name="folder" className="text-hint" /><span className="overflow-hidden text-ellipsis">PROJECTS/</span></Link>
                <Link
                  href="/blog/"
                  aria-current={nav === "blog" ? "page" : undefined}
                  className={[
                    "flex items-center gap-1.5 overflow-hidden rounded py-[5px] pl-11 whitespace-nowrap no-underline hover:bg-hover hover:text-ink hover:no-underline",
                    nav === "blog" ? "bg-accent-active text-ink" : "text-muted",
                  ].join(" ")}
                ><Icon name="book" className={nav === "blog" ? "text-accent" : "text-hint"} /><span className="overflow-hidden text-ellipsis">BLOG/</span></Link>
              </div>
            </div>
            <div
              className="mx-2 mb-2 mt-auto rounded border border-line2 bg-elevated p-3 transition-[opacity,transform] duration-300 ease-out data-[state=hidden]:hidden data-[state=pending]:pointer-events-none data-[state=pending]:translate-y-3 data-[state=pending]:opacity-0"
              id="rail-note"
              data-state="pending"
            >
              <Icon name="info" className="size-6 text-hint" />
              <p className="mt-2 text-sm leading-normal text-ink">
                I build thoughtful web experiences, from the first user flow to a reliable production release.
              </p>
              <button
                type="button"
                id="rail-note-dismiss"
                className="mt-3 inline-flex cursor-pointer items-center justify-center rounded border border-line2 px-[18px] py-2.5 text-sm font-medium text-ink hover:border-muted hover:bg-hover"
              >
                Let&apos;s connect
              </button>
            </div>
          </aside>

          {/* ══ Center column ══ */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>

          {/* ══ Right rail: file tree + terminal ══ */}
          <aside
            id="rail-right"
            aria-label="Files and terminal"
            className="flex min-h-0 flex-col border-l border-line bg-chrome max-rail:fixed max-rail:inset-y-0 max-rail:right-0 max-rail:z-[60] max-rail:w-[min(380px,85vw)] max-rail:translate-x-full max-rail:border-line2 max-rail:shadow-[var(--shadow)] max-rail:transition-transform max-rail:duration-200 max-rail:data-[open=true]:translate-x-0"
          >
            <div
              className="flex items-center gap-[18px] border-b border-line px-4 py-2 text-[11.5px] font-medium uppercase tracking-[0.5px]"
              data-mock-hint="Want the real thing?"
              data-mock-label="Files and terminal tabs — a static mock"
            >
              <span className="text-hint" title="In the app: the worktree's spec graph">
                Specs
              </span>
              <span className="text-ink">Files</span>
              <span className="cursor-help text-hint" title="In the app: the live git diff">
                Changes
              </span>
              <span className="cursor-help text-hint" title="In the app: run hooks">
                Hooks
              </span>
            </div>
            <nav className="filetree filetree-scroll flex min-h-0 flex-1 flex-col gap-px overflow-y-auto p-2 text-[13px]" aria-label="Files">
              {filetree}
            </nav>
            <div className="flex h-[375px] max-h-[47vh] shrink-0 flex-col border-t border-line2" id="terminal">
              <div className="flex items-center gap-2.5 border-b border-line px-3 py-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.5px] text-hint">Terminal</span>
                <button
                  type="button"
                  data-term-replay
                  hidden
                  className="ml-auto cursor-pointer rounded border border-line2 px-2 py-0.5 font-mono text-[10.5px] text-muted hover:bg-hover hover:text-ink data-[shown=true]:block"
                >
                  Replay logo
                </button>
              </div>
              <pre
                className="term-screen m-0 min-h-0 flex-1 overflow-y-auto whitespace-pre-wrap break-all px-3.5 pb-3.5 pt-1 font-mono text-xs leading-[1.75] text-muted"
                id="term-screen"
              >
                <span className="block">
                  <span className="font-semibold text-accent">❯</span> whoami
                </span>
                <span className="block text-hint">
                  Ashish Kumar · full-stack developer{"\n"}✓ available for freelance and full-time opportunities
                </span>
              </pre>
            </div>
          </aside>
          <div className="fixed inset-0 z-50 bg-black/45 max-rail:block hidden" id="rail-backdrop" hidden />
        </div>

        {/* ══ Status bar ══ */}
        <footer className="flex shrink-0 items-center justify-start gap-[18px] overflow-hidden whitespace-nowrap border-t border-line2 bg-chrome px-4 py-[5px] font-mono text-[11px] text-hint max-[560px]:overflow-visible max-[560px]:whitespace-normal">
          <span className="inline-flex items-center gap-1.5 max-[560px]:w-full max-[560px]:flex-wrap max-[560px]:justify-start">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/heyashishsaini/thinkrail-style-portfolio-template"
              className="text-inherit no-underline hover:text-ink hover:underline"
            >
              Ashish Kumar (Template Source Code)
            </a>{" "}
            <span className="max-[560px]:hidden" aria-hidden="true">
              ·
            </span>{" "}
            <span className="max-[560px]:basis-full">Built with Next.js</span>
          </span>
        </footer>
      </div>

      <SiteClient />
    </>
  );
}
