import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as api } from "./api-BEiVPuR3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CL2KmcE4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryAdmin() {
	const { user } = useAuth();
	const hostelId = user?.role;
	const [hostel, setHostel] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (hostelId && hostelId !== "customer") api.getHostel(hostelId).then((h) => {
			if (h) setHostel(h);
		});
	}, [hostelId]);
	if (!hostel) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-4 text-center text-muted-foreground text-[14px]",
		children: "Loading gallery..."
	});
	const removePhoto = (index) => {
		const updatedGallery = [...hostel.gallery];
		updatedGallery.splice(index, 1);
		const updated = {
			...hostel,
			gallery: updatedGallery
		};
		api.updateHostel(hostel.id, updated).then(setHostel);
	};
	const addPhoto = () => {
		const url = prompt("Enter photo URL:");
		if (url) {
			const updated = {
				...hostel,
				gallery: [...hostel.gallery, url]
			};
			api.updateHostel(hostel.id, updated).then(setHostel);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center bg-card border border-border p-4 rounded-2xl shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[16px] font-bold",
				children: "Gallery Management"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12px] text-muted-foreground mt-0.5",
				children: [hostel.gallery.length, " photos uploaded"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: addPhoto,
				className: "w-10 h-10 bg-primary/10 text-primary rounded-full grid place-items-center active:scale-95 transition-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "add_a_photo",
					className: "text-[20px]"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3",
			children: hostel.gallery.map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary border border-border shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo,
					alt: "Hostel",
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => removePhoto(i),
					className: "absolute top-2 right-2 w-7 h-7 bg-black/60 backdrop-blur-md rounded-full text-white grid place-items-center active:scale-95 transition-transform",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "delete",
						className: "text-[14px]"
					})
				})]
			}, i))
		})]
	});
}
//#endregion
export { GalleryAdmin as component };
