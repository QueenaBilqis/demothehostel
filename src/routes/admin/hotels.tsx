import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import type { Hostel } from "@/lib/hostels";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/hotels")({
  component: HotelsSettings,
});

function HotelsSettings() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [hostel, setHostel] = useState<Hostel | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      api.getHostel(hostelId).then((data) => {
        if (data) setHostel(data);
      });
    }
  }, [hostelId]);

  if (!hostel) {
    return <div className="text-muted-foreground p-5">Loading...</div>;
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await api.updateHostel(hostel.id, hostel);
    setSaving(false);
    alert("Saved successfully!");
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[20px] font-bold text-foreground">Settings</h2>
        <button 
          onClick={handleSave} 
          disabled={saving}
          className="bg-primary text-primary-foreground px-4 py-2.5 rounded-xl font-bold text-[13px] shadow-md shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>

      <form className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Hotel Name</label>
            <input 
              value={hostel.name} 
              onChange={e => setHostel({ ...hostel, name: e.target.value })}
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Phone Number</label>
            <input 
              placeholder="+62 812 3456 7890"
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Email Address</label>
            <input 
              type="email"
              placeholder="contact@thehostel.com"
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">City / Country</label>
            <input 
              value={`${hostel.city}, ${hostel.country}`} 
              onChange={e => {
                const parts = e.target.value.split(",");
                setHostel({ ...hostel, city: parts[0]?.trim() || "", country: parts[1]?.trim() || "" });
              }}
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Full Address</label>
            <input 
              placeholder="Jalan Sunset Road No 10..."
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
        </div>
        
        <div>
          <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Description</label>
          <textarea 
            rows={4}
            value={hostel.about} 
            onChange={e => setHostel({ ...hostel, about: e.target.value })}
            className="w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y" 
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Check-in</label>
            <input 
              type="time"
              defaultValue="14:00"
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Check-out</label>
            <input 
              type="time"
              defaultValue="11:00"
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
        </div>

        <div>
          <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Facilities</label>
          <input 
            value={hostel.facilities.join(", ")} 
            onChange={e => setHostel({ ...hostel, facilities: e.target.value.split(",").map(s => s.trim()) })}
            className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
          />
        </div>

        <div>
          <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Amenities</label>
          <input 
            value={hostel.amenities.join(", ")} 
            onChange={e => setHostel({ ...hostel, amenities: e.target.value.split(",").map(s => s.trim()) })}
            className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
          />
        </div>

        <div>
          <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Nearby Attractions</label>
          <input 
            value={hostel.attractions.join(", ")} 
            onChange={e => setHostel({ ...hostel, attractions: e.target.value.split(",").map(s => s.trim()) })}
            className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">House Rules</label>
            <textarea 
              rows={3}
              placeholder="No smoking, quiet hours after 10PM..."
              className="w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Cancellation</label>
            <textarea 
              rows={3}
              placeholder="Free cancellation up to 48 hours..."
              className="w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y" 
            />
          </div>
        </div>

        <div className="border-t border-border pt-4 mt-2">
          <h3 className="font-bold mb-4 text-[14px]">Location</h3>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Maps Link</label>
              <input 
                placeholder="https://maps.google.com/..."
                className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Lat</label>
                <input 
                  placeholder="-8.6791"
                  className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Lng</label>
                <input 
                  placeholder="115.1583"
                  className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
