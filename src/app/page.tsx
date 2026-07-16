import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { EditorialRow } from "@/components/EditorialRow";
import { PressStrip } from "@/components/PressStrip";
import { HomeInquiryForm } from "@/components/HomeInquiryForm";
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
    emphasis: "Full-Service",
    description:
      "From venue selection to final send-off, we handle every detail so you can actually be present on your wedding day.",
    href: "/albuquerque-wedding-planner#services",
    image: "/images/service-full-planning.svg",
    imageAlt: "Placeholder photo representing full-service wedding planning — swap for real wedding photography",
  },
  {
    title: "Day-of Coordination",
    emphasis: "Day-of",
    description:
      "You've done the planning — we step in a month out to run the timeline, vendors, and logistics flawlessly.",
    href: "/albuquerque-wedding-planner#services",
    image: "/images/service-day-of.svg",
    imageAlt: "Placeholder photo representing day-of wedding coordination — swap for real wedding photography",
  },
  {
    title: "Destination Weddings",
    emphasis: "Destination",
    description:
      "Santa Fe adobe estates, Taos mountain views, high-desert vineyards — we plan New Mexico weddings for out-of-town couples.",
    href: "/destination-wedding-planner-new-mexico",
    image: "/images/service-destination.svg",
    imageAlt: "Placeholder photo representing a New Mexico destination wedding — swap for real wedding photography",
  },
  {
    title: "Elopements & Micro Weddings",
    emphasis: "Elopements",
    description:
      "Intimate ceremonies at White Sands, the Sandias, or a Taos overlook, planned with the same care as a 200-guest wedding.",
    href: "/elopement-planner-new-mexico",
    image: "/images/service-elopement.svg",
    imageAlt: "Placeholder photo representing an elopement in New Mexico — swap for real wedding photography",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
              New Mexico Wedding Planner
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {siteConfig.businessName}
              <span className="mt-1 block italic text-accent-dark">
                — {siteConfig.primaryCity} Wedding Planner
              </span>
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

      <PressStrip />

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Who we help
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          We work with couples who want a wedding that feels like{" "}
          <em className="text-accent-dark italic">them</em> — not
          a template — and who&apos;d rather hand the spreadsheet, the
          vendor calls, and the day-of timeline to someone who&apos;s done it
          hundreds of times. Whether you&apos;re getting married in your
          hometown of Albuquerque, planning a destination wedding in Santa
          Fe, or eloping in the mountains above Taos, we bring the same
          full-service care to every event.
        </p>
      </section>

      <section id="services" className="border-y border-border bg-paper">
        <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8 md:space-y-24">
          <h2 className="text-center font-serif text-3xl text-ink sm:text-4xl">
            How we can help
          </h2>
          {services.map((s, i) => (
            <EditorialRow
              key={s.title}
              eyebrow={`0${i + 1}`}
              title={s.title}
              emphasis={s.emphasis}
              description={s.description}
              href={s.href}
              image={s.image}
              imageAlt={s.imageAlt}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl text-ink sm:text-4xl">
          What couples say
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Testimonial
            quote="Danielle handled every vendor call, every timeline shift, every small crisis — we just showed up and got married."
            name="Maya & Jordan"
            detail="Married at Hotel Andaluz, Albuquerque"
            image={{
              src: "/images/testimonial-1.svg",
              alt: "Placeholder photo of Maya & Jordan's wedding at Hotel Andaluz — swap for a real client photo",
            }}
          />
          <Testimonial
            quote="We planned our wedding from out of state and never once felt lost. Danielle knew every venue in Santa Fe worth considering."
            name="Priya & Sam"
            detail="Destination wedding, Santa Fe"
            image={{
              src: "/images/testimonial-2.svg",
              alt: "Placeholder photo of Priya & Sam's destination wedding in Santa Fe — swap for a real client photo",
            }}
          />
          <Testimonial
            quote="Our elopement in Taos felt intimate and completely unrushed, and it still ran like clockwork."
            name="Grace & Elena"
            detail="Elopement, Taos"
            image={{
              src: "/images/testimonial-3.svg",
              alt: "Placeholder photo of Grace & Elena's elopement in Taos — swap for a real client photo",
            }}
          />
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Ready to start planning?
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Tell us a little about your wedding and we&apos;ll follow up
              within one business day — no commitment, just a conversation.
            </p>
          </div>
          <div className="mt-10">
            <HomeInquiryForm />
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            Prefer to explore first?{" "}
            <Link href="/albuquerque-wedding-planner" className="text-accent-dark underline underline-offset-4">
              See {siteConfig.primaryCity} planning packages
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
