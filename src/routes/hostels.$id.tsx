import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { getHostel, type Hostel } from "@/lib/hostels";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "@tanstack/react-router";
import ImageGallery from "@/components/ImageGallery";
import { lazy, Suspense } from "react";
const LeafletMap = lazy(() => import("@/components/LeafletMap"));
export const Route = createFileRoute("/hostels/$id")({
  head: ({ params }) => {
    const h = getHostel(params.id);
    return {
      meta: [
        { title: h ? `${h.name} — TheHostel` : "Hostel — TheHostel" },
        { name: "description", content: h?.tagline ?? "Boutique capsule hostel." },
        { property: "og:title", content: h?.name ?? "TheHostel" },
        { property: "og:description", content: h?.tagline ?? "Boutique capsule hostel." },
        { property: "og:image", content: h?.hero ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const h = getHostel(params.id);
    if (!h) throw notFound();
    return h;
  },
  component: HostelDetail,
  notFoundComponent: () => (
    <MobileFrame>
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">Hostel not found</h1>
        <Link to="/" className="text-primary mt-4 inline-block">Back to home</Link>
      </div>
    </MobileFrame>
  ),
  errorComponent: ({ error }) => (
    <MobileFrame>
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="text-sm text-muted-foreground mt-2">{error.message}</p>
      </div>
    </MobileFrame>
  ),
});

function HostelDetail() {
  const h = Route.useLoaderData() as Hostel;
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState<"overview" | "rooms" | "facilities" | "reviews">("overview");
  const { user } = useAuth();
  const nav = useNavigate();
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewWriting, setReviewWriting] = useState(false);
  
  const handleAddReview = () => {
    if (!user) {
      nav({ to: "/login", search: { redirect: `/hostels/${h.id}` } });
      return;
    }
    setReviewWriting(true);
  };

  const submitReview = () => {
    setReviewWriting(false);
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  return (
    <MobileFrame>
      {/* Gallery */}
      <div className="relative">
        <ImageGallery images={h.gallery} title={h.name} />
        <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between z-10 pointer-events-none">
          <Link to="/" className="w-10 h-10 grid place-items-center rounded-full bg-background/90 backdrop-blur shadow pointer-events-auto">
            <Icon name="arrow_back" className="text-[20px]" />
          </Link>
          <div className="flex gap-2 pointer-events-auto">
            <button className="w-10 h-10 grid place-items-center rounded-full bg-background/90 backdrop-blur shadow" aria-label="Share">
              <Icon name="ios_share" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[22px] font-semibold leading-tight">{h.name}</h1>
            <p className="text-[13px] text-muted-foreground mt-1 flex items-center gap-1">
              <Icon name="location_on" className="text-[14px]" />
              {h.city}, {h.country}
            </p>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[12px] font-semibold">
              <Icon name="star" className="text-[14px]" />
              {h.rating}
            </span>
            <div className="text-[11px] text-muted-foreground mt-1">{h.reviews} reviews</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex gap-1 bg-secondary rounded-xl p-1 text-[12px] font-medium">
          {(["overview", "rooms", "facilities", "reviews"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg capitalize transition ${
                tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {tab === "overview" && (
            <div>
              <p className="text-[14px] text-foreground/85 leading-relaxed">{h.about}</p>
              <h3 className="mt-5 font-semibold text-[15px]">Top amenities</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {h.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-[13px] text-foreground/85">
                    <Icon name="check_circle" className="text-[16px] text-primary" />
                    {a}
                  </div>
                ))}
              </div>
              <h3 className="mt-5 font-semibold text-[15px]">Nearby attractions</h3>
              <ul className="mt-2 divide-y divide-border rounded-2xl border border-border bg-card">
                {h.attractions.map((a) => (
                  <li key={a} className="flex items-center gap-3 px-3 py-2.5 text-[13px]">
                    <Icon name="near_me" className="text-[16px] text-primary" />
                    {a}
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 font-semibold text-[15px]">Location</h3>
              <div className="mt-2 rounded-2xl overflow-hidden border border-border h-48 bg-secondary relative">
                <Suspense fallback={<div className="w-full h-full bg-secondary animate-pulse" />}>
                  <LeafletMap hostel={h} />
                </Suspense>
              </div>
            </div>
          )}

          {tab === "rooms" && (
            <div className="flex flex-col gap-3">
              {h.rooms.map((r) => (
                <div key={r.id} className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-[15px] leading-tight">{r.name}</h4>
                      <p className="text-[12px] text-muted-foreground mt-0.5">{r.beds}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold text-[17px] leading-none">${r.price}</div>
                      <div className="text-[11px] text-muted-foreground">per night</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {r.perks.map((p) => (
                      <span key={p} className="text-[11px] bg-secondary px-2 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/booking/$id"
                    params={{ id: h.id }}
                    search={{ room: r.id }}
                    className="mt-3 block text-center bg-primary text-primary-foreground rounded-xl py-2 text-[13px] font-semibold"
                  >
                    Select
                  </Link>
                </div>
              ))}
            </div>
          )}

          {tab === "facilities" && (
            <div className="grid grid-cols-2 gap-2">
              {h.facilities.map((f) => (
                <div key={f} className="rounded-xl bg-card border border-border px-3 py-2 text-[12.5px] flex items-center gap-2">
                  <Icon name="check" className="text-[16px] text-primary" />
                  {f}
                </div>
              ))}
            </div>
          )}

          {tab === "reviews" && (
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-card border border-border p-4 flex items-center gap-4">
                <div>
                  <div className="text-[28px] font-semibold text-primary leading-none">{h.rating}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{h.reviews} reviews</div>
                </div>
                <div className="flex-1 text-[12px] text-muted-foreground">
                  Travelers love the location, design, and welcoming staff at {h.name}.
                </div>
              </div>
              
              {reviewSubmitted ? (
                <div className="w-full bg-green-500/10 text-green-600 font-bold py-3 rounded-xl border border-green-500/20 text-center text-[13px] flex items-center justify-center gap-1">
                  <Icon name="check_circle" className="text-[16px]" /> Review Submitted!
                </div>
              ) : reviewWriting ? (
                <div className="w-full bg-card p-3 rounded-xl border border-border flex flex-col gap-2">
                  <textarea placeholder="Share your experience..." className="w-full bg-secondary rounded-xl p-3 text-[13px] outline-none min-h-[80px]" autoFocus />
                  <div className="flex gap-2">
                    <button onClick={() => setReviewWriting(false)} className="flex-1 text-muted-foreground font-semibold py-2 rounded-xl text-[13px]">Cancel</button>
                    <button onClick={submitReview} className="flex-1 bg-primary text-primary-foreground font-bold py-2 rounded-xl text-[13px]">Submit</button>
                  </div>
                </div>
              ) : (
                <button onClick={handleAddReview} className="w-full bg-secondary text-foreground font-semibold py-3 rounded-xl border border-border">
                  Write a review
                </button>
              )}

              {h.reviewsList.map((r) => (
                <div key={r.name} className="rounded-2xl bg-card border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 text-primary grid place-items-center font-semibold text-[13px]">
                      {r.initials}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[14px]">{r.name}</div>
                      <div className="text-[11px] text-muted-foreground">{r.date}</div>
                    </div>
                    <div className="text-primary text-[12px] font-semibold flex items-center gap-1">
                      <Icon name="star" className="text-[14px]" />
                      {r.rating}.0
                    </div>
                  </div>
                  <p className="text-[13px] text-foreground/85 mt-2">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sticky book bar */}
      <div className="fixed bottom-[64px] left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-card border-t border-border px-4 py-3 z-30">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground">From</div>
            <div className="text-primary font-bold text-[18px] leading-none">
              ${h.priceFrom}
              <span className="text-[11px] text-muted-foreground font-normal"> /night</span>
            </div>
          </div>
          <Link
            to="/booking/$id"
            params={{ id: h.id }}
            className="flex-1 ml-3 bg-primary text-primary-foreground text-center py-3 rounded-xl font-semibold text-[14px]"
          >
            Reserve
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}