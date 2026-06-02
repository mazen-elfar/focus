import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ISOSection.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const isoImages = [
  "/Iso_page-0001.jpg",
  "/Iso_page-0002.jpg",
  "/Iso_page-0003.jpg"
];

const ISOSection = () => {
  const { get, t, isRTL } = useI18n();
  const sectionRef = useRef(null);
  const modalRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = get("about.section_iso.certificates", []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".iso-content-left",
        { opacity: 0, x: isRTL ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".iso-section",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".iso-list-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".iso-list",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  useEffect(() => {
    if (selectedCert) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".iso-modal-backdrop",
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        );
        gsap.fromTo(
          ".iso-modal-content",
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "back.out(1.4)" }
        );
      }, modalRef);
      return () => ctx.revert();
    }
  }, [selectedCert]);

  const openLightbox = (src) => {
    setSelectedCert(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    const ctx = gsap.context(() => {
      gsap.to(".iso-modal-content", { scale: 0.9, opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(".iso-modal-backdrop", {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        ease: "power2.in",
        onComplete: () => {
          setSelectedCert(null);
          document.body.style.overflow = '';
        }
      });
    }, modalRef);
  };

  return (
    <section className="iso-section" ref={sectionRef}>
      <div className="iso-container">
        <div className="iso-layout">
          {/* Left Side: Content */}
          <div className="iso-content-left">
            <h1 className="iso-main-title">{t("about.section_iso.title")}</h1>
            <h2 className="iso-subtitle">{t("about.section_iso.subtitle")}</h2>
            <p className="iso-description">
              {t("about.section_iso.description")}
            </p>

            <div className="iso-list">
              {certificates.map((cert) => (
                <div key={cert.id} className="iso-list-item">
                  <div className="iso-check-icon">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                  </div>
                  <div className="iso-item-text">
                    <h3>{cert.title}</h3>
                    <p>{cert.standard}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Stack Animation */}
          <div className="iso-image-right">
            <div className="iso-grid-wrapper">
              {isoImages.map((src, i) => (
                <div 
                  key={i} 
                  className="iso-cert-card" 
                  onClick={() => openLightbox(src)}
                >
                  <div className="iso-cert-overlay">
                    <span className="material-symbols-outlined">zoom_in</span>
                    <span>View Full Size</span>
                  </div>
                  <img 
                    src={src} 
                    alt={`iso-cert-${i + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="iso-footer-badge">
          <div className="iso-image-badge">
            <span className="material-symbols-outlined">verified</span>
            <span>Certified Excellence</span>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="iso-bg-element iso-bg-1"></div>
      <div className="iso-bg-element iso-bg-2"></div>
      <div className="iso-bg-element iso-bg-2"></div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="iso-modal-root" ref={modalRef}>
          <div className="iso-modal-backdrop" onClick={closeLightbox}></div>
          <div className="iso-modal-content">
            <button className="iso-modal-close" onClick={closeLightbox}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="iso-modal-image-container">
              <img src={selectedCert} alt="Certificate Full View" />
            </div>
            <div className="iso-modal-caption">
              {t("about.section_iso.certified_excellence")}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ISOSection;
