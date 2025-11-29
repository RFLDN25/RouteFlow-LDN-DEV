import { BadgeCheck, Bus, MapPin, RotateCcw } from "lucide-react";
import type { Theme } from "../lib/ui";
import { baseCardClasses, subtleTextClasses } from "../lib/ui";

type Activity = {
  id: string;
  title: string;
  subtitle: string;
  type: "Route" | "Stop" | "Fleet";
  timestamp: string;
};

type RecentActivityProps = {
  theme: Theme;
  items: Activity[];
};

export function RecentActivity({ theme, items }: RecentActivityProps) {
  const isDark = theme === "dark";

  const iconFor = (type: Activity["type"]) => {
    switch (type) {
      case "Route":
        return <Bus className="h-4 w-4" />;
      case "Stop":
        return <MapPin className="h-4 w-4" />;
      case "Fleet":
        return <BadgeCheck className="h-4 w-4" />;
    }
  };

  return (
    <div className="section-shell pt-0">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className={`text-xs uppercase tracking-[0.2em] text-mint ${isDark ? "" : "text-sky-600"}`}>Recently viewed</p>
          <h3 className="text-xl font-semibold">Your history</h3>
          <p className={`text-sm ${subtleTextClasses[theme]}`}>Keep exploring where you left off.</p>
        </div>
        <button className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
          isDark ? "bg-white/10 text-sand hover:bg-white/20" : "bg-white text-slate-900 shadow hover:bg-slate-100"
        }`}>
          <RotateCcw className="h-4 w-4" /> Clear
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((activity) => (
          <article key={activity.id} className={`rounded-2xl p-4 shadow-card ${baseCardClasses[theme]}`}>
            <div className="flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                isDark ? "bg-white/10 text-sand" : "bg-slate-100 text-slate-900"
              }`}>
                {iconFor(activity.type)}
              </span>
              <div>
                <p className="font-semibold">{activity.title}</p>
                <p className={`text-xs ${subtleTextClasses[theme]}`}>{activity.subtitle}</p>
              </div>
            </div>
            <p className={`mt-3 text-xs font-semibold ${subtleTextClasses[theme]}`}>Viewed {activity.timestamp}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
