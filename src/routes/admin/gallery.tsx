import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import type { Hostel } from "@/lib/hostels";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryAdmin,
});

function GalleryAdmin() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [hostel, setHostel] = useState<Hostel | null>(null);

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      api.getHostel(hostelId).then(h => {
        if (h) setHostel(h);
      });
    }
  }, [hostelId]);

  if (!hostel) {
    return <div className="p-4 text-center text-muted-foreground text-[14px]">Loading gallery...</div>;
  }

  const removePhoto = (index: number) => {
    const updatedGallery = [...hostel.gallery];
    updatedGallery.splice(index, 1);
    const updated = { ...hostel, gallery: updatedGallery };
    api.updateHostel(hostel.id, updated).then(setHostel);
  };

  const addPhoto = () => {
    const url = prompt("Enter photo URL:");
    if (url) {
      const updated = { ...hostel, gallery: [...hostel.gallery, url] };
      api.updateHostel(hostel.id, updated).then(setHostel);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <div className="flex justify-between items-center bg-card border border-border p-4 rounded-2xl shadow-sm">
        <div>
          <h2 className="text-[16px] font-bold">Gallery Management</h2>
          <p className="text-[12px] text-muted-foreground mt-0.5">{hostel.gallery.length} photos uploaded</p>
        </div>
        <button onClick={addPhoto} className="w-10 h-10 bg-primary/10 text-primary rounded-full grid place-items-center active:scale-95 transition-transform">
          <Icon name="add_a_photo" className="text-[20px]" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {hostel.gallery.map((photo, i) => (
          <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-secondary border border-border shadow-sm">
            <img src={photo} alt="Hostel" className="w-full h-full object-cover" />
            <button 
              onClick={() => removePhoto(i)}
              className="absolute top-2 right-2 w-7 h-7 bg-black/60 backdrop-blur-md rounded-full text-white grid place-items-center active:scale-95 transition-transform"
            >
              <Icon name="delete" className="text-[14px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
