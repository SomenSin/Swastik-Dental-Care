import type { Metadata } from "next";
import { CLINIC } from "@/lib/data";
import styles from "../legal.module.css";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <div className={styles.legal}>
      <div className="container">
        <h1 className="headline-lg">Terms & Conditions</h1>
        <p className="body-sm text-muted">Last updated: April 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the {CLINIC.name} website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website.</p>

        <h2>2. Medical Disclaimer</h2>
        <p>The content on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified dental professional for any dental concerns. Information provided on this site should not be used as a substitute for professional dental advice.</p>

        <h2>3. Appointments</h2>
        <p>Appointment requests made through our website are subject to confirmation by our clinic staff. We reserve the right to reschedule or cancel appointments due to unforeseen circumstances. A minimum of 2 hours&apos; notice is required for cancellation.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content on this website, including text, images, logos, and design elements, is the property of {CLINIC.name} and is protected by applicable copyright and trademark laws. Unauthorized use, reproduction, or distribution of this content is strictly prohibited.</p>

        <h2>5. Payment Terms</h2>
        <p>Payment for services is due at the time of treatment unless a prior arrangement has been made with our billing department. We accept cash, UPI, debit/credit cards, and select insurance plans. Treatment cost estimates are provided before any procedure begins.</p>

        <h2>6. Limitation of Liability</h2>
        <p>{CLINIC.name} shall not be held liable for any damages arising from the use of this website or reliance on information provided herein. We make no warranties regarding the accuracy, completeness, or reliability of the content.</p>

        <h2>7. Modifications</h2>
        <p>We reserve the right to modify these terms at any time without prior notice. Continued use of the website after changes constitutes acceptance of the revised terms.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dehradun, Uttarakhand.</p>

        <h2>9. Contact</h2>
        <p>For questions about these Terms and Conditions, contact us at:</p>
        <ul>
          <li>Phone: {CLINIC.phoneDisplay}</li>
          <li>Email: {CLINIC.email}</li>
          <li>Address: {CLINIC.address.full}</li>
        </ul>
      </div>
    </div>
  );
}
