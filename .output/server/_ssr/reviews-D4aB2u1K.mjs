import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as api } from "./api-BOdcFlCi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-D4aB2u1K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReviewsAdmin() {
	const { user } = useAuth();
	const hostelId = user?.role;
	const [reviews, setReviews] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (hostelId && hostelId !== "customer") api.getReviews(hostelId).then(setReviews);
	}, [hostelId]);
	const [replyId, setReplyId] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center bg-card border border-border p-4 rounded-2xl shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[16px] font-bold",
				children: "Guest Reviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12px] text-muted-foreground mt-0.5",
				children: [reviews.length, " total reviews"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-10 h-10 bg-primary/10 text-primary rounded-full grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "star",
					className: "text-[20px]"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border p-4 rounded-2xl shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-[14px]",
							children: r.guestName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: new Date(r.date).toLocaleDateString()
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-0.5 text-primary",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "star",
								className: `text-[16px] ${i < r.rating ? "" : "opacity-30"}`
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-foreground leading-relaxed mt-2",
						children: r.comment
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 pt-3 border-t border-border flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setReplyId(replyId === r.id ? null : r.id),
							className: "text-[12px] font-semibold text-primary flex items-center gap-1.5 hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "reply",
								className: "text-[16px]"
							}), "Reply"]
						})
					}),
					replyId === r.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2 animate-in fade-in slide-in-from-top-2 duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							placeholder: "Type your response...",
							className: "flex-1 bg-secondary rounded-xl px-3 py-2 text-[13px] outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setReplyId(null),
							className: "bg-primary text-primary-foreground px-4 rounded-xl font-bold text-[13px]",
							children: "Send"
						})]
					})
				]
			}, r.id)), reviews.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl",
				children: "No reviews yet."
			})]
		})]
	});
}
//#endregion
export { ReviewsAdmin as component };
