import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { HostelCard } from "@/components/HostelCard";
import { HOSTELS } from "@/lib/hostels";
import { useState } from "react";

export const Route = createFileRoute("/hostels/")({
  head: () => ({ meta: [{ title: "Hostels — TheHostel" }, { name: "description", content: "Browse our three boutique capsule hostels." }] }),
  component: HostelsList,
});

function HostelsList() {
  const [q, setQ] = useState("");
  const filtered = HOSTELS.filter(
    (h) =>
      h.name.toLowerCase().includes(q.toLowerCase()) ||
      h.city.toLowerCase().includes(q.toLowerCase()) ||
      h.country.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <MobileFrame>
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 grid place-items-center rounded-full bg-secondary">
            <Icon name="arrow_back" className="text-[20px]" />
          </Link>
          <h1 className="text-[18px] font-semibold">All Hostels</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary mt-3">
          <Icon name="search" className="text-[20px] text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search hostels or cities"
            className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-muted-foreground"
          />
        </div>
      </header>
      <section className="px-4 pt-4 flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground text-sm py-12">No hostels match your search.</p>
        ) : (
          filtered.map((h) => <HostelCard key={h.id} h={h} />)
        )}
      </section>
    </MobileFrame>
  );
}