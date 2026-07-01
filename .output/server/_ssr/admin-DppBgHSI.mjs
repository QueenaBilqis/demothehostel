import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DppBgHSI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { user, logout } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = (0, import_react.useState)(false);
	const handleLogout = () => {
		logout();
		navigate({ to: "/login" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen w-full bg-[#f4ecdd] flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-[420px] min-h-screen bg-background shadow-[0_30px_60px_-30px_rgba(146,64,14,0.25)] flex flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-[18px] text-foreground capitalize",
						children: pathname.split("/").pop()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12px] font-medium text-muted-foreground",
							children: user?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-8 h-8 rounded-full bg-primary/20 text-primary grid place-items-center text-[12px] font-bold",
							children: user?.name?.[0]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				showMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-20 bg-background pt-16 pb-24 overflow-y-auto flex flex-col animate-in fade-in duration-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 border-b border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[20px] font-bold",
								children: "Admin Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] text-muted-foreground mt-1",
								children: user?.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col p-3 gap-1",
							children: [
								{
									label: "Gallery",
									path: "/admin/gallery",
									icon: "photo_library"
								},
								{
									label: "Coupons",
									path: "/admin/coupons",
									icon: "local_activity"
								},
								{
									label: "Reviews",
									path: "/admin/reviews",
									icon: "star"
								},
								{
									label: "Payments",
									path: "/admin/payments",
									icon: "payments"
								},
								{
									label: "Alerts",
									path: "/admin/notifications",
									icon: "notifications"
								},
								{
									label: "Settings",
									path: "/admin/hotels",
									icon: "settings"
								},
								{
									label: "Profile",
									path: "/admin/profile",
									icon: "person"
								}
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: m.path,
								onClick: () => setShowMenu(false),
								className: `flex items-center gap-4 px-4 py-3.5 rounded-xl text-[14px] font-semibold transition-colors ${pathname.startsWith(m.path) ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-foreground hover:bg-secondary active:scale-[0.98]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: m.icon,
									className: "text-[22px]"
								}), m.label]
							}, m.path))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 mt-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[14px] font-bold text-destructive bg-destructive/10 hover:bg-destructive/15 active:scale-[0.98] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "logout",
									className: "text-[18px]"
								}), "Log out"]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "absolute bottom-0 left-0 w-full bg-card/95 backdrop-blur-md border-t border-border z-40 pb-safe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid grid-cols-4",
						children: [[
							{
								label: "Dashboard",
								path: "/admin/dashboard",
								icon: "dashboard"
							},
							{
								label: "Bookings",
								path: "/admin/bookings",
								icon: "event_available"
							},
							{
								label: "Rooms",
								path: "/admin/rooms",
								icon: "bed"
							}
						].map((t) => {
							const active = pathname.startsWith(t.path);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: t.path,
								onClick: () => setShowMenu(false),
								className: `flex flex-col items-center justify-center gap-0.5 h-14 text-[10px] font-semibold uppercase tracking-wide transition-colors ${active && !showMenu ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: t.icon,
									className: `text-[22px] ${active && !showMenu ? "" : "opacity-80"}`
								}), t.label]
							}) }, t.path);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowMenu(!showMenu),
							className: `w-full flex flex-col items-center justify-center gap-0.5 h-14 text-[10px] font-semibold uppercase tracking-wide transition-colors ${showMenu ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: showMenu ? "close" : "menu",
								className: `text-[22px] ${showMenu ? "" : "opacity-80"}`
							}), showMenu ? "Close" : "Menu"]
						}) })]
					})
				})
			]
		})
	});
}
//#endregion
export { AdminLayout as component };
