import { Award, Flame, Medal } from "lucide-react";
import type { Theme } from "../lib/ui";
import { baseCardClasses, subtleTextClasses } from "../lib/ui";

type Stat = {
  label: string;
  value: string;
  helper: string;
};

type StatsCardProps = {
  theme: Theme;
  stats: Stat[];
};

export function StatsCard({ theme, stats }: StatsCardProps) {
  const isDark = theme === "dark";

  return (
    <div className="section-shell pt-0 pb-8">
      <div className={`rounded-2xl p-5 shadow-card ${baseCardClasses[theme]}`}>
        <div className="flex flex-wrap items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            isDark ? "bg-white/10" : "bg-slate-100"
          }`}>
            <Medal className="h-6 w-6 text-mint" />
          </div>
          <div className="flex-1">
            <p className={`text-xs uppercase tracking-[0.2em] text-mint ${isDark ? "" : "text-sky-600"}`}>Profile stats</p>
            <h3 className="text-xl font-semibold">XP, badges, and streaks</h3>
            <p className={`text-sm ${subtleTextClasses[theme]}`}>Keep tracking buses to level up and unlock more tools.</p>
          </div>
          <button className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
            isDark ? "bg-white/10 text-sand hover:bg-white/20" : "bg-white text-slate-900 shadow hover:bg-slate-100"
          }`}>
            <Award className="h-4 w-4" /> View badges
          </button>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`rounded-2xl p-4 ${isDark ? "bg-white/10" : "bg-slate-50"}`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{stat.label}</p>
                <Flame className="h-4 w-4 text-mint" />
              </div>
              <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>{stat.helper}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className={`rounded-full px-3 py-2 ${isDark ? "bg-white/10" : "bg-slate-100"}`}>Active streak: 12 days</span>
          <span className={`rounded-full px-3 py-2 ${isDark ? "bg-white/10" : "bg-slate-100"}`}>Badges: Rail Scout, Fleet Guru</span>
          <span className={`rounded-full px-3 py-2 ${isDark ? "bg-white/10" : "bg-slate-100"}`}>Buses tracked: 284</span>
          <span className={`rounded-full px-3 py-2 ${isDark ? "bg-white/10" : "bg-slate-100"}`}>Verified sightings: 52</span>
        </div>
      </div>
    </div>
  );
}
