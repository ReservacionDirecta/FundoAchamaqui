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
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
          padding: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="WhatsApp Contact"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" 
          alt="WhatsApp" 
          style={{ 
            width: "60px", 
            height: "60px", 
            borderRadius: "50%", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)" 
          }}
        />
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
