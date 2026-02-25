import Image from "next/image";
import Link from "next/link";
import {
  business,
  signatureServices,
  additionalServices,
  reviews,
  images,
  quotes,
} from "@/lib/site-data";

export const metadata = {
  title: "Services — Popular Auto Tech Shepparton",
  description:
    "Log book servicing, roadworthy certificates, engine repair, diagnostics, tyres, batteries and more. VicRoads Approved, VACC Member.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-28 pb-16 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-3">
            Our Services
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-asphalt mb-4">
            Honest Work, Fair Pricing
          </h1>
          <p className="text-graphite/70 max-w-2xl leading-relaxed">
            {quotes.fromWebsite[0]}
          </p>

          <div className="proof-strip flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-graphite/60 mt-6">
            <span className="font-medium text-teal">
              {business.googleRating}★ from {business.googleReviews} reviews
            </span>
            <span className="text-stone">·</span>
            <span>VicRoads Approved</span>
            <span className="text-stone">·</span>
            <span>VACC Member</span>
          </div>
        </div>
      </section>

      {/* ── Signature Service 1: Log Book Servicing ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.mechanicWork}
                alt="Mechanic performing manufacturer-specified log book service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-saffron-light text-saffron text-xs font-heading font-medium uppercase tracking-wider mb-4">
                Signature Service
              </span>
              <h2 className="font-heading text-3xl font-bold text-asphalt mb-4">
                {signatureServices[0].name}
              </h2>
              <p className="text-graphite/70 leading-relaxed mb-6">
                {signatureServices[0].description}
              </p>
              <ul className="space-y-3 mb-8">
                {signatureServices[0].details.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-graphite/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={business.phoneTel}
                className="inline-block px-8 py-3 bg-teal text-white font-heading font-medium hover:bg-teal-deep transition-colors"
              >
                Book a Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Service 2: Roadworthy ── */}
      <section className="py-24 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.autoRepair}
                alt="Vehicle being inspected for roadworthy certificate"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <span className="inline-block px-3 py-1 bg-saffron-light text-saffron text-xs font-heading font-medium uppercase tracking-wider mb-4">
                Signature Service
              </span>
              <h2 className="font-heading text-3xl font-bold text-asphalt mb-4">
                {signatureServices[1].name}
              </h2>
              <p className="text-graphite/70 leading-relaxed mb-6">
                {signatureServices[1].description}
              </p>
              <ul className="space-y-3 mb-8">
                {signatureServices[1].details.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-graphite/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href="/roadworthy"
                className="inline-block px-8 py-3 bg-teal text-white font-heading font-medium hover:bg-teal-deep transition-colors"
              >
                Learn About RWC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section className="py-16 border-y border-stone">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-heading text-xl sm:text-2xl text-asphalt leading-snug">
            &ldquo;{reviews[1].text}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-graphite/50">
            — Google Review · {business.googleRating}★
          </p>
        </div>
      </section>

      {/* ── Additional Services: Numbered List ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-3">
            Also Available
          </p>
          <h2 className="font-heading text-3xl font-bold text-asphalt mb-12">
            Full Workshop Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {additionalServices.map((s, i) => (
              <div
                key={i}
                className="py-5 border-b border-stone/60 flex items-start gap-4"
              >
                <span className="font-heading text-sm font-bold text-stone w-8 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-asphalt mb-1">
                    {s.name}
                  </h3>
                  <p className="text-sm text-graphite/60">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-teal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Need a Service?
          </h2>
          <p className="text-white/70 mb-8">
            {business.hoursSummary} · {business.address}
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
