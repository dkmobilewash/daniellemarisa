"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

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
          weddingDate: data.get("weddingDate"),
          venue: data.get("venue"),
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

  if (status === "success") {
    return (
      <div role="status" className="rounded-sm border border-olive bg-olive-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">Thank you!</h2>
        <p className="mt-2 text-ink-soft">
          Your inquiry is in — we&apos;ll follow up within one business day.
          Need something sooner? Call or text{" "}
          <a href={siteConfig.phoneHref} className="text-olive-dark underline underline-offset-4">
            {siteConfig.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      <div>
        <label htmlFor="weddingDate" className="block text-sm font-medium text-ink">
          Wedding date <span className="font-normal text-ink-soft">(or rough timeframe)</span>
        </label>
        <input
          id="weddingDate"
          name="weddingDate"
          type="text"
          placeholder="e.g. October 2027, or 'not sure yet'"
          className="mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      <div>
        <label htmlFor="venue" className="block text-sm font-medium text-ink">
          Venue <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="venue"
          name="venue"
          type="text"
          className="mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell us about your wedding
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-sm bg-ink px-6 py-3 text-sm font-medium text-cream hover:bg-olive-dark disabled:opacity-60 sm:w-auto"
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
