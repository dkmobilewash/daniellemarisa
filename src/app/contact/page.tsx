import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Inquire | Danielle Marisa",
  description:
    "Inquire about wedding planning and coordination in Albuquerque, Santa Fe, and Taos, New Mexico. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Let&apos;s talk
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Inquire</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        Tell us about your event and we&apos;ll follow up within one
        business day. Prefer to talk it through first? Call or text{" "}
        <a href={siteConfig.phoneHref} className="text-accent-dark underline underline-offset-4">
          {siteConfig.phone}
        </a>
        .
      </p>

      <div className="mt-10 rounded-sm border border-border bg-paper p-6 sm:p-8">
        <ContactForm />
      </div>
    </div>
  );
}
