import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.primaryCity} Wedding Planner | ${siteConfig.shortName}`,
  description:
    "Full-service, stress-free wedding planning across Albuquerque, Santa Fe, and Taos, New Mexico. Real logistics, expert design, memorable days.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Full-Service Planning",
    description:
      "From venue selection to final send-off, we handle every detail so you can actually be present on your wedding day.",
    href: "/albuquerque-wedding-planner#services",
  },
  {
    title: "Day-of Coordination",
    description:
      "You've done the planning — we step in a month out to run the timeline, vendors, and logistics flawlessly.",
    href: "/albuquerque-wedding-planner#services",
  },
  {
    title: "Destination Weddings",
    description:
      "Santa Fe adobe estates, Taos mountain views, high-desert vineyards — we plan New Mexico weddings for out-of-town couples.",
    href: "/destination-wedding-planner-new-mexico",
  },
  {
    title: "Elopements & Micro Weddings",
    description:
      "Intimate ceremonies at White Sands, the Sandias, or a Taos overlook, planned with the same care as a 200-guest wedding.",
    href: "/elopement-planner-new-mexico",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive-dark">
              New Mexico Wedding Planner
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {siteConfig.businessName} — {siteConfig.primaryCity} Wedding
              Planner
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              Danielle Marisa has coordinated weddings, corporate events, and
              VIP parties across New Mexico for 10+ years. We handle the
              logistics — you enjoy a stress-free, expertly designed, and
              genuinely memorable wedding day.
            </p>
            <div className="mt-8">
              <CTA size="lg" />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/hero-home.svg"
              alt="Placeholder photo of a New Mexico wedding reception — swap for real Danielle Marisa Weddings photography"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Who we help
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          We work with couples who want a wedding that feels like them — not
          a template — and who&apos;d rather hand the spreadsheet, the
          vendor calls, and the day-of timeline to someone who&apos;s done it
          hundreds of times. Whether you&apos;re getting married in your
          hometown of Albuquerque, planning a destination wedding in Santa
          Fe, or eloping in the mountains above Taos, we bring the same
          full-service care to every event.
        </p>
      </section>

      <section id="services" className="border-y border-border bg-olive-light/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
            How we can help
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
          What couples say
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Testimonial
            quote="Danielle handled every vendor call, every timeline shift, every small crisis — we just showed up and got married."
            name="Maya & Jordan"
            detail="Married at Hotel Andaluz, Albuquerque"
          />
          <Testimonial
            quote="We planned our wedding from out of state and never once felt lost. Danielle knew every venue in Santa Fe worth considering."
            name="Priya & Sam"
            detail="Destination wedding, Santa Fe"
          />
          <Testimonial
            quote="Our elopement in Taos felt intimate and completely unrushed, and it still ran like clockwork."
            name="Grace & Elena"
            detail="Elopement, Taos"
          />
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
            As featured in (placeholder — swap for real press logos)
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-soft/60">
            {["New Mexico Bride", "Duke City Weddings", "ABQ the Mag", "Southwest I Do"].map(
              (name) => (
                <span key={name} className="font-serif text-lg italic">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-ink">
          Ready to start planning?
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Tell us your date and venue and we&apos;ll follow up within one
          business day.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CTA size="lg" />
          <Link href="/albuquerque-wedding-planner" className="text-sm text-olive-dark underline underline-offset-4">
            Explore {siteConfig.primaryCity} wedding planning
          </Link>
        </div>
      </section>
    </>
  );
}
