import Link from "next/link";
import Image from "next/image";
import { CLINIC, NAV_LINKS } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoIcon}>
            <Image src="/images/logo.png" alt="Swastik Dental Care Logo" width={32} height={32} style={{ borderRadius: '8px' }} />
          </div>
          <h3 className={styles.brandName}>{CLINIC.name}</h3>
          <p className={styles.brandDesc}>
            Delivering exceptional dental care with compassion and precision in the heart of Dehradun since 2014.
          </p>
          <div className={styles.social}>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href={CLINIC.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <span className={styles.footerLink}>General Dentistry</span>
          <span className={styles.footerLink}>Cosmetic Dentistry</span>
          <span className={styles.footerLink}>Root Canal Treatment</span>
          <span className={styles.footerLink}>Dental Implants</span>
          <span className={styles.footerLink}>Orthodontics</span>
        </div>

        {/* Contact & Legal */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <a href={`tel:${CLINIC.phone}`} className={styles.footerLink}>
            📞 {CLINIC.phoneDisplay}
          </a>
          <a href={`mailto:${CLINIC.email}`} className={styles.footerLink}>
            ✉️ {CLINIC.email}
          </a>
          <p className={styles.footerLink}>
            📍 {CLINIC.address.full}
          </p>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/disclaimer" className={styles.legalLink}>Disclaimer</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} {CLINIC.name}. All rights reserved. Designed with ❤️ in Dehradun.</p>
        </div>
      </div>
    </footer>
  );
}
