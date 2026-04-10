"use client";

import { CLINIC } from "@/lib/data";
import styles from "./contact.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xpwdjqbl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <div className="badge badge-primary">Get in Touch</div>
          <h1 className="display-md">Contact Us</h1>
          <p className="body-lg text-muted" style={{ maxWidth: 560 }}>
            We&apos;d love to hear from you. Book an appointment, ask a question, or simply say hello!
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info + Map */}
            <div className={styles.infoSide}>
              <div className={styles.infoCards}>
                <a href={`tel:${CLINIC.phone}`} className={styles.infoCard} id="contact-call">
                  <div className="icon-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="label-sm">Call Us</p>
                    <p className="title-md">{CLINIC.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${CLINIC.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noopener noreferrer" className={styles.infoCard} id="contact-whatsapp">
                  <div className="icon-badge" style={{ background: "rgba(37,211,102,0.1)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="label-sm">WhatsApp</p>
                    <p className="title-md">Chat with Us</p>
                  </div>
                </a>

                <a href={`mailto:${CLINIC.email}`} className={styles.infoCard} id="contact-email">
                  <div className="icon-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="label-sm">Email</p>
                    <p className="title-md" style={{ fontSize: "0.875rem" }}>{CLINIC.email}</p>
                  </div>
                </a>

                <a href={CLINIC.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.infoCard} id="contact-location">
                  <div className="icon-badge icon-badge-tertiary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="label-sm">Location</p>
                    <p className="body-sm">{CLINIC.address.full}</p>
                  </div>
                </a>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={CLINIC.googleMapsEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location on Google Maps"
                  id="contact-map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSide}>
              <div className={styles.formCard}>
                <h2 className="headline-sm">Send Us a Message</h2>
                <p className="body-sm text-muted" style={{ marginBottom: "1.5rem" }}>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
                  <div className={styles.formRow}>
                    <input type="text" name="name" placeholder="Your Name *" required className="input-field" id="form-name" />
                    <input type="tel" name="phone" placeholder="Phone Number *" required className="input-field" id="form-phone" />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" className="input-field" id="form-email" />
                  <select name="service" className="input-field" id="form-service" defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="rootcanal">Root Canal Treatment</option>
                    <option value="implants">Dental Implants</option>
                    <option value="orthodontics">Orthodontics & Braces</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea name="message" placeholder="Your Message *" required className="input-field textarea-field" id="form-message" />
                  
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={formState === "sending"}
                    id="form-submit"
                    style={{ width: "100%" }}
                  >
                    {formState === "sending" ? "Sending..." : formState === "sent" ? "✓ Message Sent!" : "Send Message"}
                  </button>

                  {formState === "sent" && (
                    <p style={{ color: "var(--tertiary)", textAlign: "center", fontWeight: 600 }}>
                      Thank you! We&apos;ll reach out to you soon.
                    </p>
                  )}
                  {formState === "error" && (
                    <p style={{ color: "var(--error)", textAlign: "center" }}>
                      Something went wrong. Please try calling us directly.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
