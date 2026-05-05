"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, CLINIC } from "@/lib/data";
import { getPath } from "@/lib/utils";
import styles from "./services.module.css";

export default function ServicesContent() {
  const searchParams = useSearchParams();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get("s");
    if (id) {
      setSelectedId(id);
      const element = document.getElementById(`service-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [searchParams]);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <div className="badge badge-primary">Our Expertise</div>
          <h1 className="display-md">Comprehensive Dental Services</h1>
          <p className="body-lg text-muted" style={{ maxWidth: 600, margin: "1rem auto 0" }}>
            From preventive cleanings to complex restorative procedures, we provide expert care for every dental need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                id={`service-${service.id}`} 
                className={`${styles.serviceItem} ${selectedId === service.id ? styles.active : ""}`}
              >
                <div className={styles.imageCol}>
                  <div className={styles.imgContainer}>
                    <Image 
                      src={getPath(service.image)} 
                      alt={service.title} 
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      className={styles.mainImg}
                      priority={idx === 0}
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className={styles.iconOverlay}>
                    <div className={styles.iconInner}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C7 2 3 6 3 11c0 3.5 2 6.5 5 8v3l4-2 4 2v-3c3-1.5 5-4.5 5-8 0-5-4-9-9-9z"/></svg>
                    </div>
                  </div>
                </div>
                <div className={styles.contentCol}>
                  <h2 className="headline-md">{service.title}</h2>
                  <p className="body-lg text-muted">{service.detailedDescription}</p>
                  
                  <div className={styles.featuresGrid}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Link href="/contact" className="btn btn-primary">
                      Book {service.title}
                    </Link>
                    <a href={`https://wa.me/${CLINIC.whatsapp}?text=I%27m%20interested%20in%20${service.title}`} target="_blank" className="btn btn-whatsapp">
                      Contact WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
