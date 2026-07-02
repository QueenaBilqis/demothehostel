import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeafletMap-CmA0ib2m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeafletMap({ hostel }) {
	const mapRef = (0, import_react.useRef)(null);
	const mapInstance = (0, import_react.useRef)(null);
	const [isClient, setIsClient] = (0, import_react.useState)(false);
	const position = {
		bohemian: [1.2825, 103.8443],
		atelier: [1.282, 103.844],
		stellar: [-8.6913, 115.1631]
	}[hostel.id] || [1.2825, 103.8443];
	const getDirectionsUrl = () => {
		return `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
	};
	(0, import_react.useEffect)(() => {
		setIsClient(true);
		let isMounted = true;
		import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((leaflet) => {
			if (!isMounted) return;
			const L = leaflet.default || leaflet;
			delete L.Icon.Default.prototype._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
				iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
				shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
			});
			if (mapRef.current && !mapInstance.current) {
				const map = L.map(mapRef.current).setView(position, 15);
				mapInstance.current = map;
				L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>" }).addTo(map);
				L.marker(position).addTo(map).bindPopup(`<div class="font-semibold">${hostel.name}</div><div class="text-xs text-muted-foreground">${hostel.city}, ${hostel.country}</div>`);
			}
		});
		return () => {
			isMounted = false;
			if (mapInstance.current) {
				mapInstance.current.remove();
				mapInstance.current = null;
			}
		};
	}, [
		hostel.id,
		hostel.name,
		hostel.city,
		hostel.country,
		position[0],
		position[1]
	]);
	if (!isClient) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-full bg-secondary animate-pulse" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full rounded-2xl overflow-hidden z-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "stylesheet",
				href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: mapRef,
				className: "w-full h-full",
				style: { zIndex: 0 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: getDirectionsUrl(),
				target: "_blank",
				rel: "noopener noreferrer",
				className: "absolute bottom-3 right-3 z-[1000] bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md active:scale-95 transition-transform flex items-center gap-1",
				children: "Open Directions"
			})
		]
	});
}
//#endregion
export { LeafletMap as default };
