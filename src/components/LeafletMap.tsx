import { useEffect, useRef, useState } from "react";
import type { Hostel } from "@/lib/hostels";

export default function LeafletMap({ hostel }: { hostel: Hostel }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Define coordinates based on hostel id
  const coords: Record<string, [number, number]> = {
    bohemian: [1.2825, 103.8443], // Chinatown Singapore
    atelier: [1.2820, 103.8440],  // Chinatown Singapore
    stellar: [-8.6913, 115.1631], // Seminyak Bali
  };
  const position = coords[hostel.id] || [1.2825, 103.8443];

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
  };

  useEffect(() => {
    setIsClient(true);
    let isMounted = true;
    
    // Dynamic import to avoid SSR issues since Leaflet requires window
    import("leaflet").then((leaflet) => {
      if (!isMounted) return;
      const L = leaflet.default || leaflet;

      // Fix missing marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (mapRef.current && !mapInstance.current) {
        const map = L.map(mapRef.current).setView(position, 15);
        mapInstance.current = map;
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker(position).addTo(map)
          .bindPopup(`<div class="font-semibold">${hostel.name}</div><div class="text-xs text-muted-foreground">${hostel.city}, ${hostel.country}</div>`);
      }
    });

    return () => {
      isMounted = false;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [hostel.id, hostel.name, hostel.city, hostel.country, position[0], position[1]]);

  if (!isClient) {
    return <div className="w-full h-full bg-secondary animate-pulse" />;
  }

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden z-0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div ref={mapRef} className="w-full h-full" style={{ zIndex: 0 }} />
      <a
        href={getDirectionsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 z-[1000] bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md active:scale-95 transition-transform flex items-center gap-1"
      >
        Open Directions
      </a>
    </div>
  );
}
