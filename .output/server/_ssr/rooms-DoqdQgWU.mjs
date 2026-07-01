import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as api } from "./api-BOdcFlCi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rooms-DoqdQgWU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RoomsManager() {
	const { user } = useAuth();
	const hostelId = user?.role;
	const [hostel, setHostel] = (0, import_react.useState)(null);
	const [editingRoom, setEditingRoom] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (hostelId && hostelId !== "customer") api.getHostel(hostelId).then((data) => {
			if (data) setHostel(data);
		});
	}, [hostelId]);
	const saveRoom = async () => {
		if (!hostel || !editingRoom) return;
		const isNew = !hostel.rooms.some((r) => r.id === editingRoom.id);
		let newRooms = [...hostel.rooms];
		if (isNew) newRooms.push(editingRoom);
		else newRooms = newRooms.map((r) => r.id === editingRoom.id ? editingRoom : r);
		const updated = {
			...hostel,
			rooms: newRooms
		};
		await api.updateHostel(hostel.id, updated);
		setHostel(updated);
		setEditingRoom(null);
	};
	const deleteRoom = async (id) => {
		if (!hostel) return;
		const updated = {
			...hostel,
			rooms: hostel.rooms.filter((r) => r.id !== id)
		};
		await api.updateHostel(hostel.id, updated);
		setHostel(updated);
	};
	if (!hostel) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-5",
		children: "Loading..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto",
		children: !editingRoom ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[20px] font-bold",
				children: "Rooms"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12px] text-muted-foreground",
				children: [hostel.rooms.length, " total"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setEditingRoom({
					id: `rm_${Date.now()}`,
					name: "",
					beds: "",
					price: 0,
					perks: []
				}),
				className: "flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm shadow-primary/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "add",
					className: "text-[18px]"
				}), "Add Room"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [hostel.rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-2xl p-4 shadow-sm relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pr-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-[15px] leading-tight",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: r.beds
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[14px] font-semibold text-primary mt-2",
							children: [
								"$",
								r.price,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-normal text-muted-foreground",
									children: "/night"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-4 right-4 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setEditingRoom(r),
						className: "w-8 h-8 rounded-full bg-secondary grid place-items-center text-foreground hover:bg-black/5 active:scale-95 transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "edit",
							className: "text-[16px]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => deleteRoom(r.id),
						className: "w-8 h-8 rounded-full bg-destructive/10 grid place-items-center text-destructive hover:bg-destructive/20 active:scale-95 transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "delete",
							className: "text-[16px]"
						})
					})]
				})]
			}, r.id)), hostel.rooms.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl",
				children: "No rooms added yet."
			})]
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-2xl p-5 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold mb-4 text-[18px]",
				children: editingRoom.id.startsWith("rm_") ? "Add New Room" : "Edit Room"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Room Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: editingRoom.name,
						onChange: (e) => setEditingRoom({
							...editingRoom,
							name: e.target.value
						}),
						className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Price ($)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: editingRoom.price,
							onChange: (e) => setEditingRoom({
								...editingRoom,
								price: Number(e.target.value)
							}),
							className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Weekend ($)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							placeholder: "e.g. 50",
							className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Capacity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							placeholder: "e.g. 2",
							className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Bed Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: editingRoom.beds,
							onChange: (e) => setEditingRoom({
								...editingRoom,
								beds: e.target.value
							}),
							className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Availability"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							placeholder: "Total rooms",
							className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
							children: "Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Available" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Booked" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Maintenance" })
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Amenities / Perks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: editingRoom.perks.join(", "),
						onChange: (e) => setEditingRoom({
							...editingRoom,
							perks: e.target.value.split(",").map((s) => s.trim())
						}),
						className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary",
						placeholder: "Free Wi-Fi, Locker, etc"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 2,
						className: "w-full bg-secondary rounded-xl px-3 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y",
						placeholder: "Room description..."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mt-4 pt-4 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setEditingRoom(null),
							className: "flex-1 py-3.5 rounded-xl border border-border font-bold text-[13px] hover:bg-secondary active:scale-[0.98] transition-all",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: saveRoom,
							className: "flex-1 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-[13px] active:scale-[0.98] transition-all shadow-sm shadow-primary/20",
							children: "Save Room"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { RoomsManager as component };
