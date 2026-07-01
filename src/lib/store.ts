import { useEffect, useState } from "react";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = window.localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function useLocalState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => read<T>(key, initial));
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  
  return [state, setState] as const;
}

export type Booking = {
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
  status: "upcoming" | "completed" | "cancelled";
  createdAt: string;
};

export function useWishlist() {
  return useLocalState<string[]>("hostel.wishlist", []);
}

export function useBookings() {
  return useLocalState<Booking[]>("hostel.bookings", []);
}

export function useLanguage() {
  return useLocalState<"en" | "id">("hostel.language", "en");
}

export function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-SG", { style: "currency", currency: "SGD", maximumFractionDigits: 0 }).format(n);
}

export function daysBetween(a: string, b: string) {
  if (!a || !b) return 0;
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)));
}