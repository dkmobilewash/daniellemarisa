import type { Metadata } from "next";
import { CityLandingPage } from "@/components/CityLandingPage";
import { taos } from "@/lib/city-content/taos";

export const metadata: Metadata = {
  title: "Taos Wedding & Elopement Planner | Danielle Marisa",
  description:
    "Intimate wedding and elopement planning in Taos, NM — permits, mountain and gorge-rim logistics, and day-of coordination. Free consultation.",
  alternates: { canonical: "/taos-wedding-planner" },
};

export default function TaosWeddingPlannerPage() {
  return <CityLandingPage content={taos} />;
}
