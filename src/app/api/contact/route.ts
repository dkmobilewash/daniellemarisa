import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { escapeHtml } from "@/lib/html";
import { siteConfig } from "@/lib/site-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  eventType?: unknown;
  dateStart?: unknown;
  dateEnd?: unknown;
  guestEstimate?: unknown;
  eventScope?: unknown;
  service?: unknown;
  budget?: unknown;
};

function asString(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = asString(body.name, 200).trim();
  const email = asString(body.email, 200).trim();
  const eventType = asString(body.eventType, 100).trim();
  const dateStart = asString(body.dateStart, 20).trim();
  const dateEnd = asString(body.dateEnd, 20).trim();
  const guestEstimate = asString(body.guestEstimate, 100).trim();
  const eventScope = asString(body.eventScope, 500).trim();
  const service = asString(body.service, 100).trim();
  const budget = asString(body.budget, 200).trim();

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Name and a valid email are required" },
      { status: 400 }
    );
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const dateRange = dateStart && dateEnd
    ? `${dateStart} to ${dateEnd}`
    : dateStart || "Not provided";

  try {
    await resend.emails.send({
      from: `${siteConfig.businessName} <${siteConfig.email}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Event type:</strong> ${escapeHtml(eventType || "Not provided")}</p>
        <p><strong>Date range:</strong> ${escapeHtml(dateRange)}</p>
        <p><strong>Guest estimate:</strong> ${escapeHtml(guestEstimate || "Not sure yet")}</p>
        <p><strong>Event scope:</strong> ${escapeHtml(eventScope || "Not provided")}</p>
        <p><strong>Service interested in:</strong> ${escapeHtml(service || "Not provided")}</p>
        <p><strong>Event budget:</strong> ${escapeHtml(budget || "Not provided")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
