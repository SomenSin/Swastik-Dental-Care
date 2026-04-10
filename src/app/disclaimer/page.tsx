import type { Metadata } from "next";
import { CLINIC } from "@/lib/data";
import styles from "../legal.module.css";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <div className={styles.legal}>
      <div className="container">
        <h1 className="headline-lg">Disclaimer</h1>
        <p className="body-sm text-muted">Last updated: April 2026</p>

        <h2>Medical Disclaimer</h2>
        <p>The information provided on the {CLINIC.name} website is for general informational and educational purposes only. It is not intended to be a substitute for professional dental advice, diagnosis, or treatment.</p>
        <p>Always seek the advice of your dentist or other qualified healthcare provider with any questions you may have regarding a dental condition. Never disregard professional dental advice or delay in seeking it because of something you have read on this website.</p>

        <h2>No Doctor-Patient Relationship</h2>
        <p>Use of this website does not create a doctor-patient relationship between you and {CLINIC.name} or any of its practitioners. A doctor-patient relationship is only established through an in-person consultation at our clinic.</p>

        <h2>Treatment Results</h2>
        <p>Individual results from dental treatments may vary. The images and testimonials on this website represent individual experiences and are not guaranteed outcomes. Each patient&apos;s dental condition is unique and treatment plans are customized accordingly.</p>

        <h2>External Links</h2>
        <p>This website may contain links to third-party websites. {CLINIC.name} is not responsible for the content, privacy practices, or accuracy of information on these external sites.</p>

        <h2>Accuracy of Information</h2>
        <p>While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on the website.</p>

        <h2>Contact</h2>
        <p>If you have any concerns about the content on our website, please contact us:</p>
        <ul>
          <li>Phone: {CLINIC.phoneDisplay}</li>
          <li>Email: {CLINIC.email}</li>
          <li>Address: {CLINIC.address.full}</li>
        </ul>
      </div>
    </div>
  );
}
