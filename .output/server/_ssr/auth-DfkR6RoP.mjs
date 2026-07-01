import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DfkR6RoP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var currentUser = null;
if (typeof window !== "undefined") {
	const stored = window.localStorage.getItem("hostel.auth");
	if (stored) try {
		currentUser = JSON.parse(stored);
	} catch {}
}
var listeners = /* @__PURE__ */ new Set();
function useAuth() {
	const [user, setUser] = (0, import_react.useState)(currentUser);
	(0, import_react.useEffect)(() => {
		listeners.add(setUser);
		return () => {
			listeners.delete(setUser);
		};
	}, []);
	const login = (u) => {
		currentUser = u;
		if (typeof window !== "undefined") window.localStorage.setItem("hostel.auth", JSON.stringify(u));
		listeners.forEach((fn) => fn(u));
	};
	const logout = () => {
		currentUser = null;
		if (typeof window !== "undefined") window.localStorage.removeItem("hostel.auth");
		listeners.forEach((fn) => fn(null));
	};
	return {
		user,
		login,
		logout
	};
}
//#endregion
export { useAuth as t };
