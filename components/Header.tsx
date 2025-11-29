import { Bell, MapPin, Moon, Sun } from "lucide-react";
import type { Theme } from "../lib/ui";

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const isDark = theme === "dark";

  return (
    <header className="section-shell pb-4 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-mint text-xl font-black text-midnight shadow-floating">
            RF
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-mint">RouteFlow London</p>
            <p className="text-lg font-semibold">Live dashboard</p>
            <p className={`text-sm ${isDark ? "text-sand/70" : "text-slate-500"}`}>
              Mobile-first snapshot of your network, favourites, and stats.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${isDark ? "bg-white/10 text-sand" : "bg-white text-slate-900 shadow"}`}>
            <MapPin className="h-4 w-4" />
            London, Zone 1
          </div>
          <button
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              isDark
                ? "bg-white/10 text-sand hover:bg-white/20"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {isDark ? "Light" : "Dark"} mode
          </button>
          <button
            className={`relative flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold ${
              isDark ? "bg-white/10 text-sand hover:bg-white/20" : "bg-white text-slate-900 shadow hover:bg-slate-100"
            }`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-sky" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
