import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import type { Hostel, Room } from "@/lib/hostels";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/rooms")({
  component: RoomsManager,
});

function RoomsManager() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [hostel, setHostel] = useState<Hostel | null>(null);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      api.getHostel(hostelId).then((data) => {
        if (data) setHostel(data);
      });
    }
  }, [hostelId]);

  const saveRoom = async () => {
    if (!hostel || !editingRoom) return;
    const isNew = !hostel.rooms.some(r => r.id === editingRoom.id);
    let newRooms = [...hostel.rooms];
    
    if (isNew) {
      newRooms.push(editingRoom);
    } else {
      newRooms = newRooms.map(r => r.id === editingRoom.id ? editingRoom : r);
    }
    
    const updated = { ...hostel, rooms: newRooms };
    await api.updateHostel(hostel.id, updated);
    setHostel(updated);
    setEditingRoom(null);
  };

  const deleteRoom = async (id: string) => {
    if (!hostel) return;
    const updated = { ...hostel, rooms: hostel.rooms.filter(r => r.id !== id) };
    await api.updateHostel(hostel.id, updated);
    setHostel(updated);
  };

  if (!hostel) return <div className="p-5">Loading...</div>;

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto">
      {!editingRoom ? (
        <>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-[20px] font-bold">Rooms</h2>
              <p className="text-[12px] text-muted-foreground">{hostel.rooms.length} total</p>
            </div>
            <button 
              onClick={() => setEditingRoom({ id: `rm_${Date.now()}`, name: "", beds: "", price: 0, perks: [] })}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm shadow-primary/20"
            >
              <Icon name="add" className="text-[18px]" />
              Add Room
            </button>
          </div>
          
          <div className="flex flex-col gap-3">
            {hostel.rooms.map(r => (
              <div key={r.id} className="bg-card border border-border rounded-2xl p-4 shadow-sm relative">
                <div className="pr-12">
                  <div className="font-bold text-[15px] leading-tight">{r.name}</div>
                  <div className="text-[12px] text-muted-foreground mt-1">{r.beds}</div>
                  <div className="text-[14px] font-semibold text-primary mt-2">${r.price}<span className="text-[11px] font-normal text-muted-foreground">/night</span></div>
                </div>
                
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button 
                    onClick={() => setEditingRoom(r)}
                    className="w-8 h-8 rounded-full bg-secondary grid place-items-center text-foreground hover:bg-black/5 active:scale-95 transition-all"
                  >
                    <Icon name="edit" className="text-[16px]" />
                  </button>
                  <button 
                    onClick={() => deleteRoom(r.id)}
                    className="w-8 h-8 rounded-full bg-destructive/10 grid place-items-center text-destructive hover:bg-destructive/20 active:scale-95 transition-all"
                  >
                    <Icon name="delete" className="text-[16px]" />
                  </button>
                </div>
              </div>
            ))}
            {hostel.rooms.length === 0 && (
              <div className="p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl">
                No rooms added yet.
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold mb-4 text-[18px]">{editingRoom.id.startsWith("rm_") ? "Add New Room" : "Edit Room"}</h3>
          
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Room Name</label>
              <input 
                value={editingRoom.name} 
                onChange={e => setEditingRoom({ ...editingRoom, name: e.target.value })}
                className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Price ($)</label>
                <input 
                  type="number"
                  value={editingRoom.price} 
                  onChange={e => setEditingRoom({ ...editingRoom, price: Number(e.target.value) })}
                  className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Weekend ($)</label>
                <input 
                  type="number"
                  placeholder="e.g. 50"
                  className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Capacity</label>
                <input 
                  type="number"
                  placeholder="e.g. 2"
                  className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Bed Type</label>
                <input 
                  value={editingRoom.beds} 
                  onChange={e => setEditingRoom({ ...editingRoom, beds: e.target.value })}
                  className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Availability</label>
                <input 
                  type="number"
                  placeholder="Total rooms"
                  className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Status</label>
                <select className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary">
                  <option>Available</option>
                  <option>Booked</option>
                  <option>Maintenance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Amenities / Perks</label>
              <input 
                value={editingRoom.perks.join(", ")} 
                onChange={e => setEditingRoom({ ...editingRoom, perks: e.target.value.split(",").map(s => s.trim()) })}
                className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                placeholder="Free Wi-Fi, Locker, etc"
              />
            </div>
            
            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Description</label>
              <textarea 
                rows={2}
                className="w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y" 
                placeholder="Room description..."
              />
            </div>
            
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <button onClick={() => setEditingRoom(null)} className="flex-1 py-3.5 rounded-xl border border-border font-bold text-[13px] hover:bg-secondary active:scale-[0.98] transition-all">
                Cancel
              </button>
              <button onClick={saveRoom} className="flex-1 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-[13px] active:scale-[0.98] transition-all shadow-sm shadow-primary/20">
                Save Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
