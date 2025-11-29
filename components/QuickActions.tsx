import { Compass, Home, Navigation, Smartphone, TramFront, Zap } from "lucide-react";
import type { Theme } from "../lib/ui";
import { baseCardClasses, subtleTextClasses } from "../lib/ui";

type NextBus = {
  route: string;
  destination: string;
  etaMinutes: number;
  stopName: string;
};

type QuickActionsProps = {
  theme: Theme;
  nextBus: NextBus | null;
  geolocationStatus: string;
  onLocate: () => void;
};

export function QuickActions({ theme, nextBus, geolocationStatus, onLocate }: QuickActionsProps) {
  const isDark = theme === "dark";

  return (
    <div className="section-shell pt-0">
      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <div className={`rounded-2xl p-4 shadow-card ${baseCardClasses[theme]}`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={`text-xs uppercase tracking-[0.2em] text-mint ${isDark ? "" : "text-sky-600"}`}>
                Next Bus Near You
              </p>
              <h3 className="text-xl font-semibold">{nextBus ? `${nextBus.route} to ${nextBus.destination}` : "Locating services"}</h3>
              <p className={`text-sm ${subtleTextClasses[theme]}`}>
                {nextBus
                  ? `Arriving in ~${nextBus.etaMinutes} min at ${nextBus.stopName}`
                  : geolocationStatus}
              </p>
            </div>
            <button
              onClick={onLocate}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
                isDark ? "bg-white/10 hover:bg-white/20" : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <Compass className="h-4 w-4" />
              Refresh location
            </button>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className={`rounded-2xl p-3 ${isDark ? "bg-white/10" : "bg-slate-50"}`}>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>Line reliability</p>
              <p className="text-lg font-semibold">High</p>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>Based on last 10 arrivals</p>
            </div>
            <div className={`rounded-2xl p-3 ${isDark ? "bg-white/10" : "bg-slate-50"}`}>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>Crowding</p>
              <p className="text-lg font-semibold">Comfortable</p>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>Live seat telemetry</p>
            </div>
            <div className={`rounded-2xl p-3 ${isDark ? "bg-white/10" : "bg-slate-50"}`}>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>Weather</p>
              <p className="text-lg font-semibold">15°C · Dry</p>
              <p className={`text-xs ${subtleTextClasses[theme]}`}>Good walking options</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-left text-lg font-semibold shadow-card transition hover:translate-y-[-1px] ${
              isDark ? "bg-gradient-to-r from-sky/30 to-mint/30 text-sand" : "bg-gradient-to-r from-sky-100 to-mint-100 text-slate-900"
            }`}
          >
            <Home className="h-6 w-6" />
            Take me home
            <span className={`ml-auto text-xs ${subtleTextClasses[theme]}`}>Faster routes</span>
          </button>
          <div className={`rounded-2xl border px-4 py-4 shadow-card ${baseCardClasses[theme]}`}>
            <div className="flex items-center gap-3">
              <Navigation className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">Commute shortcuts</p>
                <p className={`text-xs ${subtleTextClasses[theme]}`}>Morning and evening presets</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <button className={`flex items-center justify-between rounded-xl px-3 py-3 ${
                isDark ? "bg-white/10" : "bg-slate-100"
              }`}>
                <span className="flex items-center gap-2"><TramFront className="h-4 w-4" /> Highbury > Aldgate</span>
                <Zap className="h-4 w-4 text-mint" />
              </button>
              <button className={`flex items-center justify-between rounded-xl px-3 py-3 ${
                isDark ? "bg-white/10" : "bg-slate-100"
              }`}>
                <span className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> Live disruption</span>
                <span className="text-xs font-semibold text-mint">New</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
