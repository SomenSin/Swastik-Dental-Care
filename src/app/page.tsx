import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: `${CLINIC.name} | Best Dental Clinic in Harrawala Dehradun`,
  description: `Top-rated dental clinic in Dehradun. Expert Dental Implants, Root Canal Treatment (RCT), Braces, and high-quality dental care in Harrawala since ${CLINIC.since}. Book your appointment today!`,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
