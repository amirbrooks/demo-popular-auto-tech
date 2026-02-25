import Image from "next/image";
import Link from "next/link";
import { business, story, reviews, images, quotes } from "@/lib/site-data";

export const metadata = {
  title: "About Smijo Paul — Popular Auto Tech Shepparton",
  description:
    "From India to Shepparton: Smijo Paul's 25-year journey to becoming the region's most-reviewed mechanic. Featured in Shepparton News.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-28 pb-16 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-saffron font-heading font-medium mb-3">
            About Smijo Paul
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-asphalt mb-4 max-w-3xl">
            A Journey from India to Shepparton&apos;s Most-Trusted Workshop
          </h1>
          <p className="text-graphite/70 max-w-2xl leading-relaxed">
            {business.yearsExperience} years of expertise. {business.googleReviews}{" "}
            five-star reviews. One address: 8 Callister Street.
          </p>
        </div>
      </section>

      {/* ── The Story: Magazine-style ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Main narrative — wider column */}
            <div className="md:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-asphalt mb-6">
                The Beginning
              </h2>
              <p className="text-graphite/80 leading-relaxed mb-6">
                {story.origin}
              </p>
              <p className="text-graphite/80 leading-relaxed mb-6">
                In India, Smijo spent over a decade as a senior technician at a
                multi-brand dealership — working on everything from Japanese
                daily drivers to European luxury vehicles. He developed a
                reputation for diagnostics that others couldn&apos;t crack, and for
                a work ethic that never cut corners.
              </p>

              <h2 className="font-heading text-2xl font-bold text-asphalt mb-6 mt-12">
                Building in Shepparton
              </h2>
              <p className="text-graphite/80 leading-relaxed mb-6">
                {story.shepparton}
              </p>
              <p className="text-graphite/80 leading-relaxed mb-6">
                The workshop at 8 Callister Street wasn&apos;t just another
                mechanic shop. Smijo designed it with a customer waiting lounge —
                Wi-Fi, refreshments, a TV — but more importantly, with a glass
                wall looking directly into the workshop. You can watch your car
                being serviced. Nothing hidden, nothing to question.
              </p>

              <h2 className="font-heading text-2xl font-bold text-asphalt mb-6 mt-12">
                The Philosophy
              </h2>
              <p className="text-graphite/80 leading-relaxed mb-6">
                {story.philosophy}
              </p>
              <p className="text-graphite/80 leading-relaxed">
                That approach has earned Popular Auto Tech something remarkable:
                {" "}{business.googleReviews} Google reviews with a{" "}
                {business.googleRating}-star average. In a regional town like
                Shepparton, that doesn&apos;t come from marketing — it comes from
                every single customer leaving satisfied.
              </p>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-8">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={images.community}
                  alt="Smijo Paul and the Popular Auto Tech community"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Press feature */}
              <div className="p-6 bg-saffron-light border-l-2 border-saffron">
                <p className="text-xs uppercase tracking-widest text-saffron font-heading font-medium mb-3">
                  In The Press
                </p>
                <h3 className="font-heading font-bold text-asphalt mb-2">
                  {story.press.outlet}
                </h3>
                <p className="text-sm text-graphite/70 italic mb-2">
                  &ldquo;{story.press.title}&rdquo;
                </p>
                <p className="text-xs text-graphite/50">
                  By {story.press.journalist} · {story.press.date}
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium">
                  Credentials
                </p>
                {business.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="py-3 border-b border-stone text-sm text-asphalt font-medium"
                  >
                    {cert}
                  </div>
                ))}
                <div className="py-3 border-b border-stone text-sm text-asphalt font-medium">
                  {business.yearsExperience}+ Years Experience
                </div>
                <div className="py-3 border-b border-stone text-sm text-asphalt font-medium">
                  All Major Brands — Japanese, European, Australian
                </div>
              </div>

              {/* Quote */}
              <blockquote className="py-6 border-t-2 border-teal">
                <p className="text-graphite/70 italic text-sm leading-relaxed">
                  &ldquo;{quotes.fromWebsite[1]}&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Break ── */}
      <section className="relative h-72 md:h-96">
        <Image
          src={images.hero}
          alt="Inside Popular Auto Tech's clean workshop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cloud to-transparent" />
      </section>

      {/* ── Family & Community ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-asphalt mb-6">
            Family & Community
          </h2>
          <p className="text-graphite/80 leading-relaxed mb-6">
            Smijo&apos;s wife Berly has been part of the journey from the start.
            Together, they&apos;ve made Shepparton their home, raising a family while
            building a business that the community depends on. The Shepparton
            News profile, published in November 2023, captured this beautifully —
            a story about migration, determination, and the kind of work ethic
            that earns 534 five-star reviews.
          </p>
          <p className="text-graphite/80 leading-relaxed mb-8">
            Popular Auto Tech isn&apos;t just where Shepparton gets its cars
            serviced. It&apos;s a small business that represents the best of what
            regional Australia looks like: skilled migrants who bring expertise,
            invest in their community, and build something genuine.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-teal text-white font-heading font-medium hover:bg-teal-deep transition-colors"
          >
            Visit Us at 8 Callister Street
          </Link>
        </div>
      </section>
    </>
  );
}
