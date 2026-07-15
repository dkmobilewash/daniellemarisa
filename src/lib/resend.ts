import { Resend } from "resend";

// Lazily instantiated so a missing RESEND_API_KEY only breaks form
// submission at request time, not the whole build.
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}
