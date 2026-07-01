import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MobileFrame } from "./MobileFrame-u4Sg7FL7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hostels._id-DVk80o6Q.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "p-10 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-xl font-semibold",
		children: "Something went wrong"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground mt-2",
		children: error.message
	})]
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
