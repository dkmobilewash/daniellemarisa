// Real excerpts from the business's Google Business Profile (5.0 stars, 14 reviews).
// Keep quotes verbatim (trimmed for length) and attribute using the name Google displays.

export type Review = {
  quote: string;
  name: string;
  detail: string;
};

export const googleReviews: Review[] = [
  {
    quote:
      "As a type A person, Danielle was a type A++. She had excellent attention to detail, was often steps ahead of my requests, and could problem solve for roadblocks calmly and quickly.",
    name: "AL",
    detail: "Google review — destination wedding, Santa Fe",
  },
  {
    quote:
      "We finished a wedding that had more beautiful details than 95% of the weddings we do. Danielle was on top of all of them. They could enjoy the BEAUTIFUL evening because Danielle and her team knocked it out of the park.",
    name: "Southwest Wedding Films",
    detail: "Google review — wedding vendor",
  },
  {
    quote:
      "Her knowledge of the Albuquerque wedding industry and relationships with local vendors made the entire planning process so much less stressful.",
    name: "Diego C.",
    detail: "Google review — Albuquerque",
  },
];

export const fullPlanningReviews: Review[] = [
  {
    quote:
      "I was blown away with Danielle's professionalism and her commitment to make my wedding day vision come to life! For any bride considering New Mexico for a destination wedding — look no further.",
    name: "Michaela A.",
    detail: "Google review — full-service planning",
  },
  {
    quote:
      "Danielle made every aspect of wedding planning so easy and seamless. She knew exactly what I envisioned for the wedding and recommended the perfect vendors.",
    name: "rebhinton",
    detail: "Google review — full-service planning",
  },
];

export const coordinationReviews: Review[] = [
  {
    quote:
      "The day-of coordination was amazing; she organized all vendors and staff with ease and orchestrated each detail of set up, ceremony, reception, and take down.",
    name: "rebhinton",
    detail: "Google review — day-of coordination",
  },
  {
    quote:
      "When a massive thunder storm knocked out all of the power in downtown Santa Fe including at our venue, she remained extremely calm and effective. She truly went above and beyond.",
    name: "Holly",
    detail: "Google review — day-of coordination",
  },
];
