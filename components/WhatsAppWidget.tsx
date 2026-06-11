"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsAppWidget() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<"booking" | "general">("booking");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [childrenCount, setChildrenCount] = useState("0");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "51943398035"; // WhatsApp hotel number
    let text = "";

    if (inquiryType === "booking") {
      text = language === "en"
        ? `Hello Fundo Achamaqui! I would like to make a reservation request.\n\n📅 Check-in: ${checkIn}\n📅 Check-out: ${checkOut}\n👥 Adults: ${adults}\n👶 Children: ${childrenCount}`
        : `¡Hola Fundo Achamaqui! Me gustaría realizar una solicitud de reserva.\n\n📅 Fecha de Entrada: ${checkIn}\n📅 Fecha de Salida: ${checkOut}\n👥 Adultos: ${adults}\n👶 Niños: ${childrenCount}`;
    } else {
      text = language === "en"
        ? `Hello Fundo Achamaqui! I have a general inquiry:\n\n💬 ${message}`
        : `¡Hola Fundo Achamaqui! Tengo la siguiente consulta:\n\n💬 ${message}`;
    }

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "25px", right: "25px", zIndex: 1000, fontFamily: "sans-serif" }}>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#25d366",
          border: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="WhatsApp Contact"
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#ffffff"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.884-6.948C16.712 2.015 14.25 1 11.63 1c-5.442 0-9.866 4.372-9.87 9.802 0 1.689.458 3.328 1.328 4.787L2.016 21.9l6.59-1.746zM17.185 14.3c-.302-.151-1.791-.88-2.073-1.013-.283-.103-.49-.151-.696.151-.206.302-.796.98-1.013 1.241-.206.251-.433.282-.736.132-1.014-.403-1.921-.739-2.678-1.393-.655-.572-1.09-1.282-1.218-1.503-.131-.22-.014-.339.123-.489.108-.119.232-.271.349-.403.118-.13.158-.22.237-.37.079-.15.039-.281-.02-.403-.06-.119-.49-1.183-.672-1.62-.177-.426-.353-.368-.49-.375-.125-.006-.268-.007-.41-.007-.142 0-.374.053-.57.262-.197.21-.754.735-.754 1.792 0 1.057.77 2.078.878 2.223.109.145 1.51 2.302 3.658 3.226.51.22.909.351 1.22.451.513.163.98.14 1.35.084.412-.061 1.791-.73 2.046-1.435.257-.704.257-1.306.18-1.432-.078-.126-.283-.201-.585-.352z" />
        </svg>
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "75px",
            right: "0",
            width: "320px",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            padding: "20px",
            color: "#333",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h4 style={{ margin: 0, color: "#8c7355", fontSize: "16px", fontWeight: "bold" }}>
              {language === "en" ? "Chat on WhatsApp" : "Hablar por WhatsApp"}
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: "#777",
              }}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Inquiry Type */}
            <div>
              <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#666", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                {language === "en" ? "I want to:" : "Deseo:"}
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value as "booking" | "general")}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "13px",
                  backgroundColor: "#fff",
                }}
              >
                <option value="booking">
                  {language === "en" ? "Request a Reservation" : "Solicitar una Reserva"}
                </option>
                <option value="general">
                  {language === "en" ? "Make a general inquiry" : "Hacer otra consulta"}
                </option>
              </select>
            </div>

            {inquiryType === "booking" ? (
              <>
                {/* Check In */}
                <div>
                  <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#666", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                    {language === "en" ? "Check-In" : "Fecha de Entrada"}
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "13px",
                    }}
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#666", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                    {language === "en" ? "Check-Out" : "Fecha de Salida"}
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "13px",
                    }}
                  />
                </div>

                {/* Guests */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#666", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                      {language === "en" ? "Adults" : "Adultos"}
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#666", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                      {language === "en" ? "Children" : "Niños"}
                    </label>
                    <input
                      type="number"
                      min="0"
                      required
                      value={childrenCount}
                      onChange={(e) => setChildrenCount(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              /* Message for General Inquiries */
              <div>
                <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#666", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                  {language === "en" ? "Message / Inquiry" : "Consulta / Pregunta"}
                </label>
                <textarea
                  required
                  placeholder={language === "en" ? "Enter your question here..." : "Escribe tu consulta aquí..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    height: "80px",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "13px",
                    resize: "none",
                  }}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#25d366",
                color: "#ffffff",
                border: "none",
                fontWeight: "bold",
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {language === "en" ? "Send via WhatsApp" : "Enviar por WhatsApp"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
