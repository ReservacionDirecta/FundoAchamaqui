"use client";

import { useState, useEffect } from "react";

export default function LoadScreen() {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");

  useEffect(() => {
    const minTimer = setTimeout(() => {
      setPhase("revealing");
    }, 1800);

    const removeTimer = setTimeout(() => {
      setPhase("done");
    }, 2600);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf7f2",
          clipPath: phase === "revealing"
            ? "circle(0% at 50% 50%)"
            : "circle(150% at 50% 50%)",
          transition: "clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: phase === "revealing" ? "none" : "auto",
        }}
      >
        {/* Logo with pulsating shadow */}
        <img
          src="/images/logo-titulo-negro2x.png"
          alt="Fundo Achamaqui"
          className="loadscreen-logo"
        />
      </div>

      <style jsx global>{`
        .loadscreen-logo {
          height: 38px;
          width: auto;
          max-width: 260px;
          object-fit: contain;
          animation: loadscreen-logo-pulse 1.5s ease-in-out infinite;
        }

        @keyframes loadscreen-logo-pulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(0.97);
            filter: drop-shadow(0 2px 8px rgba(140, 115, 85, 0.15));
          }
          50% {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 6px 20px rgba(140, 115, 85, 0.35));
          }
        }
      `}</style>
    </>
  );
}
