import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS, CLINIC } from "@/lib/data";
import { getPath } from "@/lib/utils";
import styles from "./doctors.module.css";

export const metadata: Metadata = {
  title: "Expert Dentists in Dehradun | Meet Our Team",
  description: `Meet the expert doctors at Swastik Dental Care Dehradun. Led by ${DOCTORS[0].name}, our team provides high-quality dental treatments for your perfect smile.`,
  alternates: {
    canonical: "/doctors",
  },
};

export default function DoctorsPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <div className="badge badge-primary">Meet Our Experts</div>
          <h1 className="display-md">Our Medical Team</h1>
          <p className="body-lg text-muted" style={{ maxWidth: 560 }}>
            Dedicated to your oral health, comfort, and a confident smile with over {CLINIC.experience} cumulative experience.
          </p>
        </div>
      </section>

      <section className={`section`} style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className={styles.doctorsGrid}>
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className={styles.doctorCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={getPath(doctor.image)}
                    alt={doctor.name}
                    width={400}
                    height={500}
                    className={styles.doctorImg}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
                <div className={styles.doctorInfo}>
                  <div className="badge badge-primary" style={{ alignSelf: "flex-start", marginBottom: "0.5rem" }}>{doctor.experience}</div>
                  <h2 className="headline-md">{doctor.name}</h2>
                  <p className="title-lg text-primary">{doctor.specialization}</p>
                  <p className="body-md text-muted">{doctor.qualification}</p>
                  <p className="body-md text-muted" style={{ marginTop: "1rem" }}>{doctor.bio}</p>

                  <div className={styles.doctorActions}>
                    <Link href="/contact" className="btn btn-primary" id={`book-${doctor.id}`}>
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className={styles.statsRow} style={{ marginTop: "5rem", maxWidth: "800px", margin: "5rem auto 0" }}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>{CLINIC.experience}</span>
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
      </section>
    </>
  );
}
