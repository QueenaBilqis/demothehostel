import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications — TheHostel" }] }),
  component: NotificationsPage,
});

const NOTIFS = [
  { icon: "local_offer", title: "WARM10 — 10% off your stay", body: "Use code WARM10 at checkout. Ends Sunday.", time: "2h ago", tone: "primary" },
  { icon: "event_available", title: "Booking confirmed", body: "Your stay at The Bohemian Capsule is confirmed.", time: "Yesterday", tone: "default" },
  { icon: "campaign", title: "New: Stellar Capsules in Bali", body: "A new partner hostel just joined TheHostel.", time: "2 days ago", tone: "default" },
  { icon: "redeem", title: "You earned a coupon", body: "Thanks for booking — here's 5% off your next stay.", time: "Last week", tone: "primary" },
];

function NotificationsPage() {
  return (
    <MobileFrame>
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
        <Link to="/" className="w-9 h-9 grid place-items-center rounded-full bg-secondary">
          <Icon name="arrow_back" className="text-[20px]" />
        </Link>
        <h1 className="text-[16px] font-semibold">Notifications</h1>
      </header>
      <section className="px-4 py-4 flex flex-col gap-2">
        {NOTIFS.map((n) => (
          <div key={n.title} className="rounded-2xl bg-card border border-border p-3 flex items-start gap-3">
            <div className={`w-10 h-10 grid place-items-center rounded-xl ${n.tone === "primary" ? "bg-primary/10 text-primary" : "bg-secondary text-foreground"}`}>
              <Icon name={n.icon} className="text-[20px]" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[14px]">{n.title}</div>
              <p className="text-[12px] text-muted-foreground mt-0.5">{n.body}</p>
              <div className="text-[11px] text-muted-foreground mt-1">{n.time}</div>
            </div>
          </div>
        ))}
      </section>
    </MobileFrame>
  );
}