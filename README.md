# Danielle Marisa Weddings and Events

Marketing site for Danielle Marisa Weddings and Events, a New Mexico wedding
planner (Albuquerque, Santa Fe, Taos). Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4, with an MDX-powered venue guide blog.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY at minimum
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Business facts** (name, phone, email, socials, brand colors, CTA verb):
  `src/lib/site-config.ts`.
- **City landing pages** (Albuquerque / Santa Fe / Taos copy, pricing,
  FAQs, testimonials): `src/lib/city-content/*.ts`.
- **Venue guide blog posts**: add a new `.mdx` file to `content/blog/`,
  copying `content/blog/_template.mdx` as a starting point. No code changes
  needed — the blog index and sitemap pick it up automatically.
- **Site-wide FAQ**: `src/lib/faq.ts`.
- **Placeholder images**: everything under `public/images/*.svg` is a
  clearly-labeled placeholder — swap in real photography at the same file
  paths (or update the `src` in the relevant page/component).

## Environment variables

See `.env.example`. `RESEND_API_KEY` is required for the contact form and
lead-magnet emails to actually send (via [Resend](https://resend.com));
without it, the API routes return a 500 instead of silently failing.
`NEXT_PUBLIC_GTM_ID` is optional — leave blank to skip Google Tag Manager.

## Build

```bash
npm run build   # runs `next build`, then `next-sitemap` to regenerate sitemap.xml/robots.txt
```

Deploy on [Vercel](https://vercel.com), connected to this repo, with the
custom domain pointed at `daniellemarisa.com`.
