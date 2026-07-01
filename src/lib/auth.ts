import { useState, useEffect } from "react";
import type { ApiUser } from "@/backend/api";

// Initial state - will load from localStorage in the hook
let currentUser: ApiUser | null = null;
if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem("hostel.auth");
  if (stored) {
    try {
      currentUser = JSON.parse(stored);
    } catch {}
  }
}

// Subscribe mechanism for multiple components
const listeners = new Set<(user: ApiUser | null) => void>();

export function useAuth() {
  const [user, setUser] = useState<ApiUser | null>(currentUser);

  useEffect(() => {
    listeners.add(setUser);
    return () => {
      listeners.delete(setUser);
    };
  }, []);

  const login = (u: ApiUser) => {
    currentUser = u;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("hostel.auth", JSON.stringify(u));
    }
    listeners.forEach((fn) => fn(u));
  };

  const logout = () => {
    currentUser = null;
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("hostel.auth");
    }
    listeners.forEach((fn) => fn(null));
  };

  return { user, login, logout };
}
