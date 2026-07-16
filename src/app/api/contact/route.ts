import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { escapeHtml } from "@/lib/html";
import { siteConfig } from "@/lib/site-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  weddingDate?: unknown;
  venue?: unknown;
  guestCount?: unknown;
  budgetRange?: unknown;
  message?: unknown;
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
  const weddingDate = asString(body.weddingDate, 100).trim();
  const venue = asString(body.venue, 200).trim();
  const guestCount = asString(body.guestCount, 100).trim();
  const budgetRange = asString(body.budgetRange, 100).trim();
  const message = asString(body.message, 5000).trim();

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

  try {
    await resend.emails.send({
      from: `${siteConfig.businessName} <hello@${new URL(siteConfig.domain).hostname}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New wedding inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Wedding date:</strong> ${escapeHtml(weddingDate || "Not provided")}</p>
        <p><strong>Venue:</strong> ${escapeHtml(venue || "Not provided")}</p>
        <p><strong>Guest count:</strong> ${escapeHtml(guestCount || "Not provided")}</p>
        <p><strong>Budget range:</strong> ${escapeHtml(budgetRange || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "Not provided").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
