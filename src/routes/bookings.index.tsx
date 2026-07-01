import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { useBookings, formatCurrency } from "@/lib/store";
import { getHostel } from "@/lib/hostels";
import { useState } from "react";

export const Route = createFileRoute("/bookings/")({
  head: () => ({ meta: [{ title: "My Bookings — TheHostel" }] }),
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      if (!window.localStorage.getItem("hostel.auth")) {
        throw redirect({ to: "/login", search: { redirect: "/bookings" } });
      }
    }
  },
  component: BookingsPage,
});

function BookingsPage() {
  const [bookingsRaw] = useBookings();
  const bookings = bookingsRaw || [];
  const [tab, setTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming");
  const filtered = bookings.filter((b) => b.status === tab);

  return (
    <MobileFrame>
      <header className="px-4 pt-6 pb-3">
        <h1 className="text-[22px] font-semibold">My Bookings</h1>
        <p className="text-[12px] text-muted-foreground">Your stays with TheHostel</p>
      </header>
      <div className="px-4">
        <div className="flex gap-1 bg-secondary rounded-xl p-1 text-[12px] font-medium">
          {(["upcoming", "completed", "cancelled"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg capitalize transition ${tab === t ? "bg-card shadow-sm" : "text-muted-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <section className="px-4 py-4 flex flex-col gap-3">
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-secondary mx-auto grid place-items-center">
              <Icon name="luggage" className="text-[26px] text-primary" />
            </div>
            <p className="mt-3 font-semibold text-[15px]">No {tab} bookings</p>
            <p className="text-[12px] text-muted-foreground mt-1">When you book, it will show up here.</p>
            <Link to="/" className="mt-4 inline-block bg-primary text-primary-foreground rounded-xl px-4 py-2 text-[13px] font-semibold">
              Browse hostels
            </Link>
          </div>
        )}
        {filtered.map((b) => {
          const h = getHostel(b.hostelId);
          if (!h) return null;
          return (
            <Link
              key={b.id}
              to="/bookings/$bid"
              params={{ bid: b.id }}
              className="rounded-2xl bg-card border border-border overflow-hidden flex"
            >
              <img src={h.hero} alt={h.name} className="w-24 h-full object-cover" />
              <div className="flex-1 p-3">
                <div className="text-[11px] text-muted-foreground">{b.id}</div>
                <div className="font-semibold text-[14px] leading-tight">{h.name}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">
                  {b.checkIn} → {b.checkOut} · {b.nights}n
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">{b.status}</span>
                  <span className="text-primary font-semibold text-[13px]">{formatCurrency(b.total)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </MobileFrame>
  );
}