import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api, type ApiCoupon } from "@/backend/api";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/coupons")({
  component: CouponsAdmin,
});

function CouponsAdmin() {
  const [coupons, setCoupons] = useState<ApiCoupon[]>([]);
  const [newCode, setNewCode] = useState("");
  const [newDiscount, setNewDiscount] = useState("");

  useEffect(() => {
    api.getCoupons().then(setCoupons);
  }, []);

  const toggleStatus = (id: string) => {
    const updated = coupons.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c);
    setCoupons(updated);
    api.updateCoupons(updated);
  };

  const deleteCoupon = (id: string) => {
    const updated = coupons.filter(c => c.id !== id);
    setCoupons(updated);
    api.updateCoupons(updated);
  };

  const addCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode || !newDiscount) return;
    
    const newCoupon: ApiCoupon = {
      id: `c_${Date.now()}`,
      code: newCode.toUpperCase(),
      discount: parseInt(newDiscount),
      isActive: true,
    };
    
    const updated = [...coupons, newCoupon];
    setCoupons(updated);
    api.updateCoupons(updated);
    
    setNewCode("");
    setNewDiscount("");
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <div className="bg-card border border-border p-4 rounded-2xl shadow-sm">
        <h2 className="text-[16px] font-bold mb-4">Create Coupon</h2>
        <form onSubmit={addCoupon} className="flex gap-2">
          <input
            value={newCode}
            onChange={e => setNewCode(e.target.value.toUpperCase())}
            placeholder="Code (e.g. SAVE10)"
            className="flex-1 min-w-0 bg-secondary rounded-xl px-3 py-2.5 text-[13px] outline-none"
            required
          />
          <input
            type="number"
            value={newDiscount}
            onChange={e => setNewDiscount(e.target.value)}
            placeholder="% Off"
            className="w-20 bg-secondary rounded-xl px-3 py-2.5 text-[13px] outline-none"
            required
            min="1"
            max="100"
          />
          <button type="submit" className="bg-primary text-primary-foreground px-4 rounded-xl font-bold text-[13px] active:scale-95 transition-transform">
            Add
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-border bg-secondary/30">
          <h2 className="text-[16px] font-bold">Active Coupons</h2>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {coupons.map(c => (
            <div key={c.id} className="p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono font-bold text-[15px]">{c.code}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${c.isActive ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`}>
                    {c.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="text-[12px] text-muted-foreground">
                  {c.discount}% Discount on all rooms
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => toggleStatus(c.id)}
                  className="w-9 h-9 rounded-full bg-secondary grid place-items-center text-muted-foreground hover:text-foreground active:scale-95 transition-all"
                >
                  <Icon name={c.isActive ? "toggle_on" : "toggle_off"} className={`text-[24px] ${c.isActive ? "text-primary" : ""}`} />
                </button>
                <button 
                  onClick={() => deleteCoupon(c.id)}
                  className="w-9 h-9 rounded-full bg-destructive/10 text-destructive grid place-items-center active:scale-95 transition-all"
                >
                  <Icon name="delete" className="text-[18px]" />
                </button>
              </div>
            </div>
          ))}
          {coupons.length === 0 && (
            <div className="p-8 text-center text-muted-foreground text-[13px]">
              No coupons created yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
