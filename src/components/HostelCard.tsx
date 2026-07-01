import { Link } from "@tanstack/react-router";
import type { Hostel } from "@/lib/hostels";
import { useWishlist } from "@/lib/store";
import { Icon } from "./MobileFrame";

export function HostelCard({ h }: { h: Hostel }) {
  const [list, setList] = useWishlist();
  const saved = list.includes(h.id);
  return (
    <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-[0_8px_24px_-12px_rgba(146,64,14,0.18)]">
      <Link to="/hostels/$id" params={{ id: h.id }} className="block relative">
        <img src={h.hero} alt={h.name} className="w-full h-48 object-cover" loading="lazy" />
        <button
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            setList(saved ? list.filter((x) => x !== h.id) : [...list, h.id]);
          }}
          className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-background/85 backdrop-blur text-foreground shadow"
        >
          <Icon name="favorite" className={`text-[18px] ${saved ? "text-primary" : "text-muted-foreground"}`} />
        </button>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[12px] font-semibold text-foreground">
          <Icon name="star" className="text-[14px] text-primary" />
          {h.rating} <span className="text-muted-foreground font-normal">({h.reviews})</span>
        </span>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-[17px] leading-tight">{h.name}</h3>
            <p className="text-[13px] text-muted-foreground mt-0.5 flex items-center gap-1">
              <Icon name="location_on" className="text-[14px]" />
              {h.city}, {h.country}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground">from</div>
            <div className="text-primary font-bold text-[18px] leading-none">
              ${h.priceFrom}
              <span className="text-[11px] text-muted-foreground font-normal ml-0.5">/night</span>
            </div>
          </div>
        </div>
        <p className="text-[13px] text-muted-foreground mt-2 line-clamp-2">{h.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {h.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="text-[11px] bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
            >
              {a}
            </span>
          ))}
        </div>
        <Link
          to="/hostels/$id"
          params={{ id: h.id }}
          className="mt-4 block text-center bg-primary text-primary-foreground rounded-xl py-2.5 font-semibold text-[14px] active:scale-[0.99] transition"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
}