"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function LibroReclamacionesPage() {
  const [reclamationType, setReclamationType] = useState<"reclamo" | "queja">("reclamo");
  const [fullName, setFullName] = useState("");
  const [documentType, setDocumentType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isMinor, setIsMinor] = useState(false);
  const [guardianName, setGuardianName] = useState("");
  const [serviceType, setServiceType] = useState("Servicio de Hospedaje");
  const [amountClaimed, setAmountClaimed] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [consumerRequest, setConsumerRequest] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    claimCode: string;
    formattedDate: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setErrorMsg("Debe aceptar la declaración de veracidad de la información.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/libro-de-reclamaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reclamationType,
          fullName,
          documentType,
          documentNumber,
          email,
          phone,
          address,
          isMinor,
          guardianName,
          serviceType,
          amountClaimed,
          serviceDescription,
          detail,
          consumerRequest,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Ocurrió un error al enviar el formulario.");
      }

      setSubmittedData({
        claimCode: data.claimCode,
        formattedDate: data.formattedDate || new Date().toLocaleDateString("es-PE"),
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Error al registrar la reclamación.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Libro de Reclamaciones Virtual"
          subtitle="Fundo Achamaqui S.A.C. · Ley N° 29571"
          paragraph="Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición nuestro Libro de Reclamaciones Virtual."
          className="about-us-banner"
        />

        <section className="section" style={{ backgroundColor: "#faf7f2", padding: "60px 0 90px 0" }}>
          <div className="w-layout-blockcontainer base-container w-container" style={{ maxWidth: "860px" }}>
            
            {/* Business Identity Card */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7ded0",
                borderTop: "5px solid #415f44",
                borderRadius: "8px",
                padding: "24px 28px",
                marginBottom: "35px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "22px", color: "#2f4137", margin: "0 0 6px 0" }}>
                    HOTEL FUNDO ACHAMAQUI S.A.C.
                  </h3>
                  <p style={{ color: "#555", fontSize: "14px", margin: "0 0 4px 0" }}>
                    <strong>RUC:</strong> 20608407716 &nbsp;|&nbsp; <strong>Establecimiento:</strong> Hotel Fundo Achamaqui
                  </p>
                  <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>
                    Km. 39 Carretera Pedro Ruiz, Chachapoyas 01000, Amazonas, Perú
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fdf8ee", border: "1px solid #e3d2b2", padding: "8px 14px", borderRadius: "6px" }}>
                  <span style={{ fontSize: "22px" }}>📖</span>
                  <div style={{ fontSize: "12px", color: "#6e5218", fontWeight: 700, textTransform: "uppercase" }}>
                    Libro Virtual<br />Ley N° 29571
                  </div>
                </div>
              </div>
            </div>

            {/* If successfully submitted: show Official Confirmation Sheet */}
            {submittedData ? (
              <div
                style={{
                  background: "#ffffff",
                  border: "2px solid #415f44",
                  borderRadius: "10px",
                  padding: "40px 32px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#e8f5e9",
                    color: "#2e7d32",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    margin: "0 auto 20px auto",
                  }}
                >
                  ✓
                </div>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "26px", color: "#2f4137", marginBottom: "8px" }}>
                  Hoja de Reclamación Registrada
                </h2>
                <p style={{ color: "#666", fontSize: "15px", marginBottom: "24px" }}>
                  Su {reclamationType === "queja" ? "queja" : "reclamo"} ha sido ingresado correctamente a nuestro sistema.
                </p>

                <div
                  style={{
                    background: "#fbfaf8",
                    border: "1px solid #c9a96e",
                    borderRadius: "8px",
                    padding: "20px 24px",
                    maxWidth: "520px",
                    margin: "0 auto 28px auto",
                    textAlign: "left",
                  }}
                >
                  <p style={{ margin: "0 0 8px 0", fontSize: "15px" }}>
                    <strong>Código de Reclamación:</strong>{" "}
                    <span style={{ color: "#415f44", fontWeight: "bold", fontSize: "17px" }}>{submittedData.claimCode}</span>
                  </p>
                  <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#555" }}>
                    <strong>Fecha y Hora de Registro:</strong> {submittedData.formattedDate}
                  </p>
                  <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#555" }}>
                    <strong>Consumidor:</strong> {fullName} ({documentType} {documentNumber})
                  </p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                    <strong>Tipo:</strong> {reclamationType === "queja" ? "QUEJA" : "RECLAMO"}
                  </p>
                </div>

                <div
                  style={{
                    background: "#f4f7f4",
                    borderLeft: "4px solid #415f44",
                    padding: "16px 20px",
                    borderRadius: "4px",
                    maxWidth: "560px",
                    margin: "0 auto 28px auto",
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#444",
                    lineHeight: "1.6",
                  }}
                >
                  Conforme a la legislación vigente (Ley N° 29571 y D.S. N° 011-2011-PCM modificado por Ley N° 31435), daremos respuesta a su requerimiento en un plazo no mayor a <strong>quince (15) días hábiles</strong> mediante el correo electrónico proporcionado ({email}). Se ha remitido una copia de esta constancia a su bandeja de entrada.
                </div>

                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={() => window.print()}
                    style={{
                      background: "#2f4137",
                      color: "#ffffff",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    🖨 Imprimir / Guardar Constancia
                  </button>
                  <Link
                    href="/"
                    style={{
                      background: "#c9a96e",
                      color: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            ) : (
              /* Complaint Form */
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#ffffff",
                  border: "1px solid #eae3d7",
                  borderRadius: "10px",
                  padding: "36px 32px",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.03)",
                }}
              >
                {/* Definitions helper */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "14px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    onClick={() => setReclamationType("reclamo")}
                    style={{
                      border: reclamationType === "reclamo" ? "2px solid #415f44" : "1px solid #ddd",
                      background: reclamationType === "reclamo" ? "#f4f7f4" : "#ffffff",
                      padding: "16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#2f4137", cursor: "pointer", marginBottom: "4px" }}>
                      <input
                        type="radio"
                        name="reclamationType"
                        value="reclamo"
                        checked={reclamationType === "reclamo"}
                        onChange={() => setReclamationType("reclamo")}
                      />
                      RECLAMO
                    </label>
                    <p style={{ margin: 0, fontSize: "12px", color: "#666", lineHeight: "1.5" }}>
                      Disconformidad relacionada a los bienes o servicios adquiridos en el hotel.
                    </p>
                  </div>

                  <div
                    onClick={() => setReclamationType("queja")}
                    style={{
                      border: reclamationType === "queja" ? "2px solid #415f44" : "1px solid #ddd",
                      background: reclamationType === "queja" ? "#f4f7f4" : "#ffffff",
                      padding: "16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#2f4137", cursor: "pointer", marginBottom: "4px" }}>
                      <input
                        type="radio"
                        name="reclamationType"
                        value="queja"
                        checked={reclamationType === "queja"}
                        onChange={() => setReclamationType("queja")}
                      />
                      QUEJA
                    </label>
                    <p style={{ margin: 0, fontSize: "12px", color: "#666", lineHeight: "1.5" }}>
                      Malestar o descontento respecto a la atención al público recibida.
                    </p>
                  </div>
                </div>

                {/* Section 1: Consumer Identification */}
                <h4
                  style={{
                    fontFamily: "var(--font-lexend, sans-serif)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2f4137",
                    borderBottom: "2px solid #f0ece4",
                    paddingBottom: "8px",
                    marginBottom: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  1. Identificación del Consumidor Reclamante
                </h4>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Nombres y Apellidos completos *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Juan Pérez García"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "8px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                        Doc. Tipo *
                      </label>
                      <select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px 10px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                          fontSize: "14px",
                          outline: "none",
                          background: "#fff",
                        }}
                      >
                        <option value="DNI">DNI</option>
                        <option value="CE">CE</option>
                        <option value="PASAPORTE">Pasaporte</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                        N° de Documento *
                      </label>
                      <input
                        type="text"
                        required
                        value={documentNumber}
                        onChange={(e) => setDocumentNumber(e.target.value)}
                        placeholder="Número de identidad"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+51 999 999 999"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                    Domicilio (Dirección, Ciudad y País) *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Ej. Jr. Dos de Mayo 450, Chachapoyas"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Minor checkbox */}
                <div style={{ marginBottom: "26px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={isMinor}
                      onChange={(e) => setIsMinor(e.target.checked)}
                    />
                    El consumidor reclamante es menor de edad
                  </label>
                  {isMinor && (
                    <div style={{ marginTop: "10px" }}>
                      <input
                        type="text"
                        required={isMinor}
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="Nombres y DNI del padre, madre o apoderado"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Section 2: Contracted Good/Service */}
                <h4
                  style={{
                    fontFamily: "var(--font-lexend, sans-serif)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2f4137",
                    borderBottom: "2px solid #f0ece4",
                    paddingBottom: "8px",
                    marginBottom: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  2. Identificación del Bien Contratado
                </h4>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Tipo de Servicio Contratado *
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                        background: "#fff",
                      }}
                    >
                      <option value="Servicio de Hospedaje">Servicio de Hospedaje (Habitación / Bungalow)</option>
                      <option value="Servicio de Restaurante">Servicio de Restaurante y Alimentos</option>
                      <option value="Actividades y Tours">Actividades, Excursiones o Tours</option>
                      <option value="Otro">Otro servicio</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                      Monto Reclamado (opcional)
                    </label>
                    <input
                      type="text"
                      value={amountClaimed}
                      onChange={(e) => setAmountClaimed(e.target.value)}
                      placeholder="Ej. S/ 250.00 ó $ 80.00 USD"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "26px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                    Descripción del Bien o Servicio
                  </label>
                  <input
                    type="text"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    placeholder="Ej. Reserva para 2 noches del 12 al 14 de agosto en Habitación Matrimonial"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Section 3: Reclamation Detail */}
                <h4
                  style={{
                    fontFamily: "var(--font-lexend, sans-serif)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2f4137",
                    borderBottom: "2px solid #f0ece4",
                    paddingBottom: "8px",
                    marginBottom: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  3. Detalle de la Reclamación y Pedido del Consumidor
                </h4>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                    Detalle de los hechos suscitados *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder="Describa con claridad y precisión los hechos ocurridos..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "6px" }}>
                    Pedido concreto del consumidor *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={consumerRequest}
                    onChange={(e) => setConsumerRequest(e.target.value)}
                    placeholder="Indique con claridad cuál es su solicitud o solución esperada..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                {/* Terms agreement checkbox */}
                <div style={{ marginBottom: "26px" }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#555", cursor: "pointer", lineHeight: "1.5" }}>
                    <input
                      type="checkbox"
                      required
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      style={{ marginTop: "3px" }}
                    />
                    <span>
                      Declaro bajo juramento que los datos consignados en el presente formulario son verídicos. Autorizo la notificación de la respuesta a mi reclamación a la dirección de correo electrónico indicada, en un plazo no mayor a quince (15) días hábiles conforme al D.S. N° 011-2011-PCM modificado por Ley N° 31435.
                    </span>
                  </label>
                </div>

                {errorMsg && (
                  <div style={{ background: "#ffebee", color: "#c62828", padding: "12px 16px", borderRadius: "6px", marginBottom: "20px", fontSize: "14px" }}>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    backgroundColor: "#415f44",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "background 0.3s",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "Registrando Reclamación..." : "Enviar Hoja de Reclamación"}
                </button>
              </form>
            )}

            {/* Legal Notice Footer */}
            <div style={{ marginTop: "35px", textAlign: "center", color: "#777", fontSize: "12px", lineHeight: "1.6" }}>
              <p style={{ margin: 0 }}>
                Hotel Fundo Achamaqui garantiza la estricta reserva de su información en observancia de la Ley N° 29733 de Protección de Datos Personales.
                Para consultas directas sobre su atención, puede comunicarse al teléfono (041) 754605 o escribir a{" "}
                <a href="mailto:info@fundoachamaqui.com" style={{ color: "#415f44" }}>info@fundoachamaqui.com</a>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
