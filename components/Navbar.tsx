"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: t("nav_home") },
    { href: "/alojamiento", label: t("nav_accommodation") },
    { href: "/rooms", label: t("nav_rooms") },
    { href: "/actividades", label: t("nav_activities") },
    { href: "/galeria", label: t("nav_gallery") },
    { href: "/contacto", label: t("nav_contact") }
  ];

  return (
    <>
      {/* Dynamic CSS styles for bulletproof responsiveness and premium transition animations */}
      <style jsx global>{`
        .nav-link-custom {
          font-family: var(--font-lexend, sans-serif);
          font-size: 14px;
          font-weight: 500;
          color: #2f4137;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          padding: 8px 16px;
          transition: color 0.3s ease, transform 0.2s ease;
          position: relative;
        }
        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 16px;
          background-color: #8c7355;
          transition: width 0.3s ease;
        }
        .nav-link-custom:hover {
          color: #8c7355;
        }
        .nav-link-custom:hover::after {
          width: calc(100% - 32px);
        }
        
        .book-btn-custom {
          font-family: var(--font-lexend, sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #ffffff !important;
          background-color: #8c7355;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          padding: 10px 24px;
          border-radius: 30px;
          box-shadow: 0 4px 12px rgba(140, 115, 85, 0.2);
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .book-btn-custom:hover {
          background-color: #725b41;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(140, 115, 85, 0.3);
        }
        
        .logo-header {
          height: 38px;
          width: auto;
          transition: transform 0.3s ease;
        }
        .logo-link:hover .logo-header {
          transform: scale(1.02);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .desktop-navigation {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 992px) {
          .desktop-navigation {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .mobile-navigation-overlay {
            display: none !important;
          }
        }
      `}</style>

      <div 
        role="banner" 
        className="navbar-2 w-nav" 
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          zIndex: 999,
          boxShadow: "0 4px 30px rgba(0,0,0,0.02)"
        }}
      >
        <div className="nav-base-container w-container" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div className="nav-menu-wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "12px 0" }}>
            
            {/* Logo Left */}
            <Link href="/" className="logo-link w-nav-brand" onClick={closeMenu} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img 
                src={t("logo_black_image_url")} 
                loading="lazy" 
                alt="Fundo Achamaqui" 
                className="logo-header"
              />
            </Link>

            {/* Desktop Menu Right */}
            <nav 
              role="navigation" 
              className="desktop-navigation"
              style={{
                alignItems: "center",
                gap: "8px"
              }}
            >
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link-custom">
                  {item.label}
                </Link>
              ))}
              
              <Link href="/reservar" className="book-btn-custom" style={{ marginLeft: "10px" }}>
                {t("nav_book")}
              </Link>
              
              {/* Language Switcher */}
              <div style={{ display: "flex", alignItems: "center", marginLeft: "15px", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.1)", paddingLeft: "12px" }}>
                <button 
                  onClick={() => setLanguage("es")}
                  style={{
                    background: "none",
                    border: "none",
                    color: language === "es" ? "#8c7355" : "#777777",
                    fontWeight: language === "es" ? "700" : "500",
                    cursor: "pointer",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    padding: "4px 6px",
                    transition: "color 0.2s"
                  }}
                >
                  ES
                </button>
                <span style={{ color: "#cccccc", fontSize: "11px" }}>/</span>
                <button 
                  onClick={() => setLanguage("en")}
                  style={{
                    background: "none",
                    border: "none",
                    color: language === "en" ? "#8c7355" : "#777777",
                    fontWeight: language === "en" ? "700" : "500",
                    cursor: "pointer",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    padding: "4px 6px",
                    transition: "color 0.2s"
                  }}
                >
                  EN
                </button>
              </div>
            </nav>

            {/* Hamburger Button Mobile */}
            <button 
              onClick={toggleMenu} 
              className="mobile-menu-toggle"
              style={{
                display: "none",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(140, 115, 85, 0.05)",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                padding: "8px",
                width: "44px",
                height: "44px",
                gap: "5px",
                zIndex: 1001,
                transition: "background-color 0.3s ease"
              }}
              aria-label="Toggle Menu"
            >
              <span 
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: "#2f4137",
                  borderRadius: "2px",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), translate 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
                }}
              />
              <span 
                style={{
                  width: isOpen ? "0px" : "14px",
                  height: "2px",
                  backgroundColor: "#2f4137",
                  borderRadius: "2px",
                  alignSelf: "center",
                  transition: "width 0.3s ease, opacity 0.3s ease",
                  opacity: isOpen ? 0 : 1
                }}
              />
              <span 
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: "#2f4137",
                  borderRadius: "2px",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), translate 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
                }}
              />
            </button>

          </div>
        </div>
      </div>

      {/* Premium Slide-Down Mobile Navigation Menu */}
      <div 
        className="mobile-navigation-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 998,
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
          padding: "100px 30px 40px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "400px", gap: "12px" }}>
          {menuItems.map((item, index) => (
            <Link 
              key={item.href}
              href={item.href} 
              onClick={closeMenu} 
              style={{
                fontFamily: "var(--font-lexend, sans-serif)",
                fontSize: "20px",
                fontWeight: "500",
                color: "#2f4137",
                textAlign: "center",
                padding: "10px 0",
                letterSpacing: "0.5px",
                textDecoration: "none",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s, opacity 0.5s ease ${index * 0.05}s`,
                borderBottom: "1px solid rgba(0,0,0,0.03)"
              }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Reservar Button Mobile */}
          <Link 
            href="/reservar" 
            onClick={closeMenu} 
            style={{
              fontFamily: "var(--font-lexend, sans-serif)",
              fontSize: "18px",
              fontWeight: "600",
              color: "#ffffff",
              backgroundColor: "#8c7355",
              textAlign: "center",
              padding: "14px 0",
              borderRadius: "35px",
              marginTop: "20px",
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(140, 115, 85, 0.2)",
              transform: isOpen ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.6s ease 0.3s"
            }}
          >
            {t("nav_book")}
          </Link>

          {/* Language Switcher Mobile */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "20px", 
              marginTop: "30px",
              transform: isOpen ? "translateY(0)" : "translateY(15px)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, opacity 0.6s ease 0.35s"
            }}
          >
            <button 
              onClick={() => { setLanguage("es"); closeMenu(); }}
              style={{
                background: "none",
                border: "none",
                color: language === "es" ? "#8c7355" : "#777777",
                fontWeight: language === "es" ? "bold" : "normal",
                cursor: "pointer",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              Español
            </button>
            <span style={{ color: "#dddddd", fontSize: "14px" }}>|</span>
            <button 
              onClick={() => { setLanguage("en"); closeMenu(); }}
              style={{
                background: "none",
                border: "none",
                color: language === "en" ? "#8c7355" : "#777777",
                fontWeight: language === "en" ? "bold" : "normal",
                cursor: "pointer",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
