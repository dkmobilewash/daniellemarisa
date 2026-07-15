/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.daniellemarisa.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/wedding-planning-checklist/thank-you"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
