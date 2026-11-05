"use client";

import React, { useState } from "react";
import BookingWidget from "@/components/BookingWidget";

export default function ReservarEngineSection() {
  const [iframeUrl, setIframeUrl] = useState(
    "https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905"
  );

  const handleDatesSelected = (url: string) => {
    // Replace embed url or direct url for the page iframe
    const cleanUrl = url.replace("embed=1&", "").replace("?embed=1", "");
    setIframeUrl(cleanUrl);
  };

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

      <div style={{ maxWidth: "860px", margin: "0 auto 28px", width: "100%" }}>
        <BookingWidget onSearchDirect={handleDatesSelected} isEmbeddedTarget={true} />
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
