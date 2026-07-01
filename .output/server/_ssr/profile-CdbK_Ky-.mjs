import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CdbK_Ky-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { user } = useAuth();
	const [saved, setSaved] = (0, import_react.useState)(false);
	const handleSave = () => {
		setSaved(true);
		setTimeout(() => setSaved(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[20px] font-bold",
			children: "Admin Profile"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-center gap-3 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center text-[32px] font-bold text-primary uppercase relative",
					children: [user?.name?.[0], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSave,
						className: "absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center active:scale-95 transition-transform",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "photo_camera",
							className: "text-[16px]"
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block",
						children: "Full Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						defaultValue: user?.name,
						className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block",
						children: "Email Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						defaultValue: user?.email,
						className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-4 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold mb-3 text-[14px]",
							children: "Security"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block",
								children: "New Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								placeholder: "••••••••",
								className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleSave,
									className: "bg-primary text-primary-foreground px-5 py-3 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm shadow-primary/20",
									children: "Save Changes"
								}), saved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[12px] font-bold text-green-600 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "check_circle",
										className: "text-[16px]"
									}), " Saved!"]
								})]
							})]
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { ProfilePage as component };
