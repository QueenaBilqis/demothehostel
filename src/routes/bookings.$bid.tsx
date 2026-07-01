import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { useBookings, formatCurrency } from "@/lib/store";
import { getHostel } from "@/lib/hostels";

export const Route = createFileRoute("/bookings/$bid")({
  head: () => ({ meta: [{ title: "Booking confirmed — TheHostel" }] }),
  beforeLoad: ({ params }) => {
    if (typeof window !== "undefined") {
      if (!window.localStorage.getItem("hostel.auth")) {
        throw redirect({ to: "/login", search: { redirect: `/bookings/${params.bid}` } });
      }
    }
  },
  component: BookingDetail,
});

function BookingDetail() {
  const { bid } = Route.useParams();
  const [bookings, setBookings] = useBookings();
  const b = bookings.find((x) => x.id === bid);

  if (!b) {
    return (
      <MobileFrame>
        <div className="p-10 text-center">
          <h1 className="text-lg font-semibold">Booking not found</h1>
          <Link to="/bookings" className="text-primary mt-4 inline-block">Back to bookings</Link>
        </div>
      </MobileFrame>
    );
  }
  const h = getHostel(b.hostelId);
  if (!h) return null;
  const room = h.rooms.find((r) => r.id === b.roomId);

  return (
    <MobileFrame>
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
        <Link to="/bookings" className="w-9 h-9 grid place-items-center rounded-full bg-secondary">
          <Icon name="arrow_back" className="text-[20px]" />
        </Link>
        <h1 className="text-[16px] font-semibold">Booking details</h1>
      </header>

      <section className="px-4 pt-4">
        <div className="rounded-2xl bg-primary/8 border border-primary/20 p-5 text-center">
          <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center mx-auto">
            <Icon name="check" className="text-[28px]" />
          </div>
          <h2 className="mt-3 text-[18px] font-semibold">Booking confirmed</h2>
          <p className="text-[12px] text-muted-foreground mt-1">Confirmation #{b.id}</p>
        </div>
      </section>

      <section className="px-4 pt-4">
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <img src={h.hero} alt={h.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-[16px]">{h.name}</h3>
            <p className="text-[12px] text-muted-foreground flex items-center gap-1 mt-0.5">
              <Icon name="location_on" className="text-[14px]" />
              {h.city}, {h.country}
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-y-2 text-[13px]">
              <dt className="text-muted-foreground">Guest</dt><dd className="text-right">{b.guestName}</dd>
              <dt className="text-muted-foreground">Room</dt><dd className="text-right">{room?.name}</dd>
              <dt className="text-muted-foreground">Check-in</dt><dd className="text-right">{b.checkIn}</dd>
              <dt className="text-muted-foreground">Check-out</dt><dd className="text-right">{b.checkOut}</dd>
              <dt className="text-muted-foreground">Guests</dt><dd className="text-right">{b.guests}</dd>
              <dt className="text-muted-foreground">Nights</dt><dd className="text-right">{b.nights}</dd>
              <dt className="font-semibold">Total</dt><dd className="text-right font-semibold text-primary">{formatCurrency(b.total)}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="px-4 pt-4 flex gap-2">
        <Link to="/bookings" className="flex-1 text-center py-3 rounded-xl border border-border font-semibold text-[13px]">
          Done
        </Link>
        {b.status === "upcoming" && (
          <button
            onClick={() => setBookings(bookings.map((x) => (x.id === b.id ? { ...x, status: "cancelled" } : x)))}
            className="flex-1 py-3 rounded-xl bg-destructive/10 text-destructive font-semibold text-[13px]"
          >
            Cancel booking
          </button>
        )}
      </section>
    </MobileFrame>
  );
}