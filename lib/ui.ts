export type Theme = "light" | "dark";

export const baseCardClasses: Record<Theme, string> = {
  light: "bg-white border border-slate-200 text-slate-900",
  dark: "bg-white/5 border border-white/10 text-sand"
};

export const subtleTextClasses: Record<Theme, string> = {
  light: "text-slate-500",
  dark: "text-sand/70"
};

export const mutedSurfaceClasses: Record<Theme, string> = {
  light: "bg-slate-100 text-slate-700",
  dark: "bg-white/10 text-sand"
};
