import { createFileRoute, Outlet, redirect, Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Icon } from "@/components/MobileFrame";
import { useAuth } from "@/lib/auth";
import { useState } from "react";

export const Route = createFileRoute("/admin")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("hostel.auth");
      if (!stored) throw redirect({ to: "/login" });
      const user = JSON.parse(stored);
      if (user.role === "customer") throw redirect({ to: "/" });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };

  const mainTabs = [
    { label: "Dashboard", path: "/admin/dashboard", icon: "dashboard" },
    { label: "Bookings", path: "/admin/bookings", icon: "event_available" },
    { label: "Rooms", path: "/admin/rooms", icon: "bed" },
  ];

  const moreMenu = [
    { label: "Gallery", path: "/admin/gallery", icon: "photo_library" },
    { label: "Coupons", path: "/admin/coupons", icon: "local_activity" },
    { label: "Reviews", path: "/admin/reviews", icon: "star" },
    { label: "Payments", path: "/admin/payments", icon: "payments" },
    { label: "Alerts", path: "/admin/notifications", icon: "notifications" },
    { label: "Settings", path: "/admin/hotels", icon: "settings" },
    { label: "Profile", path: "/admin/profile", icon: "person" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f4ecdd] flex justify-center">
      <div className="relative w-full max-w-[420px] min-h-screen bg-background shadow-[0_30px_60px_-30px_rgba(146,64,14,0.25)] flex flex-col overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-[18px] text-foreground capitalize">
            {pathname.split("/").pop()}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-muted-foreground">{user?.name}</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary grid place-items-center text-[12px] font-bold">
              {user?.name?.[0]}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          <Outlet />
        </div>

        {/* Full Screen Menu Drawer */}
        {showMenu && (
          <div className="absolute inset-0 z-20 bg-background pt-16 pb-24 overflow-y-auto flex flex-col animate-in fade-in duration-200">
            <div className="p-5 border-b border-border bg-card">
              <h2 className="text-[20px] font-bold">Admin Menu</h2>
              <p className="text-[13px] text-muted-foreground mt-1">{user?.email}</p>
            </div>
            <div className="flex flex-col p-3 gap-1">
              {moreMenu.map((m) => (
                <Link
                  key={m.path}
                  to={m.path}
                  onClick={() => setShowMenu(false)}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-[14px] font-semibold transition-colors ${
                    pathname.startsWith(m.path) 
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                      : "text-foreground hover:bg-secondary active:scale-[0.98]"
                  }`}
                >
                  <Icon name={m.icon} className="text-[22px]" />
                  {m.label}
                </Link>
              ))}
            </div>
            
            <div className="p-4 mt-auto">
              <button 
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[14px] font-bold text-destructive bg-destructive/10 hover:bg-destructive/15 active:scale-[0.98] transition"
              >
                <Icon name="logout" className="text-[18px]" />
                Log out
              </button>
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <nav className="absolute bottom-0 left-0 w-full bg-card/95 backdrop-blur-md border-t border-border z-40 pb-safe">
          <ul className="grid grid-cols-4">
            {mainTabs.map((t) => {
              const active = pathname.startsWith(t.path);
              return (
                <li key={t.path}>
                  <Link
                    to={t.path}
                    onClick={() => setShowMenu(false)}
                    className={`flex flex-col items-center justify-center gap-0.5 h-14 text-[10px] font-semibold uppercase tracking-wide transition-colors ${
                      active && !showMenu ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon name={t.icon} className={`text-[22px] ${active && !showMenu ? "" : "opacity-80"}`} />
                    {t.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`w-full flex flex-col items-center justify-center gap-0.5 h-14 text-[10px] font-semibold uppercase tracking-wide transition-colors ${
                  showMenu ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon name={showMenu ? "close" : "menu"} className={`text-[22px] ${showMenu ? "" : "opacity-80"}`} />
                {showMenu ? "Close" : "Menu"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
