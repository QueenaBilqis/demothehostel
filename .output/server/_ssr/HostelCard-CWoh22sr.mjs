import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { a as useWishlist } from "./store-DX9pURiM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HostelCard-CWoh22sr.js
var import_jsx_runtime = require_jsx_runtime();
function HostelCard({ h }) {
	const [list, setList] = useWishlist();
	const saved = list.includes(h.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl overflow-hidden bg-card border border-border shadow-[0_8px_24px_-12px_rgba(146,64,14,0.18)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/hostels/$id",
			params: { id: h.id },
			className: "block relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: h.hero,
					alt: h.name,
					className: "w-full h-48 object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": saved ? "Remove from wishlist" : "Save to wishlist",
					onClick: (e) => {
						e.preventDefault();
						setList(saved ? list.filter((x) => x !== h.id) : [...list, h.id]);
					},
					className: "absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-background/85 backdrop-blur text-foreground shadow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "favorite",
						className: `text-[18px] ${saved ? "text-primary" : "text-muted-foreground"}`
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[12px] font-semibold text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "star",
							className: "text-[14px] text-primary"
						}),
						h.rating,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground font-normal",
							children: [
								"(",
								h.reviews,
								")"
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-[17px] leading-tight",
						children: h.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] text-muted-foreground mt-0.5 flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "location_on",
								className: "text-[14px]"
							}),
							h.city,
							", ",
							h.country
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-wide text-muted-foreground",
							children: "from"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-primary font-bold text-[18px] leading-none",
							children: [
								"$",
								h.priceFrom,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground font-normal ml-0.5",
									children: "/night"
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-muted-foreground mt-2 line-clamp-2",
					children: h.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 mt-3",
					children: h.amenities.slice(0, 4).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] bg-secondary text-secondary-foreground px-2 py-1 rounded-full",
						children: a
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/hostels/$id",
					params: { id: h.id },
					className: "mt-4 block text-center bg-primary text-primary-foreground rounded-xl py-2.5 font-semibold text-[14px] active:scale-[0.99] transition",
					children: "Book Now"
				})
			]
		})]
	});
}
//#endregion
export { HostelCard as t };
