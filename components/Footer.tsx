"use client";

import React from "react";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const waRaw = t("whatsapp_number") || t("contact_phone") || "51954754650";
  const cleanWaNumber = waRaw.replace(/\D/g, "");

  return (
    <footer className="footer custom-footer-enhanced">
      {/* Scoped CSS to ensure flawless responsive grid and high-end typography */}
      <style jsx global>{`
        .custom-footer-enhanced {
          background-color: #2b3d30 !important;
          color: #faf7f2;
          padding-top: 60px;
          padding-bottom: 40px;
          border-top: 1px solid rgba(201, 169, 110, 0.2);
        }

        .footer-top-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 25px;
        }

        .footer-brand-tagline {
          font-family: var(--font-gilda, serif);
          font-size: 16px;
          color: #c9a96e;
          max-width: 650px;
          margin: 14px auto 0 auto;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .footer-grid-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr 1.15fr;
          gap: 36px;
          width: 100%;
          margin-top: 40px;
          margin-bottom: 45px;
          text-align: left;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-col-title {
          font-family: var(--font-lexend, sans-serif);
          font-size: 14px;
          font-weight: 700;
          color: #c9a96e;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 18px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(201, 169, 110, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-link {
          color: #e5dfd5;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          line-height: 1.4;
        }

        .footer-nav-link:hover {
          color: #c9a96e;
          transform: translateX(4px);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 14px;
          color: #e5dfd5;
          line-height: 1.5;
        }

        .footer-contact-icon {
          color: #c9a96e;
          font-size: 16px;
          line-height: 1.3;
          flex-shrink: 0;
        }

        .footer-contact-item a {
          color: #e5dfd5;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-contact-item a:hover {
          color: #c9a96e;
        }

        /* Complaints Book Badge */
        .reclamaciones-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(201, 169, 110, 0.4);
          border-radius: 8px;
          padding: 12px 14px;
          margin-top: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .reclamaciones-badge:hover {
          background: rgba(201, 169, 110, 0.15);
          border-color: #c9a96e;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .reclamaciones-book-icon {
          font-size: 24px;
          line-height: 1;
        }

        .reclamaciones-text-box {
          display: flex;
          flex-direction: column;
        }

        .reclamaciones-title {
          font-family: var(--font-lexend, sans-serif);
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .reclamaciones-sub {
          font-size: 11px;
          color: #c9a96e;
          margin-top: 2px;
        }

        /* Social icons */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.25s ease;
        }

        .footer-social-btn:hover {
          background: #c9a96e;
          color: #2b3d30;
          border-color: #c9a96e;
          transform: translateY(-2px);
        }

        /* Footer Bottom */
        .footer-enhanced-bottom {
          border-top: 1px solid rgba(250, 247, 242, 0.12);
          padding-top: 25px;
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
        }

        .footer-legal-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 13px;
        }

        .footer-legal-bar-link {
          color: #bbb4a8;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal-bar-link:hover {
          color: #c9a96e;
          text-decoration: underline;
        }

        .footer-legal-bar-sep {
          color: rgba(255, 255, 255, 0.2);
          user-select: none;
        }

        .footer-copy-text {
          font-size: 13px;
          color: #9f988c;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .footer-grid-container {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid-container {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }

          .footer-col-title {
            justify-content: center;
          }

          .footer-nav-link {
            justify-content: center;
          }

          .footer-contact-item {
            justify-content: center;
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }

          .reclamaciones-badge {
            justify-content: center;
          }
        }
      `}</style>

      <div className="base-container center w-container" style={{ maxWidth: "1140px" }}>
        
        {/* Logo and Brand Tagline */}
        <div className="footer-top-brand">
          <Link href="/" className="footer-logo-link w-inline-block">
            <img
              src={t("logo_white_image_url")}
              loading="lazy"
              alt="Hotel Fundo Achamaqui - Chachapoyas"
              className="logo-footer"
              style={{ width: "230px", height: "auto" }}
            />
          </Link>
          <p className="footer-brand-tagline">
            {t("footer_about_hotel")}
          </p>
        </div>

        {/* Newsletter Subscription */}
        <Newsletter />

        {/* 4-Column Enhanced Footer Grid */}
        <div className="footer-grid-container">

          {/* Column 1: Ubicación & Contacto Directo */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span>📍</span> {language === "en" ? "Location & Contact" : "Ubicación y Contacto"}
            </h4>

            {/* Dirección */}
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🗺️</span>
              <div>
                <a href={t("contact_map_url")} target="_blank" rel="noopener noreferrer">
                  {t("contact_address")}
                </a>
                <div style={{ fontSize: "12px", color: "#c9a96e", marginTop: "2px" }}>
                  Chachapoyas, Amazonas, Perú
                </div>
              </div>
            </div>

            {/* Teléfono Fijo */}
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <div>
                <a href="tel:041754605">(041) 754605</a>
                <span style={{ fontSize: "12px", color: "#9f988c", marginLeft: "6px" }}>(Recepción)</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <div>
                <a
                  href={`https://wa.me/${cleanWaNumber}?text=Hola%20Fundo%20Achamaqui,%20deseo%20m%C3%A1s%20informaci%C3%B3n`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", fontWeight: 600 }}
                >
                  {t("contact_phone")}
                </a>
                <span style={{ fontSize: "12px", color: "#9f988c", marginLeft: "6px" }}>(WhatsApp 24/7)</span>
              </div>
            </div>

            {/* Correo */}
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href={`mailto:${t("contact_email")}`}>
                {t("contact_email")}
              </a>
            </div>

            {/* Horario */}
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🕒</span>
              <span style={{ fontSize: "13px", color: "#bbb4a8" }}>
                {t("footer_hours_title")}: 06:00 - 22:00
              </span>
            </div>

            {/* Redes Sociales */}
            <div className="footer-socials">
              <a href={t("facebook_url")} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Facebook">
                
              </a>
              <a href={t("instagram_url")} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Instagram">
                
              </a>
              <a href={t("twitter_url")} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Twitter">
                
              </a>
            </div>
          </div>

          {/* Column 2: Índice del Sitio (Site Index / Navegación) */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span>🧭</span> {language === "en" ? "Site Index" : "Índice del Sitio"}
            </h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  › {t("footer_nav_home")}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="footer-nav-link">
                  › {t("footer_nav_about")}
                </Link>
              </li>
              <li>
                <Link href="/alojamiento" className="footer-nav-link">
                  › {t("footer_nav_accommodation")}
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="footer-nav-link">
                  › {t("footer_nav_rooms")}
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="footer-nav-link">
                  › {t("footer_nav_activities")}
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="footer-nav-link">
                  › {t("footer_nav_gallery")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-nav-link">
                  › {t("footer_nav_faq")}
                </Link>
              </li>
              <li>
                <Link href="/testimonios" className="footer-nav-link">
                  › {t("footer_nav_testimonials")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-nav-link">
                  › {t("footer_nav_blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Experiencias & Reservas */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span>🛎️</span> {language === "en" ? "Reservations & Tours" : "Reservas y Tours"}
            </h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/reservar" className="footer-nav-link" style={{ color: "#c9a96e", fontWeight: 600 }}>
                  ★ {t("footer_nav_book")}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="footer-nav-link">
                  › {t("footer_nav_contact")}
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="footer-nav-link">
                  › Kuélap & Catarata Gocta
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="footer-nav-link">
                  › Sarcófagos de Karajía
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="footer-nav-link">
                  › Museo de Leymebamba
                </Link>
              </li>
              <li>
                <Link href="/politicas-de-reserva" className="footer-nav-link">
                  › Cuentas Bancarias BCP
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${cleanWaNumber}?text=Hola,%20deseo%20consultar%20disponibilidad%20y%20tarifas%20especiales`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  › Consultas vía WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Protección Legal & Normativas */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span>⚖️</span> {language === "en" ? "Legal Protection" : "Protección Legal"}
            </h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/politicas-de-reserva" className="footer-nav-link">
                  › {t("footer_policy_booking")}
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="footer-nav-link">
                  › {t("footer_policy_privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="footer-nav-link">
                  › {t("footer_policy_terms")}
                </Link>
              </li>
              <li>
                <Link href="/libro-de-reclamaciones" className="footer-nav-link">
                  › {t("footer_complaints_book")} Virtual
                </Link>
              </li>
            </ul>

            {/* Official Complaints Book Interactive Badge */}
            <Link href="/libro-de-reclamaciones" className="reclamaciones-badge">
              <span className="reclamaciones-book-icon">📖</span>
              <div className="reclamaciones-text-box">
                <span className="reclamaciones-title">Libro de Reclamaciones</span>
                <span className="reclamaciones-sub">Virtual · Ley N° 29571 (INDECOPI)</span>
              </div>
            </Link>

            <div style={{ marginTop: "12px", fontSize: "12px", color: "#8d877c", lineHeight: "1.5" }}>
              Fundo Achamaqui S.A.C.<br />
              RUC: 20608407716
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar & Copyright */}
        <div className="footer-enhanced-bottom">
          <div className="footer-legal-bar">
            <Link href="/politicas-de-reserva" className="footer-legal-bar-link">
              {t("footer_policy_booking")}
            </Link>
            <span className="footer-legal-bar-sep">•</span>
            <Link href="/politica-de-privacidad" className="footer-legal-bar-link">
              {t("footer_policy_privacy")}
            </Link>
            <span className="footer-legal-bar-sep">•</span>
            <Link href="/terminos-y-condiciones" className="footer-legal-bar-link">
              {t("footer_policy_terms")}
            </Link>
            <span className="footer-legal-bar-sep">•</span>
            <Link href="/libro-de-reclamaciones" className="footer-legal-bar-link">
              {t("footer_complaints_book")}
            </Link>
          </div>

          <p className="footer-copy-text">
            © {currentYear} FUNDO ACHAMAQUI SAC. RUC 20608407716. {t("footer_rights_text")}.
          </p>

          <div style={{ fontSize: "12px", color: "#8d877c" }}>
            {language === "en" ? "Crafted with care by " : "Desarrollado con dedicación por "}
            <a
              href="https://chamba.digital"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a96e", textDecoration: "none", fontWeight: 600 }}
            >
              Chamba Digital
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
