import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { _ as useNavigate, g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as Route } from "./register-D3l43Xhu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-DR4f8M3d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Register() {
	const { login, user } = useAuth();
	const navigate = useNavigate();
	const router = useRouter();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const redirect = Route.useSearch().redirect || "/";
	if (user) {
		navigate({ to: redirect });
		return null;
	}
	const handleRegister = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}
		login({
			id: "user-" + Math.random().toString(36).substr(2, 9),
			name,
			email,
			phone,
			role: "customer"
		});
		navigate({ to: redirect });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full flex flex-col px-6 pt-12 pb-6 bg-background relative overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => router.history.back(),
				className: "absolute top-4 left-4 w-10 h-10 grid place-items-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "arrow_back",
					className: "text-[20px]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[28px] font-bold text-foreground",
						children: "Create Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-[14px]",
						children: "Join TheHostel for a premium booking experience."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleRegister,
						className: "mt-6 flex flex-col gap-4",
						children: [
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-destructive/15 text-destructive px-4 py-3 rounded-xl text-[13px] font-medium flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "error",
									className: "text-[16px]"
								}), error]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide",
									children: "Full Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "person",
										className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: name,
										onChange: (e) => setName(e.target.value),
										className: "w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none focus:border-primary transition",
										placeholder: "John Doe"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "mail",
										className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none focus:border-primary transition",
										placeholder: "name@example.com"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide",
									children: "Phone Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "call",
										className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										required: true,
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										className: "w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none focus:border-primary transition",
										placeholder: "+62 812 3456 7890"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: showPassword ? "text" : "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "w-full bg-secondary border border-border rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary transition",
										placeholder: "••••••••"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide",
										children: "Confirm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPassword ? "text" : "password",
											required: true,
											value: confirmPassword,
											onChange: (e) => setConfirmPassword(e.target.value),
											className: "w-full bg-secondary border border-border rounded-xl pl-4 pr-10 py-3 text-[14px] outline-none focus:border-primary transition",
											placeholder: "••••••••"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword(!showPassword),
											className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												name: showPassword ? "visibility_off" : "visibility",
												className: "text-[18px]"
											})
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 mt-4 shadow-lg shadow-primary/20 active:scale-[0.98] transition",
								children: "Create Account"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 text-center text-[13px] text-muted-foreground",
				children: [
					"Already have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						search: { redirect },
						className: "text-primary font-semibold",
						children: "Sign In"
					})
				]
			})
		]
	}) });
}
//#endregion
export { Register as component };
