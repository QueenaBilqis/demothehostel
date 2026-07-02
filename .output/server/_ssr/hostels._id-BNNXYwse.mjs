import { N as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getHostel } from "./hostels-CMsqgrCR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hostels._id-BNNXYwse.js
var $$splitErrorComponentImporter = () => import("./hostels._id-DVk80o6Q.mjs");
var $$splitNotFoundComponentImporter = () => import("./hostels._id-BOeIrxWS.mjs");
var $$splitComponentImporter = () => import("./hostels._id-D3BaFNFm.mjs");
var Route = createFileRoute("/hostels/$id")({
	head: ({ params }) => {
		const h = getHostel(params.id);
		return { meta: [
			{ title: h ? `${h.name} — TheHostel` : "Hostel — TheHostel" },
			{
				name: "description",
				content: h?.tagline ?? "Boutique capsule hostel."
			},
			{
				property: "og:title",
				content: h?.name ?? "TheHostel"
			},
			{
				property: "og:description",
				content: h?.tagline ?? "Boutique capsule hostel."
			},
			{
				property: "og:image",
				content: h?.hero ?? ""
			}
		] };
	},
	loader: ({ params }) => {
		const h = getHostel(params.id);
		if (!h) throw notFound();
		return h;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
