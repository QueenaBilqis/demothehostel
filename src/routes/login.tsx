import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { useAuth } from "@/lib/auth";
import { api } from "@/backend/api";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  // Use search params for redirect
  const search: any = Route.useSearch();
  const redirect = search.redirect || "/";

  if (user) {
    if (user.role !== "customer") {
      navigate({ to: "/admin/dashboard" });
    } else {
      navigate({ to: redirect });
    }
    return null;
  }

  const quickLogin = async (role: string) => {
    let e = "";
    let p = "";
    if (role === "customer") {
      e = "demo@example.com";
      p = "Demo123!";
    } else if (role === "bohemian") {
      e = "bohemian@thehostel.com";
      p = "Bohemian123";
    } else if (role === "atelier") {
      e = "atelier@thehostel.com";
      p = "Atelier123";
    } else if (role === "stellar") {
      e = "stellar@thehostel.com";
      p = "Stellar123";
    }
    setEmail(e);
    setPassword(p);
    
    try {
      const u = await api.login(e, p);
      login(u);
      
      if (u.role !== "customer") {
        navigate({ to: "/admin/dashboard" });
      } else {
        navigate({ to: redirect });
      }
    } catch (err: any) {}
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const u = await api.login(email, password);
      login(u);
      
      if (u.role !== "customer") {
        navigate({ to: "/admin/dashboard" });
      } else {
        navigate({ to: redirect });
      }
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };



  return (
    <MobileFrame>
      <div className="h-full flex flex-col px-6 pt-12 pb-6 bg-background relative overflow-y-auto">
        <button onClick={() => router.history.back()} className="absolute top-4 left-4 w-10 h-10 grid place-items-center rounded-full bg-secondary">
          <Icon name="arrow_back" className="text-[20px]" />
        </button>
        
        <div className="flex-1 mt-10">
          <h1 className="text-[28px] font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2 text-[14px]">Sign in to continue your booking and view saved hostels.</p>

          <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-4">
            {error && (
              <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-xl text-[13px] font-medium flex items-center gap-2">
                <Icon name="error" className="text-[16px]" />
                {error}
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <Icon name="mail" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3.5 text-[14px] outline-none focus:border-primary transition"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Password</label>
              <div className="relative">
                <Icon name="lock" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl pl-10 pr-10 py-3.5 text-[14px] outline-none focus:border-primary transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  <Icon name={showPassword ? "visibility_off" : "visibility"} className="text-[18px]" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4" />
                <span className="text-[13px] text-muted-foreground">Remember Me</span>
              </label>
              <button type="button" className="text-primary text-[13px] font-semibold">Forgot Password?</button>
            </div>

            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 mt-4 shadow-lg shadow-primary/20 active:scale-[0.98] transition">
              Sign In
            </button>
          </form>
          
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-[12px] font-semibold text-muted-foreground uppercase text-center mb-4">Quick Demo Access</p>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => quickLogin("customer")} type="button" className="bg-secondary text-foreground text-[12px] font-medium py-2 rounded-lg hover:bg-secondary/80 transition">
                Demo Customer
              </button>
              <button onClick={() => quickLogin("bohemian")} type="button" className="bg-primary/10 text-primary text-[12px] font-medium py-2 rounded-lg hover:bg-primary/20 transition">
                Bohemian Admin
              </button>
              <button onClick={() => quickLogin("atelier")} type="button" className="bg-primary/10 text-primary text-[12px] font-medium py-2 rounded-lg hover:bg-primary/20 transition">
                Atelier Admin
              </button>
              <button onClick={() => quickLogin("stellar")} type="button" className="bg-primary/10 text-primary text-[12px] font-medium py-2 rounded-lg hover:bg-primary/20 transition">
                Stellar Admin
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-[13px] text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" search={{ redirect }} className="text-primary font-semibold">Register</Link>
        </div>
      </div>
    </MobileFrame>
  );
}
