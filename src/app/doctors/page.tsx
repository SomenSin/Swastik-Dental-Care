import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS, CLINIC } from "@/lib/data";
import styles from "./doctors.module.css";

export const metadata: Metadata = {
  title: "Our Doctor",
  description: "Meet Dr. Ashish Pal – the lead dentist at Swastik Dental Care, Dehradun. Over 10 years of experience in general and cosmetic dentistry.",
};

export default function DoctorsPage() {
  const doctor = DOCTORS[0];

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <div className="badge badge-primary">Meet Our Expert</div>
          <h1 className="display-md">Your Dentist</h1>
          <p className="body-lg text-muted" style={{ maxWidth: 560 }}>
            Dedicated to your oral health, comfort, and a confident smile.
          </p>
        </div>
      </section>

      <section className={`section`} style={{ background: "var(--surface)" }}>
        <div className="container">
          {/* Single Doctor Feature Layout */}
          <div className={styles.doctorFeature}>
            <div className={styles.imageWrapper}>
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={480}
                height={580}
                className={styles.doctorImg}
              />
            </div>
            <div className={styles.doctorInfo}>
              <div className="badge badge-primary" style={{ alignSelf: "flex-start" }}>{doctor.experience}</div>
              <h2 className="display-md">{doctor.name}</h2>
              <p className="headline-sm text-primary" style={{ marginTop: "-0.25rem" }}>{doctor.specialization}</p>
              <p className="title-md text-muted">{doctor.qualification}</p>
              <p className="body-lg text-muted" style={{ marginTop: "1rem", lineHeight: 1.8 }}>{doctor.bio}</p>

              <div className={styles.doctorActions}>
                <Link href="/contact" className="btn btn-primary btn-lg" id="doctor-book-btn">
                  Book with {doctor.name.split(" ")[0]} {doctor.name.split(" ").slice(1).join(" ")}
                </Link>
                <a href={`tel:${CLINIC.phone}`} className="btn btn-call" id="doctor-call-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Call Now
                </a>
              </div>

              {/* Quick Stats */}
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>5000+</span>
                  <span className={styles.statLabel}>Patients Treated</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>4.7★</span>
                  <span className={styles.statLabel}>Google Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
