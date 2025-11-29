import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "RouteFlow London",
  description: "Modern, responsive live transport tracking platform for London.",
  metadataBase: new URL("https://routeflow.ldn"),
  openGraph: {
    title: "RouteFlow London",
    description: "Live TfL bus tracking, fleet insights, and community features.",
    siteName: "RouteFlow London",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RouteFlow London",
    description: "Live TfL bus tracking, fleet insights, and community features."
  }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-midnight text-sand antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/90 px-4 py-3 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-mint text-xl font-black text-midnight shadow-floating">
                  RF
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-mint">RouteFlow London</p>
                  <p className="text-xs text-sand/70">Realtime TfL tracking platform</p>
                </div>
              </div>
              <nav className="hidden items-center gap-4 text-sm font-medium text-sand/90 sm:flex">
                <a className="rounded-full px-3 py-2 transition hover:bg-white/5" href="#vision">
                  Vision
                </a>
                <a className="rounded-full px-3 py-2 transition hover:bg-white/5" href="#architecture">
                  Architecture
                </a>
                <a className="rounded-full px-3 py-2 transition hover:bg-white/5" href="#stack">
                  Stack
                </a>
                <a className="rounded-full px-3 py-2 transition hover:bg-white/5" href="#roadmap">
                  Roadmap
                </a>
              </nav>
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky to-mint px-4 py-2 text-sm font-semibold text-navy shadow-card transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint">
                Launch Preview
              </button>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/5 bg-navy px-4 py-6 text-sm text-sand/70">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} RouteFlow London. Crafted for transport enthusiasts.</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-sand/80">Accessibility-first</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-sand/80">API-ready</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-sand/80">Mobile-first</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
