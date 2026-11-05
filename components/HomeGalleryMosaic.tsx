"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomeGalleryMosaic() {
  const { language } = useLanguage();

  const photos = [
    { src: "/images/dji_fly_20230823_092730_87_1692800992341_pano_optimized-EDIT-1.jpg", alt: "Vista Panorámica del Fundo", span: "large" },
    { src: "/images/IMG_20230823_082703-EDIT_DxO_DxO-1918x1440.jpg", alt: "Casona Colonial", span: "normal" },
    { src: "/images/casa-hacienda-achamaqui.jpg", alt: "Casona y Jardines Florales", span: "normal" },
    { src: "/images/DJI_0111_DxO-1920x1440.jpg", alt: "Río Utcubamba", span: "normal" },
    { src: "/images/360900551_DxO.jpg", alt: "Gastronomía", span: "normal" },
  ];

  return (
    <section className="section gallery-mosaic-section" style={{ backgroundColor: "#faf8f5", padding: "80px 0" }}>
      <style jsx>{`
        .mosaic-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 220px;
          gap: 16px;
          margin-top: 40px;
        }
        .mosaic-item-large {
          grid-column: span 2;
          grid-row: span 2;
        }
        @media (max-width: 900px) {
          .mosaic-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 180px;
          }
          .mosaic-item-large {
            grid-column: span 2;
            grid-row: span 1;
          }
        }
        @media (max-width: 500px) {
          .mosaic-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 200px;
          }
          .mosaic-item-large {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
        .mosaic-photo {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
          cursor: pointer;
        }
        .mosaic-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mosaic-photo:hover img {
          transform: scale(1.06);
        }
        .mosaic-caption {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.75) 100%);
          display: flex;
          align-items: flex-end;
          padding: 18px;
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 500;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
      `}</style>

      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap" style={{ textAlign: "center", marginBottom: "15px" }}>
          <div className="div-block-8 div-block-9" style={{ margin: "0 auto 8px" }}>
            <h6 className="heading-2" style={{ color: "#c9a96e" }}>
              {language === "en" ? "Visual Journey" : "Momentos en Fundo Achamaqui"}
            </h6>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", marginBottom: "12px", color: "#1a1a1a" }}>
            {language === "en" ? "Unforgettable Views from Every Corner" : "Un Vistazo a Nuestro Paraíso"}
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto", color: "#5a5a5a", fontSize: "15px" }}>
            {language === "en"
              ? "Immerse yourself in the tranquility of our hacienda grounds, colonial architecture, and pristine Andean flora."
              : "Arquitectura colonial preservada con amor, naturaleza viva y la paz infinita que solo la ceja de selva de Amazonas te puede regalar."}
          </p>
        </div>

        <div className="mosaic-grid">
          {photos.map((p, idx) => (
            <div key={idx} className={`mosaic-photo ${p.span === "large" ? "mosaic-item-large" : ""}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="mosaic-caption">
                <span>✦ {p.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <Link href="/galeria" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {language === "en" ? "Explore Full High-Resolution Gallery" : "Ver Galería Completa de Fotos"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
