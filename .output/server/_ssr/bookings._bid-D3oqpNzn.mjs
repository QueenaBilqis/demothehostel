import { A as redirect, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookings._bid-D3oqpNzn.js
var $$splitComponentImporter = () => import("./bookings._bid-DVfRRnro.mjs");
var Route = createFileRoute("/bookings/$bid")({
	head: () => ({ meta: [{ title: "Booking confirmed — TheHostel" }] }),
	beforeLoad: ({ params }) => {
		if (typeof window !== "undefined") {
			if (!window.localStorage.getItem("hostel.auth")) throw redirect({
				to: "/login",
				search: { redirect: `/bookings/${params.bid}` }
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
