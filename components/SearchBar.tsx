import { useMemo, useState } from "react";
import { BadgeCheck, Bus, MapPin, Search, Timer } from "lucide-react";
import type { Theme } from "../lib/ui";
import { subtleTextClasses } from "../lib/ui";

export type Suggestion = {
  label: string;
  type: "Route" | "Stop" | "Fleet";
  meta: string;
};

type SearchBarProps = {
  theme: Theme;
  data: Suggestion[];
};

export function SearchBar({ theme, data }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isDark = theme === "dark";

  const filtered = useMemo(() => {
    if (!query.trim()) return data.slice(0, 6);
    return data
      .filter((item) => item.label.toLowerCase().includes(query.toLowerCase()) || item.meta.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 8);
  }, [data, query]);

  return (
    <div className="section-shell pt-2">
      <div className={`relative rounded-2xl border px-4 py-3 shadow-card transition focus-within:ring-2 focus-within:ring-mint ${
        isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"
      }`}>
        <div className="flex items-center gap-3">
          <Search className={`h-5 w-5 ${isDark ? "text-sand/70" : "text-slate-500"}`} />
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 100)}
              placeholder="Search routes, stops, or fleet numbers"
              className={`w-full bg-transparent text-base focus:outline-none ${isDark ? "text-sand" : "text-slate-900"}`}
            />
            <p className={`text-xs ${subtleTextClasses[theme]}`}>Autocomplete powered by your recent journeys and saved items.</p>
          </div>
          <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            isDark ? "bg-white/10 text-sand" : "bg-slate-100 text-slate-800"
          }`}>
            <Timer className="h-4 w-4" />
            Realtime
          </div>
        </div>
        {isFocused && filtered.length > 0 && (
          <div
            className={`absolute left-0 right-0 top-[calc(100%+8px)] z-10 rounded-2xl border shadow-floating ${
              isDark ? "border-white/10 bg-navy" : "border-slate-200 bg-white"
            }`}
          >
            <ul className="divide-y divide-white/5">
              {filtered.map((item) => (
                <li key={item.label} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold ${
                      isDark ? "bg-white/10 text-sand" : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {item.type === "Route" && <Bus className="h-4 w-4" />}
                    {item.type === "Stop" && <MapPin className="h-4 w-4" />}
                    {item.type === "Fleet" && <BadgeCheck className="h-4 w-4" />}
                  </span>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className={`text-xs ${subtleTextClasses[theme]}`}>{item.type} · {item.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
