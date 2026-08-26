import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { FilmstripGallery } from "@/components/FilmstripGallery";
import { ServicesList } from "@/components/ServicesList";
import { FounderTeaser } from "@/components/FounderTeaser";
import { PullQuote } from "@/components/PullQuote";
import { RealWeddingsGallery } from "@/components/RealWeddingsGallery";
import { MediaMentions } from "@/components/MediaMentions";
import { GoogleReviews } from "@/components/GoogleReviews";
import { OurProcess } from "@/components/OurProcess";
import { MarketsOverview } from "@/components/MarketsOverview";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.primaryCity} Wedding Planner | ${siteConfig.shortName}`,
  description:
    "Full-service, stress-free wedding planning across Albuquerque, Santa Fe, and Taos, New Mexico. Real logistics, expert design, memorable days.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/real-wedding-ambiance/ALP-147.jpg"
          alt="Real wedding reception poolside at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl uppercase leading-tight tracking-wide text-cream sm:text-4xl lg:whitespace-nowrap lg:text-4xl xl:text-5xl">
            Danielle Marisa Weddings &amp; Events
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-cream/90 sm:text-base">
            Albuquerque, Santa Fe &amp; Taos Wedding Planner
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
            Stress-free, expertly designed, and genuinely memorable weddings
            across Albuquerque, Santa Fe, and Taos — planned by an expert
            who&apos;s done it for 10+ years.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTA variant="outline-light" size="lg" />
            <CTA href="/about" variant="outline-light" size="lg">
              Meet Danielle
            </CTA>
          </div>
        </div>
      </section>

      <FilmstripGallery />

      <MarketsOverview />

      <ServicesList />

      <FounderTeaser />

      <OurProcess />

      <PullQuote
        quote="If I could give one piece of advice to any newly engaged couple, it's that Danielle is the most amazing gift you can give yourselves."
        name="Maya & Jordan"
        detail="Married at Los Poblanos, Albuquerque"
      />

      <RealWeddingsGallery />

      <GoogleReviews />

      <MediaMentions />

      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Ready to start planning?
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Tell us about your event and we&apos;ll follow up within one
            business day — or call{" "}
            <a href={siteConfig.phoneHref} className="text-accent-dark underline underline-offset-4">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
