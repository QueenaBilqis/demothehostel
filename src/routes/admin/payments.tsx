import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api, type ApiBooking } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import { formatCurrency } from "@/lib/store";

export const Route = createFileRoute("/admin/payments")({
  component: AdminPayments,
});

function AdminPayments() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [bookings, setBookings] = useState<ApiBooking[]>([]);

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      api.getBookings(hostelId).then(setBookings);
    }
  }, [hostelId]);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto">
      <h2 className="text-[20px] font-bold">Payments & Transactions</h2>
      
      <div className="flex flex-col gap-3 mt-2">
        {bookings.map(b => (
          <div key={b.id} className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-3 relative">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-[14px] leading-tight text-foreground">TXN-{b.id.replace("BK", "")}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">Ref: {b.id}</div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                ${b.status !== "cancelled" ? "bg-green-500/10 text-green-600" : "bg-destructive/10 text-destructive"}`}
              >
                {b.status !== "cancelled" ? "Paid" : "Refunded"}
              </span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="font-bold text-primary text-[15px]">{formatCurrency(b.total)}</div>
              <div className="text-[12px] font-bold text-muted-foreground uppercase bg-secondary px-2 py-1 rounded-md">
                {b.paymentMethod || "QRIS"}
              </div>
            </div>
          </div>
        ))}
        {bookings.length === 0 && (
          <div className="p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl shadow-sm">
            No transactions found.
          </div>
        )}
      </div>
    </div>
  );
}
