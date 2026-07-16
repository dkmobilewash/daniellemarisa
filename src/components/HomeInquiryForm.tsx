"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * Compact, qualifying inquiry form embedded directly on the homepage —
 * capturing event date, guest count, and budget range up front so the
 * first conversation is already scoped, rather than a bare "contact us"
 * link buried behind a page navigation.
 */
export function HomeInquiryForm() {
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
          weddingDate: data.get("weddingDate"),
          guestCount: data.get("guestCount"),
          budgetRange: data.get("budgetRange"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2";

  if (status === "success") {
    return (
      <div role="status" className="rounded-sm border border-accent bg-accent-light/40 p-8 text-center">
        <h3 className="font-serif text-2xl text-ink">Thank you!</h3>
        <p className="mt-2 text-ink-soft">
          Your inquiry is in — we&apos;ll follow up within one business day.
          Prefer to talk sooner? Call or text{" "}
          <a href={siteConfig.phoneHref} className="text-accent-dark underline underline-offset-4">
            {siteConfig.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="home-name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input id="home-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="home-email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input id="home-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="home-weddingDate" className="block text-sm font-medium text-ink">
          Wedding date
        </label>
        <input
          id="home-weddingDate"
          name="weddingDate"
          type="text"
          placeholder="or rough timeframe"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="home-guestCount" className="block text-sm font-medium text-ink">
          Guest count
        </label>
        <select id="home-guestCount" name="guestCount" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a range
          </option>
          <option value="Under 30 (elopement/micro)">Under 30 (elopement/micro)</option>
          <option value="30–75">30–75</option>
          <option value="75–150">75–150</option>
          <option value="150+">150+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="home-budgetRange" className="block text-sm font-medium text-ink">
          Estimated budget
        </label>
        <select id="home-budgetRange" name="budgetRange" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a range
          </option>
          <option value="Under $10k">Under $10k</option>
          <option value="$10k–$25k">$10k–$25k</option>
          <option value="$25k–$50k">$25k–$50k</option>
          <option value="$50k+">$50k+</option>
          <option value="Still figuring it out">Still figuring it out</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="home-message" className="block text-sm font-medium text-ink">
          Anything else we should know? <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea id="home-message" name="message" rows={3} className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-sm bg-accent-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-cream hover:bg-ink disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Sending..." : siteConfig.ctaLabel}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-2 text-sm text-red-700">
            Something went wrong — please try again or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
