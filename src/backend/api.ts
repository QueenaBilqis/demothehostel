import { Hostel, HOSTELS } from "@/lib/hostels";

// Initialize mock DB
const DB_KEYS = {
  USERS: "api_db_users",
  HOSTELS: "api_db_hostels",
  BOOKINGS: "api_db_bookings",
  COUPONS: "api_db_coupons",
  REVIEWS: "api_db_reviews",
};

export type AdminRole = "bohemian" | "atelier" | "stellar";

export type ApiUser = {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: "customer" | AdminRole;
};

export type ApiBooking = {
  id: string;
  hostelId: string;
  roomId: string;
  guestName: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  total: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
  paymentMethod: string;
};

export type ApiCoupon = {
  id: string;
  code: string;
  discount: number;
  isActive: boolean;
};

export type ApiReview = {
  id: string;
  hostelId: string;
  guestName: string;
  rating: number;
  comment: string;
  date: string;
};

const readDB = <T>(key: string): T[] => {
  if (typeof window === "undefined") return [];
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : [];
};

const writeDB = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

// Seed initial database
if (typeof window !== "undefined") {
  if (!localStorage.getItem(DB_KEYS.HOSTELS)) {
    localStorage.setItem(DB_KEYS.HOSTELS, JSON.stringify(HOSTELS));
  }
  
  const users = readDB<ApiUser>(DB_KEYS.USERS);
  if (!users.find(u => u.role === "bohemian")) {
    const defaultAdmins: ApiUser[] = [
      { id: "admin-bohemian", name: "Bohemian Admin", email: "bohemian@thehostel.com", password: "Bohemian123", role: "bohemian" },
      { id: "admin-atelier", name: "Atelier Admin", email: "atelier@thehostel.com", password: "Atelier123", role: "atelier" },
      { id: "admin-stellar", name: "Stellar Admin", email: "stellar@thehostel.com", password: "Stellar123", role: "stellar" },
    ];
    // Merge if existing users
    writeDB(DB_KEYS.USERS, [...users, ...defaultAdmins]);
  }

  if (!localStorage.getItem(DB_KEYS.COUPONS)) {
    localStorage.setItem(DB_KEYS.COUPONS, JSON.stringify([
      { id: "c1", code: "WARM10", discount: 10, isActive: true },
      { id: "c2", code: "SUMMER20", discount: 20, isActive: false },
    ]));
  }

  if (!localStorage.getItem(DB_KEYS.REVIEWS)) {
    localStorage.setItem(DB_KEYS.REVIEWS, JSON.stringify([
      { id: "r1", hostelId: "bohemian", guestName: "Sarah M.", rating: 5, comment: "Amazing capsule hostel! Highly recommended.", date: new Date().toISOString() },
      { id: "r2", hostelId: "bohemian", guestName: "John D.", rating: 4, comment: "Very clean and comfortable.", date: new Date().toISOString() },
      { id: "r3", hostelId: "atelier", guestName: "Emily W.", rating: 5, comment: "The design is breathtaking.", date: new Date().toISOString() },
    ]));
  }

  if (!localStorage.getItem(DB_KEYS.BOOKINGS)) {
    localStorage.setItem(DB_KEYS.BOOKINGS, JSON.stringify([
      {
        id: "BK101",
        hostelId: "bohemian",
        roomId: "ss-upper-mixed",
        guestName: "Alice Wonderland",
        guestEmail: "alice@example.com",
        checkIn: new Date(Date.now() + 86400000).toISOString(),
        checkOut: new Date(Date.now() + 86400000 * 3).toISOString(),
        guests: 1,
        nights: 2,
        total: 76,
        status: "pending",
        createdAt: new Date().toISOString(),
        paymentMethod: "visa"
      },
      {
        id: "BK102",
        hostelId: "bohemian",
        roomId: "private-single",
        guestName: "Bob Builder",
        guestEmail: "bob@example.com",
        checkIn: new Date(Date.now() + 86400000 * 5).toISOString(),
        checkOut: new Date(Date.now() + 86400000 * 7).toISOString(),
        guests: 1,
        nights: 2,
        total: 156,
        status: "confirmed",
        createdAt: new Date().toISOString(),
        paymentMethod: "mastercard"
      },
      {
        id: "BK103",
        hostelId: "atelier",
        roomId: "vault-upper",
        guestName: "Charlie Chaplin",
        guestEmail: "charlie@example.com",
        checkIn: new Date(Date.now() - 86400000 * 2).toISOString(),
        checkOut: new Date(Date.now() - 86400000 * 1).toISOString(),
        guests: 1,
        nights: 1,
        total: 34,
        status: "completed",
        createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
        paymentMethod: "visa"
      }
    ]));
  }
}

