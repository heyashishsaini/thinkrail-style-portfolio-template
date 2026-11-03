import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#171719",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ashish Kumar | Full-stack Developer",
  description: "Portfolio of Ashish Kumar, a full-stack developer building thoughtful, responsive web products.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.example.com"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Ashish Kumar | Full-stack Developer",
    description: "Thoughtful, responsive web products built by Ashish Kumar.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const THEME_SCRIPT = `try{const e=localStorage.getItem("thinkrail-site-theme");document.documentElement.setAttribute("data-theme",e==="light"?"light":e?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}catch{}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
