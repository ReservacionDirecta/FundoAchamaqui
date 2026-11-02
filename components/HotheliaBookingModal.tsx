"use client";

import React, { useState, useEffect } from "react";

export default function HotheliaBookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Handler for global Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    // Handler to allow any link or button with data-open-hothelia or class open-hothelia to open the modal
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-open-hothelia]");
      if (target) {
        e.preventDefault();
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <a
        href="https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905"
        target="_blank"
        rel="noopener noreferrer"
        id="hb-book-trigger"
        onClick={openModal}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          background: "#10b981",
          color: "#ffffff",
          fontWeight: 700,
          padding: "14px 22px",
          borderRadius: "9999px",
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(0,0,0,.25)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "15px",
          fontFamily: "var(--font-lexend, sans-serif)",
          cursor: "pointer",
          transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.backgroundColor = "#059669";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#10b981";
        }}
        title="Reservar en Fundo Achamaqui"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Reservar Ahora
      </a>

      {/* Modal Popup with Hothelia Engine Iframe */}
      <div
        id="hb-book-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
        style={{
          display: isOpen ? "flex" : "none",
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          background: "rgba(15,23,42,.6)",
          backdropFilter: "blur(4px)",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "90vw",
            maxWidth: "1100px",
            height: "90vh",
            background: "#ffffff",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            animation: "hotheliaModalIn 0.25s ease-out",
          }}
        >
          {/* Close button */}
          <button
            id="hb-book-close"
            onClick={closeModal}
            aria-label="Cerrar motor de reservas"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 100,
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              border: "1px solid rgba(0,0,0,.1)",
              background: "#ffffff",
              boxShadow: "0 4px 12px rgba(0,0,0,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "22px",
              lineHeight: 1,
              color: "#1e293b",
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            &times;
          </button>

          {/* Hothelia Embedded Engine */}
          <iframe
            src="https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905?embed=1"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
              flex: 1,
            }}
            title="Motor de Reservas Hothelia - Fundo Achamaqui"
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes hotheliaModalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Adjust WhatsApp widget position so it sits cleanly above the Reservar Ahora button */
        .whatsapp-widget-container {
          bottom: 92px !important;
          right: 24px !important;
        }

        @media (max-width: 600px) {
          #hb-book-trigger {
            padding: 12px 18px !important;
            font-size: 14px !important;
            bottom: 18px !important;
            right: 18px !important;
          }
          .whatsapp-widget-container {
            bottom: 78px !important;
            right: 18px !important;
          }
        }
      `}</style>
    </>
  );
}
