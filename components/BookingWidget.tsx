"use client";

import React, { useState } from "react";

export default function BookingWidget() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="hothelia-embedded-widget"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "700px",
        height: "760px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e7ded0",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#faf7f2",
            zIndex: 10,
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              border: "3px solid #e5dfd5",
              borderTopColor: "#415f44",
              borderRadius: "50%",
              animation: "hotheliaSpin 0.8s linear infinite",
            }}
          />
          <span style={{ fontSize: "14px", color: "#666", fontFamily: "var(--font-lexend, sans-serif)" }}>
            Cargando motor de reservas...
          </span>
          <style jsx>{`
            @keyframes hotheliaSpin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      )}

      <iframe
        src="https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905?embed=1"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          display: "block",
        }}
        onLoad={() => setLoading(false)}
        title="Motor de Reservas Hothelia - Hotel Fundo Achamaqui"
      />
    </div>
  );
}
