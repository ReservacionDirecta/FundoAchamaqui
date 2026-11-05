"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const reviews = [
  {
    quote: "Una experiencia mágica en medio de la naturaleza. Achamaqui es un verdadero paraíso lejos del bullicio de la ciudad. El personal es cálido y acogedor, las instalaciones son impecables, y la comida del restaurante es una delicia.",
    author: "Arianna L. R.",
    location: "Lima, Perú",
    source: "TripAdvisor",
    rating: 5,
    avatar: "/images/Member-Photo-Close-up-6_1Member-Photo-Close-up-6.webp",
  },
  {
    quote: "Un aniversario inolvidable en una hermosa hacienda colonial. Desde el momento en que llegamos nos brindaron una cálida bienvenida. La cercanía a Gocta y Kuélap la convierte en la base perfecta para viajar por Chachapoyas.",
    author: "Juan Carlos M.",
    location: "Arequipa, Perú",
    source: "TripAdvisor",
    rating: 5,
    avatar: "/images/Member-Photo-Close-up-8_1Member-Photo-Close-up-8.webp",
  },
  {
    quote: "El murmullo del río Utcubamba por la noche y el canto de las aves al amanecer no tienen precio. Las habitaciones de madera tienen un encanto rústico impecable con agua caliente y camas súper cómodas.",
    author: "Sophie Dupont",
    location: "París, Francia",
    source: "Google Reviews",
    rating: 5,
    avatar: "/images/Member-Photo-Close-up-4_1Member-Photo-Close-up-4.webp",
  },
  {
    quote: "Excelente servicio de todo el equipo. Nos organizaron el tour a las cataratas y pudimos relajarnos en sus jardines con una vista a la montaña incomparable. Totalmente recomendado para ir en familia o pareja.",
    author: "David & Carmen R.",
    location: "Santiago, Chile",
    source: "TripAdvisor",
    rating: 5,
    avatar: "/images/Member-Photo-Close-up-5_1Member-Photo-Close-up-5.webp",
  },
];

export default function HomeReviews() {
  const { language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="section primary-color-background" style={{ backgroundColor: "#2b3d30", color: "#ffffff", padding: "85px 0" }}>
      <style jsx>{`
        .reviews-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 45px;
        }
        @media (max-width: 850px) {
          .reviews-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .review-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(201, 169, 110, 0.22);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          border-color: #c9a96e;
          background: rgba(255, 255, 255, 0.09);
        }
        .review-stars-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 14px;
          color: #f59e0b;
        }
        .review-quote-text {
          font-family: var(--font-gilda, serif);
          font-size: 16.5px;
          line-height: 1.6;
          color: #faf7f2;
          font-style: italic;
          margin-bottom: 22px;
          flex: 1;
        }
        .review-author-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 16px;
        }
        .review-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #c9a96e;
          object-fit: cover;
        }
        .review-meta h5 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }
        .review-meta span {
          font-size: 12px;
          color: #c9a96e;
        }
        .badges-trust-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          margin-top: 50px;
          flex-wrap: wrap;
          padding: 20px;
          background: rgba(0, 0, 0, 0.18);
          border-radius: 12px;
        }
        .trust-badge-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #faf7f2;
          font-size: 13px;
          font-weight: 500;
        }
        .trust-badge-item svg {
          color: #c9a96e;
        }
      `}</style>

      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap" style={{ textAlign: "center", marginBottom: "15px" }}>
          <div className="div-block-8 div-block-9" style={{ margin: "0 auto 8px" }}>
            <h6 className="heading-2" style={{ color: "#c9a96e" }}>
              {language === "en" ? "Guest Experiences" : "Opiniones Verificadas"}
            </h6>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "#ffffff", marginBottom: "12px" }}>
            {language === "en" ? "Stories from Our Guests" : "Lo Que Dicen Quienes Nos Visitan"}
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto", color: "rgba(255, 255, 255, 0.8)", fontSize: "15px" }}>
            {language === "en"
              ? "Over 95% 5-star ratings across TripAdvisor and Google. Discover why travelers choose Achamaqui for their Peruvian Amazon journey."
              : "Más del 95% de opiniones 5 estrellas en TripAdvisor y Google. Conoce las memorias de viajeros que encontraron en Achamaqui su hogar en la selva."}
          </p>
        </div>

        <div className="reviews-cards-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div className="review-stars-row">
                {"★★★★★"}
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginLeft: "8px", fontWeight: 600 }}>
                  5.0 / 5.0
                </span>
              </div>
              <p className="review-quote-text">“{rev.quote}”</p>
              <div className="review-author-wrap">
                <img src={rev.avatar} alt={rev.author} className="review-avatar" loading="lazy" />
                <div className="review-meta">
                  <h5>{rev.author}</h5>
                  <span>{rev.location} · {rev.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="badges-trust-row">
          <div className="trust-badge-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <span>Certificado de Excelencia TripAdvisor</span>
          </div>
          <div className="trust-badge-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Hotel Seguro & Protocolos de Calidad</span>
          </div>
          <div className="trust-badge-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Atención Personalizada 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
