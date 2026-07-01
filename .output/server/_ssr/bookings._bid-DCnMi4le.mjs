import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { n as getHostel } from "./hostels-DF_pzQ4E.mjs";
import { n as formatCurrency, r as useBookings } from "./store-DX9pURiM.mjs";
import { t as Route } from "./bookings._bid-mrEVMd0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookings._bid-DCnMi4le.js
var import_jsx_runtime = require_jsx_runtime();
function BookingDetail() {
	const { bid } = Route.useParams();
	const [bookings, setBookings] = useBookings();
	const b = bookings.find((x) => x.id === bid);
	if (!b) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-lg font-semibold",
			children: "Booking not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/bookings",
			className: "text-primary mt-4 inline-block",
			children: "Back to bookings"
		})]
	}) });
	const h = getHostel(b.hostelId);
	if (!h) return null;
	const room = h.rooms.find((r) => r.id === b.roomId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/bookings",
				className: "w-9 h-9 grid place-items-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "arrow_back",
					className: "text-[20px]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[16px] font-semibold",
				children: "Booking details"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-primary/8 border border-primary/20 p-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "check",
							className: "text-[28px]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-[18px] font-semibold",
						children: "Booking confirmed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12px] text-muted-foreground mt-1",
						children: ["Confirmation #", b.id]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: h.hero,
					alt: h.name,
					className: "w-full h-40 object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-[16px]",
							children: h.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12px] text-muted-foreground flex items-center gap-1 mt-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "location_on",
									className: "text-[14px]"
								}),
								h.city,
								", ",
								h.country
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-y-2 text-[13px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Guest"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right",
									children: b.guestName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Room"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right",
									children: room?.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Check-in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right",
									children: b.checkIn
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Check-out"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right",
									children: b.checkOut
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Guests"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right",
									children: b.guests
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Nights"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right",
									children: b.nights
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-semibold",
									children: "Total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-right font-semibold text-primary",
									children: formatCurrency(b.total)
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-4 pt-4 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/bookings",
				className: "flex-1 text-center py-3 rounded-xl border border-border font-semibold text-[13px]",
				children: "Done"
			}), b.status === "upcoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setBookings(bookings.map((x) => x.id === b.id ? {
					...x,
					status: "cancelled"
				} : x)),
				className: "flex-1 py-3 rounded-xl bg-destructive/10 text-destructive font-semibold text-[13px]",
				children: "Cancel booking"
			})]
		})
	] });
}
//#endregion
export { BookingDetail as component };
