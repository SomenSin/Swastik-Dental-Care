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
                <div className={styles.quoteIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V11C3.01697 11.5523 2.56925 12 2.01697 12H1.01697V5H11.017V15C11.017 18.3137 8.33068 21 5.01697 21H3.01697Z"/></svg>
                </div>
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
                    <h3 className="title-md" style={{ color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {review.name}
                      {review.rating === 5 && (
                        <span className={styles.verifiedBadge} title="Verified Patient">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        </span>
                      )}
                    </h3>
                    <p className="label-sm text-muted">{review.date}</p>
                  </div>
                </div>
                
                <div className={styles.reviewInfo}>
                  <Stars count={review.rating} size={18} />
                  <span className={styles.bullet}>•</span>
                  <span className={styles.treatmentTag}>{review.treatment}</span>
                </div>

                <p className={styles.reviewText}>
                  {review.text}
                </p>
                
                <div className={styles.verifiedStatus}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>
                  <span>Verified Experience</span>
                </div>
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
