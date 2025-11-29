import { MapPin } from "lucide-react";
import type { Theme } from "../lib/ui";
import { baseCardClasses, subtleTextClasses } from "../lib/ui";

type Stop = {
  id: string;
  name: string;
  code: string;
  distance: number;
  lat: number;
  lng: number;
};

type MiniMapProps = {
  theme: Theme;
  stops: Stop[];
};

export function MiniMap({ theme, stops }: MiniMapProps) {
  const isDark = theme === "dark";

  const latitudes = stops.map((s) => s.lat);
  const longitudes = stops.map((s) => s.lng);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  const positionStop = (stop: Stop) => {
    const x = ((stop.lng - minLng) / (maxLng - minLng || 1)) * 100;
    const y = ((maxLat - stop.lat) / (maxLat - minLat || 1)) * 100;
    return { x, y };
  };

  return (
    <div className="section-shell pt-0">
      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <div className={`rounded-2xl p-4 shadow-card ${baseCardClasses[theme]}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.2em] text-mint ${isDark ? "" : "text-sky-600"}`}>Live map</p>
              <h3 className="text-xl font-semibold">Closest stops</h3>
              <p className={`text-sm ${subtleTextClasses[theme]}`}>Last updated just now</p>
            </div>
            <div className={`rounded-full px-3 py-1 text-xs font-semibold ${isDark ? "bg-white/10" : "bg-slate-100"}`}>
              {stops.length} nearby
            </div>
          </div>
          <div className={`relative mt-4 h-64 overflow-hidden rounded-2xl border ${isDark ? "border-white/10 bg-gradient-to-br from-slate-900 to-midnight" : "border-slate-200 bg-gradient-to-br from-white to-slate-100"}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.1),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(79,70,229,0.15),transparent_35%)]" />
            <svg className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {stops.map((stop) => {
              const { x, y } = positionStop(stop);
              return (
                <div
                  key={stop.id}
                  className={`absolute flex flex-col items-center gap-1 text-xs font-semibold ${isDark ? "text-sand" : "text-slate-900"}`}
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full border shadow ${
                    isDark ? "border-mint/60 bg-white/10 text-mint" : "border-sky-300 bg-white text-sky-600"
                  }`}>
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className={`rounded-full px-2 py-1 text-[10px] ${isDark ? "bg-white/10" : "bg-white"}`}>
                    {stop.code}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`rounded-2xl p-4 shadow-card ${baseCardClasses[theme]}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.2em] text-mint ${isDark ? "" : "text-sky-600"}`}>Nearby</p>
              <h3 className="text-xl font-semibold">5 closest stops</h3>
            </div>
            <div className={`rounded-full px-3 py-1 text-xs font-semibold ${isDark ? "bg-white/10" : "bg-slate-100"}`}>
              Sorted by distance
            </div>
          </div>
          <div className="mt-3 space-y-3">
            {stops.map((stop) => (
              <div key={stop.id} className={`flex items-center justify-between rounded-xl px-3 py-3 ${isDark ? "bg-white/5" : "bg-slate-50"}`}>
                <div>
                  <p className="font-semibold">{stop.name}</p>
                  <p className={`text-xs ${subtleTextClasses[theme]}`}>{stop.code}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{stop.distance.toFixed(2)} km</p>
                  <p className={`text-xs ${subtleTextClasses[theme]}`}>Walking {Math.round(stop.distance * 12)} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
