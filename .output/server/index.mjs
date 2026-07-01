globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/image/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-FxGeJ67YbtQD6ikzBWPxkcOxtfw\"",
		"mtime": "2026-06-30T05:53:13.531Z",
		"size": 6148,
		"path": "../public/image/.DS_Store"
	},
	"/assets/13c9052e5f42149b280313e110392521-jjop6bzN.webp": {
		"type": "image/webp",
		"etag": "\"256cc-+O5h97G9fgT76Yv6gH1Bc0p3ypA\"",
		"mtime": "2026-06-30T05:53:11.413Z",
		"size": 153292,
		"path": "../public/assets/13c9052e5f42149b280313e110392521-jjop6bzN.webp"
	},
	"/assets/215483619-CpKezec0.jpg": {
		"type": "image/jpeg",
		"etag": "\"8940-ixSv9RjxeTvFpldMRowITYK6Ofg\"",
		"mtime": "2026-06-30T05:53:11.414Z",
		"size": 35136,
		"path": "../public/assets/215483619-CpKezec0.jpg"
	},
	"/assets/215483620-BYx4dx_v.jpg": {
		"type": "image/jpeg",
		"etag": "\"b820-+H+eK8t0BsLnleEhx4zvViK6KrA\"",
		"mtime": "2026-06-30T05:53:11.414Z",
		"size": 47136,
		"path": "../public/assets/215483620-BYx4dx_v.jpg"
	},
	"/assets/215483622-CT_Hf9pI.jpg": {
		"type": "image/jpeg",
		"etag": "\"87bd-MdM6saPkQNpb45lWlGFOD0OEOEk\"",
		"mtime": "2026-06-30T05:53:11.415Z",
		"size": 34749,
		"path": "../public/assets/215483622-CT_Hf9pI.jpg"
	},
	"/assets/219477199-DgD2jlZe.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ea6b-J8UIOvfkpo66fuNrxeMm+s2VMr0\"",
		"mtime": "2026-06-30T05:53:11.416Z",
		"size": 125547,
		"path": "../public/assets/219477199-DgD2jlZe.jpg"
	},
	"/assets/220734263-Bu7BP2Fw.jpg": {
		"type": "image/jpeg",
		"etag": "\"15039-6Fj9Bt+Qb5Cg5agj9DNrc0pfKEQ\"",
		"mtime": "2026-06-30T05:53:11.418Z",
		"size": 86073,
		"path": "../public/assets/220734263-Bu7BP2Fw.jpg"
	},
	"/assets/223010948-Dl4LjSK-.jpg": {
		"type": "image/jpeg",
		"etag": "\"222a0-OedIm9wuS8JgMFnoYV89KMtP7AE\"",
		"mtime": "2026-06-30T05:53:11.418Z",
		"size": 139936,
		"path": "../public/assets/223010948-Dl4LjSK-.jpg"
	},
	"/assets/233562557-CG8DBv7N.jpg": {
		"type": "image/jpeg",
		"etag": "\"2251e-2oiVLkRp4so5U7AC4PFpXUHEwYg\"",
		"mtime": "2026-06-30T05:53:11.419Z",
		"size": 140574,
		"path": "../public/assets/233562557-CG8DBv7N.jpg"
	},
	"/assets/2629f297da0be08d5f88df332c69b72c-3Stkc_GR.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f05b-ArjrN2HivDB8a9TILUF0ggxDaiE\"",
		"mtime": "2026-06-30T05:53:11.419Z",
		"size": 192603,
		"path": "../public/assets/2629f297da0be08d5f88df332c69b72c-3Stkc_GR.jpg"
	},
	"/assets/358163463-CuXv1_he.jpg": {
		"type": "image/jpeg",
		"etag": "\"e3e7-VBDGG8nrsUReE1XWumC8+SldJrg\"",
		"mtime": "2026-06-30T05:53:11.419Z",
		"size": 58343,
		"path": "../public/assets/358163463-CuXv1_he.jpg"
	},
	"/assets/358163465-BSjJMphI.jpg": {
		"type": "image/jpeg",
		"etag": "\"1182f-hkKyY2mSc6OYIo2yIYRTASu+1DQ\"",
		"mtime": "2026-06-30T05:53:11.425Z",
		"size": 71727,
		"path": "../public/assets/358163465-BSjJMphI.jpg"
	},
	"/assets/359790753-DIW8EAuU.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c4c7-egebpHKo5VbeupM2tmmoTjywZwI\"",
		"mtime": "2026-06-30T05:53:11.425Z",
		"size": 115911,
		"path": "../public/assets/359790753-DIW8EAuU.jpg"
	},
	"/assets/359790755-CKssNxjw.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a27c-mOot96rYF0uRvEVVp9mu8UG5L5c\"",
		"mtime": "2026-06-30T05:53:11.425Z",
		"size": 107132,
		"path": "../public/assets/359790755-CKssNxjw.jpg"
	},
	"/assets/359791212-CduDA76b.jpg": {
		"type": "image/jpeg",
		"etag": "\"17240-NF1n+z/jlSkoSyMD4/tvVgsAraY\"",
		"mtime": "2026-06-30T05:53:11.427Z",
		"size": 94784,
		"path": "../public/assets/359791212-CduDA76b.jpg"
	},
	"/assets/359791327-YUh55B7g.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e67b-LZqhNvl27bV1XkD+WFa9PI1PgoE\"",
		"mtime": "2026-06-30T05:53:11.427Z",
		"size": 124539,
		"path": "../public/assets/359791327-YUh55B7g.jpg"
	},
	"/assets/359791419-B64NSuS4.jpg": {
		"type": "image/jpeg",
		"etag": "\"138df-AKyO9xXKnPD/YkhUDzCmp1FU9sE\"",
		"mtime": "2026-06-30T05:53:11.428Z",
		"size": 80095,
		"path": "../public/assets/359791419-B64NSuS4.jpg"
	},
	"/assets/502a515fc0cad6ac1088c50c895eafea-C6TqmOgO.webp": {
		"type": "image/webp",
		"etag": "\"1b6ac-DEr0Fxq1+n8WK9LTwJji1IKFAqo\"",
		"mtime": "2026-06-30T05:53:11.428Z",
		"size": 112300,
		"path": "../public/assets/502a515fc0cad6ac1088c50c895eafea-C6TqmOgO.webp"
	},
	"/assets/573129492-Cw8nWfr8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e5c8-YHCKDQaoAFAoxku08CcwCHbn/dI\"",
		"mtime": "2026-06-30T05:53:11.428Z",
		"size": 124360,
		"path": "../public/assets/573129492-Cw8nWfr8.jpg"
	},
	"/assets/573129497-4JrjbJ7c.jpg": {
		"type": "image/jpeg",
		"etag": "\"25dab-sw1NG++pMbeP014Wq22ndht3nsw\"",
		"mtime": "2026-06-30T05:53:11.429Z",
		"size": 155051,
		"path": "../public/assets/573129497-4JrjbJ7c.jpg"
	},
	"/assets/6e4f22763ce86335d5670af807aa7bac-BzB2ojiQ.webp": {
		"type": "image/webp",
		"etag": "\"25aa0-6hvdHbZodqpDJNKJyGnZFkCM3mg\"",
		"mtime": "2026-06-30T05:53:11.429Z",
		"size": 154272,
		"path": "../public/assets/6e4f22763ce86335d5670af807aa7bac-BzB2ojiQ.webp"
	},
	"/assets/6fd4af079ceaaed5da29b5b8f8eda980-DkV1nJGs.webp": {
		"type": "image/webp",
		"etag": "\"bf30-YeI+Ivk9xLGs2IJQ1MdXDkeVyio\"",
		"mtime": "2026-06-30T05:53:11.430Z",
		"size": 48944,
		"path": "../public/assets/6fd4af079ceaaed5da29b5b8f8eda980-DkV1nJGs.webp"
	},
	"/assets/788404_15011307250024434545 (1)-By6K2MCE.webp": {
		"type": "image/webp",
		"etag": "\"a4f2-8QKrggKas91aApqSQc8lPcRmJ2Y\"",
		"mtime": "2026-06-30T05:53:11.430Z",
		"size": 42226,
		"path": "../public/assets/788404_15011307250024434545 (1)-By6K2MCE.webp"
	},
	"/assets/788404_15011308060024434956-CVdsiMwu.webp": {
		"type": "image/webp",
		"etag": "\"a3f0-c66zGZP+8XUWAC++XkiCJ1alk7s\"",
		"mtime": "2026-06-30T05:53:11.430Z",
		"size": 41968,
		"path": "../public/assets/788404_15011308060024434956-CVdsiMwu.webp"
	},
	"/assets/788404_15011311180024437613-Bv1DXg4R.webp": {
		"type": "image/webp",
		"etag": "\"16f54-uKHor7H/QEq+hY02+knHSNUR2aM\"",
		"mtime": "2026-06-30T05:53:11.431Z",
		"size": 94036,
		"path": "../public/assets/788404_15011311180024437613-Bv1DXg4R.webp"
	},
	"/assets/788404_15011311440024438343-Db7e0NiQ.webp": {
		"type": "image/webp",
		"etag": "\"8cb8-m9Qa7s8okVsvMKP3CwuK3h9DuoU\"",
		"mtime": "2026-06-30T05:53:11.431Z",
		"size": 36024,
		"path": "../public/assets/788404_15011311440024438343-Db7e0NiQ.webp"
	},
	"/assets/788404_15011311540024438551-DgbW6wIR.webp": {
		"type": "image/webp",
		"etag": "\"1da48-McqwVg1RialyD6sXXRIQYe9TmAY\"",
		"mtime": "2026-06-30T05:53:11.432Z",
		"size": 121416,
		"path": "../public/assets/788404_15011311540024438551-DgbW6wIR.webp"
	},
	"/assets/788404_15011609190024638758-BxacUEHu.webp": {
		"type": "image/webp",
		"etag": "\"b6de-MAjYGYt46c6gmoh+JSU5/hE4kVI\"",
		"mtime": "2026-06-30T05:53:11.432Z",
		"size": 46814,
		"path": "../public/assets/788404_15011609190024638758-BxacUEHu.webp"
	},
	"/assets/80285372-Bz16NvN0.jpg": {
		"type": "image/jpeg",
		"etag": "\"d963-DIbXdZSBcG8nQObav4G+/VqE9v8\"",
		"mtime": "2026-06-30T05:53:11.432Z",
		"size": 55651,
		"path": "../public/assets/80285372-Bz16NvN0.jpg"
	},
	"/assets/8058d8aa466353900d40b6a94e8ba42e-BGQh5_B0.webp": {
		"type": "image/webp",
		"etag": "\"15a32-tZ50fHRsLjfNkxMiFLLJHCasvzY\"",
		"mtime": "2026-06-30T05:53:11.433Z",
		"size": 88626,
		"path": "../public/assets/8058d8aa466353900d40b6a94e8ba42e-BGQh5_B0.webp"
	},
	"/assets/83893001fc60e34320d91133d60f366b-CQhGzWmV.webp": {
		"type": "image/webp",
		"etag": "\"1aac4-xgO9BUqAfRaZT5cnxcp6sWpFmZE\"",
		"mtime": "2026-06-30T05:53:11.433Z",
		"size": 109252,
		"path": "../public/assets/83893001fc60e34320d91133d60f366b-CQhGzWmV.webp"
	},
	"/assets/86c15bb8634e11dc132094602c6f6b7c-CRCh8aBT.webp": {
		"type": "image/webp",
		"etag": "\"24420-rfubwQ3dpS5oAH0Tp7lBNEvFoVc\"",
		"mtime": "2026-06-30T05:53:11.433Z",
		"size": 148512,
		"path": "../public/assets/86c15bb8634e11dc132094602c6f6b7c-CRCh8aBT.webp"
	},
	"/assets/901901505bf56aac8062cc2edc64f817-ng1SqzgJ.webp": {
		"type": "image/webp",
		"etag": "\"15f36-ahCj4slKXi0yNQUYGTIcx6bB+U8\"",
		"mtime": "2026-06-30T05:53:11.436Z",
		"size": 89910,
		"path": "../public/assets/901901505bf56aac8062cc2edc64f817-ng1SqzgJ.webp"
	},
	"/assets/9282-De2jFszd.jpg": {
		"type": "image/jpeg",
		"etag": "\"15a8a-HtexckHQ+UGOnewjvrQdvXbVwQA\"",
		"mtime": "2026-06-30T05:53:11.438Z",
		"size": 88714,
		"path": "../public/assets/9282-De2jFszd.jpg"
	},
	"/assets/HostelCard-C-C3oJFS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a75-Lz6ORhHKgvIk/T+f9806rOcoS58\"",
		"mtime": "2026-06-30T05:53:11.394Z",
		"size": 2677,
		"path": "../public/assets/HostelCard-C-C3oJFS.js"
	},
	"/assets/MobileFrame-BlU2WWiD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b3-zbKZw4Mr6JK2QENVtlf4SXdOUUU\"",
		"mtime": "2026-06-30T05:53:11.394Z",
		"size": 1459,
		"path": "../public/assets/MobileFrame-BlU2WWiD.js"
	},
	"/assets/admin-BhQK9G1k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1042-kX8JCk2Pcvu+LOntW52NuqVriMw\"",
		"mtime": "2026-06-30T05:53:11.394Z",
		"size": 4162,
		"path": "../public/assets/admin-BhQK9G1k.js"
	},
	"/assets/af4f7435af9a8c3807243856a3a24045-QYKODf0s.webp": {
		"type": "image/webp",
		"etag": "\"1074e-RAH6zdJ6X3o4piDNFiquGMFxeqg\"",
		"mtime": "2026-06-30T05:53:11.442Z",
		"size": 67406,
		"path": "../public/assets/af4f7435af9a8c3807243856a3a24045-QYKODf0s.webp"
	},
	"/assets/api-E1GmP8A1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1e-PtmgMmvlE2y2BNzW74z9Ays8XIc\"",
		"mtime": "2026-06-30T05:53:11.395Z",
		"size": 2846,
		"path": "../public/assets/api-E1GmP8A1.js"
	},
	"/assets/auth-B-Kf-ZSF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22f-CVGMAOGC+Lq6SeOKzdsdcnhUGoo\"",
		"mtime": "2026-06-30T05:53:11.395Z",
		"size": 559,
		"path": "../public/assets/auth-B-Kf-ZSF.js"
	},
	"/assets/booking._id-B5qLK7W3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-5u+pTLe9gG5EG/ss3S44Lydw5+w\"",
		"mtime": "2026-06-30T05:53:11.395Z",
		"size": 240,
		"path": "../public/assets/booking._id-B5qLK7W3.js"
	},
	"/assets/booking._id-B7aVMWcM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10a-yTBj1H0ThsUrkXxIslSjCLM5caQ\"",
		"mtime": "2026-06-30T05:53:11.396Z",
		"size": 266,
		"path": "../public/assets/booking._id-B7aVMWcM.js"
	},
	"/assets/booking._id-CHRyv--t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27a5-MDLtnFjO/SRvB6pxTJoYTGTal/s\"",
		"mtime": "2026-06-30T05:53:11.396Z",
		"size": 10149,
		"path": "../public/assets/booking._id-CHRyv--t.js"
	},
	"/assets/bookings-C66s8hym.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d81-ij7+A9OjiHh3qSIcMYE8AYqGhfU\"",
		"mtime": "2026-06-30T05:53:11.397Z",
		"size": 3457,
		"path": "../public/assets/bookings-C66s8hym.js"
	},
	"/assets/bookings._bid-BlX3UBNa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3a-TAmBelCjNTYXWm/ABA7Gdvifjao\"",
		"mtime": "2026-06-30T05:53:11.397Z",
		"size": 3642,
		"path": "../public/assets/bookings._bid-BlX3UBNa.js"
	},
	"/assets/bookings.index-HtU3cYSH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a75-K4kyUts3bglEQiYYXnhfO2PCIYY\"",
		"mtime": "2026-06-30T05:53:11.397Z",
		"size": 2677,
		"path": "../public/assets/bookings.index-HtU3cYSH.js"
	},
	"/assets/chunk-Bh1tDfsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-RWMfWL++Hyx/oSoFmTJgBJkEveY\"",
		"mtime": "2026-06-30T05:53:11.398Z",
		"size": 567,
		"path": "../public/assets/chunk-Bh1tDfsg.js"
	},
	"/assets/coupons-axiLmtrM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d10-gQAySItgO0d0iFovtSz6O+rhysA\"",
		"mtime": "2026-06-30T05:53:11.398Z",
		"size": 3344,
		"path": "../public/assets/coupons-axiLmtrM.js"
	},
	"/assets/dashboard-DcNYIDDM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1509-TB54bNLjvVCDm/ab1K10UvDC2AQ\"",
		"mtime": "2026-06-30T05:53:11.399Z",
		"size": 5385,
		"path": "../public/assets/dashboard-DcNYIDDM.js"
	},
	"/assets/Stellar-Ca8nD2E5.jpg": {
		"type": "image/jpeg",
		"etag": "\"236e3-juGooAhgE8Hn17SHcPQLck0i4zg\"",
		"mtime": "2026-06-30T05:53:11.439Z",
		"size": 145123,
		"path": "../public/assets/Stellar-Ca8nD2E5.jpg"
	},
	"/assets/f9f32e2151f391ae7e07550c51ff4519-RoGHmG2K.webp": {
		"type": "image/webp",
		"etag": "\"2a030-7wPO9hOpTQJAs1ZC/GT4Y7mHs1U\"",
		"mtime": "2026-06-30T05:53:11.444Z",
		"size": 172080,
		"path": "../public/assets/f9f32e2151f391ae7e07550c51ff4519-RoGHmG2K.webp"
	},
	"/assets/gallery-C0Fs2l2_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7dd-6PS6y99T85QittPCRdRlhOh+69s\"",
		"mtime": "2026-06-30T05:53:11.399Z",
		"size": 2013,
		"path": "../public/assets/gallery-C0Fs2l2_.js"
	},
	"/assets/hostels._id-DKnDkrrd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-mserl8f7LFo0Ww1bOTb+G7Nvd2E\"",
		"mtime": "2026-06-30T05:53:11.399Z",
		"size": 396,
		"path": "../public/assets/hostels._id-DKnDkrrd.js"
	},
	"/assets/hostels._id-bzWHDlu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a3e-LCJgCW1gPmXqK/dW0ivKefqUETQ\"",
		"mtime": "2026-06-30T05:53:11.400Z",
		"size": 31294,
		"path": "../public/assets/hostels._id-bzWHDlu7.js"
	},
	"/assets/hostels._id-r55k_TyZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5-WZr8Jbz4pvZRb3stikyBc07hRHg\"",
		"mtime": "2026-06-30T05:53:11.400Z",
		"size": 421,
		"path": "../public/assets/hostels._id-r55k_TyZ.js"
	},
	"/assets/hostels.index-DQ2oONJ_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"652-j4lwGB9oMuqskbPzZyyxiw4qbVg\"",
		"mtime": "2026-06-30T05:53:11.401Z",
		"size": 1618,
		"path": "../public/assets/hostels.index-DQ2oONJ_.js"
	},
	"/assets/hotels-CDQPAY89.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1a-VMnhlz505pGLj9AAH43TLGj5Ckk\"",
		"mtime": "2026-06-30T05:53:11.401Z",
		"size": 7706,
		"path": "../public/assets/hotels-CDQPAY89.js"
	},
	"/assets/jsx-runtime-BpRO-UL9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a8-XeY1M6u9FKmPK0z3ymubmRyMlts\"",
		"mtime": "2026-06-30T05:53:11.401Z",
		"size": 424,
		"path": "../public/assets/jsx-runtime-BpRO-UL9.js"
	},
	"/assets/leaflet-src-CPIo3hsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24549-D53YuAkc5mO5XFNty82GQ2bGTfc\"",
		"mtime": "2026-06-30T05:53:11.402Z",
		"size": 148809,
		"path": "../public/assets/leaflet-src-CPIo3hsg.js"
	},
	"/assets/lib-BuUHWbY2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b75-prVVrMhnySpF+YgJiHZ1rcwExYg\"",
		"mtime": "2026-06-30T05:53:11.406Z",
		"size": 11125,
		"path": "../public/assets/lib-BuUHWbY2.js"
	},
	"/assets/login-TXkVn0rO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1585-Fxr6vYBQQmePJ5gEAAFzEV+towI\"",
		"mtime": "2026-06-30T05:53:11.407Z",
		"size": 5509,
		"path": "../public/assets/login-TXkVn0rO.js"
	},
	"/assets/link-BkVOzswP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d34-tIF+e25qVdozbdk1TiWlcyESEjc\"",
		"mtime": "2026-06-30T05:53:11.407Z",
		"size": 23860,
		"path": "../public/assets/link-BkVOzswP.js"
	},
	"/assets/notifications-CcI5gQMn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1327-m05HiDAUDRP4fmGN3chyXQerAhc\"",
		"mtime": "2026-06-30T05:53:11.408Z",
		"size": 4903,
		"path": "../public/assets/notifications-CcI5gQMn.js"
	},
	"/assets/notifications-DOsoHh8M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74d-w5Gc3zVRItCO7PFQULsJQNMstPY\"",
		"mtime": "2026-06-30T05:53:11.408Z",
		"size": 1869,
		"path": "../public/assets/notifications-DOsoHh8M.js"
	},
	"/assets/payments-CfBMzUXx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"783-9oiQWhIiVbTPwtN5GDmc79jsR/0\"",
		"mtime": "2026-06-30T05:53:11.408Z",
		"size": 1923,
		"path": "../public/assets/payments-CfBMzUXx.js"
	},
	"/assets/profile-B0aHTHfG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b83-JEClt7pJESOw2Z7IzhApBq0Oxys\"",
		"mtime": "2026-06-30T05:53:11.409Z",
		"size": 2947,
		"path": "../public/assets/profile-B0aHTHfG.js"
	},
	"/assets/react-LGmhhON4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d61-gh0A0QpgygmVqovnfpnje/okFcc\"",
		"mtime": "2026-06-30T05:53:11.410Z",
		"size": 7521,
		"path": "../public/assets/react-LGmhhON4.js"
	},
	"/assets/react-dom-DeXqlxC-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df0-ABSttz+xIH4F45tD783lfeYbWO8\"",
		"mtime": "2026-06-30T05:53:11.411Z",
		"size": 3568,
		"path": "../public/assets/react-dom-DeXqlxC-.js"
	},
	"/assets/redirect-DnLf-3Zd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-OKGUrSof3kF11Yz1L80m8oAVyB4\"",
		"mtime": "2026-06-30T05:53:11.411Z",
		"size": 644,
		"path": "../public/assets/redirect-DnLf-3Zd.js"
	},
	"/assets/register-CwiG7pa8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"147d-NoTlFimIz3JH4YFk85Sb+w4eH+s\"",
		"mtime": "2026-06-30T05:53:11.411Z",
		"size": 5245,
		"path": "../public/assets/register-CwiG7pa8.js"
	},
	"/assets/index-CWW9OalN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d727-iOGLBl7xsjf8u1LbauryoxN6Rho\"",
		"mtime": "2026-06-30T05:53:11.393Z",
		"size": 382759,
		"path": "../public/assets/index-CWW9OalN.js"
	},
	"/assets/profile-C0_-NgnN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c6d-hMFVEzgRtG2vM+nefG+Yolzjm2E\"",
		"mtime": "2026-06-30T05:53:11.410Z",
		"size": 11373,
		"path": "../public/assets/profile-C0_-NgnN.js"
	},
	"/assets/de148bf2cc0387397b8587136cb628cf-TNlj7IP8.webp": {
		"type": "image/webp",
		"etag": "\"10220-QaQBdj5KKpGyYCLzhAY8SsGBFg0\"",
		"mtime": "2026-06-30T05:53:11.443Z",
		"size": 66080,
		"path": "../public/assets/de148bf2cc0387397b8587136cb628cf-TNlj7IP8.webp"
	},
	"/assets/f8d0b105550c7aed8b4865185165693f-BBZ_jP9W.webp": {
		"type": "image/webp",
		"etag": "\"f2d8-gTvOo1N7pysWcm5cYxLPhL1+4NQ\"",
		"mtime": "2026-06-30T05:53:11.443Z",
		"size": 62168,
		"path": "../public/assets/f8d0b105550c7aed8b4865185165693f-BBZ_jP9W.webp"
	},
	"/assets/fd74af49b542735b755312205ef9fa36-Czt4gnxk.webp": {
		"type": "image/webp",
		"etag": "\"1a9d8-UyZCi3FaH9sRcoojsqchMkCksbs\"",
		"mtime": "2026-06-30T05:53:11.446Z",
		"size": 109016,
		"path": "../public/assets/fd74af49b542735b755312205ef9fa36-Czt4gnxk.webp"
	},
	"/assets/reviews-BFG5Zmen.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa1-Mxe8nQJTtaDPpjgmc9ec3gX+AgA\"",
		"mtime": "2026-06-30T05:53:11.412Z",
		"size": 2721,
		"path": "../public/assets/reviews-BFG5Zmen.js"
	},
	"/assets/rooms-C4ahnrr3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ca8-OG3YVRBVqfqYYIJOm6wwS7GzoNc\"",
		"mtime": "2026-06-30T05:53:11.412Z",
		"size": 7336,
		"path": "../public/assets/rooms-C4ahnrr3.js"
	},
	"/assets/routes-BD_4fhaM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e9-jhdE3+AC96xdrcagF0FpZTbLOT0\"",
		"mtime": "2026-06-30T05:53:11.412Z",
		"size": 5097,
		"path": "../public/assets/routes-BD_4fhaM.js"
	},
	"/assets/store-2bETMjUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"340-ulC8vGqmn7K6vmKVyWasVN83Msc\"",
		"mtime": "2026-06-30T05:53:11.413Z",
		"size": 832,
		"path": "../public/assets/store-2bETMjUi.js"
	},
	"/assets/styles-CrfjfAPu.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"161bf-1ukBihqy/n6DlhD3CFORPTeDNHo\"",
		"mtime": "2026-06-30T05:53:11.447Z",
		"size": 90559,
		"path": "../public/assets/styles-CrfjfAPu.css"
	},
	"/image/Atellier/13c9052e5f42149b280313e110392521.webp": {
		"type": "image/webp",
		"etag": "\"256cc-+O5h97G9fgT76Yv6gH1Bc0p3ypA\"",
		"mtime": "2026-06-30T05:53:13.530Z",
		"size": 153292,
		"path": "../public/image/Atellier/13c9052e5f42149b280313e110392521.webp"
	},
	"/image/Atellier/2629f297da0be08d5f88df332c69b72c.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f05b-ArjrN2HivDB8a9TILUF0ggxDaiE\"",
		"mtime": "2026-06-30T05:53:13.547Z",
		"size": 192603,
		"path": "../public/image/Atellier/2629f297da0be08d5f88df332c69b72c.jpg"
	},
	"/image/Atellier/358163463.jpg": {
		"type": "image/jpeg",
		"etag": "\"e3e7-VBDGG8nrsUReE1XWumC8+SldJrg\"",
		"mtime": "2026-06-30T05:53:13.544Z",
		"size": 58343,
		"path": "../public/image/Atellier/358163463.jpg"
	},
	"/image/Atellier/359790753.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c4c7-egebpHKo5VbeupM2tmmoTjywZwI\"",
		"mtime": "2026-06-30T05:53:13.545Z",
		"size": 115911,
		"path": "../public/image/Atellier/359790753.jpg"
	},
	"/image/Atellier/359790755.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a27c-mOot96rYF0uRvEVVp9mu8UG5L5c\"",
		"mtime": "2026-06-30T05:53:13.577Z",
		"size": 107132,
		"path": "../public/image/Atellier/359790755.jpg"
	},
	"/image/Atellier/358163465.jpg": {
		"type": "image/jpeg",
		"etag": "\"1182f-hkKyY2mSc6OYIo2yIYRTASu+1DQ\"",
		"mtime": "2026-06-30T05:53:13.548Z",
		"size": 71727,
		"path": "../public/image/Atellier/358163465.jpg"
	},
	"/image/Atellier/359791327.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e67b-LZqhNvl27bV1XkD+WFa9PI1PgoE\"",
		"mtime": "2026-06-30T05:53:13.549Z",
		"size": 124539,
		"path": "../public/image/Atellier/359791327.jpg"
	},
	"/image/Atellier/359791419.jpg": {
		"type": "image/jpeg",
		"etag": "\"138df-AKyO9xXKnPD/YkhUDzCmp1FU9sE\"",
		"mtime": "2026-06-30T05:53:13.569Z",
		"size": 80095,
		"path": "../public/image/Atellier/359791419.jpg"
	},
	"/image/Atellier/359791212.jpg": {
		"type": "image/jpeg",
		"etag": "\"17240-NF1n+z/jlSkoSyMD4/tvVgsAraY\"",
		"mtime": "2026-06-30T05:53:13.548Z",
		"size": 94784,
		"path": "../public/image/Atellier/359791212.jpg"
	},
	"/image/Atellier/502a515fc0cad6ac1088c50c895eafea.webp": {
		"type": "image/webp",
		"etag": "\"1b6ac-DEr0Fxq1+n8WK9LTwJji1IKFAqo\"",
		"mtime": "2026-06-30T05:53:13.565Z",
		"size": 112300,
		"path": "../public/image/Atellier/502a515fc0cad6ac1088c50c895eafea.webp"
	},
	"/image/Atellier/6fd4af079ceaaed5da29b5b8f8eda980.webp": {
		"type": "image/webp",
		"etag": "\"bf30-YeI+Ivk9xLGs2IJQ1MdXDkeVyio\"",
		"mtime": "2026-06-30T05:53:13.576Z",
		"size": 48944,
		"path": "../public/image/Atellier/6fd4af079ceaaed5da29b5b8f8eda980.webp"
	},
	"/image/Atellier/6e4f22763ce86335d5670af807aa7bac.webp": {
		"type": "image/webp",
		"etag": "\"25aa0-6hvdHbZodqpDJNKJyGnZFkCM3mg\"",
		"mtime": "2026-06-30T05:53:13.579Z",
		"size": 154272,
		"path": "../public/image/Atellier/6e4f22763ce86335d5670af807aa7bac.webp"
	},
	"/image/Atellier/83893001fc60e34320d91133d60f366b.webp": {
		"type": "image/webp",
		"etag": "\"1aac4-xgO9BUqAfRaZT5cnxcp6sWpFmZE\"",
		"mtime": "2026-06-30T05:53:13.576Z",
		"size": 109252,
		"path": "../public/image/Atellier/83893001fc60e34320d91133d60f366b.webp"
	},
	"/image/Atellier/86c15bb8634e11dc132094602c6f6b7c.webp": {
		"type": "image/webp",
		"etag": "\"24420-rfubwQ3dpS5oAH0Tp7lBNEvFoVc\"",
		"mtime": "2026-06-30T05:53:13.578Z",
		"size": 148512,
		"path": "../public/image/Atellier/86c15bb8634e11dc132094602c6f6b7c.webp"
	},
	"/image/Atellier/af4f7435af9a8c3807243856a3a24045.webp": {
		"type": "image/webp",
		"etag": "\"1074e-RAH6zdJ6X3o4piDNFiquGMFxeqg\"",
		"mtime": "2026-06-30T05:53:13.582Z",
		"size": 67406,
		"path": "../public/image/Atellier/af4f7435af9a8c3807243856a3a24045.webp"
	},
	"/image/Atellier/901901505bf56aac8062cc2edc64f817.webp": {
		"type": "image/webp",
		"etag": "\"15f36-ahCj4slKXi0yNQUYGTIcx6bB+U8\"",
		"mtime": "2026-06-30T05:53:13.580Z",
		"size": 89910,
		"path": "../public/image/Atellier/901901505bf56aac8062cc2edc64f817.webp"
	},
	"/image/Atellier/f8d0b105550c7aed8b4865185165693f.webp": {
		"type": "image/webp",
		"etag": "\"f2d8-gTvOo1N7pysWcm5cYxLPhL1+4NQ\"",
		"mtime": "2026-06-30T05:53:13.580Z",
		"size": 62168,
		"path": "../public/image/Atellier/f8d0b105550c7aed8b4865185165693f.webp"
	},
	"/image/Atellier/f9f32e2151f391ae7e07550c51ff4519.webp": {
		"type": "image/webp",
		"etag": "\"2a030-7wPO9hOpTQJAs1ZC/GT4Y7mHs1U\"",
		"mtime": "2026-06-30T05:53:13.580Z",
		"size": 172080,
		"path": "../public/image/Atellier/f9f32e2151f391ae7e07550c51ff4519.webp"
	},
	"/image/Atellier/fd74af49b542735b755312205ef9fa36.webp": {
		"type": "image/webp",
		"etag": "\"1a9d8-UyZCi3FaH9sRcoojsqchMkCksbs\"",
		"mtime": "2026-06-30T05:53:13.584Z",
		"size": 109016,
		"path": "../public/image/Atellier/fd74af49b542735b755312205ef9fa36.webp"
	},
	"/image/Stellar/215483619.jpg": {
		"type": "image/jpeg",
		"etag": "\"8940-ixSv9RjxeTvFpldMRowITYK6Ofg\"",
		"mtime": "2026-06-30T05:53:13.601Z",
		"size": 35136,
		"path": "../public/image/Stellar/215483619.jpg"
	},
	"/image/Stellar/215483620.jpg": {
		"type": "image/jpeg",
		"etag": "\"b820-+H+eK8t0BsLnleEhx4zvViK6KrA\"",
		"mtime": "2026-06-30T05:53:13.530Z",
		"size": 47136,
		"path": "../public/image/Stellar/215483620.jpg"
	},
	"/image/Stellar/215483622.jpg": {
		"type": "image/jpeg",
		"etag": "\"87bd-MdM6saPkQNpb45lWlGFOD0OEOEk\"",
		"mtime": "2026-06-30T05:53:13.532Z",
		"size": 34749,
		"path": "../public/image/Stellar/215483622.jpg"
	},
	"/image/Stellar/219477199.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ea6b-J8UIOvfkpo66fuNrxeMm+s2VMr0\"",
		"mtime": "2026-06-30T05:53:13.534Z",
		"size": 125547,
		"path": "../public/image/Stellar/219477199.jpg"
	},
	"/image/Stellar/220734263.jpg": {
		"type": "image/jpeg",
		"etag": "\"15039-6Fj9Bt+Qb5Cg5agj9DNrc0pfKEQ\"",
		"mtime": "2026-06-30T05:53:13.532Z",
		"size": 86073,
		"path": "../public/image/Stellar/220734263.jpg"
	},
	"/image/Stellar/223010948.jpg": {
		"type": "image/jpeg",
		"etag": "\"222a0-OedIm9wuS8JgMFnoYV89KMtP7AE\"",
		"mtime": "2026-06-30T05:53:13.533Z",
		"size": 139936,
		"path": "../public/image/Stellar/223010948.jpg"
	},
	"/image/Stellar/233562557.jpg": {
		"type": "image/jpeg",
		"etag": "\"2251e-2oiVLkRp4so5U7AC4PFpXUHEwYg\"",
		"mtime": "2026-06-30T05:53:13.535Z",
		"size": 140574,
		"path": "../public/image/Stellar/233562557.jpg"
	},
	"/image/Stellar/573129492.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e5c8-YHCKDQaoAFAoxku08CcwCHbn/dI\"",
		"mtime": "2026-06-30T05:53:13.533Z",
		"size": 124360,
		"path": "../public/image/Stellar/573129492.jpg"
	},
	"/image/Stellar/9282.jpg": {
		"type": "image/jpeg",
		"etag": "\"15a8a-HtexckHQ+UGOnewjvrQdvXbVwQA\"",
		"mtime": "2026-06-30T05:53:13.536Z",
		"size": 88714,
		"path": "../public/image/Stellar/9282.jpg"
	},
	"/image/Stellar/Stellar.jpg": {
		"type": "image/jpeg",
		"etag": "\"236e3-juGooAhgE8Hn17SHcPQLck0i4zg\"",
		"mtime": "2026-06-30T05:53:13.536Z",
		"size": 145123,
		"path": "../public/image/Stellar/Stellar.jpg"
	},
	"/image/Stellar/573129497.jpg": {
		"type": "image/jpeg",
		"etag": "\"25dab-sw1NG++pMbeP014Wq22ndht3nsw\"",
		"mtime": "2026-06-30T05:53:13.536Z",
		"size": 155051,
		"path": "../public/image/Stellar/573129497.jpg"
	},
	"/image/TheBohemian/788404_15011307250024434545 (1).webp": {
		"type": "image/webp",
		"etag": "\"a4f2-8QKrggKas91aApqSQc8lPcRmJ2Y\"",
		"mtime": "2026-06-30T05:53:13.531Z",
		"size": 42226,
		"path": "../public/image/TheBohemian/788404_15011307250024434545 (1).webp"
	},
	"/image/TheBohemian/788404_15011307250024434545.webp": {
		"type": "image/webp",
		"etag": "\"a4f2-8QKrggKas91aApqSQc8lPcRmJ2Y\"",
		"mtime": "2026-06-30T05:53:13.593Z",
		"size": 42226,
		"path": "../public/image/TheBohemian/788404_15011307250024434545.webp"
	},
	"/image/TheBohemian/788404_15011308060024434956.webp": {
		"type": "image/webp",
		"etag": "\"a3f0-c66zGZP+8XUWAC++XkiCJ1alk7s\"",
		"mtime": "2026-06-30T05:53:13.590Z",
		"size": 41968,
		"path": "../public/image/TheBohemian/788404_15011308060024434956.webp"
	},
	"/image/TheBohemian/788404_15011311180024437613.webp": {
		"type": "image/webp",
		"etag": "\"16f54-uKHor7H/QEq+hY02+knHSNUR2aM\"",
		"mtime": "2026-06-30T05:53:13.593Z",
		"size": 94036,
		"path": "../public/image/TheBohemian/788404_15011311180024437613.webp"
	},
	"/image/TheBohemian/788404_15011311440024438343.webp": {
		"type": "image/webp",
		"etag": "\"8cb8-m9Qa7s8okVsvMKP3CwuK3h9DuoU\"",
		"mtime": "2026-06-30T05:53:13.586Z",
		"size": 36024,
		"path": "../public/image/TheBohemian/788404_15011311440024438343.webp"
	},
	"/image/TheBohemian/788404_15011311540024438551.webp": {
		"type": "image/webp",
		"etag": "\"1da48-McqwVg1RialyD6sXXRIQYe9TmAY\"",
		"mtime": "2026-06-30T05:53:13.594Z",
		"size": 121416,
		"path": "../public/image/TheBohemian/788404_15011311540024438551.webp"
	},
	"/image/TheBohemian/788404_15011609190024638758.webp": {
		"type": "image/webp",
		"etag": "\"b6de-MAjYGYt46c6gmoh+JSU5/hE4kVI\"",
		"mtime": "2026-06-30T05:53:13.591Z",
		"size": 46814,
		"path": "../public/image/TheBohemian/788404_15011609190024638758.webp"
	},
	"/image/TheBohemian/80285372.jpg": {
		"type": "image/jpeg",
		"etag": "\"d963-DIbXdZSBcG8nQObav4G+/VqE9v8\"",
		"mtime": "2026-06-30T05:53:13.594Z",
		"size": 55651,
		"path": "../public/image/TheBohemian/80285372.jpg"
	},
	"/image/TheBohemian/8058d8aa466353900d40b6a94e8ba42e.webp": {
		"type": "image/webp",
		"etag": "\"15a32-tZ50fHRsLjfNkxMiFLLJHCasvzY\"",
		"mtime": "2026-06-30T05:53:13.596Z",
		"size": 88626,
		"path": "../public/image/TheBohemian/8058d8aa466353900d40b6a94e8ba42e.webp"
	},
	"/image/TheBohemian/de148bf2cc0387397b8587136cb628cf.webp": {
		"type": "image/webp",
		"etag": "\"10220-QaQBdj5KKpGyYCLzhAY8SsGBFg0\"",
		"mtime": "2026-06-30T05:53:13.598Z",
		"size": 66080,
		"path": "../public/image/TheBohemian/de148bf2cc0387397b8587136cb628cf.webp"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_46Rktk = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_46Rktk
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
