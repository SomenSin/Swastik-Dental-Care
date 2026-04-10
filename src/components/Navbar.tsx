"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CLINIC, NAV_LINKS } from "@/lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} glass`} id="main-nav">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <div className={styles.logoIcon}>
            <img src="/images/logo.png" alt="Swastik Dental Care Logo" className={styles.logoImg} />
          </div>
          <div>
            <span className={styles.logoName}>{CLINIC.name}</span>
            <span className={styles.logoTag}>{CLINIC.tagline}</span>
          </div>
        </Link>

        <div className={`${styles.links} ${mobileOpen ? styles.open : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              onClick={() => setMobileOpen(false)}
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CLINIC.phone}`}
            className={`btn btn-primary btn-sm ${styles.callBtn}`}
            id="nav-call-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>
    </nav>
  );
}
