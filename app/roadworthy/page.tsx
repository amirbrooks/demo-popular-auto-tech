import Image from "next/image";
import { business, signatureServices, images } from "@/lib/site-data";

export const metadata = {
  title: "Roadworthy Certificates (RWC) — Popular Auto Tech Shepparton",
  description:
    "VicRoads Approved roadworthy testing centre in Shepparton. Comprehensive vehicle inspections for registration transfers and re-registration.",
};

const rwcSteps = [
  {
    num: "01",
    title: "Book Your Inspection",
    text: "Call us on (03) 5858 4400 or drop in during business hours. We can usually inspect your vehicle the same day or next business day.",
  },
  {
    num: "02",
    title: "Multi-Point Inspection",
    text: "Our VicRoads-approved technicians inspect brakes, steering, suspension, tyres, lights, windscreen, seatbelts, exhaust, and structural integrity — covering every item on the VicRoads checklist.",
  },
  {
    num: "03",
    title: "Clear Report",
    text: "If your vehicle passes, you receive the Roadworthy Certificate on the spot. If repairs are needed, we provide a detailed report explaining exactly what's required — no vague language, no unnecessary extras.",
  },
  {
    num: "04",
    title: "Repairs On-Site",
    text: "If your vehicle needs work to pass, we can handle the repairs right here at 8 Callister Street. No need to take your car elsewhere and come back — we take care of everything under one roof.",
  },
];

const whenYouNeed = [
  "Selling a registered vehicle in Victoria",
  "Re-registering a vehicle that's been unregistered",
  "Transferring registration to a new owner",
  "Clearing a VicRoads defect notice",
  "Registering an interstate vehicle in Victoria",
];

export default function RoadworthyPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-28 pb-16 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-heading font-medium uppercase tracking-wider">
              VicRoads Approved
            </span>
            <span className="inline-block px-3 py-1 bg-saffron-light text-saffron text-xs font-heading font-medium uppercase tracking-wider">
              VACC Member
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-asphalt mb-4 max-w-3xl">
            Roadworthy Certificates
          </h1>
          <p className="text-graphite/70 max-w-2xl leading-relaxed">
            {signatureServices[1].description}
          </p>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="relative h-64 md:h-80">
        <Image
          src={images.autoRepair}
          alt="Vehicle being inspected for roadworthy certificate at Popular Auto Tech"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cotton to-transparent opacity-60" />
      </section>

      {/* ── Process Steps ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-teal font-heading font-medium mb-3">
            The Process
          </p>
          <h2 className="font-heading text-3xl font-bold text-asphalt mb-16">
            What to Expect
          </h2>

          <div className="space-y-0">
            {rwcSteps.map((step, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-6 py-10 border-b border-stone/60"
              >
                <div className="md:col-span-1">
                  <span className="font-heading text-3xl font-bold text-stone/40">
                    {step.num}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading text-lg font-bold text-asphalt">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-graphite/70 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── When You Need an RWC ── */}
      <section className="py-24 bg-cotton">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-saffron font-heading font-medium mb-3">
                Do You Need One?
              </p>
              <h2 className="font-heading text-3xl font-bold text-asphalt mb-6">
                When You Need a Roadworthy Certificate
              </h2>
              <p className="text-graphite/70 leading-relaxed mb-8">
                In Victoria, a Certificate of Roadworthiness (RWC) is required
                in specific situations. If you&apos;re unsure whether you need one,
                give Smijo a call — he&apos;ll let you know straight away.
              </p>
              <ul className="space-y-4">
                {whenYouNeed.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-graphite/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cloud p-8 border-t-2 border-teal">
              <h3 className="font-heading text-xl font-bold text-asphalt mb-4">
                What We Inspect
              </h3>
              <p className="text-graphite/70 text-sm leading-relaxed mb-6">
                Our VicRoads-approved inspection covers every safety-critical
                system on your vehicle:
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-graphite/80">
                {[
                  "Brakes & brake lines",
                  "Steering system",
                  "Suspension",
                  "Tyres & wheels",
                  "Lights & indicators",
                  "Windscreen & wipers",
                  "Seatbelts",
                  "Exhaust system",
                  "Body & chassis",
                  "Engine operation",
                ].map((item, i) => (
                  <span key={i} className="py-1 border-b border-stone/40">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-asphalt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Need a Roadworthy?
          </h2>
          <p className="text-cotton/60 mb-2">
            Same-day inspections often available. Call to book.
          </p>
          <p className="text-cotton/40 text-sm mb-8">
            {business.hoursSummary} · {business.address}
          </p>
          <a
            href={business.phoneTel}
            className="inline-block px-10 py-4 bg-teal text-white font-heading font-medium hover:bg-teal-deep transition-colors"
          >
            Call {business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
