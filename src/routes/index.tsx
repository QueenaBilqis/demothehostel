import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { HostelCard } from "@/components/HostelCard";
import { HOSTELS } from "@/lib/hostels";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheHostel — Boutique Capsule Hostels" },
      { name: "description", content: "Book three curated boutique capsule hostels across Singapore and Bali." },
      { property: "og:title", content: "TheHostel — Boutique Capsule Hostels" },
      { property: "og:description", content: "Book three curated boutique capsule hostels across Singapore and Bali." },
    ],
  }),
  component: Index,
});

function Index() {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  const [destination, setDestination] = useState("");
  
  const filteredHostels = destination
    ? HOSTELS.filter(h => h.country.toLowerCase().includes(destination))
    : HOSTELS;

  return (
    <MobileFrame>
      {/* Hero */}
      <section className="relative h-[360px]">
        <img
          src={HOSTELS[0].hero}
          alt="Boutique capsule interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background" />
        <div className="relative h-full flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] opacity-80">Welcome to</p>
              <h1 className="text-[26px] font-semibold leading-tight">TheHostel</h1>
            </div>
            <button className="w-10 h-10 grid place-items-center rounded-full bg-white/15 backdrop-blur" aria-label="Notifications">
              <Icon name="notifications" className="text-[20px]" />
            </button>
          </div>
          <div className="pb-2">
            <p className="text-[20px] font-semibold leading-snug max-w-[260px]">
              Three boutique hostels. One warm welcome.
            </p>
          </div>
        </div>
        {/* Sticky search card */}
        <div className="absolute -bottom-10 left-4 right-4 bg-card border border-border rounded-2xl shadow-[0_18px_40px_-20px_rgba(146,64,14,0.35)] p-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary">
            <Icon name="search" className="text-[20px] text-muted-foreground" />
            <select 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
              className="flex-1 bg-transparent outline-none text-[14px] font-medium text-foreground cursor-pointer appearance-none"
            >
              <option value="" disabled hidden>Where to?</option>
              <option value="singapore">Singapore</option>
              <option value="bali">Bali</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 text-[12px]">
            <div className="rounded-xl bg-secondary p-2">
              <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Check-in</div>
              <input type="date" defaultValue={today.toISOString().slice(0, 10)} className="bg-transparent w-full mt-0.5 font-semibold outline-none cursor-pointer text-[13px]" />
            </div>
            <div className="rounded-xl bg-secondary p-2">
              <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Check-out</div>
              <input type="date" defaultValue={tomorrow.toISOString().slice(0, 10)} className="bg-transparent w-full mt-0.5 font-semibold outline-none cursor-pointer text-[13px]" />
            </div>
            <div className="rounded-xl bg-secondary p-2">
              <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Guests</div>
              <select className="bg-transparent w-full mt-0.5 font-semibold outline-none cursor-pointer text-[13px] appearance-none">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Partner hostels */}
      <section className="px-4 pt-16">
        <div className="flex items-end justify-between mb-3">
          <div>
            <h2 className="text-[20px] font-semibold leading-tight">Our Partner Hostels</h2>
            <p className="text-[12px] text-muted-foreground">Three boutique stays, hand-picked.</p>
          </div>
          <span className="text-[11px] text-muted-foreground">{filteredHostels.length} stays</span>
        </div>
        <div className="flex flex-col gap-4">
          {filteredHostels.map((h) => (
            <HostelCard key={h.id} h={h} />
          ))}
          {filteredHostels.length === 0 && (
            <div className="p-8 text-center text-[13px] text-muted-foreground bg-secondary/50 rounded-2xl">
              No hostels found for this destination.
            </div>
          )}
        </div>
      </section>

      {/* Why stay with us */}
      <section className="px-4 pt-8">
        <h2 className="text-[20px] font-semibold leading-tight mb-3">Why Stay With Us</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "verified", title: "Curated hostels", desc: "Three carefully selected boutique stays." },
            { icon: "sell", title: "Best direct prices", desc: "No middleman, no surprise fees." },
            { icon: "lock", title: "Secure booking", desc: "Encrypted, protected payments." },
            { icon: "diversity_3", title: "Cozy community", desc: "Meet travelers from everywhere." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-card border border-border p-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Icon name={f.icon} className="text-[20px]" />
              </div>
              <div className="mt-2 font-semibold text-[14px]">{f.title}</div>
              <p className="text-[12px] text-muted-foreground mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-4 pt-10 pb-4 text-center text-[11px] text-muted-foreground">
        TheHostel · Curated boutique capsule hostels
      </footer>
    </MobileFrame>
  );
}
