import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-DX9pURiM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function read(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const v = window.localStorage.getItem(key);
		return v ? JSON.parse(v) : fallback;
	} catch {
		return fallback;
	}
}
function useLocalState(key, initial) {
	const [state, setState] = (0, import_react.useState)(initial);
	(0, import_react.useEffect)(() => {
		setState(read(key, initial));
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);
	return [state, setState];
}
function useWishlist() {
	return useLocalState("hostel.wishlist", []);
}
function useBookings() {
	return useLocalState("hostel.bookings", []);
}
function useLanguage() {
	return useLocalState("hostel.language", "en");
}
function formatCurrency(n) {
	return new Intl.NumberFormat("en-SG", {
		style: "currency",
		currency: "SGD",
		maximumFractionDigits: 0
	}).format(n);
}
function daysBetween(a, b) {
	if (!a || !b) return 0;
	const ms = new Date(b).getTime() - new Date(a).getTime();
	return Math.max(1, Math.round(ms / (1e3 * 60 * 60 * 24)));
}
//#endregion
export { useWishlist as a, useLanguage as i, formatCurrency as n, useBookings as r, daysBetween as t };
