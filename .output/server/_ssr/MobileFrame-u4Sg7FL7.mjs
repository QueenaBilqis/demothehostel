import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MobileFrame-u4Sg7FL7.js
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		to: "/",
		label: "Home",
		icon: "home"
	},
	{
		to: "/hostels",
		label: "Hostels",
		icon: "apartment"
	},
	{
		to: "/bookings",
		label: "Bookings",
		icon: "event_available"
	},
	{
		to: "/profile",
		label: "Profile",
		icon: "person"
	}
];
function Icon({ name, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `material-symbols-outlined ${className}`,
		"aria-hidden": true,
		children: name
	});
}
function MobileFrame({ children }) {
	const { pathname } = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen w-full bg-[#f4ecdd] flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-[420px] min-h-screen bg-background shadow-[0_30px_60px_-30px_rgba(146,64,14,0.25)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-24",
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-card/95 backdrop-blur-md border-t border-border z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-4",
					children: tabs.map((t) => {
						const active = t.to === "/" ? pathname === "/" : pathname === t.to || pathname.startsWith(t.to + "/");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: t.to,
							className: `flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: t.icon,
								className: `text-[22px] ${active ? "" : "opacity-80"}`
							}), t.label]
						}) }, t.to);
					})
				})
			})]
		})
	});
}
//#endregion
export { MobileFrame as n, Icon as t };
