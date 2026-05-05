import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Best Dental Clinic in Harrawala Dehradun",
  description: `Book your appointment at ${CLINIC.name}. Visit us at ${CLINIC.address.full} or call ${CLINIC.phoneDisplay} for expert dental care in Dehradun.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
