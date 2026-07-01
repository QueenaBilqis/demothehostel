import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

const tabs = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/hostels", label: "Hostels", icon: "apartment" },
  { to: "/bookings", label: "Bookings", icon: "event_available" },
  { to: "/profile", label: "Profile", icon: "person" },
];

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden>
      {name}
    </span>
  );
}

export function MobileFrame({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen w-full bg-[#f4ecdd] flex justify-center">
      <div className="relative w-full max-w-[420px] min-h-screen bg-background shadow-[0_30px_60px_-30px_rgba(146,64,14,0.25)]">
        <div className="pb-24">{children}</div>
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-card/95 backdrop-blur-md border-t border-border z-40">
          <ul className="grid grid-cols-4">
            {tabs.map((t) => {
              const active =
                t.to === "/"
                  ? pathname === "/"
                  : pathname === t.to || pathname.startsWith(t.to + "/");
              return (
                <li key={t.to}>
                  <Link
                    to={t.to}
                    className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <Icon
                      name={t.icon}
                      className={`text-[22px] ${active ? "" : "opacity-80"}`}
                    />
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}