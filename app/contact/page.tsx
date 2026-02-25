import Image from "next/image";
import { business, images } from "@/lib/site-data";

export const metadata = {
  title: "Contact & Hours — Popular Auto Tech Shepparton",
  description:
    "Visit Popular Auto Tech at 8 Callister Street, Shepparton. Open Mon-Fri 8am-5pm, Sat 9am-4pm. Call (03) 5858 4400.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-28 pb-16 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-3">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-asphalt mb-4">
            Visit Us in Shepparton
          </h1>
          <p className="text-graphite/70 max-w-2xl leading-relaxed">
            8 Callister Street, Shepparton VIC 3630. Drop in during business
            hours or call ahead to book your service.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Hours */}
            <div className="md:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-asphalt mb-8">
                Opening Hours
              </h2>
              <div className="space-y-0">
                {business.hours.map((h, i) => {
                  const isToday = false; // Static — no runtime day detection needed
                  const isClosed = h.time === "Closed";
                  const isSaturday = h.day === "Saturday";
                  return (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-4 border-b border-stone/60 ${
                        isSaturday ? "bg-saffron-light/50 -mx-4 px-4" : ""
                      }`}
                    >
                      <span
                        className={`font-heading font-medium ${
                          isClosed ? "text-graphite/40" : "text-asphalt"
                        }`}
                      >
                        {h.day}
                        {isSaturday && (
                          <span className="ml-2 text-xs text-saffron font-normal uppercase tracking-wider">
                            Open Saturdays
                          </span>
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          isClosed ? "text-graphite/40" : "text-graphite/70"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-sm font-semibold text-asphalt uppercase tracking-wider mb-4">
                  Phone
                </h3>
                <a
                  href={business.phoneTel}
                  className="text-2xl font-heading font-bold text-teal hover:text-teal-deep transition-colors"
                >
                  {business.phone}
                </a>
              </div>

              <div>
                <h3 className="font-heading text-sm font-semibold text-asphalt uppercase tracking-wider mb-4">
                  Email
                </h3>
                <a
                  href={`mailto:${business.email}`}
                  className="text-teal hover:text-teal-deep transition-colors editorial-link"
                >
                  {business.email}
                </a>
              </div>

              <div>
                <h3 className="font-heading text-sm font-semibold text-asphalt uppercase tracking-wider mb-4">
                  Address
                </h3>
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-graphite/70 hover:text-teal transition-colors leading-relaxed block"
                >
                  {business.address}
                </a>
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-3 text-sm text-teal font-heading font-medium editorial-link"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="pt-4 border-t border-stone">
                <h3 className="font-heading text-sm font-semibold text-asphalt uppercase tracking-wider mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  {business.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="block text-sm text-graphite/70"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder / Image ── */}
      <section className="relative h-64 md:h-80">
        <Image
          src={images.workshop2}
          alt="Popular Auto Tech workshop at 8 Callister Street, Shepparton"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-asphalt/60 flex items-center justify-center">
          <a
            href={business.mapUrl}
            target="_blank"
            rel="noopener"
            className="px-8 py-3 bg-white text-asphalt font-heading font-medium hover:bg-cotton transition-colors"
          >
            Get Directions on Google Maps
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-teal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-white/70 mb-8">
            Call Smijo directly. Same-day service often available.
          </p>
          <a
            href={business.phoneTel}
            className="inline-block px-10 py-4 bg-white text-teal font-heading font-medium hover:bg-cotton transition-colors"
          >
            Call {business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
