"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const HOTHELIA_BASE_URL =
  "https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905";

function ReservarIframe({ isFullscreen }: { isFullscreen: boolean }) {
  const searchParams = useSearchParams();

  const iframeUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("embed", "1");

    const passThroughKeys = ["checkIn", "checkOut", "adults", "children", "room", "coupon"];
    passThroughKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) params.set(key, val);
    });

    return `${HOTHELIA_BASE_URL}?${params.toString()}`;
  }, [searchParams]);

  return (
    <iframe
      src={iframeUrl}
      width="100%"
      frameBorder="0"
      allow="payment"
      className={`reservar-engine-iframe ${isFullscreen ? "is-fullscreen" : ""}`}
      title="Motor de Reservas Hothelia - Fundo Achamaqui"
    />
  );
}

interface ReservarEngineSectionProps {
  children?: React.ReactNode;
}

export default function ReservarEngineSection({ children }: ReservarEngineSectionProps) {
  const [copied, setCopied] = useState(false);
  const [mobileTab, setMobileTab] = useState<"engine" | "info">("engine");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard?.writeText("FACEBOOK");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Lock body scroll on mobile when viewing the booking engine tab to prevent double-scroll friction
  useEffect(() => {
    const syncBodyClass = () => {
      const isMobile = window.innerWidth <= 768;
      if ((isMobile && mobileTab === "engine") || isFullscreen) {
        document.body.classList.add("reservar-app-locked");
      } else {
        document.body.classList.remove("reservar-app-locked");
      }
    };

    syncBodyClass();
    window.addEventListener("resize", syncBodyClass);
    return () => {
      window.removeEventListener("resize", syncBodyClass);
      document.body.classList.remove("reservar-app-locked");
    };
  }, [mobileTab, isFullscreen]);

  // Listen to Escape key to exit fullscreen
  useEffect(() => {
    if (!isFullscreen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isFullscreen]);

  return (
    <>
      <section
        className={`section reservar-booking-section-full ${
          mobileTab === "engine" ? "mobile-tab-engine" : "mobile-tab-info"
        } ${isFullscreen ? "engine-is-fullscreen" : ""}`}
      >
        <div className="reservar-booking-section">
          {/* Top compact toolbar: Mobile Tabs + Direct Offer Coupon + Desktop Fullscreen */}
          <div className="reservar-toolbar">
            {children && (
              <div className="reservar-mobile-tabs" role="tablist" aria-label="Vista de reserva">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mobileTab === "engine"}
                  className={`reservar-tab-btn ${mobileTab === "engine" ? "active" : ""}`}
                  onClick={() => setMobileTab("engine")}
                >
                  Motor de Reservas
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mobileTab === "info"}
                  className={`reservar-tab-btn ${mobileTab === "info" ? "active" : ""}`}
                  onClick={() => setMobileTab("info")}
                >
                  Habitaciones e Info
                </button>
              </div>
            )}

            <div className="reservar-coupon-strip">
              <span className="coupon-tag">10% OFF</span>
              <span className="coupon-text">Cupón directo:</span>
              <button
                type="button"
                onClick={copyCoupon}
                className="coupon-pill-btn"
                title="Copiar cupón de descuento"
              >
                <span className="coupon-code">FACEBOOK</span>
                <span className="coupon-copy-hint">{copied ? "¡Copiado!" : "Copiar"}</span>
              </button>
            </div>

            <div className="reservar-desktop-actions">
              {children && !isFullscreen && (
                <a href="#reservar-habitaciones" className="reservar-action-link">
                  Ver habitaciones ↓
                </a>
              )}
              <button
                type="button"
                onClick={() => setIsFullscreen((prev) => !prev)}
                className="reservar-fullscreen-btn"
                title={isFullscreen ? "Salir de pantalla completa" : "Ampliar motor de reservas"}
              >
                {isFullscreen ? "✕ Salir de pantalla completa" : "⛶ Pantalla completa"}
              </button>
            </div>
          </div>

          {/* Embedded Hothelia Booking Engine */}
          <div
            className={`reservar-widget-wrap ${
              mobileTab !== "engine" ? "reservar-widget-hidden-mobile" : ""
            }`}
          >
            <Suspense
              fallback={
                <div className="reservar-iframe-loading">
                  Cargando motor de reservas...
                </div>
              }
            >
              <ReservarIframe isFullscreen={isFullscreen} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Secondary content (rooms, trust badges, reviews, footer):
          Shown below on desktop; shown cleanly in tab 2 on mobile */}
      {children && (
        <div
          id="reservar-habitaciones"
          className={`reservar-secondary-content ${
            mobileTab === "engine" ? "reservar-secondary-hidden-mobile" : ""
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
}
