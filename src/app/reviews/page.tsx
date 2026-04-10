import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS, CLINIC } from "@/lib/data";
import styles from "./reviews.module.css";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: "Read real reviews from our happy patients. See why Swastik Dental Care is rated 4.7 stars in Dehradun.",
};

function Stars({ count, size = 24 }: { count: number; size?: number }) {
  return (
    <div className="stars" style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < count ? "#F59E0B" : "#E0E3E5"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div className="badge badge-primary">Patient Testimonials</div>
          <h1 className="display-md" style={{ textAlign: "center", maxWidth: 800 }}>
            Don&apos;t Just Take Our Word For It. <br />
            <span className="text-primary">Listen to Our Patients.</span>
          </h1>
          <p className="body-lg text-muted" style={{ maxWidth: 600, textAlign: "center", marginBottom: "1rem" }}>
            We pride ourselves on delivering pain-free, exceptional dental care. But the real proof is in the smiles of our patients.
          </p>
          
          {/* Prominent Trust Indicators */}
          <div className={styles.trustBox}>
            <div className={styles.trustScore}>
              <span className={styles.hugeRating}>{CLINIC.rating}</span>
              <div className={styles.trustDetails}>
                <Stars count={5} size={28} />
                <span className="label-md">Out of 5 Stars</span>
              </div>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustText}>
              <span className="title-lg">Based on Google Reviews</span>
              <span className="body-sm text-muted">Join {CLINIC.totalReviews}+ happy patients who trust us with their smiles.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className={styles.masonryGrid}>
            {REVIEWS.map((review, idx) => (
              <div key={idx} className={styles.reviewCard} id={`review-${idx}`}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={64}
                      height={64}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div>
                    <h3 className="title-md">{review.name}</h3>
                    <p className="label-sm text-muted">{review.date}</p>
                  </div>
                </div>
                
                <div className={styles.reviewInfo}>
                  <Stars count={review.rating} size={20} />
                  <span className={styles.bullet}>•</span>
                  <span className={styles.treatmentBadge}>{review.treatment}</span>
                </div>

                <p className="body-lg text-muted" style={{ position: "relative", zIndex: 1, fontStyle: "italic", marginTop: "0.5rem" }}>
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className="display-sm">Ready to be our next happy patient?</h2>
              <p className="body-lg" style={{ opacity: 0.9 }}>
                Book a consultation with Dr. Ashish today and discover what pain-free, modern dentistry really feels like.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn-primary btn-lg" style={{ background: "white", color: "var(--primary)" }}>
                  Book Appointment Now
                </Link>
                <a href={`tel:${CLINIC.phone}`} className="btn btn-lg" style={{ color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
