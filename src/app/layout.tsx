import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${CLINIC.name} | Best Dentist in Dehradun – Dental Implants, Root Canal, Braces`,
    template: `%s | ${CLINIC.name}`,
  },
  description: `${CLINIC.name} provides expert dental care in Dehradun – dental implants, root canal, cosmetic dentistry, braces, teeth whitening, and pediatric dentistry. Book your appointment today!`,
  keywords: [
    "dentist dehradun",
    "dental clinic dehradun",
    "root canal dehradun",
    "dental implants dehradun",
    "best dentist harrawala",
    "swastik dental care",
    "teeth whitening dehradun",
    "orthodontist dehradun",
    "braces dehradun",
    "pediatric dentist dehradun",
  ],
  authors: [{ name: CLINIC.name }],
  creator: CLINIC.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: CLINIC.name,
    title: `${CLINIC.name} | Best Dental Clinic in Dehradun`,
    description: `Expert dental care – implants, root canals, cosmetic dentistry, and more. Visit us at ${CLINIC.address.full}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://swastikdentalcare.in"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  image: "/images/clinic-exterior.jpg",
  "@id": "https://swastikdentalcare.in",
  url: "https://swastikdentalcare.in",
  telephone: CLINIC.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.address.line1,
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: CLINIC.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINIC.coordinates.lat,
    longitude: CLINIC.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CLINIC.rating.toString(),
    reviewCount: CLINIC.totalReviews.toString(),
  },
  priceRange: "$$",
  sameAs: [CLINIC.googleMapsUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "76px" }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
