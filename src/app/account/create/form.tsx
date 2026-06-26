"use client";

import { useState } from "react";
import { Mail, Lock, User, MapPin, Eye, EyeOff, CheckCircle, Loader2 } from "lucide-react";

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    postcode: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate account creation
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-teal/30 bg-teal-light p-8 text-center" style={{ borderRadius: "5px" }}>
        <CheckCircle className="mx-auto h-10 w-10 text-teal" />
        <h2 className="mt-4 font-serif text-xl font-bold text-navy">Account created!</h2>
        <p className="mt-2 text-sm text-text-light">
          Welcome to Steve Hatt, <strong>{form.name}</strong>. Your delivery details have been saved.
        </p>
        <a
          href="/#shop"
          className="mt-6 inline-block bg-lobster px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-lobster/90"
          style={{ borderRadius: "3px" }}
        >
          Start shopping
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          Full name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light" />
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Jamie Oliver"
            className="w-full border border-border bg-white py-3 pl-9 pr-4 text-sm text-navy outline-none placeholder:text-text-light focus:border-navy"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light" />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-border bg-white py-3 pl-9 pr-4 text-sm text-navy outline-none placeholder:text-text-light focus:border-navy"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-navy">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            value={form.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            className="w-full border border-border bg-white py-3 pl-9 pr-10 text-sm text-navy outline-none placeholder:text-text-light focus:border-navy"
            style={{ borderRadius: "3px" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-navy"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Postcode */}
      <div>
        <label htmlFor="postcode" className="mb-1.5 block text-sm font-medium text-navy">
          Delivery postcode <span className="text-text-light font-normal">(optional — saves checking next time)</span>
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light" />
          <input
            id="postcode"
            name="postcode"
            type="text"
            value={form.postcode}
            onChange={handleChange}
            placeholder="e.g. N1 8LU"
            className="w-full border border-border bg-white py-3 pl-9 pr-4 text-sm text-navy outline-none placeholder:text-text-light focus:border-navy"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-navy px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-navy/90 disabled:cursor-wait disabled:opacity-70"
        style={{ borderRadius: "3px" }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating account…
          </span>
        ) : (
          "Create account"
        )}
      </button>
    </form>
  );
}
