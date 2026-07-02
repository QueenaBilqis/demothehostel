import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as HOSTELS } from "./hostels-CMsqgrCR.mjs";
import { t as HostelCard } from "./HostelCard-VHrVfz4K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hostels.index-C6warD_4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HostelsList() {
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = HOSTELS.filter((h) => h.name.toLowerCase().includes(q.toLowerCase()) || h.city.toLowerCase().includes(q.toLowerCase()) || h.country.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "w-9 h-9 grid place-items-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "arrow_back",
					className: "text-[20px]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[18px] font-semibold",
				children: "All Hostels"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary mt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: "search",
				className: "text-[20px] text-muted-foreground"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search hostels or cities",
				className: "flex-1 bg-transparent outline-none text-[14px] placeholder:text-muted-foreground"
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 pt-4 flex flex-col gap-4",
		children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-muted-foreground text-sm py-12",
			children: "No hostels match your search."
		}) : filtered.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostelCard, { h }, h.id))
	})] });
}
//#endregion
export { HostelsList as component };
