import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-DgGFqU6Q.js
var import_jsx_runtime = require_jsx_runtime();
var NOTIFS = [
	{
		icon: "local_offer",
		title: "WARM10 — 10% off your stay",
		body: "Use code WARM10 at checkout. Ends Sunday.",
		time: "2h ago",
		tone: "primary"
	},
	{
		icon: "event_available",
		title: "Booking confirmed",
		body: "Your stay at The Bohemian Capsule is confirmed.",
		time: "Yesterday",
		tone: "default"
	},
	{
		icon: "campaign",
		title: "New: Stellar Capsules in Bali",
		body: "A new partner hostel just joined TheHostel.",
		time: "2 days ago",
		tone: "default"
	},
	{
		icon: "redeem",
		title: "You earned a coupon",
		body: "Thanks for booking — here's 5% off your next stay.",
		time: "Last week",
		tone: "primary"
	}
];
function NotificationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "w-9 h-9 grid place-items-center rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: "arrow_back",
				className: "text-[20px]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-[16px] font-semibold",
			children: "Notifications"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-4 flex flex-col gap-2",
		children: NOTIFS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-card border border-border p-3 flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `w-10 h-10 grid place-items-center rounded-xl ${n.tone === "primary" ? "bg-primary/10 text-primary" : "bg-secondary text-foreground"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: n.icon,
					className: "text-[20px]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-[14px]",
						children: n.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground mt-0.5",
						children: n.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground mt-1",
						children: n.time
					})
				]
			})]
		}, n.title))
	})] });
}
//#endregion
export { NotificationsPage as component };
