export type ServiceSlug =
  | "full-service-wedding-planning"
  | "wedding-day-coordination"
  | "destination-wedding-planner-new-mexico"
  | "elopement-planner-new-mexico";

export const services: { slug: ServiceSlug; path: string; name: string }[] = [
  { slug: "full-service-wedding-planning", path: "/full-service-wedding-planning", name: "Full-Service Planning" },
  { slug: "wedding-day-coordination", path: "/wedding-day-coordination", name: "Day-of Coordination" },
  { slug: "destination-wedding-planner-new-mexico", path: "/destination-wedding-planner-new-mexico", name: "Destination Weddings" },
  { slug: "elopement-planner-new-mexico", path: "/elopement-planner-new-mexico", name: "Elopements & Micro Weddings" },
];
