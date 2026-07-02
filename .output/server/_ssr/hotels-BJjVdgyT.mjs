import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as api } from "./api-BEiVPuR3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hotels-BJjVdgyT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HotelsSettings() {
	const { user } = useAuth();
	const hostelId = user?.role;
	const [hostel, setHostel] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (hostelId && hostelId !== "customer") api.getHostel(hostelId).then((data) => {
			if (data) setHostel(data);
		});
	}, [hostelId]);
	if (!hostel) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground p-5",
		children: "Loading..."
	});
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		await api.updateHostel(hostel.id, hostel);
		setSaving(false);
		alert("Saved successfully!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[20px] font-bold text-foreground",
				children: "Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleSave,
				disabled: saving,
				className: "bg-primary text-primary-foreground px-4 py-2.5 rounded-xl font-bold text-[13px] shadow-md shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-50",
				children: saving ? "Saving..." : "Save"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Hotel Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: hostel.name,
							onChange: (e) => setHostel({
								...hostel,
								name: e.target.value
							}),
							className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "+62 812 3456 7890",
							className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "contact@thehostel.com",
							className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "City / Country"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: `${hostel.city}, ${hostel.country}`,
							onChange: (e) => {
								const parts = e.target.value.split(",");
								setHostel({
									...hostel,
									city: parts[0]?.trim() || "",
									country: parts[1]?.trim() || ""
								});
							},
							className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Full Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Jalan Sunset Road No 10...",
							className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
					children: "Description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 4,
					value: hostel.about,
					onChange: (e) => setHostel({
						...hostel,
						about: e.target.value
					}),
					className: "w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Check-in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						defaultValue: "14:00",
						className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Check-out"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						defaultValue: "11:00",
						className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
					children: "Facilities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: hostel.facilities.join(", "),
					onChange: (e) => setHostel({
						...hostel,
						facilities: e.target.value.split(",").map((s) => s.trim())
					}),
					className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
					children: "Amenities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: hostel.amenities.join(", "),
					onChange: (e) => setHostel({
						...hostel,
						amenities: e.target.value.split(",").map((s) => s.trim())
					}),
					className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
					children: "Nearby Attractions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: hostel.attractions.join(", "),
					onChange: (e) => setHostel({
						...hostel,
						attractions: e.target.value.split(",").map((s) => s.trim())
					}),
					className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "House Rules"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						placeholder: "No smoking, quiet hours after 10PM...",
						className: "w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Cancellation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						placeholder: "Free cancellation up to 48 hours...",
						className: "w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-4 mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold mb-4 text-[14px]",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Maps Link"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "https://maps.google.com/...",
							className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
								children: "Lat"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "-8.6791",
								className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
								children: "Lng"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "115.1583",
								className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
							})] })]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { HotelsSettings as component };
