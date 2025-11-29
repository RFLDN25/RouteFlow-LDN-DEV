"use client";

import { useEffect, useMemo, useState } from "react";
import { DisruptionBanner } from "../components/DisruptionBanner";
import { FavouritesRow } from "../components/FavouritesRow";
import { Header } from "../components/Header";
import { MiniMap } from "../components/MiniMap";
import { QuickActions } from "../components/QuickActions";
import { RecentActivity } from "../components/RecentActivity";
import { SearchBar, type Suggestion } from "../components/SearchBar";
import { StatsCard } from "../components/StatsCard";
import type { Theme } from "../lib/ui";

type Coordinates = {
  lat: number;
  lng: number;
};

type Stop = {
  id: string;
  name: string;
  code: string;
  lat: number;
  lng: number;
};

type StopWithDistance = Stop & { distance: number };

const suggestions: Suggestion[] = [
  { label: "Route 38", type: "Route", meta: "Clapton Pond ↔ Victoria" },
  { label: "Route 25", type: "Route", meta: "Ilford ↔ City Thameslink" },
  { label: "Stop: Angel Islington / City Road", type: "Stop", meta: "Code: A" },
  { label: "Stop: Liverpool Street Station", type: "Stop", meta: "Code: B" },
  { label: "Fleet: LTZ1143", type: "Fleet", meta: "New Routemaster" },
  { label: "Fleet: HV401", type: "Fleet", meta: "Wright Gemini 3" },
  { label: "Route 430", type: "Route", meta: "Roehampton ↔ South Kensington" },
  { label: "Stop: Waterloo Station / Tenison Way", type: "Stop", meta: "Code: C" }
];

const favouriteItems = [
  { id: "fav-38", label: "Route 38", detail: "Trusted 5 min headways", type: "Route" as const },
  { id: "fav-205", label: "Route 205", detail: "Paddington ↔ Bow Church", type: "Route" as const },
  { id: "fav-marylebone", label: "Stop: Marylebone", detail: "Stop code: BP", type: "Stop" as const },
  { id: "fav-ltz", label: "Fleet: LTZ1143", detail: "New Routemaster · Stagecoach", type: "Fleet" as const }
];

const activities = [
  { id: "a1", title: "Route 38", subtitle: "Clapton Pond ↔ Victoria", type: "Route" as const, timestamp: "2 mins ago" },
  { id: "a2", title: "Stop: Shoreditch High St / Bethnal G", subtitle: "Code: S", type: "Stop" as const, timestamp: "14 mins ago" },
  { id: "a3", title: "Fleet HV401", subtitle: "Wright Gemini 3", type: "Fleet" as const, timestamp: "45 mins ago" },
  { id: "a4", title: "Route 25", subtitle: "City Thameslink ↔ Ilford", type: "Route" as const, timestamp: "1 hr ago" },
  { id: "a5", title: "Stop: Fenchurch Street", subtitle: "Code: D", type: "Stop" as const, timestamp: "1 hr ago" },
  { id: "a6", title: "Fleet LTZ1143", subtitle: "New Routemaster", type: "Fleet" as const, timestamp: "Today" }
];

const stats = [
  { label: "XP", value: "12,480", helper: "+240 today" },
  { label: "Badges", value: "12", helper: "2 new this week" },
  { label: "Buses tracked", value: "284", helper: "+6 in the last 24h" },
  { label: "Collections", value: "18", helper: "Routes, garages, depots" }
];

const disruptions = [
  { id: "d1", message: "Diversion on 55 via Old Street", updated: "Updated 2 mins ago" },
  { id: "d2", message: "Bridge works impacting 344", updated: "Updated 5 mins ago" }
];

const stopSeed: Stop[] = [
  { id: "s1", name: "Angel Islington / City Road", code: "Stop A", lat: 51.5321, lng: -0.1057 },
  { id: "s2", name: "Liverpool Street Station", code: "Stop B", lat: 51.517, lng: -0.0823 },
  { id: "s3", name: "Waterloo Station / Tenison Way", code: "Stop C", lat: 51.5033, lng: -0.1134 },
  { id: "s4", name: "Holborn Station", code: "Stop D", lat: 51.5173, lng: -0.1199 },
  { id: "s5", name: "London Bridge", code: "Stop E", lat: 51.5055, lng: -0.0865 },
  { id: "s6", name: "Shoreditch High Street", code: "Stop F", lat: 51.523, lng: -0.0762 }
];

const distanceInKm = (from: Coordinates, to: Coordinates) => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(from.lat)) *
      Math.cos(toRad(to.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [geolocationStatus, setGeolocationStatus] = useState("Fetching your location...");

  useEffect(() => {
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }, []);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setGeolocationStatus("Geolocation not supported");
      return;
    }
    setGeolocationStatus("Requesting permission...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextCoords = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCoords(nextCoords);
        setGeolocationStatus("Location locked in");
      },
      () => {
        setGeolocationStatus("Permission denied. Using central London.");
        setCoords({ lat: 51.509865, lng: -0.118092 });
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  useEffect(() => {
    requestLocation();
  }, []);

  const stopsWithDistance: StopWithDistance[] = useMemo(() => {
    const baseCoords = coords ?? { lat: 51.509865, lng: -0.118092 };
    return stopSeed
      .map((stop) => ({
        ...stop,
        distance: distanceInKm(baseCoords, { lat: stop.lat, lng: stop.lng })
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
  }, [coords]);

  const nextBus = useMemo(() => {
    if (!stopsWithDistance.length) return null;
    const closest = stopsWithDistance[0];
    const etaMinutes = Math.max(1, Math.round(closest.distance * 8));
    return {
      route: etaMinutes <= 4 ? "38" : "205",
      destination: etaMinutes <= 4 ? "Victoria" : "Paddington",
      etaMinutes,
      stopName: closest.name
    };
  }, [stopsWithDistance]);

  const background =
    theme === "dark"
      ? "bg-gradient-to-b from-midnight via-[#0b122d] to-navy text-sand"
      : "bg-gradient-to-b from-sand via-white to-slate-50 text-slate-900";

  return (
    <div className={`${background} min-h-screen transition-colors`}>
      <DisruptionBanner theme={theme} disruptions={disruptions} />
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <SearchBar theme={theme} data={suggestions} />
      <QuickActions
        theme={theme}
        nextBus={nextBus}
        geolocationStatus={geolocationStatus}
        onLocate={requestLocation}
      />
      <FavouritesRow theme={theme} items={favouriteItems} />
      <MiniMap theme={theme} stops={stopsWithDistance} />
      <RecentActivity theme={theme} items={activities} />
      <StatsCard theme={theme} stats={stats} />
    </div>
  );
}
