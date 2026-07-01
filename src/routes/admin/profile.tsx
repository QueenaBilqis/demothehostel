import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/profile")({
  component: ProfilePage
});

function ProfilePage() {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <h2 className="text-[20px] font-bold">Admin Profile</h2>

      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-5">
        <div className="flex flex-col items-center gap-3 py-2">
          <div className="w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center text-[32px] font-bold text-primary uppercase relative">
            {user?.name?.[0]}
            <button 
              onClick={handleSave}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center active:scale-95 transition-transform"
            >
              <Icon name="photo_camera" className="text-[16px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Full Name</label>
            <input 
              defaultValue={user?.name}
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Email Address</label>
            <input 
              defaultValue={user?.email}
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>
          
          <div className="border-t border-border pt-4 mt-1">
            <h3 className="font-bold mb-3 text-[14px]">Security</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">New Password</label>
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <button 
                  onClick={handleSave}
                  className="bg-primary text-primary-foreground px-5 py-3 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm shadow-primary/20"
                >
                  Save Changes
                </button>
                {saved && <span className="text-[12px] font-bold text-green-600 flex items-center gap-1"><Icon name="check_circle" className="text-[16px]"/> Saved!</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
