import type { Metadata } from "next";
import Image from "next/image";
import { CLINIC } from "@/lib/data";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Best Dental Clinic in Dehradun | Our Story & Expertise",
  description: `Discover how Swastik Dental Care became the most trusted dental clinic in Harrawala, Dehradun. Exceptional care in implants, RCT, and braces since ${CLINIC.since}.`,
};

export default function AboutPage() {
  const campImages = [
    { src: "/images/hero-clinic.png", alt: "Dr. Shrya consulting a patient at a dental camp" },
    { src: "/images/camp-1.jpg", alt: "Dr. Ashish and Dr. Shrya at a dental check-up camp" },
    { src: "/images/camp-2.jpg", alt: "The medical team at Swastik Dental Care camp" },
    { src: "/images/camp-3.jpg", alt: "Patient screening during dental outreach" },
  ];

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className="badge badge-primary">About Us</div>
          <h1 className="display-md">Our Story & Mission</h1>
          <p className="body-lg text-muted" style={{ maxWidth: 640, margin: "1rem auto 0" }}>
            Since {CLINIC.since}, we have been dedicated to delivering exceptional dental care with compassion and modern technology in the heart of Dehradun.
          </p>
        </div>
      </section>

      {/* Story & Facility Section */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyContent}>
            <div className="badge badge-secondary" style={{ alignSelf: 'flex-start' }}>Our Heritage & Facility</div>
            <h2 className="headline-md">{CLINIC.experience} Years of Dedicated Dental Excellence</h2>
            <p className="body-lg text-muted">
              Founded as Latika Dental Care, we have evolved into <strong>{CLINIC.name}</strong>, a cornerstone of dental health in Harrawala. Led by <strong>Dr. Ashish Pal</strong> and <strong>Dr. Shrya Kathait Pal</strong>, our mission is to provide world-class treatments in an environment where patients feel like family.
            </p>
            <p className="body-md text-muted">
              Our modern facility at Harrawala is designed for your comfort, featuring ergonomically designed chairs and global sterilization protocols to ensure a safe and soothing experience for every visit.
            </p>
            
            <ul className={styles.featureList} style={{ margin: '1rem 0' }}>
              <li>Digitized Dental Records</li>
              <li>Minimal Radiation X-Rays</li>
              <li>Gentle Rotary Endodontics</li>
              <li>International Hygiene Standards</li>
            </ul>

            <div className={styles.pointsGrid}>
              <div className={styles.pointItem}>
                <strong>Integrity</strong>
                <span>Honest advice and transparent pricing.</span>
              </div>
              <div className={styles.pointItem}>
                <strong>Innovation</strong>
                <span>Continuous adoption of advanced tech.</span>
              </div>
            </div>

            <a
              href={CLINIC.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="about-maps-btn"
              style={{ alignSelf: 'flex-start', marginTop: '1.5rem' }}
            >
              Visit Our Clinic
            </a>
          </div>
          <div className={styles.storyImage}>
            <Image
              src="/images/about-heritage.jpg"
              alt="Dr. Ashish Pal and Dr. Shrya Kathait Pal at Swastik Dental Care"
              width={560}
              height={600}
              className={styles.storyImg}
              priority
            />
            <div className={styles.experienceBadge}>
              <span className={styles.expNum}>{CLINIC.experience}</span>
              <span className={styles.expText}>Successful Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className={`section ${styles.camp}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="badge badge-tertiary">Community Impact</div>
            <h2 className="headline-lg">Spreading Smiles Beyond the Clinic</h2>
            <p className="body-lg text-muted">
              We believe that quality dental care should be accessible to all. Our team regularly organizes Dental Check-up Camps across Uttarakhand to provide free screenings, expert advice, and oral hygiene education to children and families.
            </p>
          </div>
          
          <div className={styles.campGallery}>
            {campImages.map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={styles.galleryImg}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.galleryOverlay}>
                   <p className="body-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.campHighlights}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightIcon}>🏥</span>
              <h3>Free Screenings</h3>
              <p>Comprehensive oral health check-ups for rural and urban communities.</p>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightIcon}>📚</span>
              <h3>Awareness Talks</h3>
              <p>Educating children about the importance of preventive dental care.</p>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightIcon}>🦷</span>
              <h3>Early Detection</h3>
              <p>Identifying potential issues before they become painful emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Hours */}
      <section className={`section`} style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className={styles.hoursWrapper}>
            <div className={styles.hoursInfo}>
               <h2 className="headline-sm">We&apos;re Here to Help</h2>
               <p className="body-md text-muted">Our flexible morning and evening batches ensure you never have to compromise your schedule for your health.</p>
            </div>
            <div className={styles.hoursCard}>
              <div className={styles.hourRow}>
                <span className={styles.hourDay}>Mon – Sat (Morning)</span>
                <span className={styles.hourTime}>{CLINIC.hours.morning}</span>
              </div>
              <div className={styles.hourRow}>
                <span className={styles.hourDay}>Mon – Sat (Evening)</span>
                <span className={styles.hourTime}>{CLINIC.hours.evening}</span>
              </div>
              <div className={styles.hourRow}>
                <span className={styles.hourDay}>Sunday</span>
                <span className={styles.hourTime} style={{ color: "var(--error)" }}>{CLINIC.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
