import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { A as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$18 } from "./booking._id-FVBe06Md.mjs";
import { t as Route$19 } from "./bookings._bid-D3oqpNzn.mjs";
import { t as Route$20 } from "./hostels._id-BNNXYwse.mjs";
import { t as Route$21 } from "./login-Cxemm_fj.mjs";
import { t as Route$22 } from "./register-D3l43Xhu.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B3_T6pZO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DTKnXCmG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-4 bg-red-100 text-red-900 border border-red-300 rounded-lg text-left overflow-auto text-[10px] font-mono whitespace-pre-wrap max-h-[300px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
							error.name,
							": ",
							error.message
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						error.stack
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TheHostel — Boutique Capsule Hostels" },
			{
				name: "description",
				content: "Exclusive booking platform for three curated boutique capsule hostels in Singapore and Bali."
			},
			{
				property: "og:title",
				content: "TheHostel — Boutique Capsule Hostels"
			},
			{
				property: "og:description",
				content: "Book The Bohemian, Atelier, or Stellar Capsules — three boutique capsule hostels."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$15 = () => import("./profile-CMClovzh.mjs");
var Route$16 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — TheHostel" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./notifications-DgGFqU6Q.mjs");
var Route$15 = createFileRoute("/notifications")({
	head: () => ({ meta: [{ title: "Notifications — TheHostel" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./admin-DppBgHSI.mjs");
var Route$14 = createFileRoute("/admin")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			const stored = window.localStorage.getItem("hostel.auth");
			if (!stored) throw redirect({ to: "/login" });
			if (JSON.parse(stored).role === "customer") throw redirect({ to: "/" });
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./routes-C08SBwhv.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "TheHostel — Boutique Capsule Hostels" },
		{
			name: "description",
			content: "Book three curated boutique capsule hostels across Singapore and Bali."
		},
		{
			property: "og:title",
			content: "TheHostel — Boutique Capsule Hostels"
		},
		{
			property: "og:description",
			content: "Book three curated boutique capsule hostels across Singapore and Bali."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./hostels.index-C6warD_4.mjs");
var Route$12 = createFileRoute("/hostels/")({
	head: () => ({ meta: [{ title: "Hostels — TheHostel" }, {
		name: "description",
		content: "Browse our three boutique capsule hostels."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./bookings.index-gWIfw37H.mjs");
var Route$11 = createFileRoute("/bookings/")({
	head: () => ({ meta: [{ title: "My Bookings — TheHostel" }] }),
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!window.localStorage.getItem("hostel.auth")) throw redirect({
				to: "/login",
				search: { redirect: "/bookings" }
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var Route$10 = createFileRoute("/admin/")({ beforeLoad: () => {
	throw redirect({ to: "/admin/dashboard" });
} });
var $$splitComponentImporter$9 = () => import("./rooms-qBayzHCS.mjs");
var Route$9 = createFileRoute("/admin/rooms")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./reviews-DqJl1YVT.mjs");
var Route$8 = createFileRoute("/admin/reviews")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./profile-CdbK_Ky-.mjs");
var Route$7 = createFileRoute("/admin/profile")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./payments-D_JGkOHu.mjs");
var Route$6 = createFileRoute("/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./notifications-BJ1RXDl3.mjs");
var Route$5 = createFileRoute("/admin/notifications")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./hotels-BJjVdgyT.mjs");
var Route$4 = createFileRoute("/admin/hotels")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./gallery-CL2KmcE4.mjs");
var Route$3 = createFileRoute("/admin/gallery")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard-CuYiRsEp.mjs");
var Route$2 = createFileRoute("/admin/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./coupons-uj2kUa7G.mjs");
var Route$1 = createFileRoute("/admin/coupons")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./bookings-DMhLUDi7.mjs");
var Route = createFileRoute("/admin/bookings")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var RegisterRoute = Route$22.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$17
});
var ProfileRoute = Route$16.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$17
});
var NotificationsRoute = Route$15.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => Route$17
});
var LoginRoute = Route$21.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$17
});
var AdminRoute = Route$14.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$17
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var HostelsIndexRoute = Route$12.update({
	id: "/hostels/",
	path: "/hostels/",
	getParentRoute: () => Route$17
});
var BookingsIndexRoute = Route$11.update({
	id: "/bookings/",
	path: "/bookings/",
	getParentRoute: () => Route$17
});
var AdminIndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var HostelsIdRoute = Route$20.update({
	id: "/hostels/$id",
	path: "/hostels/$id",
	getParentRoute: () => Route$17
});
var BookingsBidRoute = Route$19.update({
	id: "/bookings/$bid",
	path: "/bookings/$bid",
	getParentRoute: () => Route$17
});
var BookingIdRoute = Route$18.update({
	id: "/booking/$id",
	path: "/booking/$id",
	getParentRoute: () => Route$17
});
var AdminRoomsRoute = Route$9.update({
	id: "/rooms",
	path: "/rooms",
	getParentRoute: () => AdminRoute
});
var AdminReviewsRoute = Route$8.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => AdminRoute
});
var AdminProfileRoute = Route$7.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AdminRoute
});
var AdminPaymentsRoute = Route$6.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AdminRoute
});
var AdminNotificationsRoute = Route$5.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AdminRoute
});
var AdminHotelsRoute = Route$4.update({
	id: "/hotels",
	path: "/hotels",
	getParentRoute: () => AdminRoute
});
var AdminGalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AdminRoute
});
var AdminDashboardRoute = Route$2.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AdminRoute
});
var AdminCouponsRoute = Route$1.update({
	id: "/coupons",
	path: "/coupons",
	getParentRoute: () => AdminRoute
});
var AdminRouteChildren = {
	AdminBookingsRoute: Route.update({
		id: "/bookings",
		path: "/bookings",
		getParentRoute: () => AdminRoute
	}),
	AdminCouponsRoute,
	AdminDashboardRoute,
	AdminGalleryRoute,
	AdminHotelsRoute,
	AdminNotificationsRoute,
	AdminPaymentsRoute,
	AdminProfileRoute,
	AdminReviewsRoute,
	AdminRoomsRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	LoginRoute,
	NotificationsRoute,
	ProfileRoute,
	RegisterRoute,
	BookingIdRoute,
	BookingsBidRoute,
	HostelsIdRoute,
	BookingsIndexRoute,
	HostelsIndexRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
