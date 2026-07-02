import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as HOSTELS } from "./hostels-CMsqgrCR.mjs";
import { t as HostelCard } from "./HostelCard-VHrVfz4K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C08SBwhv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const today = /* @__PURE__ */ new Date();
	const tomorrow = new Date(today.getTime() + 864e5);
	const [destination, setDestination] = (0, import_react.useState)("");
	const filteredHostels = destination ? HOSTELS.filter((h) => h.country.toLowerCase().includes(destination)) : HOSTELS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[360px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: HOSTELS[0].hero,
					alt: "Boutique capsule interior",
					className: "absolute inset-0 w-full h-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full flex flex-col justify-between p-5 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] opacity-80",
							children: "Welcome to"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[26px] font-semibold leading-tight",
							children: "TheHostel"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-10 h-10 grid place-items-center rounded-full bg-white/15 backdrop-blur",
							"aria-label": "Notifications",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "notifications",
								className: "text-[20px]"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[20px] font-semibold leading-snug max-w-[260px]",
							children: "Three boutique hostels. One warm welcome."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-10 left-4 right-4 bg-card border border-border rounded-2xl shadow-[0_18px_40px_-20px_rgba(146,64,14,0.35)] p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "search",
							className: "text-[20px] text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: destination,
							onChange: (e) => setDestination(e.target.value),
							className: "flex-1 bg-transparent outline-none text-[14px] font-medium text-foreground cursor-pointer appearance-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									hidden: true,
									children: "Where to?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "singapore",
									children: "Singapore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "bali",
									children: "Bali"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2 mt-2 text-[12px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-secondary p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground text-[10px] uppercase tracking-wide",
									children: "Check-in"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									defaultValue: today.toISOString().slice(0, 10),
									className: "bg-transparent w-full mt-0.5 font-semibold outline-none cursor-pointer text-[13px]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-secondary p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground text-[10px] uppercase tracking-wide",
									children: "Check-out"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									defaultValue: tomorrow.toISOString().slice(0, 10),
									className: "bg-transparent w-full mt-0.5 font-semibold outline-none cursor-pointer text-[13px]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-secondary p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground text-[10px] uppercase tracking-wide",
									children: "Guests"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "bg-transparent w-full mt-0.5 font-semibold outline-none cursor-pointer text-[13px] appearance-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "1",
											children: "1 guest"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "2",
											children: "2 guests"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "3",
											children: "3 guests"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "4",
											children: "4 guests"
										})
									]
								})]
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-4 pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] font-semibold leading-tight",
					children: "Our Partner Hostels"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-muted-foreground",
					children: "Three boutique stays, hand-picked."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] text-muted-foreground",
					children: [filteredHostels.length, " stays"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [filteredHostels.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostelCard, { h }, h.id)), filteredHostels.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-[13px] text-muted-foreground bg-secondary/50 rounded-2xl",
					children: "No hostels found for this destination."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-4 pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[20px] font-semibold leading-tight mb-3",
				children: "Why Stay With Us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					{
						icon: "verified",
						title: "Curated hostels",
						desc: "Three carefully selected boutique stays."
					},
					{
						icon: "sell",
						title: "Best direct prices",
						desc: "No middleman, no surprise fees."
					},
					{
						icon: "lock",
						title: "Secure booking",
						desc: "Encrypted, protected payments."
					},
					{
						icon: "diversity_3",
						title: "Cozy community",
						desc: "Meet travelers from everywhere."
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card border border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-xl bg-primary/10 text-primary grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: f.icon,
								className: "text-[20px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-semibold text-[14px]",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] text-muted-foreground mt-0.5",
							children: f.desc
						})
					]
				}, f.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "px-4 pt-10 pb-4 text-center text-[11px] text-muted-foreground",
			children: "TheHostel · Curated boutique capsule hostels"
		})
	] });
}
//#endregion
export { Index as component };
