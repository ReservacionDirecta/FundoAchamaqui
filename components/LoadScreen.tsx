"use client";

import { useState, useEffect } from "react";

export default function LoadScreen() {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.background = "#faf7f2";

    const minTimer = setTimeout(() => {
      setPhase("revealing");
    }, 1800);

    const removeTimer = setTimeout(() => {
      document.body.style.overflow = "";
      document.body.style.background = "";
      setPhase("done");
    }, 2600);

    return () => {
      document.body.style.overflow = "";
      document.body.style.background = "";
      clearTimeout(minTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <div
        className="loadscreen-overlay"
        style={{
          clipPath: phase === "revealing"
            ? "circle(0% at 50% 50%)"
            : "circle(150% at 50% 50%)",
        }}
      >
        <img
          src="/images/logo-titulo-negro2x.png"
          alt="Fundo Achamaqui"
          width={260}
          height={38}
          className="loadscreen-logo"
        />
      </div>

      <style jsx global>{`
        .loadscreen-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #faf7f2;
          transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: auto;
        }

        .loadscreen-logo {
          height: 38px;
          width: 260px;
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
