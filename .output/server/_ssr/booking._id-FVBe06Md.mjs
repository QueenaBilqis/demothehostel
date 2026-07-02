import { A as redirect, N as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getHostel } from "./hostels-CMsqgrCR.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking._id-FVBe06Md.js
var $$splitErrorComponentImporter = () => import("./booking._id-BlGNK9EV.mjs");
var $$splitNotFoundComponentImporter = () => import("./booking._id-BEh_sKKI.mjs");
var $$splitComponentImporter = () => import("./booking._id-3L55qN1t.mjs");
var search = objectType({ room: stringType().optional() });
var Route = createFileRoute("/booking/$id")({
	head: () => ({ meta: [{ title: "Book — TheHostel" }] }),
	validateSearch: search,
	loader: ({ params }) => {
		const h = getHostel(params.id);
		if (!h) throw notFound();
		return h;
	},
	beforeLoad: ({ params }) => {
		if (typeof window === "undefined") return void 0;
		if (!window.localStorage.getItem("hostel.auth")) throw redirect({
			to: "/login",
			search: { redirect: `/booking/${params.id}` }
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
