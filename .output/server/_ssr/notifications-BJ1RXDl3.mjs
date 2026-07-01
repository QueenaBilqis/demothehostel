import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-BJ1RXDl3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminNotifications() {
	const [notifications, setNotifications] = (0, import_react.useState)([
		{
			id: "1",
			title: "System Update",
			message: "The booking system will undergo maintenance at 2 AM tonight.",
			date: (/* @__PURE__ */ new Date()).toISOString(),
			type: "warning"
		},
		{
			id: "2",
			title: "New Feature Available",
			message: "You can now manage hotel amenities directly from the settings page.",
			date: (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString(),
			type: "info"
		},
		{
			id: "3",
			title: "Payout Successful",
			message: "Your monthly revenue of $14,250 has been transferred to your account.",
			date: (/* @__PURE__ */ new Date(Date.now() - 1728e5)).toISOString(),
			type: "success"
		}
	]);
	const [showNew, setShowNew] = (0, import_react.useState)(false);
	const [newTitle, setNewTitle] = (0, import_react.useState)("");
	const [newMessage, setNewMessage] = (0, import_react.useState)("");
	const [newType, setNewType] = (0, import_react.useState)("info");
	const sendNotification = (e) => {
		e.preventDefault();
		if (!newTitle || !newMessage) return;
		setNotifications([{
			id: Date.now().toString(),
			title: newTitle,
			message: newMessage,
			date: (/* @__PURE__ */ new Date()).toISOString(),
			type: newType
		}, ...notifications]);
		setNewTitle("");
		setNewMessage("");
		setShowNew(false);
	};
	const deleteNotification = (id) => {
		setNotifications(notifications.filter((n) => n.id !== id));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] font-bold",
					children: "Alerts & Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowNew(!showNew),
					className: "flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm shadow-primary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: showNew ? "close" : "add_alert",
						className: "text-[18px]"
					}), showNew ? "Close" : "New Alert"]
				})]
			}),
			showNew && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: sendNotification,
				className: "bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-[15px]",
						children: "Send Push Notification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: newTitle,
						onChange: (e) => setNewTitle(e.target.value),
						placeholder: "e.g. Server Maintenance",
						className: "w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: newMessage,
						onChange: (e) => setNewMessage(e.target.value),
						placeholder: "Type your alert message here...",
						rows: 3,
						className: "w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide",
						children: "Alert Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: [
							"info",
							"warning",
							"success"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setNewType(t),
							className: `flex-1 py-2 rounded-xl text-[12px] font-bold capitalize transition-all ${newType === t ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" : "bg-secondary text-muted-foreground hover:text-foreground"}`,
							children: t
						}, t))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full py-3.5 mt-2 rounded-xl bg-primary text-primary-foreground font-bold text-[13px] active:scale-[0.98] transition-all shadow-sm shadow-primary/20",
						children: "Send Alert"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [notifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-2xl p-4 shadow-sm flex gap-3 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1",
							children: [
								n.type === "info" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "info",
									className: "text-[20px] text-blue-500"
								}),
								n.type === "warning" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "warning",
									className: "text-[20px] text-orange-500"
								}),
								n.type === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "check_circle",
									className: "text-[20px] text-green-500"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 pr-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-[14px] leading-tight",
									children: n.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-medium text-muted-foreground whitespace-nowrap ml-2",
									children: new Date(n.date).toLocaleDateString()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] text-muted-foreground leading-relaxed",
								children: n.message
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => deleteNotification(n.id),
							className: "absolute top-3 right-3 w-7 h-7 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive grid place-items-center transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "close",
								className: "text-[16px]"
							})
						})
					]
				}, n.id)), notifications.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl",
					children: "No notifications available."
				})]
			})
		]
	});
}
//#endregion
export { AdminNotifications as component };
