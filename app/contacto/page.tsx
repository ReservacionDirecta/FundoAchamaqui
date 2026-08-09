"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Algo salió mal. Por favor intenta de nuevo.");
      }

      setStatus({ type: "success", text: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus({ type: "error", text: err.message || "Error al enviar el mensaje." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Contacto" 
          subtitle="Fundo Achamaqui"
          paragraph="Estamos aquí para ayudarte a planificar tu estancia perfecta."
          className="contacts-banner"
        />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">Contactanos<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}><strong>Síguenos en nuestras redes sociales para estar al día.</strong></h2>
                <p style={{ opacity: 1 }}>En Fundo Achamaqui, estamos comprometidos a proporcionarte una experiencia excepcional. ¡Esperamos tenerte como nuestro huésped muy pronto!</p>
              </div>
            </div>
            <div className="contacts-content-wrapper" style={{ opacity: 1 }}>
              <div className="contacts-divider"></div>
              <div className="contacts-detail-wrapper">
                <h6>Chachapoyas - Perú</h6>
                <div className="contacts-detail">
                  <p className="contacts-icon"></p>
                  <a href={t("contact_map_url")} target="_blank" rel="noopener noreferrer" className="footer-links contact">{t("contact_address")}</a>
                </div>
                <div className="contacts-detail">
                  <p className="contacts-icon"></p>
                  <a
                    href={`https://wa.me/${(t("whatsapp_number") || t("contact_phone")).replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-links contact"
                  >
                    Whatsapp {t("contact_phone")}
                  </a>
                </div>
                <div className="contacts-detail">
                  <p className="contacts-icon"></p>
                  <a href={`mailto:${t("contact_email")}`} className="footer-links contact">{t("contact_email")}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section img">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="contacts-form-wrapper">
              <h3 className="contacts-form-title">Completa nuestro formulario en línea y te responderemos a la brevedad.<br /></h3>
              <div className="form-block-contacts w-form">
                <form id="email-form" className="form-contacts" onSubmit={handleSubmit}>
                  <input 
                    className="contacts-input w-input" 
                    placeholder="Nombre" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                  <input 
                    className="contacts-input w-input" 
                    placeholder="Email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                  <textarea 
                    placeholder="Mensaje" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                    className="contacts-textarea w-input"
                  ></textarea>
                  
                  {status && (
                    <div 
                      style={{ 
                        padding: "12px", 
                        marginBottom: "20px", 
                        borderRadius: "6px", 
                        fontSize: "14px",
                        backgroundColor: status.type === "success" ? "#e6f4ea" : "#fce8e6",
                        color: status.type === "success" ? "#137333" : "#c5221f",
                        border: `1px solid ${status.type === "success" ? "#34a853" : "#ea4335"}`
                      }}
                    >
                      {status.text}
                    </div>
                  )}

                  <input 
                    type="submit" 
                    className="primary-button full-width-mobile w-button" 
                    value={loading ? "Enviando..." : "Enviar"} 
                    disabled={loading}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

