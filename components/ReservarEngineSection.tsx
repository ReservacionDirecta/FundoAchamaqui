"use client";

import React, { useState } from "react";

export default function ReservarEngineSection() {
  const iframeUrl = "https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905";
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard?.writeText("FACEBOOK");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="reservar-booking-section">
      <div className="reservar-coupon-strip">
        <span className="coupon-tag">OFERTA DIRECTA</span>
        <span className="coupon-text">Usa el cupón del <strong>10% OFF</strong> en tu reserva:</span>
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

      <div className="reservar-widget-wrap">
        <iframe
          src={iframeUrl}
          width="100%"
          height="820px"
          frameBorder="0"
          style={{
            border: "none",
            borderRadius: "12px",
            display: "block",
            width: "100%",
            minHeight: "780px",
            backgroundColor: "#ffffff",
          }}
          title="Motor de Reservas Hothelia - Fundo Achamaqui"
        />
      </div>
    </div>
  );
}
