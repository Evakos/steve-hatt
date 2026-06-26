import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fish, Truck, Clock, Heart } from "lucide-react";
import CreateAccountForm from "./form";

export const metadata: Metadata = {
  title: "Create Account | Steve Hatt Fishmongers",
  description: "Create an account for faster checkout, order history, and saved delivery preferences.",
};

const perks = [
  { icon: <Truck className="h-5 w-5" />, title: "Saved delivery address", desc: "Your postcode and delivery details, saved for next time." },
  { icon: <Clock className="h-5 w-5" />, title: "Order history", desc: "View and re-order your favourites with one click." },
  { icon: <Heart className="h-5 w-5" />, title: "Favourites", desc: "Save your regular cuts and preparations for quick ordering." },
  { icon: <Fish className="h-5 w-5" />, title: "No spam, ever", desc: "We'll only email you about your orders. No newsletters unless you ask." },
];

export default function CreateAccountPage() {
  return (
    <main className="flex flex-1 flex-col bg-cream">
      {/* Simple header */}
      <header className="border-b border-border/50 bg-white">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Link href="/">
            <Image src="/logo.svg" alt="Steve Hatt Fishmongers" width={180} height={80} className="h-12 w-auto" />
          </Link>
          <Link href="/#shop" className="bg-lobster px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-lobster/90" style={{ borderRadius: "3px" }}>
            Shop without an account
          </Link>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-widest text-text-light uppercase">Get started</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-navy">Create your account</h1>
            <p className="mt-2 text-sm text-text-light">
              Save your delivery details for faster checkout. No commitment, no spam.
            </p>

            <div className="mt-8">
              <CreateAccountForm />
            </div>

            <p className="mt-6 text-xs text-text-light">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-navy underline">Terms</a> and{" "}
              <a href="#" className="text-navy underline">Privacy Policy</a>.
            </p>

            <p className="mt-4 text-sm text-text-light">
              Already have an account?{" "}
              <a href="#" className="font-medium text-navy underline">Sign in</a>
            </p>
          </div>

          {/* Perks panel */}
          <div className="md:col-span-2">
            <div className="sticky top-28 border border-border bg-white p-8" style={{ borderRadius: "5px" }}>
              <h2 className="font-serif text-xl font-bold text-navy">Why create an account?</h2>
              <div className="mt-6 space-y-5">
                {perks.map((perk) => (
                  <div key={perk.title} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-teal">{perk.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-navy">{perk.title}</p>
                      <p className="mt-0.5 text-xs text-text-light">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs text-text-light">
                  <strong className="text-navy">Prefer not to create an account?</strong>{" "}
                  No problem at all. You can check your postcode and order as a guest — we'll only ask for the details needed for your delivery.
                </p>
                <Link
                  href="/#shop"
                  className="mt-4 inline-block w-full border border-navy px-5 py-3 text-center text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                  style={{ borderRadius: "3px" }}
                >
                  Continue as guest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-alt.svg" alt="Steve Hatt" width={120} height={50} className="h-8 w-auto" />
            </div>
            <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Steve Hatt Fishmongers</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
