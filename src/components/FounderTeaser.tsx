import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Flourish } from "@/components/Flourish";
import { siteConfig } from "@/lib/site-config";

export function FounderTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-sm border border-border p-8 sm:p-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/about-danielle-2.svg"
            alt="Placeholder photo of Danielle Marisa and her team — swap for a real team photo"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-serif text-xl italic text-ink-soft">
            Rooted in New Mexico, working every wedding herself
          </p>
          <h2 className="mt-2 font-serif text-3xl uppercase tracking-wide text-ink sm:text-4xl">
            We Are {siteConfig.shortName}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            The best celebrations begin with an exceptional plan. Danielle
            has spent 10+ years coordinating weddings, corporate events, and
            VIP parties across Albuquerque, Santa Fe, and Taos — bringing
            the same hands-on care to every single one.
          </p>
          <div className="mt-6">
            <CTA href="/about">Meet Danielle</CTA>
          </div>
          <Flourish className="mt-8 h-10 w-40 text-accent-dark" />
        </div>
      </div>
    </section>
  );
}
