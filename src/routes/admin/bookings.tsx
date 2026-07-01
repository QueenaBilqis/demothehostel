import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api, type ApiBooking } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import { formatCurrency } from "@/lib/store";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/bookings")({
  component: AdminBookings,
});

function AdminBookings() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [bookings, setBookings] = useState<ApiBooking[]>([]);
  const [filter, setFilter] = useState<ApiBooking["status"] | "all">("all");

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      loadBookings();
    }
  }, [hostelId]);

  const loadBookings = () => {
    api.getBookings(hostelId).then(setBookings);
  };

  const updateStatus = async (id: string, status: ApiBooking["status"]) => {
    await api.updateBookingStatus(id, status);
    loadBookings();
  };

  const filtered = filter === "all" ? bookings : bookings.filter(b => b.status === filter);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-[20px] font-bold">Manage Bookings</h2>
        <div className="flex gap-2 bg-secondary p-1 rounded-xl text-[12px] font-medium overflow-x-auto hide-scrollbar">
          {(["all", "pending", "confirmed", "completed", "cancelled"] as const).map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-1.5 rounded-lg capitalize transition ${
                filter === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {filtered.map(b => (
          <div key={b.id} className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-3 relative">
            <div className="flex justify-between items-start">
              <div className="pr-16">
                <div className="font-bold text-[15px] leading-tight text-foreground">{b.guestName}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{b.id} • Room {b.roomId}</div>
                <div className="text-[12px] font-medium text-foreground mt-1">
                  {new Date(b.checkIn).toLocaleDateString()} - {new Date(b.checkOut).toLocaleDateString()}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                  ${b.status === "completed" ? "bg-green-500/10 text-green-600" : 
                    b.status === "cancelled" ? "bg-destructive/10 text-destructive" : 
                    b.status === "confirmed" ? "bg-blue-500/10 text-blue-600" :
                    "bg-orange-500/10 text-orange-600"}`}
                >
                  {b.status}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="font-bold text-primary text-[15px]">{formatCurrency(b.total)}</div>
              
              <div className="flex gap-2">
                {b.status === "pending" && (
                  <button 
                    onClick={() => updateStatus(b.id, "confirmed")}
                    className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-[12px] font-bold active:scale-95 transition-transform"
                  >
                    Confirm
                  </button>
                )}
                {(b.status === "pending" || b.status === "confirmed") && (
                  <button 
                    onClick={() => updateStatus(b.id, "cancelled")}
                    className="bg-destructive/10 text-destructive px-3 py-1.5 rounded-lg text-[12px] font-bold active:scale-95 transition-transform"
                  >
                    Cancel
                  </button>
                )}
                {b.status === "confirmed" && (
                  <button 
                    onClick={() => updateStatus(b.id, "completed")}
                    className="bg-green-500/10 text-green-600 px-3 py-1.5 rounded-lg text-[12px] font-bold active:scale-95 transition-transform"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl shadow-sm">
            No bookings found in this view.
          </div>
        )}
      </div>
    </div>
  );
}
