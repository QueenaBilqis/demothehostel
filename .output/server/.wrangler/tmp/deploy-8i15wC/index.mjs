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
		"mtime": "2026-07-02T05:45:42.691Z",
		"size": 6148,
		"path": "../public/image/.DS_Store"
	},
	"/assets/f8d0b105550c7aed8b4865185165693f-BBZ_jP9W.webp": {
		"type": "image/webp",
		"etag": "\"f2d8-gTvOo1N7pysWcm5cYxLPhL1+4NQ\"",
		"mtime": "2026-07-02T05:45:39.807Z",
		"size": 62168,
		"path": "../public/assets/f8d0b105550c7aed8b4865185165693f-BBZ_jP9W.webp"
	},
	"/assets/358163465-DQP1tkPJ.webp": {
		"type": "image/webp",
		"etag": "\"b630-cedECZ0W2/I96dyEKpuaNlVB8PE\"",
		"mtime": "2026-07-02T05:45:39.562Z",
		"size": 46640,
		"path": "../public/assets/358163465-DQP1tkPJ.webp"
	},
	"/assets/6fd4af079ceaaed5da29b5b8f8eda980-DkV1nJGs.webp": {
		"type": "image/webp",
		"etag": "\"bf30-YeI+Ivk9xLGs2IJQ1MdXDkeVyio\"",
		"mtime": "2026-07-02T05:45:39.572Z",
		"size": 48944,
		"path": "../public/assets/6fd4af079ceaaed5da29b5b8f8eda980-DkV1nJGs.webp"
	},
	"/assets/login-Do-F63_E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1569-VFnc1KSgb8K0BCpqiRBThxxZ9+U\"",
		"mtime": "2026-07-02T05:45:39.548Z",
		"size": 5481,
		"path": "../public/assets/login-Do-F63_E.js"
	},
	"/assets/788404_15011308060024434956-CVdsiMwu.webp": {
		"type": "image/webp",
		"etag": "\"a3f0-c66zGZP+8XUWAC++XkiCJ1alk7s\"",
		"mtime": "2026-07-02T05:45:39.573Z",
		"size": 41968,
		"path": "../public/assets/788404_15011308060024434956-CVdsiMwu.webp"
	},
	"/assets/jsx-runtime-BVygFP0V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ed0-GCT+uEH6Tyc5S9hM7djzUeJKYv4\"",
		"mtime": "2026-07-02T05:45:39.546Z",
		"size": 7888,
		"path": "../public/assets/jsx-runtime-BVygFP0V.js"
	},
	"/assets/chunk-Bh1tDfsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-RWMfWL++Hyx/oSoFmTJgBJkEveY\"",
		"mtime": "2026-07-02T05:45:39.537Z",
		"size": 567,
		"path": "../public/assets/chunk-Bh1tDfsg.js"
	},
	"/assets/HostelCard-BzL9Buvs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a75-dae9jK4ufsGRI32voIfrG9q9XCY\"",
		"mtime": "2026-07-02T05:45:39.451Z",
		"size": 2677,
		"path": "../public/assets/HostelCard-BzL9Buvs.js"
	},
	"/assets/payments-vLAHS6TK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"767-H/EOLgGGVpvMtp0Rcz2Mh5EhWHU\"",
		"mtime": "2026-07-02T05:45:39.550Z",
		"size": 1895,
		"path": "../public/assets/payments-vLAHS6TK.js"
	},
	"/assets/gallery-Nv2BVSPU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c1-/myb8thC0RnLbwV+CWX1vtwp0SE\"",
		"mtime": "2026-07-02T05:45:39.539Z",
		"size": 1985,
		"path": "../public/assets/gallery-Nv2BVSPU.js"
	},
	"/assets/359791419-DobnzVq4.webp": {
		"type": "image/webp",
		"etag": "\"deb8-Jr3KarGlPjDWBC6Ix1TUXJCDLw8\"",
		"mtime": "2026-07-02T05:45:39.567Z",
		"size": 57016,
		"path": "../public/assets/359791419-DobnzVq4.webp"
	},
	"/assets/359791327-mEko5M63.webp": {
		"type": "image/webp",
		"etag": "\"1b2f8-0L093AUhDH4sp1X+aR1PFUudU4k\"",
		"mtime": "2026-07-02T05:45:39.565Z",
		"size": 111352,
		"path": "../public/assets/359791327-mEko5M63.webp"
	},
	"/assets/9282-ByoXI8vo.webp": {
		"type": "image/webp",
		"etag": "\"f8a6-eatj4yV4Up0N8E0a+lU9ULvexrM\"",
		"mtime": "2026-07-02T05:45:39.631Z",
		"size": 63654,
		"path": "../public/assets/9282-ByoXI8vo.webp"
	},
	"/assets/af4f7435af9a8c3807243856a3a24045-QYKODf0s.webp": {
		"type": "image/webp",
		"etag": "\"1074e-RAH6zdJ6X3o4piDNFiquGMFxeqg\"",
		"mtime": "2026-07-02T05:45:39.656Z",
		"size": 67406,
		"path": "../public/assets/af4f7435af9a8c3807243856a3a24045-QYKODf0s.webp"
	},
	"/assets/359790753-BNihAlSX.webp": {
		"type": "image/webp",
		"etag": "\"16864-BMm/ld1W8pgWzgVmOddsjCTKhjo\"",
		"mtime": "2026-07-02T05:45:39.562Z",
		"size": 92260,
		"path": "../public/assets/359790753-BNihAlSX.webp"
	},
	"/assets/MobileFrame-NDU1zHfU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ae-xxLr01ZETjd2Ec3uEU7ywZhpw9s\"",
		"mtime": "2026-07-02T05:45:39.520Z",
		"size": 1454,
		"path": "../public/assets/MobileFrame-NDU1zHfU.js"
	},
	"/assets/hostels.index-Bwm4xJtO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"636-X0OepQvENfZ6u1dP8sDGtT3rvzk\"",
		"mtime": "2026-07-02T05:45:39.544Z",
		"size": 1590,
		"path": "../public/assets/hostels.index-Bwm4xJtO.js"
	},
	"/assets/hostels._id-CrmEYMGl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5-0QsqgVdnktt9mJ9H9TRWPI1vGaM\"",
		"mtime": "2026-07-02T05:45:39.539Z",
		"size": 421,
		"path": "../public/assets/hostels._id-CrmEYMGl.js"
	},
	"/assets/80285372-CT--Po_q.webp": {
		"type": "image/webp",
		"etag": "\"7eb6-dR/IvxloGT0XskSKYEg7OJVKm+M\"",
		"mtime": "2026-07-02T05:45:39.602Z",
		"size": 32438,
		"path": "../public/assets/80285372-CT--Po_q.webp"
	},
	"/assets/2629f297da0be08d5f88df332c69b72c-DyJVMG85.webp": {
		"type": "image/webp",
		"etag": "\"1c28e-ESzPqVPlM9if69d4kVMgDZzN3Qg\"",
		"mtime": "2026-07-02T05:45:39.561Z",
		"size": 115342,
		"path": "../public/assets/2629f297da0be08d5f88df332c69b72c-DyJVMG85.webp"
	},
	"/assets/788404_15011311180024437613-Bv1DXg4R.webp": {
		"type": "image/webp",
		"etag": "\"16f54-uKHor7H/QEq+hY02+knHSNUR2aM\"",
		"mtime": "2026-07-02T05:45:39.573Z",
		"size": 94036,
		"path": "../public/assets/788404_15011311180024437613-Bv1DXg4R.webp"
	},
	"/assets/6e4f22763ce86335d5670af807aa7bac-BzB2ojiQ.webp": {
		"type": "image/webp",
		"etag": "\"25aa0-6hvdHbZodqpDJNKJyGnZFkCM3mg\"",
		"mtime": "2026-07-02T05:45:39.569Z",
		"size": 154272,
		"path": "../public/assets/6e4f22763ce86335d5670af807aa7bac-BzB2ojiQ.webp"
	},
	"/assets/788404_15011307250024434545-By6K2MCE.webp": {
		"type": "image/webp",
		"etag": "\"a4f2-8QKrggKas91aApqSQc8lPcRmJ2Y\"",
		"mtime": "2026-07-02T05:45:39.572Z",
		"size": 42226,
		"path": "../public/assets/788404_15011307250024434545-By6K2MCE.webp"
	},
	"/assets/bookings.index-Cp4qh-aq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a59-Xb+wxfLMLPUzt0I/bYzX5LzYCQI\"",
		"mtime": "2026-07-02T05:45:39.525Z",
		"size": 2649,
		"path": "../public/assets/bookings.index-Cp4qh-aq.js"
	},
	"/assets/233562557-BYDlgXJh.webp": {
		"type": "image/webp",
		"etag": "\"1fcba-X/ss9LVYAnK5O46VXU3Ay0Sq65U\"",
		"mtime": "2026-07-02T05:45:39.559Z",
		"size": 130234,
		"path": "../public/assets/233562557-BYDlgXJh.webp"
	},
	"/assets/86c15bb8634e11dc132094602c6f6b7c-CRCh8aBT.webp": {
		"type": "image/webp",
		"etag": "\"24420-rfubwQ3dpS5oAH0Tp7lBNEvFoVc\"",
		"mtime": "2026-07-02T05:45:39.613Z",
		"size": 148512,
		"path": "../public/assets/86c15bb8634e11dc132094602c6f6b7c-CRCh8aBT.webp"
	},
	"/assets/788404_15011311440024438343-Db7e0NiQ.webp": {
		"type": "image/webp",
		"etag": "\"8cb8-m9Qa7s8okVsvMKP3CwuK3h9DuoU\"",
		"mtime": "2026-07-02T05:45:39.577Z",
		"size": 36024,
		"path": "../public/assets/788404_15011311440024438343-Db7e0NiQ.webp"
	},
	"/assets/359790755-BeKp1vTW.webp": {
		"type": "image/webp",
		"etag": "\"146dc-ecc44ls0SEUeO6V+HrdIZfQaqRI\"",
		"mtime": "2026-07-02T05:45:39.563Z",
		"size": 83676,
		"path": "../public/assets/359790755-BeKp1vTW.webp"
	},
	"/assets/leaflet-src-DaYBKH_z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24552-Z2gVGYYrN/0jXN5mpThSpUGKDdQ\"",
		"mtime": "2026-07-02T05:45:39.546Z",
		"size": 148818,
		"path": "../public/assets/leaflet-src-DaYBKH_z.js"
	},
	"/assets/573129497-Bz6ctBqV.webp": {
		"type": "image/webp",
		"etag": "\"21f42-bTnMuTvOhyO8ScWGijDJo/JqA9s\"",
		"mtime": "2026-07-02T05:45:39.568Z",
		"size": 139074,
		"path": "../public/assets/573129497-Bz6ctBqV.webp"
	},
	"/assets/13c9052e5f42149b280313e110392521-jjop6bzN.webp": {
		"type": "image/webp",
		"etag": "\"256cc-+O5h97G9fgT76Yv6gH1Bc0p3ypA\"",
		"mtime": "2026-07-02T05:45:39.555Z",
		"size": 153292,
		"path": "../public/assets/13c9052e5f42149b280313e110392521-jjop6bzN.webp"
	},
	"/assets/219477199-C6zkLDW9.webp": {
		"type": "image/webp",
		"etag": "\"1a4fc-Ekqua8M/V5o9AZCJpz6HnfytDE4\"",
		"mtime": "2026-07-02T05:45:39.557Z",
		"size": 107772,
		"path": "../public/assets/219477199-C6zkLDW9.webp"
	},
	"/assets/8058d8aa466353900d40b6a94e8ba42e-BGQh5_B0.webp": {
		"type": "image/webp",
		"etag": "\"15a32-tZ50fHRsLjfNkxMiFLLJHCasvzY\"",
		"mtime": "2026-07-02T05:45:39.607Z",
		"size": 88626,
		"path": "../public/assets/8058d8aa466353900d40b6a94e8ba42e-BGQh5_B0.webp"
	},
	"/assets/admin-CIZzd4Z0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1026-+bSn7PseO2Ak1WI4W3aD39DD5W0\"",
		"mtime": "2026-07-02T05:45:39.521Z",
		"size": 4134,
		"path": "../public/assets/admin-CIZzd4Z0.js"
	},
	"/assets/store-CKPC87ri.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32f-JeoCnSXIFKqUlfksfr+5HIum7jk\"",
		"mtime": "2026-07-02T05:45:39.554Z",
		"size": 815,
		"path": "../public/assets/store-CKPC87ri.js"
	},
	"/assets/358163463-CJJfLVDd.webp": {
		"type": "image/webp",
		"etag": "\"8458-S4WgJXxKZ//rNKDC+FT9Bd7nDDU\"",
		"mtime": "2026-07-02T05:45:39.561Z",
		"size": 33880,
		"path": "../public/assets/358163463-CJJfLVDd.webp"
	},
	"/assets/901901505bf56aac8062cc2edc64f817-ng1SqzgJ.webp": {
		"type": "image/webp",
		"etag": "\"15f36-ahCj4slKXi0yNQUYGTIcx6bB+U8\"",
		"mtime": "2026-07-02T05:45:39.620Z",
		"size": 89910,
		"path": "../public/assets/901901505bf56aac8062cc2edc64f817-ng1SqzgJ.webp"
	},
	"/assets/de148bf2cc0387397b8587136cb628cf-TNlj7IP8.webp": {
		"type": "image/webp",
		"etag": "\"10220-QaQBdj5KKpGyYCLzhAY8SsGBFg0\"",
		"mtime": "2026-07-02T05:45:39.734Z",
		"size": 66080,
		"path": "../public/assets/de148bf2cc0387397b8587136cb628cf-TNlj7IP8.webp"
	},
	"/assets/booking._id-CGm-d7ox.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"283f-taKIF34oiUZhEt1athUOMvzZrDc\"",
		"mtime": "2026-07-02T05:45:39.523Z",
		"size": 10303,
		"path": "../public/assets/booking._id-CGm-d7ox.js"
	},
	"/assets/routes-Wp8u7CvQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1542-N6CpOBWv9PBygv0+BzJ+xL3nnu4\"",
		"mtime": "2026-07-02T05:45:39.554Z",
		"size": 5442,
		"path": "../public/assets/routes-Wp8u7CvQ.js"
	},
	"/assets/rooms-3VxbFFtH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c8c-wRIBXAi851Ctwp8qTyiR0THIs08\"",
		"mtime": "2026-07-02T05:45:39.553Z",
		"size": 7308,
		"path": "../public/assets/rooms-3VxbFFtH.js"
	},
	"/assets/788404_15011311540024438551-DgbW6wIR.webp": {
		"type": "image/webp",
		"etag": "\"1da48-McqwVg1RialyD6sXXRIQYe9TmAY\"",
		"mtime": "2026-07-02T05:45:39.593Z",
		"size": 121416,
		"path": "../public/assets/788404_15011311540024438551-DgbW6wIR.webp"
	},
	"/assets/dashboard-J847ABQ6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ed-S75FWzJvNOKrhVnBHWyt2ybVJSg\"",
		"mtime": "2026-07-02T05:45:39.538Z",
		"size": 5357,
		"path": "../public/assets/dashboard-J847ABQ6.js"
	},
	"/assets/502a515fc0cad6ac1088c50c895eafea-C6TqmOgO.webp": {
		"type": "image/webp",
		"etag": "\"1b6ac-DEr0Fxq1+n8WK9LTwJji1IKFAqo\"",
		"mtime": "2026-07-02T05:45:39.567Z",
		"size": 112300,
		"path": "../public/assets/502a515fc0cad6ac1088c50c895eafea-C6TqmOgO.webp"
	},
	"/assets/booking._id-CnuRHiDP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-QKynm14KldAmvek9zPO5BB6Z+ko\"",
		"mtime": "2026-07-02T05:45:39.523Z",
		"size": 240,
		"path": "../public/assets/booking._id-CnuRHiDP.js"
	},
	"/assets/215483622-CCEJIbxI.webp": {
		"type": "image/webp",
		"etag": "\"4a24-rh9CS19CwjS/bA5rKpCxt6c7PCI\"",
		"mtime": "2026-07-02T05:45:39.557Z",
		"size": 18980,
		"path": "../public/assets/215483622-CCEJIbxI.webp"
	},
	"/assets/styles-DTKnXCmG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"163af-B1p3aPxMVa18kpCfIfXIgrID5V8\"",
		"mtime": "2026-07-02T05:45:39.829Z",
		"size": 91055,
		"path": "../public/assets/styles-DTKnXCmG.css"
	},
	"/assets/reviews-CmBFWAuZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a85-h1Iup3gXbhE/KNgFLsD+HRszRaU\"",
		"mtime": "2026-07-02T05:45:39.552Z",
		"size": 2693,
		"path": "../public/assets/reviews-CmBFWAuZ.js"
	},
	"/assets/bookings._bid-ChtPiqmU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3a-Tyaxc3UzH99J1S/Bu3EGcrPTOes\"",
		"mtime": "2026-07-02T05:45:39.524Z",
		"size": 3642,
		"path": "../public/assets/bookings._bid-ChtPiqmU.js"
	},
	"/assets/hostels._id-VkWtDkFr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-iuvP87WE8MR6DgFunlSW7RLzbM8\"",
		"mtime": "2026-07-02T05:45:39.540Z",
		"size": 396,
		"path": "../public/assets/hostels._id-VkWtDkFr.js"
	},
	"/assets/profile-DxbBKHvS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35bf-/7XVPzohDkDdsMR1uOWOXj8EFcE\"",
		"mtime": "2026-07-02T05:45:39.551Z",
		"size": 13759,
		"path": "../public/assets/profile-DxbBKHvS.js"
	},
	"/assets/auth-BK_YcGXA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23a-bqM1Y2bYE91j3k/z+RUWsHuMVmo\"",
		"mtime": "2026-07-02T05:45:39.522Z",
		"size": 570,
		"path": "../public/assets/auth-BK_YcGXA.js"
	},
	"/assets/788404_15011609190024638758-BxacUEHu.webp": {
		"type": "image/webp",
		"etag": "\"b6de-MAjYGYt46c6gmoh+JSU5/hE4kVI\"",
		"mtime": "2026-07-02T05:45:39.600Z",
		"size": 46814,
		"path": "../public/assets/788404_15011609190024638758-BxacUEHu.webp"
	},
	"/assets/LeafletMap-BIlZ_a7h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"878-lzdsMXR5kmepKGxXuG4gmr2QsEQ\"",
		"mtime": "2026-07-02T05:45:39.520Z",
		"size": 2168,
		"path": "../public/assets/LeafletMap-BIlZ_a7h.js"
	},
	"/assets/Stellar-SZiYuXyq.webp": {
		"type": "image/webp",
		"etag": "\"1f202-Sn4df5tX6fPcH6VvOfrdf+yP+KU\"",
		"mtime": "2026-07-02T05:45:39.652Z",
		"size": 127490,
		"path": "../public/assets/Stellar-SZiYuXyq.webp"
	},
	"/assets/83893001fc60e34320d91133d60f366b-CQhGzWmV.webp": {
		"type": "image/webp",
		"etag": "\"1aac4-xgO9BUqAfRaZT5cnxcp6sWpFmZE\"",
		"mtime": "2026-07-02T05:45:39.610Z",
		"size": 109252,
		"path": "../public/assets/83893001fc60e34320d91133d60f366b-CQhGzWmV.webp"
	},
	"/assets/bookings-D9ORVlKz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d65-XnQwQQEf0DLojeBXVnTUqq4bi/8\"",
		"mtime": "2026-07-02T05:45:39.524Z",
		"size": 3429,
		"path": "../public/assets/bookings-D9ORVlKz.js"
	},
	"/assets/223010948-Duj4o61V.webp": {
		"type": "image/webp",
		"etag": "\"1d0f2-ekU7zZnfoo/bptq4mbLbEplx/As\"",
		"mtime": "2026-07-02T05:45:39.558Z",
		"size": 119026,
		"path": "../public/assets/223010948-Duj4o61V.webp"
	},
	"/assets/profile-Dld2xO72.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b67-R2p1g//L62qLqLJL3M43rfYEtFk\"",
		"mtime": "2026-07-02T05:45:39.550Z",
		"size": 2919,
		"path": "../public/assets/profile-Dld2xO72.js"
	},
	"/assets/booking._id-B8QGuuHx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10a-6PAOTt7PtVI7DjW68APNEVRo2XU\"",
		"mtime": "2026-07-02T05:45:39.523Z",
		"size": 266,
		"path": "../public/assets/booking._id-B8QGuuHx.js"
	},
	"/assets/register-B_8oxwt8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1461-iPVDzKPeDcet6i0OmEUIbaxxyYw\"",
		"mtime": "2026-07-02T05:45:39.552Z",
		"size": 5217,
		"path": "../public/assets/register-B_8oxwt8.js"
	},
	"/assets/215483620-DtA144RS.webp": {
		"type": "image/webp",
		"etag": "\"7e66-4PCuiRe7PlF+s3Y/HG0dp1tITsU\"",
		"mtime": "2026-07-02T05:45:39.556Z",
		"size": 32358,
		"path": "../public/assets/215483620-DtA144RS.webp"
	},
	"/assets/hotels-CjMMaFAW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dfe-PqSuSdKNhyU1hoi073zywkKE8iE\"",
		"mtime": "2026-07-02T05:45:39.544Z",
		"size": 7678,
		"path": "../public/assets/hotels-CjMMaFAW.js"
	},
	"/assets/notifications-Ct0WfwXc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130b-ld8zeKzPVo+t1rwoidmpyzu/Jnc\"",
		"mtime": "2026-07-02T05:45:39.549Z",
		"size": 4875,
		"path": "../public/assets/notifications-Ct0WfwXc.js"
	},
	"/assets/notifications-DcTArVDR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74d-EzVA1JodK0p95YB9DJJoDNEB+xA\"",
		"mtime": "2026-07-02T05:45:39.550Z",
		"size": 1869,
		"path": "../public/assets/notifications-DcTArVDR.js"
	},
	"/assets/215483619-JaPNwNt7.webp": {
		"type": "image/webp",
		"etag": "\"491a-RtKEfgvtcFlkqeQZtEAO4w9RDLQ\"",
		"mtime": "2026-07-02T05:45:39.556Z",
		"size": 18714,
		"path": "../public/assets/215483619-JaPNwNt7.webp"
	},
	"/assets/api-Bs8E6mhM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f45-oqPFzDci8OpDnqE3q7vPQdeuMLk\"",
		"mtime": "2026-07-02T05:45:39.521Z",
		"size": 3909,
		"path": "../public/assets/api-Bs8E6mhM.js"
	},
	"/assets/coupons-DXAg-3lU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf4-8q2xQMtqird/IsespcIMhMPLY6s\"",
		"mtime": "2026-07-02T05:45:39.538Z",
		"size": 3316,
		"path": "../public/assets/coupons-DXAg-3lU.js"
	},
	"/assets/359791212-D1KGaQu3.webp": {
		"type": "image/webp",
		"etag": "\"11356-GnqwQybaL0pr09lQZl3cBOPhkTg\"",
		"mtime": "2026-07-02T05:45:39.564Z",
		"size": 70486,
		"path": "../public/assets/359791212-D1KGaQu3.webp"
	},
	"/assets/link-QG6GUdCr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7f-QFfcsFSWbxUfzo+ox//ermZKESg\"",
		"mtime": "2026-07-02T05:45:39.547Z",
		"size": 27263,
		"path": "../public/assets/link-QG6GUdCr.js"
	},
	"/assets/220734263-B9wqZo6y.webp": {
		"type": "image/webp",
		"etag": "\"118c6-m/MA3GPu1Lycp3scPcQQEhI7qZ0\"",
		"mtime": "2026-07-02T05:45:39.558Z",
		"size": 71878,
		"path": "../public/assets/220734263-B9wqZo6y.webp"
	},
	"/assets/573129492-jAA3134A.webp": {
		"type": "image/webp",
		"etag": "\"18fc4-Yn+9EebTkqw9YFuIBltHIdOtn2k\"",
		"mtime": "2026-07-02T05:45:39.568Z",
		"size": 102340,
		"path": "../public/assets/573129492-jAA3134A.webp"
	},
	"/assets/index-CHtI6i5w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d75f-MtBpUbdN6MirjDBmzJrYck+IHGA\"",
		"mtime": "2026-07-02T05:45:39.450Z",
		"size": 382815,
		"path": "../public/assets/index-CHtI6i5w.js"
	},
	"/assets/redirect-DnLf-3Zd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-OKGUrSof3kF11Yz1L80m8oAVyB4\"",
		"mtime": "2026-07-02T05:45:39.551Z",
		"size": 644,
		"path": "../public/assets/redirect-DnLf-3Zd.js"
	},
	"/assets/f9f32e2151f391ae7e07550c51ff4519-RoGHmG2K.webp": {
		"type": "image/webp",
		"etag": "\"2a030-7wPO9hOpTQJAs1ZC/GT4Y7mHs1U\"",
		"mtime": "2026-07-02T05:45:39.819Z",
		"size": 172080,
		"path": "../public/assets/f9f32e2151f391ae7e07550c51ff4519-RoGHmG2K.webp"
	},
	"/assets/fd74af49b542735b755312205ef9fa36-Czt4gnxk.webp": {
		"type": "image/webp",
		"etag": "\"1a9d8-UyZCi3FaH9sRcoojsqchMkCksbs\"",
		"mtime": "2026-07-02T05:45:39.827Z",
		"size": 109016,
		"path": "../public/assets/fd74af49b542735b755312205ef9fa36-Czt4gnxk.webp"
	},
	"/assets/hostels._id-Fke6toEe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76e7-MGgTZWeb2KwpOYwdoTvF/6G7YHw\"",
		"mtime": "2026-07-02T05:45:39.540Z",
		"size": 30439,
		"path": "../public/assets/hostels._id-Fke6toEe.js"
	},
	"/image/Stellar/573129492.webp": {
		"type": "image/webp",
		"etag": "\"18fc4-Yn+9EebTkqw9YFuIBltHIdOtn2k\"",
		"mtime": "2026-07-02T05:45:42.690Z",
		"size": 102340,
		"path": "../public/image/Stellar/573129492.webp"
	},
	"/image/Stellar/215483619.webp": {
		"type": "image/webp",
		"etag": "\"491a-RtKEfgvtcFlkqeQZtEAO4w9RDLQ\"",
		"mtime": "2026-07-02T05:45:42.692Z",
		"size": 18714,
		"path": "../public/image/Stellar/215483619.webp"
	},
	"/image/Stellar/215483622.webp": {
		"type": "image/webp",
		"etag": "\"4a24-rh9CS19CwjS/bA5rKpCxt6c7PCI\"",
		"mtime": "2026-07-02T05:45:42.692Z",
		"size": 18980,
		"path": "../public/image/Stellar/215483622.webp"
	},
	"/image/Stellar/9282.webp": {
		"type": "image/webp",
		"etag": "\"f8a6-eatj4yV4Up0N8E0a+lU9ULvexrM\"",
		"mtime": "2026-07-02T05:45:42.691Z",
		"size": 63654,
		"path": "../public/image/Stellar/9282.webp"
	},
	"/image/Stellar/215483620.webp": {
		"type": "image/webp",
		"etag": "\"7e66-4PCuiRe7PlF+s3Y/HG0dp1tITsU\"",
		"mtime": "2026-07-02T05:45:42.691Z",
		"size": 32358,
		"path": "../public/image/Stellar/215483620.webp"
	},
	"/image/Stellar/233562557.webp": {
		"type": "image/webp",
		"etag": "\"1fcba-X/ss9LVYAnK5O46VXU3Ay0Sq65U\"",
		"mtime": "2026-07-02T05:45:42.691Z",
		"size": 130234,
		"path": "../public/image/Stellar/233562557.webp"
	},
	"/image/Atellier/901901505bf56aac8062cc2edc64f817.webp": {
		"type": "image/webp",
		"etag": "\"15f36-ahCj4slKXi0yNQUYGTIcx6bB+U8\"",
		"mtime": "2026-07-02T05:45:42.694Z",
		"size": 89910,
		"path": "../public/image/Atellier/901901505bf56aac8062cc2edc64f817.webp"
	},
	"/image/Atellier/359791212.webp": {
		"type": "image/webp",
		"etag": "\"11356-GnqwQybaL0pr09lQZl3cBOPhkTg\"",
		"mtime": "2026-07-02T05:45:42.694Z",
		"size": 70486,
		"path": "../public/image/Atellier/359791212.webp"
	},
	"/image/Stellar/Stellar.webp": {
		"type": "image/webp",
		"etag": "\"1f202-Sn4df5tX6fPcH6VvOfrdf+yP+KU\"",
		"mtime": "2026-07-02T05:45:42.690Z",
		"size": 127490,
		"path": "../public/image/Stellar/Stellar.webp"
	},
	"/image/Stellar/219477199.webp": {
		"type": "image/webp",
		"etag": "\"1a4fc-Ekqua8M/V5o9AZCJpz6HnfytDE4\"",
		"mtime": "2026-07-02T05:45:42.690Z",
		"size": 107772,
		"path": "../public/image/Stellar/219477199.webp"
	},
	"/image/Atellier/af4f7435af9a8c3807243856a3a24045.webp": {
		"type": "image/webp",
		"etag": "\"1074e-RAH6zdJ6X3o4piDNFiquGMFxeqg\"",
		"mtime": "2026-07-02T05:45:42.695Z",
		"size": 67406,
		"path": "../public/image/Atellier/af4f7435af9a8c3807243856a3a24045.webp"
	},
	"/image/Stellar/220734263.webp": {
		"type": "image/webp",
		"etag": "\"118c6-m/MA3GPu1Lycp3scPcQQEhI7qZ0\"",
		"mtime": "2026-07-02T05:45:42.693Z",
		"size": 71878,
		"path": "../public/image/Stellar/220734263.webp"
	},
	"/image/Atellier/13c9052e5f42149b280313e110392521.webp": {
		"type": "image/webp",
		"etag": "\"256cc-+O5h97G9fgT76Yv6gH1Bc0p3ypA\"",
		"mtime": "2026-07-02T05:45:42.695Z",
		"size": 153292,
		"path": "../public/image/Atellier/13c9052e5f42149b280313e110392521.webp"
	},
	"/image/Stellar/223010948.webp": {
		"type": "image/webp",
		"etag": "\"1d0f2-ekU7zZnfoo/bptq4mbLbEplx/As\"",
		"mtime": "2026-07-02T05:45:42.693Z",
		"size": 119026,
		"path": "../public/image/Stellar/223010948.webp"
	},
	"/image/Atellier/2629f297da0be08d5f88df332c69b72c.webp": {
		"type": "image/webp",
		"etag": "\"1c28e-ESzPqVPlM9if69d4kVMgDZzN3Qg\"",
		"mtime": "2026-07-02T05:45:42.696Z",
		"size": 115342,
		"path": "../public/image/Atellier/2629f297da0be08d5f88df332c69b72c.webp"
	},
	"/image/Atellier/359791419.webp": {
		"type": "image/webp",
		"etag": "\"deb8-Jr3KarGlPjDWBC6Ix1TUXJCDLw8\"",
		"mtime": "2026-07-02T05:45:42.696Z",
		"size": 57016,
		"path": "../public/image/Atellier/359791419.webp"
	},
	"/image/Stellar/573129497.webp": {
		"type": "image/webp",
		"etag": "\"21f42-bTnMuTvOhyO8ScWGijDJo/JqA9s\"",
		"mtime": "2026-07-01T16:54:11.457Z",
		"size": 139074,
		"path": "../public/image/Stellar/573129497.webp"
	},
	"/image/Atellier/358163463.webp": {
		"type": "image/webp",
		"etag": "\"8458-S4WgJXxKZ//rNKDC+FT9Bd7nDDU\"",
		"mtime": "2026-07-02T05:45:42.697Z",
		"size": 33880,
		"path": "../public/image/Atellier/358163463.webp"
	},
	"/image/TheBohemian/788404_15011308060024434956.webp": {
		"type": "image/webp",
		"etag": "\"a3f0-c66zGZP+8XUWAC++XkiCJ1alk7s\"",
		"mtime": "2026-07-02T05:45:42.717Z",
		"size": 41968,
		"path": "../public/image/TheBohemian/788404_15011308060024434956.webp"
	},
	"/image/TheBohemian/80285372.webp": {
		"type": "image/webp",
		"etag": "\"7eb6-dR/IvxloGT0XskSKYEg7OJVKm+M\"",
		"mtime": "2026-07-02T05:45:42.720Z",
		"size": 32438,
		"path": "../public/image/TheBohemian/80285372.webp"
	},
	"/image/TheBohemian/8058d8aa466353900d40b6a94e8ba42e.webp": {
		"type": "image/webp",
		"etag": "\"15a32-tZ50fHRsLjfNkxMiFLLJHCasvzY\"",
		"mtime": "2026-07-02T05:45:42.717Z",
		"size": 88626,
		"path": "../public/image/TheBohemian/8058d8aa466353900d40b6a94e8ba42e.webp"
	},
	"/image/TheBohemian/788404_15011307250024434545.webp": {
		"type": "image/webp",
		"etag": "\"a4f2-8QKrggKas91aApqSQc8lPcRmJ2Y\"",
		"mtime": "2026-07-02T05:45:42.716Z",
		"size": 42226,
		"path": "../public/image/TheBohemian/788404_15011307250024434545.webp"
	},
	"/image/TheBohemian/788404_15011311440024438343.webp": {
		"type": "image/webp",
		"etag": "\"8cb8-m9Qa7s8okVsvMKP3CwuK3h9DuoU\"",
		"mtime": "2026-07-02T05:45:42.716Z",
		"size": 36024,
		"path": "../public/image/TheBohemian/788404_15011311440024438343.webp"
	},
	"/image/TheBohemian/788404_15011311540024438551.webp": {
		"type": "image/webp",
		"etag": "\"1da48-McqwVg1RialyD6sXXRIQYe9TmAY\"",
		"mtime": "2026-07-02T05:45:42.712Z",
		"size": 121416,
		"path": "../public/image/TheBohemian/788404_15011311540024438551.webp"
	},
	"/image/TheBohemian/de148bf2cc0387397b8587136cb628cf.webp": {
		"type": "image/webp",
		"etag": "\"10220-QaQBdj5KKpGyYCLzhAY8SsGBFg0\"",
		"mtime": "2026-07-02T05:45:42.716Z",
		"size": 66080,
		"path": "../public/image/TheBohemian/de148bf2cc0387397b8587136cb628cf.webp"
	},
	"/image/TheBohemian/788404_15011311180024437613.webp": {
		"type": "image/webp",
		"etag": "\"16f54-uKHor7H/QEq+hY02+knHSNUR2aM\"",
		"mtime": "2026-07-02T05:45:42.710Z",
		"size": 94036,
		"path": "../public/image/TheBohemian/788404_15011311180024437613.webp"
	},
	"/image/TheBohemian/788404_15011609190024638758.webp": {
		"type": "image/webp",
		"etag": "\"b6de-MAjYGYt46c6gmoh+JSU5/hE4kVI\"",
		"mtime": "2026-07-02T05:45:42.715Z",
		"size": 46814,
		"path": "../public/image/TheBohemian/788404_15011609190024638758.webp"
	},
	"/image/TheBohemian/788404_15011307250024434545_1.webp": {
		"type": "image/webp",
		"etag": "\"a4f2-8QKrggKas91aApqSQc8lPcRmJ2Y\"",
		"mtime": "2026-07-02T05:45:42.713Z",
		"size": 42226,
		"path": "../public/image/TheBohemian/788404_15011307250024434545_1.webp"
	},
	"/image/Atellier/6fd4af079ceaaed5da29b5b8f8eda980.webp": {
		"type": "image/webp",
		"etag": "\"bf30-YeI+Ivk9xLGs2IJQ1MdXDkeVyio\"",
		"mtime": "2026-07-02T05:45:42.710Z",
		"size": 48944,
		"path": "../public/image/Atellier/6fd4af079ceaaed5da29b5b8f8eda980.webp"
	},
	"/image/Atellier/359790753.webp": {
		"type": "image/webp",
		"etag": "\"16864-BMm/ld1W8pgWzgVmOddsjCTKhjo\"",
		"mtime": "2026-07-02T05:45:42.709Z",
		"size": 92260,
		"path": "../public/image/Atellier/359790753.webp"
	},
	"/image/Atellier/359791327.webp": {
		"type": "image/webp",
		"etag": "\"1b2f8-0L093AUhDH4sp1X+aR1PFUudU4k\"",
		"mtime": "2026-07-02T05:45:42.700Z",
		"size": 111352,
		"path": "../public/image/Atellier/359791327.webp"
	},
	"/image/Atellier/502a515fc0cad6ac1088c50c895eafea.webp": {
		"type": "image/webp",
		"etag": "\"1b6ac-DEr0Fxq1+n8WK9LTwJji1IKFAqo\"",
		"mtime": "2026-07-02T05:45:42.701Z",
		"size": 112300,
		"path": "../public/image/Atellier/502a515fc0cad6ac1088c50c895eafea.webp"
	},
	"/image/Atellier/fd74af49b542735b755312205ef9fa36.webp": {
		"type": "image/webp",
		"etag": "\"1a9d8-UyZCi3FaH9sRcoojsqchMkCksbs\"",
		"mtime": "2026-07-02T05:45:42.699Z",
		"size": 109016,
		"path": "../public/image/Atellier/fd74af49b542735b755312205ef9fa36.webp"
	},
	"/image/Atellier/359790755.webp": {
		"type": "image/webp",
		"etag": "\"146dc-ecc44ls0SEUeO6V+HrdIZfQaqRI\"",
		"mtime": "2026-07-02T05:45:42.708Z",
		"size": 83676,
		"path": "../public/image/Atellier/359790755.webp"
	},
	"/image/Atellier/86c15bb8634e11dc132094602c6f6b7c.webp": {
		"type": "image/webp",
		"etag": "\"24420-rfubwQ3dpS5oAH0Tp7lBNEvFoVc\"",
		"mtime": "2026-06-29T11:34:55.309Z",
		"size": 148512,
		"path": "../public/image/Atellier/86c15bb8634e11dc132094602c6f6b7c.webp"
	},
	"/image/Atellier/f9f32e2151f391ae7e07550c51ff4519.webp": {
		"type": "image/webp",
		"etag": "\"2a030-7wPO9hOpTQJAs1ZC/GT4Y7mHs1U\"",
		"mtime": "2026-06-29T11:35:55.101Z",
		"size": 172080,
		"path": "../public/image/Atellier/f9f32e2151f391ae7e07550c51ff4519.webp"
	},
	"/image/Atellier/f8d0b105550c7aed8b4865185165693f.webp": {
		"type": "image/webp",
		"etag": "\"f2d8-gTvOo1N7pysWcm5cYxLPhL1+4NQ\"",
		"mtime": "2026-07-02T05:45:42.698Z",
		"size": 62168,
		"path": "../public/image/Atellier/f8d0b105550c7aed8b4865185165693f.webp"
	},
	"/image/Atellier/358163465.webp": {
		"type": "image/webp",
		"etag": "\"b630-cedECZ0W2/I96dyEKpuaNlVB8PE\"",
		"mtime": "2026-07-02T05:45:42.700Z",
		"size": 46640,
		"path": "../public/image/Atellier/358163465.webp"
	},
	"/image/Atellier/83893001fc60e34320d91133d60f366b.webp": {
		"type": "image/webp",
		"etag": "\"1aac4-xgO9BUqAfRaZT5cnxcp6sWpFmZE\"",
		"mtime": "2026-07-02T05:45:42.699Z",
		"size": 109252,
		"path": "../public/image/Atellier/83893001fc60e34320d91133d60f366b.webp"
	},
	"/image/Atellier/6e4f22763ce86335d5670af807aa7bac.webp": {
		"type": "image/webp",
		"etag": "\"25aa0-6hvdHbZodqpDJNKJyGnZFkCM3mg\"",
		"mtime": "2026-06-29T11:35:47.233Z",
		"size": 154272,
		"path": "../public/image/Atellier/6e4f22763ce86335d5670af807aa7bac.webp"
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
