import type { Metadata } from "next";
import { CityLandingPage } from "@/components/CityLandingPage";
import { santaFe } from "@/lib/city-content/santa-fe";

export const metadata: Metadata = {
  title: "Santa Fe Wedding Planner + Coordinator | Danielle Marisa",
  description:
    "Full-service and destination wedding planning in Santa Fe, NM — local venue expertise, guest logistics, and day-of coordination. Free consultation.",
  alternates: { canonical: "/santa-fe-wedding-planner" },
};

export default function SantaFeWeddingPlannerPage() {
  return <CityLandingPage content={santaFe} />;
}
