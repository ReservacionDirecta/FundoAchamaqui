"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomeToursBase() {
  const { language } = useLanguage();

  const attractions = [
    {
      name: language === "en" ? "Kuélap Fortress" : "Fortaleza de Kuélap",
      distance: language === "en" ? "45 mins · Cable Car Access" : "45 min · Acceso Teleférico",
      description: language === "en"
        ? "The magnificent walled city of the Chachapoya culture perched on a cloud forest mountaintop."
        : "La majestuosa ciudadela amurallada de la civilización Chachapoyas, encaramada sobre los Andes amazónicos.",
      image: "/images/Kuelap.jpg",
    },
    {
      name: language === "en" ? "Gocta Waterfall" : "Catarata Gocta",
      distance: language === "en" ? "40 mins · 771m Drop" : "40 min · 771m de caída",
      description: language === "en"
        ? "One of the highest waterfalls on earth surrounded by virgin rainforest, orchids, and tropical birds."
        : "Una de las caídas de agua más altas del planeta, rodeada de bosques de neblina, tucanes y orquídeas.",
      image: "/images/Catarata-Gocta.webp",
    },
    {
      name: language === "en" ? "Karajía Sarcophagi" : "Sarcófagos de Karajía",
      distance: language === "en" ? "1h 30m · Sacred Cliff" : "1h 30m · Acantilado Sagrado",
      description: language === "en"
        ? "Imposing 2.5-meter anthropomorphic funerary statues standing untouched on sheer limestone cliffs."
        : "Figuras funerarias antropomorfas de 2.5 metros erigidas hace más de 600 años en farallones verticales.",
      image: "/images/sarcofagos-karajia.png",
    },
    {
      name: language === "en" ? "Sonche Canyon & Huancas" : "Cañón del Sonche & Huancas",
      distance: language === "en" ? "35 mins · 962m Abyss" : "35 min · Abismo de 962m",
      description: language === "en"
        ? "Breathtaking natural abyss with viewpoints and artisan pottery villages steeped in colonial tradition."
        : "Impresionante corte geológico con miradores al infinito y el pueblo alfarero tradicional de Huancas.",
      image: "/images/canyon-de-sonche-chachapoyas.jpg",
    },
  ];

  return (
    <section className="section tours-base-section" style={{ backgroundColor: "#2b3d30", color: "#ffffff", padding: "85px 0" }}>
      <style jsx>{`
        .tours-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 45px;
        }
        @media (max-width: 1024px) {
          .tours-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .tours-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .tour-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(201, 169, 110, 0.2);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        .tour-item:hover {
          transform: translateY(-5px);
          border-color: #c9a96e;
          background: rgba(255, 255, 255, 0.09);
        }
        .tour-img-wrap {
          width: 100%;
          height: 190px;
          overflow: hidden;
          position: relative;
        }
        .tour-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .tour-item:hover .tour-img-wrap img {
          transform: scale(1.08);
        }
        .tour-distance-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          color: #c9a96e;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .tour-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .tour-title {
          font-family: var(--font-gilda, serif);
          font-size: 20px;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .tour-desc {
          color: rgba(250, 247, 242, 0.78);
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }
        .tour-link {
          color: #c9a96e;
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }
        .tour-link:hover {
          color: #ffffff;
        }
      `}</style>

      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap" style={{ textAlign: "center", marginBottom: "15px" }}>
          <div className="div-block-8 div-block-9" style={{ margin: "0 auto 8px" }}>
            <h6 className="heading-2" style={{ color: "#c9a96e" }}>
              {language === "en" ? "Strategic Hotel Hub" : "Tu Campamento Base en Chachapoyas"}
            </h6>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "#ffffff", marginBottom: "12px" }}>
            {language === "en" ? "Explore the Wonders of Amazonas" : "Las Maravillas que te Esperan"}
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "rgba(255, 255, 255, 0.82)", fontSize: "15px" }}>
            {language === "en"
              ? "Achamaqui is strategically located on the valley route, allowing you quick access to all iconic archaeological and natural attractions."
              : "Situado en el corazón del valle del Utcubamba, Fundo Achamaqui te ofrece la ubicación perfecta para explorar los sitios arqueológicos y cataratas más asombrosos del Perú."}
          </p>
        </div>

        <div className="tours-grid">
          {attractions.map((att, i) => (
            <div key={i} className="tour-item">
              <div className="tour-img-wrap">
                <img src={att.image} alt={att.name} loading="lazy" />
                <span className="tour-distance-badge">📍 {att.distance}</span>
              </div>
              <div className="tour-body">
                <h3 className="tour-title">{att.name}</h3>
                <p className="tour-desc">{att.description}</p>
                <Link href="/actividades" className="tour-link">
                  {language === "en" ? "Discover Tour" : "Ver Excursión"} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/actividades" className="primary-button-white" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {language === "en" ? "View Full Excursion Guide & Museum" : "Ver Guía Completa de Tours & Museo Achamaqui"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
