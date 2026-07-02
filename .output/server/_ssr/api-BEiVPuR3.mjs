import { t as HOSTELS } from "./hostels-CMsqgrCR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-BEiVPuR3.js
var DB_KEYS = {
	USERS: "api_db_users",
	HOSTELS: "api_db_hostels",
	BOOKINGS: "api_db_bookings",
	COUPONS: "api_db_coupons",
	REVIEWS: "api_db_reviews"
};
var readDB = (key) => {
	if (typeof window === "undefined") return [];
	const val = localStorage.getItem(key);
	return val ? JSON.parse(val) : [];
};
var writeDB = (key, data) => {
	if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(data));
};
if (typeof window !== "undefined") {
	if (!localStorage.getItem(DB_KEYS.HOSTELS)) localStorage.setItem(DB_KEYS.HOSTELS, JSON.stringify(HOSTELS));
	const users = readDB(DB_KEYS.USERS);
	if (!users.find((u) => u.role === "bohemian")) {
		const defaultAdmins = [
			{
				id: "admin-bohemian",
				name: "Bohemian Admin",
				email: "bohemian@thehostel.com",
				password: "Bohemian123",
				role: "bohemian"
			},
			{
				id: "admin-atelier",
				name: "Atelier Admin",
				email: "atelier@thehostel.com",
				password: "Atelier123",
				role: "atelier"
			},
			{
				id: "admin-stellar",
				name: "Stellar Admin",
				email: "stellar@thehostel.com",
				password: "Stellar123",
				role: "stellar"
			}
		];
		writeDB(DB_KEYS.USERS, [...users, ...defaultAdmins]);
	}
	if (!localStorage.getItem(DB_KEYS.COUPONS)) localStorage.setItem(DB_KEYS.COUPONS, JSON.stringify([{
		id: "c1",
		code: "WARM10",
		discount: 10,
		isActive: true
	}, {
		id: "c2",
		code: "SUMMER20",
		discount: 20,
		isActive: false
	}]));
	if (!localStorage.getItem(DB_KEYS.REVIEWS)) localStorage.setItem(DB_KEYS.REVIEWS, JSON.stringify([
		{
			id: "r1",
			hostelId: "bohemian",
			guestName: "Sarah M.",
			rating: 5,
			comment: "Amazing capsule hostel! Highly recommended.",
			date: (/* @__PURE__ */ new Date()).toISOString()
		},
		{
			id: "r2",
			hostelId: "bohemian",
			guestName: "John D.",
			rating: 4,
			comment: "Very clean and comfortable.",
			date: (/* @__PURE__ */ new Date()).toISOString()
		},
		{
			id: "r3",
			hostelId: "atelier",
			guestName: "Emily W.",
			rating: 5,
			comment: "The design is breathtaking.",
			date: (/* @__PURE__ */ new Date()).toISOString()
		}
	]));
	if (!localStorage.getItem(DB_KEYS.BOOKINGS)) localStorage.setItem(DB_KEYS.BOOKINGS, JSON.stringify([
		{
			id: "BK101",
			hostelId: "bohemian",
			roomId: "ss-upper-mixed",
			guestName: "Alice Wonderland",
			guestEmail: "alice@example.com",
			checkIn: new Date(Date.now() + 864e5).toISOString(),
			checkOut: new Date(Date.now() + 864e5 * 3).toISOString(),
			guests: 1,
			nights: 2,
			total: 76,
			status: "pending",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			paymentMethod: "visa"
		},
		{
			id: "BK102",
			hostelId: "bohemian",
			roomId: "private-single",
			guestName: "Bob Builder",
			guestEmail: "bob@example.com",
			checkIn: new Date(Date.now() + 864e5 * 5).toISOString(),
			checkOut: new Date(Date.now() + 864e5 * 7).toISOString(),
			guests: 1,
			nights: 2,
			total: 156,
			status: "confirmed",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			paymentMethod: "mastercard"
		},
		{
			id: "BK103",
			hostelId: "atelier",
			roomId: "vault-upper",
			guestName: "Charlie Chaplin",
			guestEmail: "charlie@example.com",
			checkIn: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 2)).toISOString(),
			checkOut: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 1)).toISOString(),
			guests: 1,
			nights: 1,
			total: 34,
			status: "completed",
			createdAt: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 10)).toISOString(),
			paymentMethod: "visa"
		}
	]));
}
var delay = (ms = 200) => new Promise((res) => setTimeout(res, ms));
var api = {
	async login(email, password) {
		await delay();
		const users = readDB(DB_KEYS.USERS);
		const user = users.find((u) => u.email === email);
		if (!user) {
			if (email.endsWith("@thehostel.com")) throw new Error("Invalid admin credentials");
			const newUser = {
				id: `usr_${Date.now()}`,
				name: email.split("@")[0],
				email,
				role: "customer"
			};
			writeDB(DB_KEYS.USERS, [...users, newUser]);
			return newUser;
		}
		if (user.role !== "customer" && user.password !== password) throw new Error("Invalid password");
		const { password: _, ...safeUser } = user;
		return safeUser;
	},
	async getHostel(id) {
		await delay(100);
		return readDB(DB_KEYS.HOSTELS).find((h) => h.id === id);
	},
	async getAllHostels() {
		await delay(100);
		return readDB(DB_KEYS.HOSTELS);
	},
	async updateHostel(id, data) {
		await delay();
		const hostels = readDB(DB_KEYS.HOSTELS);
		const idx = hostels.findIndex((h) => h.id === id);
		if (idx === -1) throw new Error("Hostel not found");
		hostels[idx] = {
			...hostels[idx],
			...data
		};
		writeDB(DB_KEYS.HOSTELS, hostels);
		return hostels[idx];
	},
	async getBookings(filterHostelId) {
		await delay(100);
		const bookings = readDB(DB_KEYS.BOOKINGS);
		if (filterHostelId) return bookings.filter((b) => b.hostelId === filterHostelId);
		return bookings;
	},
	async createBooking(booking) {
		await delay();
		const bookings = readDB(DB_KEYS.BOOKINGS);
		const newBooking = {
			...booking,
			id: `BK${Date.now().toString(36).toUpperCase()}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "pending"
		};
		writeDB(DB_KEYS.BOOKINGS, [...bookings, newBooking]);
		return newBooking;
	},
	async updateBookingStatus(id, status) {
		await delay();
		const bookings = readDB(DB_KEYS.BOOKINGS);
		const idx = bookings.findIndex((b) => b.id === id);
		if (idx !== -1) {
			bookings[idx].status = status;
			writeDB(DB_KEYS.BOOKINGS, bookings);
		}
	},
	async getCoupons() {
		await delay();
		return readDB(DB_KEYS.COUPONS);
	},
	async updateCoupons(coupons) {
		await delay();
		writeDB(DB_KEYS.COUPONS, coupons);
	},
	async getReviews(filterHostelId) {
		await delay();
		const reviews = readDB(DB_KEYS.REVIEWS);
		if (filterHostelId) return reviews.filter((r) => r.hostelId === filterHostelId);
		return reviews;
	}
};
//#endregion
export { api as t };
