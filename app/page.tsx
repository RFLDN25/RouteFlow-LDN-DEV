import { ArrowRight, LayoutGrid, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Live network intelligence",
    description: "Realtime bus tracking with predictive arrivals, disruption overlays, and adaptive caching for speed.",
    badge: "Realtime"
  },
  {
    title: "Community-first",
    description: "Profiles, leaderboards, discussions, and rich media to showcase the fleet and share sightings.",
    badge: "Social"
  },
  {
    title: "Operational tooling",
    description: "Curated fleet database, route histories, admin dashboards, and analytics-grade observability.",
    badge: "Control"
  },
  {
    title: "Developer platform",
    description: "Typed SDKs, webhooks, streaming APIs, and powerful permissions for builders and partners.",
    badge: "API"
  }
];

const stackItems = [
  {
    label: "Framework",
    value: "Next.js 14 (App Router)"
  },
  {
    label: "UI",
    value: "Tailwind CSS + Headless primitives"
  },
  {
    label: "State & Data",
    value: "React Server Components, Suspense, edge caching"
  },
  {
    label: "Security",
    value: "Secure auth, rate limits, audit trails"
  }
];

const roadmap = [
  {
    title: "Foundations",
    detail: "Project scaffolding, design system tokens, accessibility baselines, telemetry hooks",
    status: "In progress"
  },
  {
    title: "Core experience",
    detail: "Live map, route/stop explorer, fleet cards, personalization, fast search",
    status: "Planned"
  },
  {
    title: "Community",
    detail: "Profiles, uploads, discussions, gamified quests, leaderboards",
    status: "Planned"
  },
  {
    title: "Operations & API",
    detail: "Admin console, data curation tools, analytics, public/partner APIs",
    status: "Planned"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="section-shell pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
              London bus intelligence
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl font-display">
              RouteFlow London
              <span className="block text-2xl font-normal text-sand/80 sm:text-3xl">A modern, responsive transport tracking platform</span>
            </h1>
            <p className="max-w-2xl text-lg text-sand/80">
              Built for enthusiasts, commuters, and operators. RouteFlow combines real-time bus telemetry, curated route data,
              community-driven content, and powerful analytics into a cohesive, accessible experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky to-mint px-5 py-3 text-sm font-semibold text-navy shadow-card transition hover:translate-y-[-1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                href="#architecture"
              >
                Explore architecture
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-sand shadow-card transition hover:border-mint/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                href="#roadmap"
              >
                View build roadmap
              </Link>
            </div>
            <div className="grid grid-auto-fit gap-4">
              <div className="card-surface">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-mint/10 p-3 text-mint">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-sand/70">Real-time visibility</p>
                    <p className="font-semibold">TfL bus tracking with predictive arrivals</p>
                  </div>
                </div>
              </div>
              <div className="card-surface">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky/10 p-3 text-sky">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-sand/70">Scalable design</p>
                    <p className="font-semibold">Component-driven UI, mobile-first layouts</p>
                  </div>
                </div>
              </div>
              <div className="card-surface">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-mint/10 p-3 text-mint">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-sand/70">Trust & security</p>
                    <p className="font-semibold">Secure auth, auditability, and resilient APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-surface relative overflow-hidden border-white/10 bg-gradient-to-br from-navy to-midnight shadow-floating">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.12),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.18),transparent_30%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-sand/70">Platform readiness</p>
                  <p className="text-2xl font-bold">Foundations in progress</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-mint">Build sprint</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-sand/70">Performance</p>
                  <p className="text-lg font-semibold">Edge-ready, cached</p>
                  <p className="text-sm text-sand/70">Optimised for responsive, reactive updates.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-sand/70">Design system</p>
                  <p className="text-lg font-semibold">Tokens & theming</p>
                  <p className="text-sm text-sand/70">Reusable, accessible components across screens.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-sand/70">Data layer</p>
                  <p className="text-lg font-semibold">API-first</p>
                  <p className="text-sm text-sand/70">Contract-driven endpoints with strong auth.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-sand/70">Community</p>
                  <p className="text-lg font-semibold">Profiles & sharing</p>
                  <p className="text-sm text-sand/70">Built-in gamification and social features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section-shell pt-0">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em] text-mint">Vision</p>
          <h2 className="text-3xl font-semibold font-display">A complete TfL bus tracking universe</h2>
          <p className="max-w-3xl text-sand/80">
            RouteFlow London is built to be the fastest, most engaging way to explore London&apos;s bus network. From live telemetry
            to fleet archives and community storytelling, every piece is modular, API-driven, and mobile-first.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card-surface flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
                  {pillar.badge}
                </p>
                <span className="text-xs text-sand/60">Modular</span>
              </div>
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="text-sand/80">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="section-shell">
        <div className="card-surface space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.25em] text-mint">Architecture</p>
            <h2 className="text-3xl font-semibold font-display">Ready for realtime, scale, and reliability</h2>
            <p className="max-w-3xl text-sand/80">
              Our stack prioritizes performance with React Server Components, aggressive caching, streaming, and typed contracts.
              The UI kit is component-driven with a focus on accessibility, semantic markup, and responsive layouts.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.25em] text-sky">Front-end</p>
              <h3 className="text-lg font-semibold">Next.js, Tailwind, RSC</h3>
              <p className="text-sm text-sand/70">
                App Router, layouts, and streaming-friendly components provide fast first render and modularity for future pages.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.25em] text-sky">Data</p>
              <h3 className="text-lg font-semibold">API-first</h3>
              <p className="text-sm text-sand/70">
                Contract-driven endpoints, typed clients, and caching primitives ready for live transport feeds and analytics.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.25em] text-sky">Security</p>
              <h3 className="text-lg font-semibold">Secure by default</h3>
              <p className="text-sm text-sand/70">
                Authentication, role-based access, and audit hooks will be baked into every feature area and admin surface.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="stack" className="section-shell">
        <div className="card-surface grid gap-6 md:grid-cols-[1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-mint">Tech stack</p>
            <h2 className="text-3xl font-semibold font-display">Modern, opinionated defaults</h2>
            <p className="text-sand/80">
              A clean foundation with strict TypeScript, linting, design tokens, and accessible, reusable components. Built for
              rapid iteration across web and future native apps.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {stackItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-sand/60">{item.label}</p>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
            <p className="text-sm text-sand/70">Design principles</p>
            <ul className="mt-4 space-y-3 text-sm text-sand/80">
              <li>• Mobile-first, responsive, and touch-friendly UI</li>
              <li>• Fast data fetching with caching and optimistic interactions</li>
              <li>• Reusable layouts and semantic components for accessibility</li>
              <li>• Clear naming conventions and scalable folder structure</li>
              <li>• Secure authentication and future-proof API contracts</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-shell">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em] text-mint">Roadmap</p>
          <h2 className="text-3xl font-semibold font-display">Build phases</h2>
          <p className="max-w-3xl text-sand/80">
            This scaffold sets up the design system, layout primitives, and development tooling. Upcoming instructions will layer in
            detailed features across tracking, community, content, and administration.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {roadmap.map((item) => (
            <article key={item.title} className="card-surface flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mint">
                  {item.status}
                </span>
              </div>
              <p className="text-sand/80">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