// Helper to simulate network latency
const delay = (ms = 200) => new Promise(res => setTimeout(res, ms));

export const api = {
  // Auth
  async login(email: string, password?: string): Promise<ApiUser> {
    await delay();
    const users = readDB<ApiUser>(DB_KEYS.USERS);
    const user = users.find(u => u.email === email);
    
    // For customers, auto-create if not exists to simulate a frictionless login for this demo
    if (!user) {
      if (email.endsWith("@thehostel.com")) {
        throw new Error("Invalid admin credentials");
      }
      const newUser: ApiUser = {
        id: `usr_${Date.now()}`,
        name: email.split("@")[0],
        email,
        role: "customer"
      };
      writeDB(DB_KEYS.USERS, [...users, newUser]);
      return newUser;
    }
    
    if (user.role !== "customer" && user.password !== password) {
      throw new Error("Invalid password");
    }
    
    // Remove password from returned object
    const { password: _, ...safeUser } = user;
    return safeUser as ApiUser;
  },

  // Hostels
  async getHostel(id: string): Promise<Hostel | undefined> {
    await delay(100);
    const hostels = readDB<Hostel>(DB_KEYS.HOSTELS);
    return hostels.find(h => h.id === id);
  },

  async getAllHostels(): Promise<Hostel[]> {
    await delay(100);
    return readDB<Hostel>(DB_KEYS.HOSTELS);
  },

  async updateHostel(id: string, data: Partial<Hostel>): Promise<Hostel> {
    await delay();
    const hostels = readDB<Hostel>(DB_KEYS.HOSTELS);
    const idx = hostels.findIndex(h => h.id === id);
    if (idx === -1) throw new Error("Hostel not found");
    hostels[idx] = { ...hostels[idx], ...data };
    writeDB(DB_KEYS.HOSTELS, hostels);
    return hostels[idx];
  },

  // Bookings
  async getBookings(filterHostelId?: string): Promise<ApiBooking[]> {
    await delay(100);
    const bookings = readDB<ApiBooking>(DB_KEYS.BOOKINGS);
    if (filterHostelId) {
      return bookings.filter(b => b.hostelId === filterHostelId);
    }
    return bookings;
  },

  async createBooking(booking: Omit<ApiBooking, "id" | "createdAt" | "status">): Promise<ApiBooking> {
    await delay();
    const bookings = readDB<ApiBooking>(DB_KEYS.BOOKINGS);
    const newBooking: ApiBooking = {
      ...booking,
      id: `BK${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      status: "pending"
    };
    writeDB(DB_KEYS.BOOKINGS, [...bookings, newBooking]);
    return newBooking;
  },

  async updateBookingStatus(id: string, status: ApiBooking["status"]): Promise<void> {
    await delay();
    const bookings = readDB<ApiBooking>(DB_KEYS.BOOKINGS);
    const idx = bookings.findIndex(b => b.id === id);
    if (idx !== -1) {
      bookings[idx].status = status;
      writeDB(DB_KEYS.BOOKINGS, bookings);
    }
  },

  // Coupons
  async getCoupons(): Promise<ApiCoupon[]> {
    await delay();
    return readDB<ApiCoupon>(DB_KEYS.COUPONS);
  },
  
  async updateCoupons(coupons: ApiCoupon[]): Promise<void> {
    await delay();
    writeDB(DB_KEYS.COUPONS, coupons);
  },

  // Reviews
  async getReviews(filterHostelId?: string): Promise<ApiReview[]> {
    await delay();
    const reviews = readDB<ApiReview>(DB_KEYS.REVIEWS);
    if (filterHostelId) {
      return reviews.filter(r => r.hostelId === filterHostelId);
    }
    return reviews;
  }
};
