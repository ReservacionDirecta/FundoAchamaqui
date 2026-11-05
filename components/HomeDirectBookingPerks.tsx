"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomeDirectBookingPerks() {
  const { language } = useLanguage();

  const perks = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      title: language === "en" ? "Best Rate Guaranteed" : "Mejor Tarifa Garantizada",
      desc: language === "en"
        ? "No middleman fees. Use code CANALDIRECTO for an exclusive 10% discount on official rates."
        : "Sin comisiones de intermediarios. Aplica el cupón CANALDIRECTO y obtén 10% de descuento inmediato.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
      title: language === "en" ? "Breakfast Included" : "Desayuno Artesanal Incluido",
      desc: language === "en"
        ? "Every reservation includes fresh continental breakfast made daily with regional fruits and local coffee."
        : "Todas las reservas directas incluyen desayuno continental elaborado a diario con productos del valle.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: language === "en" ? "Direct Concierge Assistance" : "Asistencia y Concierge 1 a 1",
      desc: language === "en"
        ? "Coordinate airport transfers, dietary preferences, and tour bookings directly with our front desk team."
        : "Coordina traslados, requerimientos especiales y tours en Chachapoyas directamente con nuestro equipo.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      title: language === "en" ? "Flexible Date Changes" : "Flexibilidad en Modificaciones",
      desc: language === "en"
        ? "Manage booking date adjustments smoothly up to 15 days in advance subject to seasonal availability."
        : "Facilidad para reprogramar tus fechas avisando con anticipación ante cualquier cambio de itinerario.",
    },
  ];

  return (
    <section className="section perks-section" style={{ backgroundColor: "#ffffff", padding: "70px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <style jsx>{`
        .perks-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 991px) {
          .perks-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 550px) {
          .perks-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .perk-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px;
          border-radius: 12px;
          background: #faf8f5;
          border: 1px solid rgba(201, 169, 110, 0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .perk-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(43, 61, 48, 0.08);
          border-color: #c9a96e;
        }
        .perk-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #2b3d30;
          color: #c9a96e;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .perk-title {
          font-family: var(--font-gilda, serif);
          font-size: 18px;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        .perk-desc {
          color: #666666;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }
      `}</style>

      <div className="w-layout-blockcontainer base-container w-container">
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h3 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "24px", color: "#2b3d30", margin: 0 }}>
            {language === "en" ? "Why Book Directly with Us?" : "¿Por Qué Reservar Directamente en Nuestra Web?"}
          </h3>
        </div>
        <div className="perks-grid">
          {perks.map((p, i) => (
            <div key={i} className="perk-box">
              <div className="perk-icon-wrap">{p.icon}</div>
              <h4 className="perk-title">{p.title}</h4>
              <p className="perk-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
