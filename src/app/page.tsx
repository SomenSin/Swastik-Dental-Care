import Image from "next/image";
import Link from "next/link";
import { CLINIC, SERVICES } from "@/lib/data";
import styles from "./page.module.css";

const serviceIcons: Record<string, React.ReactNode> = {
  tooth: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C7 2 3 6 3 11c0 3.5 2 6.5 5 8v3l4-2 4 2v-3c3-1.5 5-4.5 5-8 0-5-4-9-9-9z"/></svg>,
  sparkle: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  implant: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="2" width="6" height="8" rx="3"/><path d="M10 10v4M14 10v4M9 14h6M10 14v6M14 14v6M10 20h4"/></svg>,
  align: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></svg>,
  child: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 10-16 0"/></svg>,
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero} id="hero">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className="badge badge-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>
              Trusted Dental Care in Dehradun
            </div>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Your Smile Deserves <span className={styles.heroAccent}>Expert Care</span>
            </h1>
            <p className={`body-lg ${styles.heroDesc}`}>
              At {CLINIC.name}, we combine advanced dental technology with a warm, compassionate approach. From routine check-ups to complex implants – your smile is in the best hands.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className="btn btn-primary btn-lg" id="hero-book-btn">
                Book Appointment
              </Link>
              <a href={`tel:${CLINIC.phone}`} className="btn btn-call" id="hero-call-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Call {CLINIC.phoneDisplay}
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>5000+</span>
                <span className={styles.statLabel}>Happy Patients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>4.7★</span>
                <span className={styles.statLabel}>Google Rating</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero-clinic.png"
              alt="Modern dental clinic with professional dentist"
              width={600}
              height={450}
              priority
              className={styles.heroImg}
            />
            <div className={styles.heroFloat}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--tertiary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              <div>
                <strong>100% Safe</strong>
                <span>Sterilized Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={`section ${styles.services}`} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="badge badge-primary">Our Services</div>
            <h2 className="headline-lg">Comprehensive Dental Solutions</h2>
            <p className="body-lg text-muted">
              We offer a full spectrum of dental services to keep your smile healthy, beautiful, and confident.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <div key={service.id} className="card" id={`service-${service.id}`}>
                <div className="icon-badge">
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="title-lg" style={{ marginTop: "1rem" }}>{service.title}</h3>
                <p className="body-md text-muted" style={{ marginTop: "0.5rem" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={`section ${styles.whyUs}`} id="why-us">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="badge badge-tertiary">Why Choose Us</div>
            <h2 className="headline-lg">Dentistry Done Differently</h2>
          </div>
          <div className={styles.whyGrid}>
            {[
              { title: "State-of-Art Equipment", desc: "Digital X-rays, laser dentistry, and CAD/CAM technology for precise, efficient treatments.", icon: "⚡" },
              { title: "Pain-Free Treatments", desc: "Modern anesthesia techniques and a gentle approach ensure comfortable, anxiety-free visits.", icon: "💆" },
              { title: "Affordable Care", desc: "Quality dental care at fair prices with flexible payment options and insurance acceptance.", icon: "💰" },
              { title: "Sterilized & Hygienic", desc: "International-grade sterilization protocols to ensure 100% infection-free procedures.", icon: "🛡️" },
            ].map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h3 className="title-md">{item.title}</h3>
                <p className="body-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta} id="cta">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className="display-md" style={{ color: "white" }}>
              Ready for a Healthier Smile?
            </h2>
            <p className="body-lg" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "1rem auto 0" }}>
              Book your appointment today and experience dental care that&apos;s gentle, modern, and personalized just for you.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-lg" style={{ background: "white", color: "var(--primary)" }} id="cta-book-btn">
                Book Appointment
              </Link>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                id="cta-whatsapp-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
