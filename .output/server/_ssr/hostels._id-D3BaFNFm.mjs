import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as MobileFrame, t as Icon } from "./MobileFrame-u4Sg7FL7.mjs";
import { t as useAuth } from "./auth-DfkR6RoP.mjs";
import { t as Route } from "./hostels._id-BNNXYwse.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hostels._id-D3BaFNFm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ImageGallery({ images, title }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const [fullScreen, setFullScreen] = (0, import_react.useState)(false);
	const scrollPrev = (0, import_react.useCallback)(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = (0, import_react.useCallback)(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
	const scrollTo = (0, import_react.useCallback)((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		onSelect();
	}, [emblaApi, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				ref: emblaRef,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex",
					children: images.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-[0_0_100%] min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: `${title} - ${idx + 1}`,
							className: "w-full h-72 object-cover cursor-pointer",
							loading: idx === 0 ? "eager" : "lazy",
							onClick: () => setFullScreen(true)
						})
					}, idx))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: scrollPrev,
				className: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 grid place-items-center rounded-full bg-background/80 backdrop-blur shadow text-foreground/80 hover:text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "chevron_left",
					className: "text-[20px]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: scrollNext,
				className: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 grid place-items-center rounded-full bg-background/80 backdrop-blur shadow text-foreground/80 hover:text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "chevron_right",
					className: "text-[20px]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-3 left-0 right-0 px-4 flex gap-2 overflow-x-auto hide-scrollbar z-10",
				children: images.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => scrollTo(i),
					className: `shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition ${i === selectedIndex ? "border-primary" : "border-white/50 hover:border-white/80"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g,
						alt: "",
						className: "w-full h-full object-cover",
						loading: "lazy"
					})
				}, i))
			})
		]
	}), fullScreen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[9999] bg-black/95 flex flex-col justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute top-6 right-6 text-white w-10 h-10 grid place-items-center bg-white/10 rounded-full",
				onClick: () => setFullScreen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "close",
					className: "text-[24px]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images[selectedIndex],
				alt: title,
				className: "w-full max-h-[80vh] object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-0 right-0 flex justify-center gap-4 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => scrollTo(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1),
					className: "w-12 h-12 grid place-items-center bg-white/10 rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "chevron_left",
						className: "text-[28px]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => scrollTo(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1),
					className: "w-12 h-12 grid place-items-center bg-white/10 rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "chevron_right",
						className: "text-[28px]"
					})
				})]
			})
		]
	})] });
}
var LeafletMap = (0, import_react.lazy)(() => import("./LeafletMap-CmA0ib2m.mjs"));
function HostelDetail() {
	const h = Route.useLoaderData();
	const [activeImg, setActiveImg] = (0, import_react.useState)(0);
	const [tab, setTab] = (0, import_react.useState)("overview");
	const { user } = useAuth();
	const nav = useNavigate();
	const [reviewSubmitted, setReviewSubmitted] = (0, import_react.useState)(false);
	const [reviewWriting, setReviewWriting] = (0, import_react.useState)(false);
	const handleAddReview = () => {
		if (!user) {
			nav({
				to: "/login",
				search: { redirect: `/hostels/${h.id}` }
			});
			return;
		}
		setReviewWriting(true);
	};
	const submitReview = () => {
		setReviewWriting(false);
		setReviewSubmitted(true);
		setTimeout(() => setReviewSubmitted(false), 3e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageGallery, {
				images: h.gallery,
				title: h.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 top-0 p-4 flex items-center justify-between z-10 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "w-10 h-10 grid place-items-center rounded-full bg-background/90 backdrop-blur shadow pointer-events-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: "arrow_back",
						className: "text-[20px]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 pointer-events-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-10 h-10 grid place-items-center rounded-full bg-background/90 backdrop-blur shadow",
						"aria-label": "Share",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "ios_share",
							className: "text-[18px]"
						})
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[22px] font-semibold leading-tight",
						children: h.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] text-muted-foreground mt-1 flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "location_on",
								className: "text-[14px]"
							}),
							h.city,
							", ",
							h.country
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[12px] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "star",
								className: "text-[14px]"
							}), h.rating]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] text-muted-foreground mt-1",
							children: [h.reviews, " reviews"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex gap-1 bg-secondary rounded-xl p-1 text-[12px] font-medium",
					children: [
						"overview",
						"rooms",
						"facilities",
						"reviews"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(t),
						className: `flex-1 py-2 rounded-lg capitalize transition ${tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`,
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] text-foreground/85 leading-relaxed",
								children: h.about
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-semibold text-[15px]",
								children: "Top amenities"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2 mt-2",
								children: h.amenities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-[13px] text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "check_circle",
										className: "text-[16px] text-primary"
									}), a]
								}, a))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-semibold text-[15px]",
								children: "Nearby attractions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 divide-y divide-border rounded-2xl border border-border bg-card",
								children: h.attractions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 px-3 py-2.5 text-[13px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "near_me",
										className: "text-[16px] text-primary"
									}), a]
								}, a))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-semibold text-[15px]",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 rounded-2xl overflow-hidden border border-border h-48 bg-secondary relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-full bg-secondary animate-pulse" }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafletMap, { hostel: h })
								})
							})
						] }),
						tab === "rooms" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3",
							children: h.rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-[15px] leading-tight",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-muted-foreground mt-0.5",
											children: r.beds
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-primary font-bold text-[17px] leading-none",
												children: ["$", r.price]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "per night"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5 mt-2",
										children: r.perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] bg-secondary px-2 py-1 rounded-full",
											children: p
										}, p))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/booking/$id",
										params: { id: h.id },
										search: { room: r.id },
										className: "mt-3 block text-center bg-primary text-primary-foreground rounded-xl py-2 text-[13px] font-semibold",
										children: "Select"
									})
								]
							}, r.id))
						}),
						tab === "facilities" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: h.facilities.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-card border border-border px-3 py-2 text-[12.5px] flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "check",
									className: "text-[16px] text-primary"
								}), f]
							}, f))
						}),
						tab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-card border border-border p-4 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[28px] font-semibold text-primary leading-none",
										children: h.rating
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-muted-foreground mt-1",
										children: [h.reviews, " reviews"]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 text-[12px] text-muted-foreground",
										children: [
											"Travelers love the location, design, and welcoming staff at ",
											h.name,
											"."
										]
									})]
								}),
								reviewSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full bg-green-500/10 text-green-600 font-bold py-3 rounded-xl border border-green-500/20 text-center text-[13px] flex items-center justify-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: "check_circle",
										className: "text-[16px]"
									}), " Review Submitted!"]
								}) : reviewWriting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full bg-card p-3 rounded-xl border border-border flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										placeholder: "Share your experience...",
										className: "w-full bg-secondary rounded-xl p-3 text-[13px] outline-none min-h-[80px]",
										autoFocus: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setReviewWriting(false),
											className: "flex-1 text-muted-foreground font-semibold py-2 rounded-xl text-[13px]",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: submitReview,
											className: "flex-1 bg-primary text-primary-foreground font-bold py-2 rounded-xl text-[13px]",
											children: "Submit"
										})]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleAddReview,
									className: "w-full bg-secondary text-foreground font-semibold py-3 rounded-xl border border-border",
									children: "Write a review"
								}),
								h.reviewsList.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-card border border-border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-10 h-10 rounded-full bg-primary/15 text-primary grid place-items-center font-semibold text-[13px]",
												children: r.initials
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-[14px]",
													children: r.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] text-muted-foreground",
													children: r.date
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-primary text-[12px] font-semibold flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														name: "star",
														className: "text-[14px]"
													}),
													r.rating,
													".0"
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-foreground/85 mt-2",
										children: r.text
									})]
								}, r.name))
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed bottom-[64px] left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-card border-t border-border px-4 py-3 z-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] uppercase tracking-wide text-muted-foreground",
					children: "From"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-primary font-bold text-[18px] leading-none",
					children: [
						"$",
						h.priceFrom,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground font-normal",
							children: " /night"
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/booking/$id",
					params: { id: h.id },
					className: "flex-1 ml-3 bg-primary text-primary-foreground text-center py-3 rounded-xl font-semibold text-[14px]",
					children: "Reserve"
				})]
			})
		})
	] });
}
//#endregion
export { HostelDetail as component };
