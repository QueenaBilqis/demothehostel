import { useEffect, useState } from "react";
import type { Hostel } from "@/lib/hostels";

export default function LeafletMap({ hostel }: { hostel: Hostel }) {
  const [L, setL] = useState<any>(null);
  const [MapContainer, setMapContainer] = useState<any>(null);
  const [TileLayer, setTileLayer] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);
  const [Popup, setPopup] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamic import to avoid SSR issues since Leaflet requires window
    Promise.all([
      import("leaflet"),
      import("react-leaflet")
    ]).then(([leaflet, reactLeaflet]) => {
      setL(leaflet.default || leaflet);
      setMapContainer(reactLeaflet.MapContainer);
      setTileLayer(reactLeaflet.TileLayer);
      setMarker(reactLeaflet.Marker);
      setPopup(reactLeaflet.Popup);

      // Fix missing marker icons
      const LInstance = leaflet.default || leaflet;
      delete (LInstance.Icon.Default.prototype as any)._getIconUrl;
      LInstance.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    });
  }, []);

  if (!isClient || !L || !MapContainer) {
    return <div className="w-full h-full bg-secondary animate-pulse" />;
  }

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

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden z-0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="font-semibold">{hostel.name}</div>
            <div className="text-xs text-muted-foreground">{hostel.city}, {hostel.country}</div>
          </Popup>
        </Marker>
      </MapContainer>
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
