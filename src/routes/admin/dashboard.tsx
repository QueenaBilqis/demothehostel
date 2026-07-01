import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api, type ApiBooking } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import { formatCurrency } from "@/lib/store";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [bookings, setBookings] = useState<ApiBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      api.getBookings(hostelId).then((data) => {
        setBookings(data);
        setLoading(false);
      });
    }
  }, [hostelId]);

  if (loading) {
    return <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-4 gap-4"><div className="h-24 bg-card rounded-2xl"></div><div className="h-24 bg-card rounded-2xl"></div><div className="h-24 bg-card rounded-2xl"></div><div className="h-24 bg-card rounded-2xl"></div></div>
      <div className="h-64 bg-card rounded-2xl"></div>
    </div>;
  }

  const today = new Date().toISOString().split("T")[0];
  const thisMonth = today.slice(0, 7);
  
  const revenueMonthly = bookings.filter(b => b.createdAt.startsWith(thisMonth) && b.status !== "cancelled").reduce((a, b) => a + b.total, 0);
  const revenueToday = bookings.filter(b => b.createdAt.startsWith(today) && b.status !== "cancelled").reduce((a, b) => a + b.total, 0);
  
  const pending = bookings.filter(b => b.status === "pending").length;
  const completed = bookings.filter(b => b.status === "completed").length;
  const cancelled = bookings.filter(b => b.status === "cancelled").length;
  const todaysBookings = bookings.filter(b => b.createdAt.startsWith(today)).length;
  
  const todaysCheckins = bookings.filter(b => b.checkIn.startsWith(today));
  const todaysCheckouts = bookings.filter(b => b.checkOut.startsWith(today));

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard title="Total Bookings" value={bookings.length} icon="library_books" />
        <StatCard title="Today" value={todaysBookings} icon="today" />
        <StatCard title="Pending" value={pending} icon="pending_actions" color="text-orange-500" />
        <StatCard title="Completed" value={completed} icon="check_circle" color="text-green-500" />
        <StatCard title="Revenue Today" value={formatCurrency(revenueToday)} icon="payments" color="text-primary" />
        <StatCard title="Occupied" value={bookings.filter(b => b.status === "confirmed").length} icon="bed" />
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {/* Recent Bookings */}
        <div className="bg-card border border-border rounded-2xl shadow-sm flex flex-col p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[16px] font-bold">Recent Bookings</h2>
            <Link to="/admin/bookings" className="text-[12px] font-bold text-primary active:scale-95 transition-transform">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {bookings.slice(0, 5).map((b) => (
              <div key={b.id} className="flex justify-between items-center bg-secondary p-3 rounded-xl">
                <div>
                  <div className="font-bold text-[13px]">{b.guestName}</div>
                  <div className="text-[11px] text-muted-foreground">{new Date(b.checkIn).toLocaleDateString()}</div>
                </div>
                <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide
                  ${b.status === "completed" ? "bg-green-500/10 text-green-600" : 
                    b.status === "cancelled" ? "bg-destructive/10 text-destructive" : 
                    b.status === "confirmed" ? "bg-blue-500/10 text-blue-600" :
                    "bg-orange-500/10 text-orange-600"}`}
                >
                  {b.status}
                </span>
              </div>
            ))}
            {bookings.length === 0 && (
              <div className="text-center py-4 text-muted-foreground text-[12px]">No bookings found</div>
            )}
          </div>
        </div>

        {/* Check-ins / Check-outs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-2xl shadow-sm p-4 flex flex-col h-full">
            <h2 className="text-[13px] font-bold mb-3 flex items-center gap-1.5"><Icon name="luggage" className="text-[16px] text-muted-foreground"/> Check-ins</h2>
            {todaysCheckins.length > 0 ? (
              <div className="flex flex-col gap-2">
                {todaysCheckins.map(b => (
                  <div key={b.id} className="p-2 bg-secondary rounded-lg text-[12px] font-medium truncate">
                    {b.guestName}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground text-[11px] opacity-70 mt-2">
                None today.
              </div>
            )}
          </div>
          
          <div className="bg-card border border-border rounded-2xl shadow-sm p-4 flex flex-col h-full">
            <h2 className="text-[13px] font-bold mb-3 flex items-center gap-1.5"><Icon name="door_open" className="text-[16px] text-muted-foreground"/> Check-outs</h2>
            {todaysCheckouts.length > 0 ? (
              <div className="flex flex-col gap-2">
                {todaysCheckouts.map(b => (
                  <div key={b.id} className="p-2 bg-secondary rounded-lg text-[12px] font-medium truncate">
                    {b.guestName}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground text-[11px] opacity-70 mt-2">
                None today.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color = "text-foreground" }: { title: string, value: any, icon: string, color?: string }) {
  return (
    <div className="bg-card border border-border p-4 rounded-2xl shadow-sm flex flex-col gap-1 relative overflow-hidden">
      <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wide relative z-10">{title}</div>
      <div className={`text-[20px] font-bold ${color} relative z-10`}>{value}</div>
      <Icon name={icon} className="absolute -bottom-2 -right-2 text-[48px] text-secondary opacity-50 pointer-events-none" />
    </div>
  );
}
