import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Thank You | Danielle Marisa",
  description: "Download your free Wedding Planning Timeline Checklist.",
  alternates: { canonical: "/wedding-planning-checklist/thank-you" },
  robots: { index: false, follow: true },
};

export default function ChecklistThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-ink">Thank you!</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        Your Wedding Planning Timeline Checklist is ready. We&apos;ve also
        sent a copy to your inbox.
      </p>
      <a
        href="/downloads/wedding-planning-checklist.pdf"
        download
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-ink px-8 py-4 text-base font-medium text-cream hover:bg-accent-dark"
      >
        Download the Checklist (PDF)
      </a>
      <p className="mt-10 text-ink-soft">
        Ready for a plan built specifically for your wedding?
      </p>
      <div className="mt-4">
        <CTA size="lg" />
      </div>
      <p className="mt-6 text-sm">
        <Link href="/" className="text-accent-dark underline underline-offset-4">
          Back to home
        </Link>
      </p>
    </div>
  );
}
