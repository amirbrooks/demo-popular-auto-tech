import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { business } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-asphalt text-cotton/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Popular Auto Tech
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {business.tagline}. Serving Shepparton and the Goulburn Valley
              with honest, transparent automotive care.
            </p>
            <div className="flex gap-3 text-sm">
              {business.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 border border-cotton/20 text-cotton/50 text-xs"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Smijo" },
                { href: "/roadworthy", label: "Roadworthy Certificates" },
                { href: "/contact", label: "Contact & Hours" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm hover:text-saffron transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={business.phoneTel}
                className="flex items-start gap-2 hover:text-saffron transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                {business.phone}
              </a>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener"
                className="flex items-start gap-2 hover:text-saffron transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {business.address}
              </a>
              <p className="text-cotton/40 pt-2">{business.hoursSummary}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cotton/10 text-xs text-cotton/30">
          © {new Date().getFullYear()} {business.legalName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
