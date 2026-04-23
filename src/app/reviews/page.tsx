import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS, CLINIC } from "@/lib/data";
import { getPath } from "@/lib/utils";
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
          <div className={styles.reviewsGrid}>
            {REVIEWS.map((review, idx) => (
              <div key={idx} className={styles.reviewCard} id={`review-${idx}`}>
                <div className={styles.quoteIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V11C3.01697 11.5523 2.56925 12 2.01697 12H1.01697V5H11.017V15C11.017 18.3137 8.33068 21 5.01697 21H3.01697Z"/></svg>
                </div>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>
                    <Image
                      src={getPath(review.image)}
                      alt={review.name}
                      width={64}
                      height={64}
                      className={styles.avatarImg}
                      loading="lazy"
                      sizes="64px"
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
                  <Stars count={review.rating} size={22} />
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
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  id="reviews-cta-whatsapp-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
                <a href={`tel:${CLINIC.phone}`} className="btn btn-call btn-lg" id="reviews-cta-call-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
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
