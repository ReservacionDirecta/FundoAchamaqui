"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" className="navbar-2 w-nav">
      <div className="nav-base-container w-container">
        <div className="nav-menu-wrapper">
          <Link href="/" className="logo-link hidden-desktop w-nav-brand">
            <img 
              src="/images/logo-titulo-negro2x.png" 
              loading="lazy" 
              height="30" 
              alt="Logo" 
              className="logo-header"
            />
          </Link>
          <nav role="navigation" className="nav-menu-2 desktop-menu-full-width w-nav-menu">
            <div className="tablet-menu">
              <Link href="/" className="hidden-desktop w-nav-brand">
                <img src="/images/logo-titulo-negro2x.png" loading="lazy" height="30" alt="Logo" className="logo-header" />
              </Link>
              <div className="nav-close-button w-nav-button">
                <img src="/images/x_icon_1x_icon.webp" loading="lazy" alt="" className="nav-close-button-icon" />
              </div>
            </div>
            <div className="menu-wrapper two-side-blocks">
              <div className="left-side-block">
                <Link href="/" className="nav-link w-nav-link">{t("nav_home")}</Link>
                <Link href="/alojamiento" className="nav-link w-nav-link">{t("nav_accommodation")}</Link>
                <Link href="/rooms" className="nav-link w-nav-link">{t("nav_rooms")}</Link>
              </div>
              <Link href="/" className="logo-link hiddent-tablet-mobile w-nav-brand">
                <img src="/images/logo-titulo-negro2x.png" loading="lazy" height="30" alt="Logo" className="logo-header" />
              </Link>
              <div className="right-side-block">
                <Link href="/actividades" className="nav-link w-nav-link">{t("nav_activities")}</Link>
                <Link href="/galeria" className="nav-link w-nav-link">{t("nav_gallery")}</Link>
                <Link href="/contacto" className="nav-link w-nav-link">{t("nav_contact")}</Link>
                <Link href="/reservar" className="nav-link black w-nav-link">{t("nav_book")}</Link>
                
                {/* Language Switcher */}
                <div style={{ display: "flex", alignItems: "center", marginLeft: "15px", gap: "5px" }}>
                  <button 
                    onClick={() => setLanguage("es")}
                    style={{
                      background: "none",
                      border: "none",
                      color: language === "es" ? "#8c7355" : "#777777",
                      fontWeight: language === "es" ? "bold" : "normal",
                      cursor: "pointer",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      padding: "4px 8px",
                      transition: "color 0.2s"
                    }}
                  >
                    ES
                  </button>
                  <span style={{ color: "#dddddd", fontSize: "12px" }}>|</span>
                  <button 
                    onClick={() => setLanguage("en")}
                    style={{
                      background: "none",
                      border: "none",
                      color: language === "en" ? "#8c7355" : "#777777",
                      fontWeight: language === "en" ? "bold" : "normal",
                      cursor: "pointer",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      padding: "4px 8px",
                      transition: "color 0.2s"
                    }}
                  >
                    EN
                  </button>
                </div>

              </div>
            </div>
          </nav>
          <div className="div-block-42">
            {/* Cart component would go here if needed */}
          </div>
          <div className="menu-button-2 w-nav-button">
            <img src="/images/Burger-button_1Burger-button.webp" loading="lazy" alt="" height="16" className="image-burger-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
