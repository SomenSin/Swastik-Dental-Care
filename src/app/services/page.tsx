import type { Metadata } from "next";
import { Suspense } from "react";
import ServicesContent from "./ServicesContent";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dental Services in Dehradun | Implants, RCT, Braces & More",
  description: `From preventive scaling to advanced dental implants and root canals – explore the full range of dental services offered by Dr. Ashish Pal at ${CLINIC.name}.`,
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="container section">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
