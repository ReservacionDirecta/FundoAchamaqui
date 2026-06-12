"use client";

import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className="footer">
      <div className="base-container center w-container">
        <div className="logo-footer-wrapper">
          <Link href="/" className="footer-logo-link w-inline-block">
            <img src={t("logo_white_image_url")} loading="lazy" alt="Logo Footer" className="logo-footer" />
          </Link>
        </div>
        <Newsletter />
        <div className="footer-wrapper">
          <div className="footer-brand-wrapper">
            <h6 className="subtitle-footer">{t("language") === "en" ? "Location" : "Ubicación"}</h6>
            <div className="info-footer">
              <a href={t("contact_map_url")} target="_blank" rel="noopener noreferrer" className="footer-links">
                {t("contact_address")}
              </a>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <h6 className="subtitle-footer">{t("language") === "en" ? "RESERVATIONS" : "RESERVACIONES"}</h6>
            <div className="info-footer">
              <a href={`tel:${t("contact_phone").replace(/\s+/g, "")}`} className="footer-links">{t("contact_phone")}</a>
              <a href={`mailto:${t("contact_email")}`} className="footer-links">{t("contact_email")}</a>
            </div>
          </div>
          <div className="footer-links-wrapper last-footer-links">
            <h6 className="subtitle-footer">{t("language") === "en" ? "Follow Us" : "Síguenos"}</h6>
            <div className="footer-social-icons-wrapper">
              <a href={t("facebook_url")} target="_blank" rel="noopener noreferrer" className="footer-social-icon"></a>
              <a href={t("instagram_url")} target="_blank" rel="noopener noreferrer" className="footer-social-icon"></a>
              <a href={t("twitter_url")} target="_blank" rel="noopener noreferrer" className="footer-social-icon last-child"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright">© Fundo Achamaqui SAC. {t("language") === "en" ? "All Rights Reserved" : "Todos Los Derechos Reservados"} 2023.</div>
          <div className="footer-rights">by <a href="https://www.reservaciondirecta.com" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">Reservación Directa</a></div>
          <div className="footer-rights">Powered by <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="footer-copyright-link">Webflow</a></div>
        </div>
      </div>
    </div>
  );
}
