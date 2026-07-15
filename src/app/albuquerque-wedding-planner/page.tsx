import type { Metadata } from "next";
import { CityLandingPage } from "@/components/CityLandingPage";
import { albuquerque } from "@/lib/city-content/albuquerque";

export const metadata: Metadata = {
  title: "Albuquerque Wedding Planner + Coordinator | Danielle Marisa",
  description:
    "Full-service Albuquerque wedding planning and day-of coordination from a planner with 10+ years of local venue and vendor experience. Free consultation.",
  alternates: { canonical: "/albuquerque-wedding-planner" },
};

export default function AlbuquerqueWeddingPlannerPage() {
  return <CityLandingPage content={albuquerque} />;
}
