import type { Metadata } from "next";
import Image from "next/image";
import { CLINIC } from "@/lib/data";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${CLINIC.name} – a trusted dental clinic in Dehradun providing compassionate, advanced dental care since 2014.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className="badge badge-primary">About Us</div>
          <h1 className="display-md">Our Story & Mission</h1>
          <p className="body-lg text-muted" style={{ maxWidth: 600, margin: "0.75rem auto 0" }}>
            Delivering exceptional dental care with compassion and cutting-edge technology in the heart of Dehradun.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyImage}>
            <Image
              src="/images/hero-clinic.png"
              alt="Swastik Dental Care clinic interior"
              width={560}
              height={400}
              className={styles.storyImg}
            />
          </div>
          <div className={styles.storyContent}>
            <h2 className="headline-md">A Decade of Dedicated Dental Care</h2>
            <p className="body-lg text-muted">
              Founded in 2014 as Latika Dental Care, we have grown into one of Dehradun&apos;s most trusted dental clinics. Now operating as <strong>{CLINIC.name}</strong>, our mission remains unchanged — to provide world-class dental treatments in a warm, welcoming environment.
            </p>
            <p className="body-md text-muted">
              Nestled in the serene locality of Harrawala, near Sainik Colony, our clinic is equipped with the latest dental technology including digital X-rays, laser dentistry tools, and CAD/CAM systems. Every treatment room is sterilized to international standards, ensuring your safety is never compromised.
            </p>
            <p className="body-md text-muted">
              We believe every patient deserves a pain-free, anxiety-free experience. Our team of experienced dentists takes the time to listen, explain, and customize treatments for your unique needs.
            </p>

            {/* Open in Maps Button */}
            <a
              href={CLINIC.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="about-maps-btn"
              style={{ marginTop: "1.5rem" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Open in Maps
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="badge badge-tertiary">Our Values</div>
            <h2 className="headline-lg">What Drives Us</h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: "🎯", title: "Patient-First Approach", desc: "Every decision we make is centered around your comfort, safety, and the best possible outcome." },
              { icon: "🔬", title: "Clinical Excellence", desc: "We invest in continuous learning and advanced technology to deliver treatments that meet global standards." },
              { icon: "🤝", title: "Transparency & Trust", desc: "We explain every procedure, every cost, and every option — so you always feel confident and informed." },
              { icon: "💚", title: "Community Care", desc: "We're proud to serve the Dehradun community with affordable dental care, free check-up camps, and oral health education." },
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2.5rem" }}>{item.icon}</span>
                <h3 className="title-lg" style={{ marginTop: "1rem" }}>{item.title}</h3>
                <p className="body-sm text-muted" style={{ marginTop: "0.5rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Hours */}
      <section className={`section`} style={{ background: "var(--surface-container-low)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="headline-md">Clinic Hours</h2>
          </div>
          <div className={styles.hoursCard}>
            <div className={styles.hourRow}>
              <span className={styles.hourDay}>Monday – Saturday (Morning)</span>
              <span className={styles.hourTime}>{CLINIC.hours.morning}</span>
            </div>
            <div className={styles.hourRow}>
              <span className={styles.hourDay}>Monday – Saturday (Evening)</span>
              <span className={styles.hourTime}>{CLINIC.hours.evening}</span>
            </div>
            <div className={styles.hourRow}>
              <span className={styles.hourDay}>Sunday</span>
              <span className={styles.hourTime} style={{ color: "var(--error)" }}>{CLINIC.hours.sunday}</span>
            </div>
            <p className="body-sm text-muted" style={{ marginTop: "1rem", textAlign: "center" }}>
              📍 {CLINIC.address.full}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
