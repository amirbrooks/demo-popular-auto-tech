import Image from "next/image";
import Link from "next/link";
import {
  business,
  story,
  signatureServices,
  reviews,
  images,
  uniqueFeatures,
  quotes,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* ── Hero: Story-first ── */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Clean, professional auto workshop interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cloud via-cloud/95 to-cloud/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            {/* Proof strip — static, inline, not animated counters */}
            <div className="proof-strip flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-graphite/70 mb-6">
              <span className="font-medium text-teal">
                {business.googleRating}★ from {business.googleReviews} reviews
              </span>
              <span className="text-stone">·</span>
              <span>VicRoads Approved</span>
              <span className="text-stone">·</span>
              <span>VACC Member</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-asphalt leading-[1.1] mb-6">
              {story.headline}
            </h1>

            <p className="text-lg text-graphite/80 leading-relaxed mb-8 max-w-xl">
              {story.subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={business.phoneTel}
                className="inline-block px-8 py-3.5 bg-teal text-white font-heading font-medium tracking-wide hover:bg-teal-deep transition-colors"
              >
                Call {business.phone}
              </a>
              <Link
                href="/services"
                className="inline-block px-8 py-3.5 border-2 border-asphalt text-asphalt font-heading font-medium tracking-wide hover:bg-asphalt hover:text-cloud transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparent Workshop: Bespoke Section ── */}
      <section className="py-24 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 glass-divider">
            {/* Waiting Lounge Side */}
            <div className="pr-0 md:pr-12 pb-8 md:pb-0">
              <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-4">
                The Waiting Lounge
              </p>
              <h2 className="font-heading text-3xl font-bold text-asphalt mb-4">
                Watch Your Car Being Serviced
              </h2>
              <p className="text-graphite/70 leading-relaxed mb-6">
                Our customer lounge is designed for your comfort — Wi-Fi,
                refreshments, and a TV to keep you relaxed. But the best feature
                is the view: a clear line of sight into the workshop where your
                car is being worked on.
              </p>
              <ul className="space-y-3">
                {uniqueFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-graphite/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshop View Side */}
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={images.workshopClean}
                alt="Car being serviced in clean workshop, visible from reception"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-asphalt/80 to-transparent">
                <p className="text-white text-sm font-heading">
                  &ldquo;Nothing to hide. Everything to show.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Services: Editorial ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-3">
            Signature Services
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-asphalt mb-16">
            What We&apos;re Known For
          </h2>

          {/* Service 1: Image Left, Text Right */}
          <div className="grid md:grid-cols-5 gap-8 mb-20 items-center">
            <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.mechanicWork}
                alt="Mechanic performing log book service with diagnostic tools"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-3">
              <span className="text-6xl font-heading font-bold text-stone/50">
                01
              </span>
              <h3 className="font-heading text-2xl font-bold text-asphalt mt-2 mb-4">
                {signatureServices[0].name}
              </h3>
              <p className="text-graphite/70 leading-relaxed mb-4">
                {signatureServices[0].description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite/60">
                {signatureServices[0].details.map((d, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-teal rounded-full" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Service 2: Text Left, Image Right */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 md:order-1 order-2">
              <span className="text-6xl font-heading font-bold text-stone/50">
                02
              </span>
              <h3 className="font-heading text-2xl font-bold text-asphalt mt-2 mb-4">
                {signatureServices[1].name}
              </h3>
              <p className="text-graphite/70 leading-relaxed mb-4">
                {signatureServices[1].description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite/60">
                {signatureServices[1].details.map((d, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-teal rounded-full" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 md:order-2 order-1 relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.autoRepair}
                alt="Vehicle undergoing roadworthy inspection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section className="py-20 bg-saffron-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-heading text-2xl sm:text-3xl font-bold text-asphalt leading-snug">
            &ldquo;{reviews[0].text}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-graphite/60">
            — Google Review · {business.googleRating}★
          </p>
        </div>
      </section>

      {/* ── Smijo's Story Teaser ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-saffron font-heading font-medium mb-3">
                The Story
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-asphalt mb-6">
                25 Years of Expertise, One Address
              </h2>
              <p className="text-graphite/70 leading-relaxed mb-4">
                {story.origin}
              </p>
              <p className="text-graphite/70 leading-relaxed mb-6">
                {story.shepparton}
              </p>
              <div className="p-5 border-l-2 border-saffron bg-saffron-light/50 mb-6">
                <p className="text-sm text-graphite/80 italic">
                  Featured in <strong>{story.press.outlet}</strong>,{" "}
                  {story.press.date}: &ldquo;{story.press.title}&rdquo;
                </p>
              </div>
              <Link
                href="/about"
                className="text-teal font-heading font-medium editorial-link"
              >
                Read Smijo&apos;s full story →
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.community}
                alt="Smijo Paul and the Popular Auto Tech team serving the Shepparton community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-3">
            What Customers Say
          </p>
          <h2 className="font-heading text-3xl font-bold text-asphalt mb-12">
            {business.googleReviews} Reviews. {business.googleRating} Stars.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="border-t-2 border-teal pt-6">
                <div className="flex gap-1 mb-4 text-saffron text-sm">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <blockquote className="text-graphite/80 leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src={images.workshop2}
            alt="Professional automotive workshop tools"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-asphalt/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your Service Today
          </h2>
          <p className="text-cotton/70 mb-8">
            {business.hoursSummary} · 8 Callister Street, Shepparton
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneTel}
              className="inline-block px-10 py-4 bg-teal text-white font-heading font-medium tracking-wide hover:bg-teal-deep transition-colors"
            >
              Call {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border-2 border-white text-white font-heading font-medium tracking-wide hover:bg-white hover:text-asphalt transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
