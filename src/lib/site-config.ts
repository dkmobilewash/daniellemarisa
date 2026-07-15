// Central place for all business/brand facts. Edit here to update the whole site.

export const siteConfig = {
  businessName: "Danielle Marisa Weddings and Events",
  shortName: "Danielle Marisa",
  founderName: "Danielle Marisa",
  founderCredentials:
    "Danielle is an event planner and coordinator rooted in New Mexico. She has coordinated weddings, corporate events, community events, and VIP parties for 10+ years, keeping her focus on full-service weddings and events — handling all the logistics required to make the event stress-free, expertly designed, and memorable. Danielle is a dedicated mother and entrepreneur who is passionate about curating memorable experiences.",

  primaryCity: "Albuquerque",
  primaryState: "NM",
  primaryCityFull: "Albuquerque, NM",
  additionalMarkets: ["Santa Fe", "Taos"],
  areaServed: ["Albuquerque", "Santa Fe", "Taos", "Rio Rancho", "Corrales", "Placitas", "New Mexico"],

  phone: "505.715.2953",
  phoneHref: "tel:+15057152953",
  email: "hello@daniellemarisa.com",

  social: {
    instagram: "https://instagram.com/daniellemarisaevents",
    facebook: "https://www.facebook.com/daniellemarisaevents",
    pinterest: "https://www.pinterest.com/daniellemarisaevents",
  },

  domain: "https://www.daniellemarisa.com",

  // Single, site-wide CTA verb. Do not introduce alternates ("Contact", "Book Now", etc).
  ctaVerb: "Inquire",
  ctaLabel: "Inquire Now",

  colors: {
    ink: "#191910",
    olive: "#6F7B4F",
    oliveDark: "#4F5837",
    cream: "#FAF9F4",
  },
} as const;

export type SiteConfig = typeof siteConfig;
