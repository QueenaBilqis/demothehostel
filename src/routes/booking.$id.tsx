import { createFileRoute, Link, useNavigate, notFound, redirect } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { getHostel, type Hostel } from "@/lib/hostels";
import { useBookings, daysBetween, formatCurrency } from "@/lib/store";
import { useAuth } from "@/lib/auth";
import { api } from "@/backend/api";
import { useMemo, useState } from "react";
import { z } from "zod";

const search = z.object({ room: z.string().optional() });

export const Route = createFileRoute("/booking/$id")({
  head: () => ({ meta: [{ title: "Book — TheHostel" }] }),
  validateSearch: search,
  loader: ({ params }) => {
    const h = getHostel(params.id);
    if (!h) throw notFound();
    return h;
  },
  beforeLoad: ({ params }): never => {
    if (typeof window === "undefined") return undefined as never;
    if (!window.localStorage.getItem("hostel.auth")) {
      throw redirect({ to: "/login", search: { redirect: `/booking/${params.id}` } });
    }
    return undefined as never;
  },
  component: BookingPage,
  notFoundComponent: () => (
    <MobileFrame><div className="p-10 text-center">Hostel not found.</div></MobileFrame>
  ),
  errorComponent: ({ error }) => (
    <MobileFrame><div className="p-10 text-center text-sm text-muted-foreground">{error.message}</div></MobileFrame>
  ),
});

