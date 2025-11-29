import { AlertTriangle, Clock3 } from "lucide-react";
import type { Theme } from "../lib/ui";
import { subtleTextClasses } from "../lib/ui";

type Disruption = {
  id: string;
  message: string;
  updated: string;
};

type DisruptionBannerProps = {
  theme: Theme;
  disruptions: Disruption[];
};

export function DisruptionBanner({ theme, disruptions }: DisruptionBannerProps) {
  const isDark = theme === "dark";

  return (
    <div className={`w-full px-4 ${isDark ? "" : "bg-gradient-to-r from-sky-50 to-mint-50"}`}>
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-2 rounded-2xl border px-4 py-3 text-sm shadow-card ${
          isDark ? "border-red-400/40 bg-red-500/10 text-red-100" : "border-red-200 bg-white"
        }`}
      >
        <div className="flex items-center gap-2 text-red-400">
          <AlertTriangle className="h-4 w-4" />
          <p className="font-semibold text-red-200">Live disruption alerts</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {disruptions.map((item) => (
            <div key={item.id} className={`flex items-center gap-2 rounded-full px-3 py-2 ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
              <Clock3 className="h-4 w-4 text-red-300" />
              <span className="font-semibold">{item.message}</span>
              <span className={`text-xs ${subtleTextClasses[theme]}`}>{item.updated}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
