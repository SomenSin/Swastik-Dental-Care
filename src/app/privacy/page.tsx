import type { Metadata } from "next";
import { CLINIC } from "@/lib/data";
import styles from "../legal.module.css";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className={styles.legal}>
      <div className="container">
        <h1 className="headline-lg">Privacy Policy</h1>
        <p className="body-sm text-muted">Last updated: April 2026</p>

        <h2>1. Information We Collect</h2>
        <p>When you use our website or book an appointment, we may collect the following information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, phone number, email address.</li>
          <li><strong>Health Information:</strong> Dental history and treatment details (shared in-person at the clinic only).</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, browser type (through analytics).</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Schedule and confirm appointments.</li>
          <li>Provide dental care and maintain treatment records.</li>
          <li>Send appointment reminders via WhatsApp or phone.</li>
          <li>Improve our website and services.</li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>We implement industry-standard security measures to protect your personal information. Patient records are stored securely and access is restricted to authorized clinic staff only. We do not sell, rent, or trade your personal information to third parties.</p>

        <h2>4. Third-Party Services</h2>
        <p>Our website may use third-party services such as Google Maps for location and Formspree for contact form submissions. These services have their own privacy policies governing the use of your data.</p>

        <h2>5. Cookies</h2>
        <p>Our website may use cookies to enhance your browsing experience. You can disable cookies through your browser settings, though some site features may not function properly without them.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data held by us.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal data.</li>
          <li>Opt out of marketing communications.</li>
        </ul>

        <h2>7. Data Retention</h2>
        <p>We retain patient records as required by the Indian Medical Council regulations. Contact form submissions are retained for up to 1 year. You may request deletion of your data by contacting us directly.</p>

        <h2>8. Contact Us</h2>
        <p>For privacy-related queries, contact us at:</p>
        <ul>
          <li>Phone: {CLINIC.phoneDisplay}</li>
          <li>Email: {CLINIC.email}</li>
          <li>Address: {CLINIC.address.full}</li>
        </ul>
      </div>
    </div>
  );
}
