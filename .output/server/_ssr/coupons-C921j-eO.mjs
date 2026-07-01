import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as api } from "./api-BOdcFlCi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupons-C921j-eO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CouponsAdmin() {
	const [coupons, setCoupons] = (0, import_react.useState)([]);
	const [newCode, setNewCode] = (0, import_react.useState)("");
	const [newDiscount, setNewDiscount] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		api.getCoupons().then(setCoupons);
	}, []);
	const toggleStatus = (id) => {
		const updated = coupons.map((c) => c.id === id ? {
			...c,
			isActive: !c.isActive
		} : c);
		setCoupons(updated);
		api.updateCoupons(updated);
	};
	const deleteCoupon = (id) => {
		const updated = coupons.filter((c) => c.id !== id);
		setCoupons(updated);
		api.updateCoupons(updated);
	};
	const addCoupon = (e) => {
		e.preventDefault();
		if (!newCode || !newDiscount) return;
		const newCoupon = {
			id: `c_${Date.now()}`,
			code: newCode.toUpperCase(),
			discount: parseInt(newDiscount),
			isActive: true
		};
		const updated = [...coupons, newCoupon];
		setCoupons(updated);
		api.updateCoupons(updated);
		setNewCode("");
		setNewDiscount("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border p-4 rounded-2xl shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[16px] font-bold mb-4",
				children: "Create Coupon"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: addCoupon,
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: newCode,
						onChange: (e) => setNewCode(e.target.value.toUpperCase()),
						placeholder: "Code (e.g. SAVE10)",
						className: "flex-1 min-w-0 bg-secondary rounded-xl px-3 py-2.5 text-[13px] outline-none",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						value: newDiscount,
						onChange: (e) => setNewDiscount(e.target.value),
						placeholder: "% Off",
						className: "w-20 bg-secondary rounded-xl px-3 py-2.5 text-[13px] outline-none",
						required: true,
						min: "1",
						max: "100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "bg-primary text-primary-foreground px-4 rounded-xl font-bold text-[13px] active:scale-95 transition-transform",
						children: "Add"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-2xl shadow-sm flex flex-col overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 border-b border-border bg-secondary/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[16px] font-bold",
					children: "Active Coupons"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col divide-y divide-border",
				children: [coupons.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono font-bold text-[15px]",
							children: c.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${c.isActive ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`,
							children: c.isActive ? "Active" : "Inactive"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[12px] text-muted-foreground",
						children: [c.discount, "% Discount on all rooms"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toggleStatus(c.id),
							className: "w-9 h-9 rounded-full bg-secondary grid place-items-center text-muted-foreground hover:text-foreground active:scale-95 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: c.isActive ? "toggle_on" : "toggle_off",
								className: `text-[24px] ${c.isActive ? "text-primary" : ""}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => deleteCoupon(c.id),
							className: "w-9 h-9 rounded-full bg-destructive/10 text-destructive grid place-items-center active:scale-95 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "delete",
								className: "text-[18px]"
							})
						})]
					})]
				}, c.id)), coupons.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-muted-foreground text-[13px]",
					children: "No coupons created yet."
				})]
			})]
		})]
	});
}
//#endregion
export { CouponsAdmin as component };
