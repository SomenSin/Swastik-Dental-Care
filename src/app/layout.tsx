import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CLINIC, SERVICES, REVIEWS, DOCTORS } from "@/lib/data";
import ChatbotWidget from "@/components/ChatbotWidget";

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
  metadataBase: new URL("https://swastikdentalcare.info"),
  alternates: {
    canonical: "/",
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "MedicalBusiness"],
      "@id": "https://swastikdentalcare.info/#clinic",
      "name": CLINIC.name,
      "image": "https://swastikdentalcare.info/images/logo.png",
      "url": "https://swastikdentalcare.info",
      "telephone": CLINIC.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLINIC.address.line1,
        "addressLocality": "Dehradun",
        "addressRegion": "Uttarakhand",
        "postalCode": CLINIC.address.pincode,
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": CLINIC.coordinates.lat,
        "longitude": CLINIC.coordinates.lng,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "13:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "17:00",
          "closes": "20:00",
        },
        {
           "@type": "OpeningHoursSpecification",
           "dayOfWeek": "Sunday",
           "opens": "00:00",
           "closes": "00:00",
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": CLINIC.rating.toString(),
        "reviewCount": CLINIC.totalReviews.toString(),
      },
      "review": REVIEWS.slice(0, 3).map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "datePublished": "2026-03-01",
        "reviewBody": r.text,
        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Services",
        "itemListElement": SERVICES.map((s, i) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.title,
            "description": s.description
          },
          "position": i + 1
        }))
      },
      "employee": DOCTORS.map(d => ({
        "@type": "Person",
        "name": d.name,
        "jobTitle": d.specialization
      })),
      "priceRange": "₹₹",
      "sameAs": [CLINIC.googleMapsUrl],
    },
    {
      "@type": "WebSite",
      "@id": "https://swastikdentalcare.info/#website",
      "url": "https://swastikdentalcare.info",
      "name": CLINIC.name,
      "publisher": { "@id": "https://swastikdentalcare.info/#clinic" }
    }
  ]
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
        <ChatbotWidget />
      </body>
    </html>
  );
}
