"use client";

import { useEffect } from "react";
import { initThemeToggle } from "@/lib/theme";

const TAB_CLASS =
  "flex shrink-0 items-center justify-start gap-[7px] whitespace-nowrap border-r border-b border-line px-3 py-2 font-mono text-[12.5px] text-muted no-underline hover:bg-hover hover:text-ink hover:no-underline data-[active=true]:border-b-workspace data-[active=true]:bg-workspace data-[active=true]:text-ink data-[active=true]:[&_svg]:text-ink";

export function SiteClient() {
  useEffect(() => {
    const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (motionOK) document.documentElement.classList.add("anim");

    const editor = document.getElementById("editor-scroll");
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".file-section"));
    const treeRows = Array.from(document.querySelectorAll<HTMLAnchorElement>(".filetree a.ft-row"));
    const tabstrip = document.querySelector<HTMLElement>(".tabstrip");
    const tabRows: HTMLAnchorElement[] = [];

    if (tabstrip) {
      const icons = new Map(treeRows.map((row) => [row.getAttribute("href"), row.querySelector("svg")] as const));
      const seen = new Set<string>();
      for (const row of treeRows) {
        const href = row.getAttribute("href");
        if (!href || !href.startsWith("#") || seen.has(href)) continue;
        seen.add(href);
        const tab = document.createElement("a");
        tab.className = TAB_CLASS;
        tab.href = href;
        const icon = icons.get(href);
        if (icon) tab.appendChild(icon.cloneNode(true));
        tab.append(document.createTextNode(row.textContent?.trim() ?? href));
        tabstrip.appendChild(tab);
        tabRows.push(tab);
      }
      const filler = document.createElement("span");
      filler.className = "min-w-0 flex-1 border-b border-line";
      tabstrip.appendChild(filler);
    }

    const setActive = (id: string) => {
      for (const row of [...treeRows, ...tabRows]) {
        if (row.getAttribute("href") === `#${id}`) row.dataset.active = "true";
        else delete row.dataset.active;
      }
    };

    let observer: IntersectionObserver | undefined;
    if (editor && sections.length) {
      const visible = new Map<string, number>();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
          const best = [...visible.entries()].filter(([, ratio]) => ratio > 0).sort((a, b) => b[1] - a[1])[0];
          if (best) setActive(best[0]);
        },
        { root: editor, threshold: [0.05, 0.2, 0.5, 0.8] },
      );
      sections.forEach((section) => observer?.observe(section));
    }

    initThemeToggle();

    const navToggle = document.getElementById("nav-toggle");
    const railRight = document.getElementById("rail-right");
    const backdrop = document.getElementById("rail-backdrop");
    const setDrawerOpen = (open: boolean) => {
      if (!railRight || !backdrop || !navToggle) return;
      if (open) railRight.dataset.open = "true";
      else delete railRight.dataset.open;
      backdrop.hidden = !open;
      navToggle.setAttribute("aria-expanded", String(open));
    };
    const toggleDrawer = () => setDrawerOpen(railRight?.dataset.open !== "true");
    const closeDrawer = () => setDrawerOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") closeDrawer(); };

    navToggle?.addEventListener("click", toggleDrawer);
    backdrop?.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", closeOnEscape);
    treeRows.forEach((row) => row.addEventListener("click", closeDrawer));

    const note = document.getElementById("rail-note");
    const noteDismiss = document.getElementById("rail-note-dismiss");
    const dismissNote = () => { if (note) note.dataset.state = "hidden"; };
    noteDismiss?.addEventListener("click", dismissNote);

    return () => {
      observer?.disconnect();
      navToggle?.removeEventListener("click", toggleDrawer);
      backdrop?.removeEventListener("click", closeDrawer);
      document.removeEventListener("keydown", closeOnEscape);
      treeRows.forEach((row) => row.removeEventListener("click", closeDrawer));
      noteDismiss?.removeEventListener("click", dismissNote);
      document.documentElement.classList.remove("anim");
    };
  }, []);

  return null;
}
