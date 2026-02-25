"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/lib/site-data";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Smijo" },
    { href: "/roadworthy", label: "Roadworthy" },
    { href: "/contact", label: "Contact" },
  ];

  const prefix = process.env.NODE_ENV === "production" ? "/lead/popular-auto-tech" : "";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cloud/95 backdrop-blur-sm border-b border-stone">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-asphalt">
          Popular Auto Tech
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-graphite hover:text-teal transition-colors editorial-link"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneTel}
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-deep transition-colors"
          >
            <Phone className="w-4 h-4" />
            {business.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-asphalt"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cloud border-b border-stone px-6 pb-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-graphite hover:text-teal transition-colors border-b border-stone/50 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneTel}
            className="inline-flex items-center gap-2 mt-4 text-teal font-medium"
          >
            <Phone className="w-4 h-4" />
            {business.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
