"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Algo salió mal");
      }

      setStatus("success");
      setEmail("");
      setMessage(
        t("language") === "en"
          ? "Thank you for subscribing! Check your email."
          : "¡Gracias por suscribirte! Revisa tu correo."
      );
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Error al suscribirse");
    }
  };

  return (
    <div 
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "30px auto 40px auto",
        padding: "30px 20px",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(4px)",
      }}
    >
      <h5 
        style={{
          fontFamily: "var(--font-lexend, sans-serif)",
          fontSize: "18px",
          color: "#ffffff",
          fontWeight: "500",
          marginBottom: "8px",
          letterSpacing: "0.5px"
        }}
      >
        {t("language") === "en" ? "Subscribe to our Newsletter" : "Suscríbete a nuestro Boletín"}
      </h5>
      <p 
        style={{
          fontSize: "13px",
          color: "#bbbbbb",
          marginBottom: "20px",
          maxWidth: "450px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.5"
        }}
      >
        {t("language") === "en" 
          ? "Receive exclusive offers, news, and special event updates directly in your inbox." 
          : "Recibe ofertas exclusivas, novedades y actualizaciones de eventos especiales directamente en tu bandeja de entrada."
        }
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        <input
          type="email"
          placeholder={t("language") === "en" ? "Enter your email" : "Introduce tu correo"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          style={{
            flex: "1",
            minWidth: "240px",
            padding: "12px 18px",
            borderRadius: "6px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            background: "rgba(0, 0, 0, 0.2)",
            color: "#ffffff",
            fontSize: "14px",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#8c7355"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.15)"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "12px 28px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#8c7355",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
            boxShadow: "0 4px 15px rgba(140, 115, 85, 0.2)"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#725b41"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#8c7355"}
        >
          {status === "loading" 
            ? (t("language") === "en" ? "Sending..." : "Enviando...") 
            : (t("language") === "en" ? "Subscribe" : "Suscribirme")
          }
        </button>
      </form>

      {message && (
        <p 
          style={{
            marginTop: "15px",
            fontSize: "13px",
            color: status === "success" ? "#4caf50" : "#ff5722",
            fontWeight: "500",
            animation: "fadeIn 0.3s ease-in-out"
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
