"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const CALENDLY_URL = "https://calendly.com/hello-daniellemarisa/30min";

const EVENT_TYPES = [
  "Wedding",
  "Elopement / Micro Wedding",
  "Destination Wedding",
  "Private Event",
  "Corporate Event",
  "Other",
];

const GUEST_ESTIMATES = ["Under 25", "25–50", "51–100", "101–150", "151–200", "200+"];

const SERVICES = [
  "Full-Service Planning",
  "Day-of Coordination",
  "Destination Wedding Planning",
  "Elopement Planning",
  "Private Event Planning",
  "Corporate Event Planning",
  "Concierge Services",
  "Not sure yet",
];

const inputClass =
  "mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          eventType: data.get("eventType"),
          dateStart: data.get("dateStart"),
          dateEnd: data.get("dateEnd"),
          guestEstimate: data.get("guestEstimate"),
          eventScope: data.get("eventScope"),
          service: data.get("service"),
          budget: data.get("budget"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-sm border border-accent bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">Thank you!</h2>
        <p className="mt-2 text-ink-soft">
          Your inquiry is in — we&apos;ll follow up within one business day.
          Need something sooner? Call or text{" "}
          <a href={siteConfig.phoneHref} className="text-accent-dark underline underline-offset-4">
            {siteConfig.phone}
          </a>
          .
        </p>
        <div className="mt-6">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-none border border-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors duration-150 hover:bg-ink hover:text-cream"
          >
            Book a 15-Minute Consultation
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-ink">
          Event type
        </label>
        <select id="eventType" name="eventType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select an event type
          </option>
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dateStart" className="block text-sm font-medium text-ink">
            Date <span className="font-normal text-ink-soft">(or start date)</span>
          </label>
          <input id="dateStart" name="dateStart" type="date" className={inputClass} />
        </div>
        <div>
          <label htmlFor="dateEnd" className="block text-sm font-medium text-ink">
            End date <span className="font-normal text-ink-soft">(if multi-day)</span>
          </label>
          <input id="dateEnd" name="dateEnd" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="guestEstimate" className="block text-sm font-medium text-ink">
          Guest estimate <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <select id="guestEstimate" name="guestEstimate" defaultValue="" className={inputClass}>
          <option value="">Not sure yet</option>
          {GUEST_ESTIMATES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="eventScope" className="block text-sm font-medium text-ink">
          Event scope <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="eventScope"
          name="eventScope"
          type="text"
          placeholder="e.g. ceremony + reception, welcome dinner, multi-day weekend"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink">
          What service are you interested in?
        </label>
        <select id="service" name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-ink">
          Event budget <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="e.g. $5,000–$10,000, or 'not sure yet'"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-sm bg-ink px-6 py-3 text-sm font-medium text-cream hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : siteConfig.ctaLabel}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong — please try again or email{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