function BookingPage() {
  const h = Route.useLoaderData() as Hostel;
  const { room: roomParam } = Route.useSearch();
  const nav = useNavigate();
  const [bookings, setBookings] = useBookings();

  const { user } = useAuth();
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [roomId, setRoomId] = useState<string>(roomParam ?? h.rooms[0].id);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [coupon, setCoupon] = useState("");
  const [paymentRegion, setPaymentRegion] = useState<"id" | "intl">("id");
  const [pay, setPay] = useState("qris");
  const [submitting, setSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const room = useMemo(() => h.rooms.find((r) => r.id === roomId) ?? h.rooms[0], [h, roomId]);
  const nights = daysBetween(checkIn, checkOut);
  const subtotal = room.price * nights;
  const discount = coupon.trim().toLowerCase() === "warm10" ? Math.round(subtotal * 0.1) : 0;
  const afterDiscount = subtotal - discount;
  const taxes = Math.round(afterDiscount * 0.11); // 11% Tax
  const serviceFee = Math.round(afterDiscount * 0.05); // 5% Service fee
  const total = afterDiscount + taxes + serviceFee;

  function submit() {
    if (!name || !email) return;
    setSubmitting(true);
    
    // Simulate payment processing
    setTimeout(async () => {
      setPaymentSuccess(true);
      
      const id = `BK${Date.now().toString(36).toUpperCase()}`;
      setBookings([
        {
          id,
          hostelId: h.id,
          roomId: room.id,
          guestName: name,
          guestEmail: email,
          checkIn,
          checkOut,
          guests,
          nights,
          total,
          status: "upcoming",
          createdAt: new Date().toISOString(),
        },
        ...bookings,
      ]);
      
      await api.createBooking({
        hostelId: h.id,
        roomId: room.id,
        guestName: name,
        guestEmail: email,
        checkIn,
        checkOut,
        guests,
        nights,
        total,
        paymentMethod: pay
      });
      
      // Simulate Payment Success -> Booking Confirmation transition
      setTimeout(() => nav({ to: "/bookings/$bid", params: { bid: id } }), 1500);
    }, 1500);
  }

  if (paymentSuccess) {
    return (
      <MobileFrame>
        <div className="h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full grid place-items-center mb-6">
            <Icon name="check_circle" className="text-[40px] text-primary" />
          </div>
          <h2 className="text-[24px] font-bold">Payment Successful!</h2>
          <p className="text-muted-foreground mt-2">Redirecting to your booking confirmation and invoice...</p>
        </div>
      </MobileFrame>
    );
  }

  return (
    <MobileFrame>
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
        <Link to="/hostels/$id" params={{ id: h.id }} className="w-9 h-9 grid place-items-center rounded-full bg-secondary">
          <Icon name="arrow_back" className="text-[20px]" />
        </Link>
        <div>
          <h1 className="text-[16px] font-semibold leading-tight">Reserve</h1>
          <p className="text-[12px] text-muted-foreground">{h.name}</p>
        </div>
      </header>

      <div className="px-4 py-4 flex flex-col gap-4">
        <section className="rounded-2xl bg-card border border-border p-4">
          <h2 className="font-semibold text-[14px] mb-2">Your stay</h2>
          <div className="grid grid-cols-2 gap-2 text-[13px]">
            <label className="rounded-xl bg-secondary p-2">
              <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Check-in</div>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="bg-transparent w-full mt-0.5 font-semibold outline-none" />
            </label>
            <label className="rounded-xl bg-secondary p-2">
              <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Check-out</div>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="bg-transparent w-full mt-0.5 font-semibold outline-none" />
            </label>
            <label className="rounded-xl bg-secondary p-2 col-span-2">
              <div className="text-muted-foreground text-[10px] uppercase tracking-wide">Guests</div>
              <div className="flex items-center justify-between mt-0.5">
                <span className="font-semibold">{guests} guest{guests > 1 ? "s" : ""}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-7 h-7 rounded-full bg-card border border-border grid place-items-center">−</button>
                  <button onClick={() => setGuests(Math.min(6, guests + 1))} className="w-7 h-7 rounded-full bg-card border border-border grid place-items-center">+</button>
                </div>
              </div>
            </label>
          </div>
        </section>

        <section className="rounded-2xl bg-card border border-border p-4">
          <h2 className="font-semibold text-[14px] mb-2">Room</h2>
          <div className="flex flex-col gap-2">
            {h.rooms.map((r) => (
              <label key={r.id} className={`flex items-center justify-between gap-3 rounded-xl border p-3 cursor-pointer ${roomId === r.id ? "border-primary bg-primary/5" : "border-border"}`}>
                <div>
                  <div className="font-semibold text-[13px]">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground">{r.beds}</div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-bold text-[14px]">${r.price}</div>
                  <input type="radio" name="room" checked={roomId === r.id} onChange={() => setRoomId(r.id)} className="accent-[color:var(--primary)] mt-1" />
                </div>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-card border border-border p-4">
          <h2 className="font-semibold text-[14px] mb-2">Guest information</h2>
          <div className="flex flex-col gap-2">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="rounded-xl bg-secondary px-3 py-2.5 text-[14px] outline-none" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="rounded-xl bg-secondary px-3 py-2.5 text-[14px] outline-none" />
          </div>
        </section>

        <section className="rounded-2xl bg-card border border-border p-4">
          <h2 className="font-semibold text-[14px] mb-2">Coupon code</h2>
          <div className="flex gap-2">
            <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Try WARM10" className="flex-1 rounded-xl bg-secondary px-3 py-2.5 text-[14px] outline-none" />
            <button className="px-4 rounded-xl bg-secondary font-semibold text-[13px]">Apply</button>
          </div>
          {discount > 0 && <p className="text-[12px] text-primary mt-2">Coupon applied — 10% off subtotal</p>}
        </section>

        <section className="rounded-2xl bg-card border border-border p-4">
          <h2 className="font-semibold text-[14px] mb-2">Payment Method</h2>
          <div className="flex gap-2 bg-secondary p-1 rounded-xl mb-3 text-[12px] font-medium">
            <button 
              onClick={() => { setPaymentRegion("id"); setPay("qris"); }}
              className={`flex-1 py-1.5 rounded-lg transition ${paymentRegion === "id" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
            >
              Indonesian
            </button>
            <button 
              onClick={() => { setPaymentRegion("intl"); setPay("visa"); }}
              className={`flex-1 py-1.5 rounded-lg transition ${paymentRegion === "intl" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
            >
              International
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[12px]">
            {paymentRegion === "id" ? (
              [
                { id: "qris", icon: "qr_code_scanner", label: "QRIS" },
                { id: "gopay", icon: "account_balance_wallet", label: "GoPay" },
                { id: "ovo", icon: "toll", label: "OVO" },
                { id: "dana", icon: "payments", label: "DANA" },
                { id: "shopeepay", icon: "shopping_bag", label: "ShopeePay" },
                { id: "linkaja", icon: "link", label: "LinkAja" },
                { id: "bca", icon: "account_balance", label: "BCA" },
                { id: "mandiri", icon: "account_balance", label: "Mandiri" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPay(p.id)}
                  className={`rounded-xl border p-2 flex flex-col items-center gap-1.5 ${pay === p.id ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground"}`}
                >
                  <Icon name={p.icon} className="text-[20px]" />
                  <span className="leading-tight text-center">{p.label}</span>
                </button>
              ))
            ) : (
              [
                { id: "visa", icon: "credit_card", label: "Visa" },
                { id: "mastercard", icon: "credit_card", label: "Mastercard" },
                { id: "amex", icon: "credit_card", label: "Amex" },
                { id: "paypal", icon: "account_balance_wallet", label: "PayPal" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPay(p.id)}
                  className={`rounded-xl border p-2 flex flex-col items-center gap-1.5 ${pay === p.id ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground"}`}
                >
                  <Icon name={p.icon} className="text-[20px]" />
                  <span className="leading-tight text-center">{p.label}</span>
                </button>
              ))
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-card border border-border p-4">
          <h2 className="font-semibold text-[14px] mb-2">Booking Summary</h2>
          <ul className="text-[13px] flex flex-col gap-1.5">
            <li className="flex justify-between"><span>{room.name} × {nights} night{nights > 1 ? "s" : ""}</span><span>{formatCurrency(subtotal)}</span></li>
            {discount > 0 && <li className="flex justify-between text-primary"><span>Discount (Coupon)</span><span>−{formatCurrency(discount)}</span></li>}
            <li className="flex justify-between text-muted-foreground"><span>Taxes (11%)</span><span>{formatCurrency(taxes)}</span></li>
            <li className="flex justify-between text-muted-foreground"><span>Service Fee (5%)</span><span>{formatCurrency(serviceFee)}</span></li>
            <li className="flex justify-between font-bold pt-2 border-t border-border mt-1 text-[15px]"><span>Grand Total</span><span className="text-primary">{formatCurrency(total)}</span></li>
          </ul>
        </section>
      </div>

      <div className="fixed bottom-[64px] left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-card border-t border-border px-4 py-3 z-30 flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Total</div>
          <div className="text-primary font-bold text-[18px] leading-none">{formatCurrency(total)}</div>
        </div>
        <button onClick={submit} disabled={submitting || !name || !email} className="flex-1 ml-3 bg-primary text-primary-foreground text-center py-3 rounded-xl font-semibold text-[14px] disabled:opacity-50">
          {submitting ? "Confirming..." : "Confirm booking"}
        </button>
      </div>
    </MobileFrame>
  );
}