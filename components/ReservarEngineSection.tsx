"use client";

import React from "react";

export default function ReservarEngineSection() {
  const iframeUrl = "https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905";

  return (
    <div className="reservar-booking-section">
      <div className="reservar-booking-header reveal">
        <div className="reservar-coupon-badge">
          <span className="reservar-coupon-label">Cupón 10% OFF (Hasta 28/02/2027)</span>
          <span className="reservar-coupon-code">FACEBOOK</span>
        </div>
        <h2>Completa tu reserva</h2>
        <p>Selecciona tus fechas y número de huéspedes para verificar disponibilidad en tiempo real.</p>
      </div>

      <div className="reservar-widget-wrap">
        <iframe
          src={iframeUrl}
          width="100%"
          height="800px"
          frameBorder="0"
          style={{
            border: "2px solid #10b981",
            borderRadius: "16px",
            display: "block",
            width: "100%",
            minHeight: "800px",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
          title="Motor de Reservas Hothelia - Fundo Achamaqui"
        />
      </div>
    </div>
  );
}
