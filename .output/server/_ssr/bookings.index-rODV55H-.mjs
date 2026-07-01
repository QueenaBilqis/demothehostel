import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { n as getHostel } from "./hostels-DF_pzQ4E.mjs";
import { n as formatCurrency, r as useBookings } from "./store-DX9pURiM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookings.index-rODV55H-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookingsPage() {
	const [bookingsRaw] = useBookings();
	const bookings = bookingsRaw || [];
	const [tab, setTab] = (0, import_react.useState)("upcoming");
	const filtered = bookings.filter((b) => b.status === tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "px-4 pt-6 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[22px] font-semibold",
				children: "My Bookings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted-foreground",
				children: "Your stays with TheHostel"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 bg-secondary rounded-xl p-1 text-[12px] font-medium",
				children: [
					"upcoming",
					"completed",
					"cancelled"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `flex-1 py-2 rounded-lg capitalize transition ${tab === t ? "bg-card shadow-sm" : "text-muted-foreground"}`,
					children: t
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-4 py-4 flex flex-col gap-3",
			children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 h-14 rounded-full bg-secondary mx-auto grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "luggage",
							className: "text-[26px] text-primary"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-semibold text-[15px]",
						children: [
							"No ",
							tab,
							" bookings"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground mt-1",
						children: "When you book, it will show up here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-4 inline-block bg-primary text-primary-foreground rounded-xl px-4 py-2 text-[13px] font-semibold",
						children: "Browse hostels"
					})
				]
			}), filtered.map((b) => {
				const h = getHostel(b.hostelId);
				if (!h) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bookings/$bid",
					params: { bid: b.id },
					className: "rounded-2xl bg-card border border-border overflow-hidden flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: h.hero,
						alt: h.name,
						className: "w-24 h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: b.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-[14px] leading-tight",
								children: h.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: [
									b.checkIn,
									" → ",
									b.checkOut,
									" · ",
									b.nights,
									"n"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize",
									children: b.status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-semibold text-[13px]",
									children: formatCurrency(b.total)
								})]
							})
						]
					})]
				}, b.id);
			})]
		})
	] });
}
//#endregion
export { BookingsPage as component };
