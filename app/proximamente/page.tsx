"use client";

import { useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("done");
        setMessage("¡Gracias por suscribirte! Te avisaremos primero.");
        setEmail("");
      } else {
        throw new Error(data.error || "No pudimos procesar tu suscripción.");
      }
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
    }
  };

  return (
    <div className="coming-soon-page-wrap">
      <div className="coming-soon-wrapper">
        <Link href="/" aria-label="Volver al inicio">
          <img
            className="logo-header"
            src="/images/logo-titulo-negro2x.png"
            height="30"
            alt="Logo"
            loading="lazy"
          />
        </Link>
        <h1 className="coming-soon-heading">¡Algo grandioso está por venir!</h1>
        <p className="coming-soon-paragraph">Puedes suscribirte para ser el primero en enterarte</p>
        <div className="coming-soon-form-main w-form">
          <form id="email-form" name="email-form" className="coming-soon-form" onSubmit={handleSubmit}>
            <input
              className="coming-soon-input w-input"
              maxLength={256}
              name="email"
              placeholder="Email"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "sending"}
            />
            <input
              type="submit"
              className="primary-button full-width-mobile w-button"
              value={status === "sending" ? "Enviando..." : "Suscribirte"}
              disabled={status === "sending"}
            />
          </form>
          {message && (
            <p
              role={status === "error" ? "alert" : "status"}
              style={{
                marginTop: "12px",
                fontSize: "14px",
                fontWeight: "600",
                color: status === "error" ? "var(--color-error)" : "var(--color-success)",
              }}
            >
              {message}
            </p>
          )}
        </div>
        <Link href="/" className="coming-soon-back">
          ← Volver al inicio
        </Link>
      </div>
      <img
        className="coming-soon-image"
        src="/images/dji_fly_20230823_092730_87_1692800992341_pano_optimized-EDIT-1.jpg"
        alt="Coming Soon"
        loading="lazy"
      />
    </div>
  );
}
