"use client";

import { useState, useEffect } from "react";

const MIN_DISPLAY_MS = 700;
const REVEAL_MS = 850;
const MAX_WAIT_MS = 4000;

export default function LoadScreen() {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setPhase("done"), 50);
      return () => window.clearTimeout(t);
    }

    const start = performance.now();
    let settled = false;
    const timers: number[] = [];

    const reveal = () => {
      if (settled) return;
      settled = true;
      const wait = Math.max(0, MIN_DISPLAY_MS - (performance.now() - start));
      timers.push(
        window.setTimeout(() => {
          setPhase("revealing");
          timers.push(window.setTimeout(() => setPhase("done"), REVEAL_MS));
        }, wait)
      );
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
      // Fallback: never trap the user behind the overlay
      timers.push(window.setTimeout(reveal, MAX_WAIT_MS));
    }

    return () => {
      window.removeEventListener("load", reveal);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <div
        className={`loadscreen-overlay${phase === "revealing" ? " revealing" : ""}`}
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
        body:has(.loadscreen-overlay) {
          overflow: hidden;
          background-color: #faf7f2;
        }
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
        .loadscreen-overlay.revealing {
          pointer-events: none;
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
