import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `Swastik Dental Care | Best Dentist in Dehradun – Expert Dental Clinic`,
    template: `%s | ${CLINIC.name} Dehradun`,
  },
  description: `${CLINIC.name} is the top-rated dental clinic in Dehradun. We specialize in Dental Implants, Root Canal Treatment (RCT), Braces, Orthodontics, and Teeth Whitening in Harrawala. Book your consultation with our expert dentists today!`,
  keywords: [
    "best dentist in dehradun",
    "dental clinic in dehradun",
    "dentist in harrawala dehradun",
    "root canal treatment dehradun",
    "dental implants dehradun",
    "braces cost dehradun",
    "orthodontist in dehradun",
    "swastik dental care dehradun",
    "affordable dentist dehradun",
    "pediatric dentist dehradun",
    "emergency dental care dehradun",
    "teeth whitening dehradun",
  ],
  authors: [{ name: "Dr. Ashish Pal" }, { name: "Dr. Shrya Kathait Pal" }],
  creator: CLINIC.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: CLINIC.name,
    title: `${CLINIC.name} | Best Dental Clinic in Dehradun`,
    description: `Expert dental care in Dehradun – Implants, Root Canals, and Orthodontics. Visit the most trusted dentists at ${CLINIC.address.full}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL("https://swastikdentalcare.info"), // Updated domain placeholder
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  image: "https://swastikdentalcare.info/images/logo.png",
  "@id": "https://swastikdentalcare.info",
  url: "https://swastikdentalcare.info",
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
      opens: "10:00",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "20:00",
    },
    {
       "@type": "OpeningHoursSpecification",
       dayOfWeek: "Sunday",
       opens: "00:00",
       closes: "00:00", // Closed
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "40",
  },
  priceRange: "₹₹",
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
