import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Free Wedding Checklist | Danielle Marisa",
  description:
    "Download our free month-by-month wedding planning timeline checklist, built from 10+ years of planning New Mexico weddings.",
  alternates: { canonical: "/wedding-planning-checklist" },
};

export default function ChecklistLandingPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive-dark">
          Free Download
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink">
          The Wedding Planning Timeline Checklist
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The same month-by-month checklist we use to keep our full-service
          clients on track — from 12 months out through your wedding week.
          Get it sent straight to your inbox, free.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-ink-soft">
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-olive-dark">&#10003;</span>
            What to book first (and what can wait)
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-olive-dark">&#10003;</span>
            A realistic month-by-month timeline
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-olive-dark">&#10003;</span>
            Questions to ask every vendor before you book
          </li>
        </ul>
        <p className="mt-6 text-sm text-ink-soft">
          Want a full plan built specifically for your wedding? See our{" "}
          <Link href="/albuquerque-wedding-planner" className="text-olive-dark underline underline-offset-4">
            planning packages
          </Link>
          .
        </p>
      </div>

      <div>
        <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-sm shadow-lg sm:w-64">
          <Image
            src="/images/checklist-cover.svg"
            alt="Placeholder cover of the Wedding Planning Timeline Checklist — swap for a designed PDF cover mockup"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="mt-8 rounded-sm border border-border bg-paper p-6">
          <LeadMagnetForm
            title="Get the checklist"
            description="Enter your email and we'll send it right over."
          />
        </div>
      </div>
    </div>
  );
}
