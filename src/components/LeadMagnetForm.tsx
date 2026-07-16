"use client";

import { useState } from "react";

export function LeadMagnetForm({
  title = "Free Wedding Planning Timeline Checklist",
  description = "The month-by-month checklist we give our own full-service clients — get it sent straight to your inbox.",
}: {
  title?: string;
  description?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <h2 className="font-serif text-xl text-ink">You&apos;re in!</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Check your inbox for the checklist — and{" "}
          <a href="/wedding-planning-checklist/thank-you" className="text-accent-dark underline underline-offset-4">
            grab your download here
          </a>{" "}
          in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-serif text-xl text-ink">{title}</h2>
      <p className="mt-2 text-sm text-ink-soft">{description}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="lead-magnet-email" className="sr-only">
          Email address
        </label>
        <input
          id="lead-magnet-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-sm border border-border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus-visible:outline-2 focus-visible:outline-offset-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-cream hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Me the Checklist"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          Something went wrong — please try again or email{" "}
          <a href="mailto:hello@daniellemarisa.com" className="underline">
            hello@daniellemarisa.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
