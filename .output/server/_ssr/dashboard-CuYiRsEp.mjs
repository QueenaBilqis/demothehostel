import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as api } from "./api-BEiVPuR3.mjs";
import { n as formatCurrency } from "./store-qnqdex7O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CuYiRsEp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { user } = useAuth();
	const hostelId = user?.role;
	const [bookings, setBookings] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (hostelId && hostelId !== "customer") api.getBookings(hostelId).then((data) => {
			setBookings(data);
			setLoading(false);
		});
	}, [hostelId]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-pulse space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-4 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 bg-card rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 bg-card rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 bg-card rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 bg-card rounded-2xl" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 bg-card rounded-2xl" })]
	});
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const thisMonth = today.slice(0, 7);
	bookings.filter((b) => b.createdAt.startsWith(thisMonth) && b.status !== "cancelled").reduce((a, b) => a + b.total, 0);
	const revenueToday = bookings.filter((b) => b.createdAt.startsWith(today) && b.status !== "cancelled").reduce((a, b) => a + b.total, 0);
	const pending = bookings.filter((b) => b.status === "pending").length;
	const completed = bookings.filter((b) => b.status === "completed").length;
	bookings.filter((b) => b.status === "cancelled").length;
	const todaysBookings = bookings.filter((b) => b.createdAt.startsWith(today)).length;
	const todaysCheckins = bookings.filter((b) => b.checkIn.startsWith(today));
	const todaysCheckouts = bookings.filter((b) => b.checkOut.startsWith(today));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Total Bookings",
					value: bookings.length,
					icon: "library_books"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Today",
					value: todaysBookings,
					icon: "today"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Pending",
					value: pending,
					icon: "pending_actions",
					color: "text-orange-500"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Completed",
					value: completed,
					icon: "check_circle",
					color: "text-green-500"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Revenue Today",
					value: formatCurrency(revenueToday),
					icon: "payments",
					color: "text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Occupied",
					value: bookings.filter((b) => b.status === "confirmed").length,
					icon: "bed"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 mt-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-2xl shadow-sm flex flex-col p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[16px] font-bold",
						children: "Recent Bookings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/bookings",
						className: "text-[12px] font-bold text-primary active:scale-95 transition-transform",
						children: "View All"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [bookings.slice(0, 5).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center bg-secondary p-3 rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-[13px]",
							children: b.guestName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: new Date(b.checkIn).toLocaleDateString()
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide
                  ${b.status === "completed" ? "bg-green-500/10 text-green-600" : b.status === "cancelled" ? "bg-destructive/10 text-destructive" : b.status === "confirmed" ? "bg-blue-500/10 text-blue-600" : "bg-orange-500/10 text-orange-600"}`,
							children: b.status
						})]
					}, b.id)), bookings.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center py-4 text-muted-foreground text-[12px]",
						children: "No bookings found"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-2xl shadow-sm p-4 flex flex-col h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[13px] font-bold mb-3 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "luggage",
							className: "text-[16px] text-muted-foreground"
						}), " Check-ins"]
					}), todaysCheckins.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: todaysCheckins.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 bg-secondary rounded-lg text-[12px] font-medium truncate",
							children: b.guestName
						}, b.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 flex flex-col items-center justify-center text-muted-foreground text-[11px] opacity-70 mt-2",
						children: "None today."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-2xl shadow-sm p-4 flex flex-col h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[13px] font-bold mb-3 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "door_open",
							className: "text-[16px] text-muted-foreground"
						}), " Check-outs"]
					}), todaysCheckouts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: todaysCheckouts.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 bg-secondary rounded-lg text-[12px] font-medium truncate",
							children: b.guestName
						}, b.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 flex flex-col items-center justify-center text-muted-foreground text-[11px] opacity-70 mt-2",
						children: "None today."
					})]
				})]
			})]
		})]
	});
}
function StatCard({ title, value, icon, color = "text-foreground" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card border border-border p-4 rounded-2xl shadow-sm flex flex-col gap-1 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wide relative z-10",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-[20px] font-bold ${color} relative z-10`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: icon,
				className: "absolute -bottom-2 -right-2 text-[48px] text-secondary opacity-50 pointer-events-none"
			})
		]
	});
}
//#endregion
export { Dashboard as component };
