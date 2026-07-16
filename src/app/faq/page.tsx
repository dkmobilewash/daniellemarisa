import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { faqSchema } from "@/lib/schema";
import { siteFaqs } from "@/lib/faq";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Wedding Planning FAQ | Danielle Marisa",
  description:
    "Answers to the most common questions about cost, timelines, and what's included in wedding planning and coordination in New Mexico.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData data={faqSchema(siteFaqs)} />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        FAQ
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">
        Wedding Planning FAQ
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        The questions we hear most from couples across Albuquerque, Santa
        Fe, and Taos — answered plainly.
      </p>

      <div className="mt-10">
        <FAQAccordion items={siteFaqs} />
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">Still have questions?</h2>
        <p className="mt-2 text-ink-soft">
          Read more about how we work on{" "}
          <Link href="/about" className="text-accent-dark underline underline-offset-4">
            our About page
          </Link>
          , or reach out directly.
        </p>
        <div className="mt-6">
          <CTA />
        </div>
      </div>
    </div>
  );
}
