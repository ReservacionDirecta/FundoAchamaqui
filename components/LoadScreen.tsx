"use client";

import { useState, useEffect } from "react";

export default function LoadScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf7f2",
        transition: "opacity 0.4s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <img
        src="/images/logo-titulo-negro2x.png"
        alt="Fundo Achamaqui"
        style={{
          height: "38px",
          width: "auto",
          maxWidth: "260px",
          objectFit: "contain",
          animation: "loadscreen-pulse 1.5s ease-in-out infinite",
        }}
      />
      <style jsx global>{`
        @keyframes loadscreen-pulse {
          0%, 100% { opacity: 0.6; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
