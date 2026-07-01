import { r as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { _ as useNavigate, g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as api } from "./api-BOdcFlCi.mjs";
import { t as Route } from "./login-DfU5UO5i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BALmqg0p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { login, user } = useAuth();
	const navigate = useNavigate();
	const router = useRouter();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const redirect = Route.useSearch().redirect || "/";
	if (user) {
		if (user.role !== "customer") navigate({ to: "/admin/dashboard" });
		else navigate({ to: redirect });
		return null;
	}
	const quickLogin = async (role) => {
		let e = "";
		let p = "";
		if (role === "customer") {
			e = "demo@example.com";
			p = "Demo123!";
		} else if (role === "bohemian") {
			e = "bohemian@thehostel.com";
			p = "Bohemian123";
		} else if (role === "atelier") {
			e = "atelier@thehostel.com";
			p = "Atelier123";
		} else if (role === "stellar") {
			e = "stellar@thehostel.com";
			p = "Stellar123";
		}
		setEmail(e);
		setPassword(p);
		try {
			const u = await api.login(e, p);
			login(u);
			if (u.role !== "customer") navigate({ to: "/admin/dashboard" });
			else navigate({ to: redirect });
		} catch (err) {}
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const u = await api.login(email, password);
			login(u);
			if (u.role !== "customer") navigate({ to: "/admin/dashboard" });
			else navigate({ to: redirect });
		} catch (err) {
			setError(err.message || "Invalid credentials");
		}
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
				className: "flex-1 mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[28px] font-bold text-foreground",
						children: "Welcome Back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-[14px]",
						children: "Sign in to continue your booking and view saved hostels."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleLogin,
						className: "mt-8 flex flex-col gap-4",
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
										className: "w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3.5 text-[14px] outline-none focus:border-primary transition",
										placeholder: "name@example.com"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-semibold text-muted-foreground uppercase tracking-wide",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											name: "lock",
											className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPassword ? "text" : "password",
											required: true,
											value: password,
											onChange: (e) => setPassword(e.target.value),
											className: "w-full bg-secondary border border-border rounded-xl pl-10 pr-10 py-3.5 text-[14px] outline-none focus:border-primary transition",
											placeholder: "••••••••"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword(!showPassword),
											className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												name: showPassword ? "visibility_off" : "visibility",
												className: "text-[18px]"
											})
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "rounded text-primary focus:ring-primary w-4 h-4"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[13px] text-muted-foreground",
										children: "Remember Me"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-primary text-[13px] font-semibold",
									children: "Forgot Password?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 mt-4 shadow-lg shadow-primary/20 active:scale-[0.98] transition",
								children: "Sign In"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] font-semibold text-muted-foreground uppercase text-center mb-4",
							children: "Quick Demo Access"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => quickLogin("customer"),
									type: "button",
									className: "bg-secondary text-foreground text-[12px] font-medium py-2 rounded-lg hover:bg-secondary/80 transition",
									children: "Demo Customer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => quickLogin("bohemian"),
									type: "button",
									className: "bg-primary/10 text-primary text-[12px] font-medium py-2 rounded-lg hover:bg-primary/20 transition",
									children: "Bohemian Admin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => quickLogin("atelier"),
									type: "button",
									className: "bg-primary/10 text-primary text-[12px] font-medium py-2 rounded-lg hover:bg-primary/20 transition",
									children: "Atelier Admin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => quickLogin("stellar"),
									type: "button",
									className: "bg-primary/10 text-primary text-[12px] font-medium py-2 rounded-lg hover:bg-primary/20 transition",
									children: "Stellar Admin"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 text-center text-[13px] text-muted-foreground",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						search: { redirect },
						className: "text-primary font-semibold",
						children: "Register"
					})
				]
			})
		]
	}) });
}
//#endregion
export { Login as component };
