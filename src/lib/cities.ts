export type CitySlug = "albuquerque" | "santa-fe" | "taos";

export const cities: {
  slug: CitySlug;
  path: string;
  name: string;
  state: string;
}[] = [
  { slug: "albuquerque", path: "/albuquerque-wedding-planner", name: "Albuquerque", state: "NM" },
  { slug: "santa-fe", path: "/santa-fe-wedding-planner", name: "Santa Fe", state: "NM" },
  { slug: "taos", path: "/taos-wedding-planner", name: "Taos", state: "NM" },
];
