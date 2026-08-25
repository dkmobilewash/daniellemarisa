import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { escapeHtml } from "@/lib/html";
import { siteConfig } from "@/lib/site-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = typeof body === "object" && body !== null && "email" in body
    ? String((body as { email: unknown }).email ?? "")
    : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: `${siteConfig.businessName} <${siteConfig.email}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: "New wedding planning checklist request",
      html: `<p>New checklist opt-in from: ${escapeHtml(email)}</p>`,
    });

    await resend.emails.send({
      from: `${siteConfig.businessName} <${siteConfig.email}>`,
      to: email,
      subject: "Your Wedding Planning Timeline Checklist",
      html: `
        <p>Hi there,</p>
        <p>Thanks for requesting our Wedding Planning Timeline Checklist! You can download it here:</p>
        <p><a href="${siteConfig.domain}/downloads/wedding-planning-checklist.pdf">Download the checklist (PDF)</a></p>
        <p>If you have a date in mind already, just reply to this email — we'd love to hear about it.</p>
        <p>&mdash; ${siteConfig.founderName}<br/>${siteConfig.businessName}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send lead magnet email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
