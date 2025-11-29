import { ArrowRight, BadgeCheck, Bus, MapPin } from "lucide-react";
import type { Theme } from "../lib/ui";
import { baseCardClasses, subtleTextClasses } from "../lib/ui";

type Favourite = {
  id: string;
  label: string;
  detail: string;
  type: "Route" | "Stop" | "Fleet";
};

type FavouritesRowProps = {
  theme: Theme;
  items: Favourite[];
};

export function FavouritesRow({ theme, items }: FavouritesRowProps) {
  const isDark = theme === "dark";

  return (
    <div className="section-shell pt-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className={`text-xs uppercase tracking-[0.2em] text-mint ${isDark ? "" : "text-sky-600"}`}>Favourites</p>
          <h2 className="text-xl font-semibold">Quick access</h2>
        </div>
        <button className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
          isDark ? "bg-white/10 text-sand hover:bg-white/20" : "bg-white text-slate-900 shadow hover:bg-slate-100"
        }`}>
          Manage
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pt-2">
        {items.map((item) => (
          <article
            key={item.id}
            className={`min-w-[220px] rounded-2xl px-4 py-3 shadow-card transition hover:translate-y-[-2px] ${baseCardClasses[theme]}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold ${
                  isDark ? "bg-white/10 text-sand" : "bg-slate-100 text-slate-900"
                }`}
              >
                {item.type === "Route" && <Bus className="h-5 w-5" />}
                {item.type === "Stop" && <MapPin className="h-5 w-5" />}
                {item.type === "Fleet" && <BadgeCheck className="h-5 w-5" />}
              </span>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className={`text-xs ${subtleTextClasses[theme]}`}>{item.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
