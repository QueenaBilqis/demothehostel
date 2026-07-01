import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { MobileFrame, Icon } from "@/components/MobileFrame";
import { useAuth } from "@/lib/auth";
import { useState } from "react";

export const Route = createFileRoute("/register")({
  component: Register,
});

function Register() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  const search: any = Route.useSearch();
  const redirect = search.redirect || "/";

  if (user) {
    navigate({ to: redirect });
    return null;
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    // Simulate register & auto login
    const newUser = {
      id: "user-" + Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      role: "customer" as const,
    };
    login(newUser);
    navigate({ to: redirect });
  };

  return (
    <MobileFrame>
      <div className="h-full flex flex-col px-6 pt-12 pb-6 bg-background relative overflow-y-auto">
        <button onClick={() => router.history.back()} className="absolute top-4 left-4 w-10 h-10 grid place-items-center rounded-full bg-secondary">
          <Icon name="arrow_back" className="text-[20px]" />
        </button>
        
        <div className="flex-1 mt-6">
          <h1 className="text-[28px] font-bold text-foreground">Create Account</h1>
          <p className="text-muted-foreground mt-2 text-[14px]">Join TheHostel for a premium booking experience.</p>

          <form onSubmit={handleRegister} className="mt-6 flex flex-col gap-4">
            {error && (
              <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-xl text-[13px] font-medium flex items-center gap-2">
                <Icon name="error" className="text-[16px]" />
                {error}
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Full Name</label>
              <div className="relative">
                <Icon name="person" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none focus:border-primary transition"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <Icon name="mail" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none focus:border-primary transition"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Phone Number</label>
              <div className="relative">
                <Icon name="call" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-[14px] outline-none focus:border-primary transition"
                  placeholder="+62 812 3456 7890"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-[14px] outline-none focus:border-primary transition"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wide">Confirm</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-secondary border border-border rounded-xl pl-4 pr-10 py-3 text-[14px] outline-none focus:border-primary transition"
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
            </div>

            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 mt-4 shadow-lg shadow-primary/20 active:scale-[0.98] transition">
              Create Account
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-[13px] text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" search={{ redirect }} className="text-primary font-semibold">Sign In</Link>
        </div>
      </div>
    </MobileFrame>
  );
}
