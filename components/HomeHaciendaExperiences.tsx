"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomeHaciendaExperiences() {
  const { language } = useLanguage();

  const experiences = [
    {
      title: language === "en" ? "Botanical Gardens & Sunsets" : "Jardines Florales & Mirador del Valle",
      tag: language === "en" ? "Serenity" : "Paz & Naturaleza",
      description: language === "en"
        ? "Relax in our lush native gardens nestled between majestic Andean mountains, surrounded by endemic flora and soothing valley breezes."
        : "Descansa y desconéctate en nuestros extensos jardines rodeados por el imponente cañón del Utcubamba y flores nativas en floración todo el año.",
      image: "/images/casa-hacienda-achamaqui.jpg",
      link: "/actividades",
    },
    {
      title: language === "en" ? "Amazonian Flavors & Bar" : "Gastronomía Amazónica & Bar",
      tag: language === "en" ? "Culinary" : "Sabores de la Selva",
      description: language === "en"
        ? "Delight in authentic regional dishes crafted with local ingredients from our valley, accompanied by classic Peruvian cocktails and select wines."
        : "Disfruta de la mejor cocina regional e internacional en nuestro acogedor restaurante, con ingredientes frescos de la huerta y cócteles de autor.",
      image: "/images/360900551_DxO.jpg",
      link: "/actividades",
    },
    {
      title: language === "en" ? "Private Utcubamba River Walk" : "Paseo Privado al Río Utcubamba",
      tag: language === "en" ? "Nature" : "Ecoturismo",
      description: language === "en"
        ? "Private paths lead directly to the river shore. Perfect for mindful morning walks, birdwatching, and listening to the tranquil water currents."
        : "Caminos empedrados que descienden directamente a la orilla del río. Un espacio para meditar, observar aves endémicas y respirar aire 100% puro.",
      image: "/images/DJI_0111_DxO-1920x1440.jpg",
      link: "/actividades",
    },
    {
      title: language === "en" ? "Sarcophagus Trail & Night Fire" : "Caminata al Sarcófago Milenario & Fogata",
      tag: language === "en" ? "Heritage" : "Historia Viva",
      description: language === "en"
        ? "Discover ancient Chachapoya funeral artifacts within our grounds and gather under star-filled skies around the evening campfire."
        : "Conoce el sarcófago con más de 1000 años de historia situado en el fundo y comparte historias bajo el cielo estrellado junto a la fogata nocturna.",
      image: "/images/DJI_0092.jpg",
      link: "/actividades",
    },
  ];

  return (
    <section className="section experiences-section" style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
      <style jsx>{`
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 45px;
        }
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .exp-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          text-decoration: none;
          color: #ffffff;
        }
        .exp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);
        }
        .exp-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .exp-card:hover .exp-bg-image {
          transform: scale(1.08);
        }
        .exp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.5) 45%, rgba(15, 23, 42, 0.92) 100%);
          z-index: 2;
        }
        .exp-content {
          position: relative;
          z-index: 3;
        }
        .exp-tag {
          display: inline-block;
          background: #c9a96e;
          color: #1a1a1a;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }
        .exp-title {
          font-family: var(--font-gilda, serif);
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.25;
        }
        .exp-desc {
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
          line-height: 1.55;
          margin-bottom: 16px;
        }
        .exp-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #c9a96e;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .exp-card:hover .exp-cta {
          color: #ffffff;
          transform: translateX(4px);
        }
      `}</style>

      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap" style={{ textAlign: "center", marginBottom: "15px" }}>
          <div className="div-block-8 div-block-9" style={{ margin: "0 auto 8px" }}>
            <h6 className="heading-2" style={{ color: "#c9a96e" }}>
              {language === "en" ? "Hacienda Life" : "La Experiencia Achamaqui"}
            </h6>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", marginBottom: "12px", color: "#1a1a1a" }}>
            {language === "en" ? "More Than a Hotel, an Authentic Sanctuary" : "Mucho Más Que un Hotel: Vive la Casona"}
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#5a5a5a", fontSize: "15px" }}>
            {language === "en"
              ? "Discover our vast gardens, riverbank trails, organic farm, and ancestral gastronomy rooted in the fertile lands of Amazonas."
              : "Conéctate con el encanto colonial de nuestra casona tradicional, sus hectáreas de naturaleza virgen, su huerto orgánico y la calidez de nuestra gente."}
          </p>
        </div>

        <div className="exp-grid">
          {experiences.map((exp, idx) => (
            <Link key={idx} href={exp.link} className="exp-card">
              <img src={exp.image} alt={exp.title} className="exp-bg-image" loading="lazy" />
              <div className="exp-overlay" />
              <div className="exp-content">
                <span className="exp-tag">{exp.tag}</span>
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-desc">{exp.description}</p>
                <span className="exp-cta">
                  {language === "en" ? "Explore Experience" : "Explorar Experiencia"} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
