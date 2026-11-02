import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad y Protección de Datos | Hotel Fundo Achamaqui",
  description:
    "Política de tratamiento de datos personales de Fundo Achamaqui S.A.C. conforme a la Ley N° 29733 de Protección de Datos Personales del Perú.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Política de Privacidad y Manejo de Datos"
          subtitle="Fundo Achamaqui S.A.C. · Ley N° 29733 (Perú)"
          paragraph="Tu privacidad y la seguridad de tu información personal son fundamentales para nosotros. Conoce cómo recopilamos, protegemos y tratamos tus datos."
          className="about-us-banner"
        />

        <section className="section" style={{ backgroundColor: "#faf7f2", padding: "60px 0 90px 0" }}>
          <div className="w-layout-blockcontainer base-container w-container" style={{ maxWidth: "1000px" }}>
            
            {/* Header info box */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7ded0",
                borderLeft: "5px solid #415f44",
                borderRadius: "8px",
                padding: "24px 28px",
                marginBottom: "40px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "22px", color: "#2f4137", marginBottom: "8px" }}>
                FUNDO ACHAMAQUI S.A.C. — RUC: 20608407716
              </h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                La presente Política de Privacidad regula el tratamiento de los datos personales proporcionados por los usuarios y huéspedes a través de nuestro sitio web <strong>fundoachamaqui.com</strong>, canales de mensajería (WhatsApp), correo electrónico o presencialmente en nuestro hotel, en estricto cumplimiento de la <strong>Ley N° 29733 (Ley de Protección de Datos Personales de la República del Perú)</strong> y su Reglamento aprobado mediante <strong>Decreto Supremo N° 003-2013-JUS</strong>.
              </p>
            </div>

            {/* Privacy Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>

              {/* 1. Responsable */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  1. Identidad y Domicilio del Responsable del Banco de Datos
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>
                    El titular y responsable del banco de datos personales donde se almacenan sus datos es:
                  </p>
                  <ul style={{ paddingLeft: "24px", margin: "8px 0" }}>
                    <li><strong>Razón Social:</strong> FUNDO ACHAMAQUI S.A.C.</li>
                    <li><strong>RUC:</strong> 20608407716</li>
                    <li><strong>Domicilio Legal:</strong> Km. 39 Carretera Pedro Ruiz, Chachapoyas 01000, Amazonas, Perú.</li>
                    <li><strong>Teléfono:</strong> (041) 754605 / +51 954 754 650</li>
                    <li><strong>Correo Electrónico de Contacto:</strong> <a href="mailto:info@fundoachamaqui.com" style={{ color: "#415f44", fontWeight: 600 }}>info@fundoachamaqui.com</a></li>
                  </ul>
                </div>
              </article>

              {/* 2. Datos recopilados */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  2. Datos Personales Recopilados
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>
                    Para gestionar sus reservas, consultas y prestación de servicios turísticos y de hospedaje, Fundo Achamaqui recopila las siguientes categorías de datos:
                  </p>
                  <ul style={{ paddingLeft: "24px", margin: "8px 0" }}>
                    <li><strong>Datos de Identificación:</strong> Nombres, apellidos, documento de identidad (DNI, Carné de Extranjería o Pasaporte), nacionalidad, fecha de nacimiento.</li>
                    <li><strong>Datos de Contacto:</strong> Correo electrónico, número de teléfono / WhatsApp, domicilio o ciudad de procedencia.</li>
                    <li><strong>Datos de Reserva y Estadía:</strong> Fechas de check-in y check-out, tipo de habitación, número de acompañantes, preferencias de viaje, restricciones alimentarias o requerimientos especiales.</li>
                    <li><strong>Datos de Facturación:</strong> Número de RUC o DNI, razón social o nombre para emisión de boletas o facturas electrónicas de conformidad con la normativa tributaria de la SUNAT.</li>
                  </ul>
                </div>
              </article>

              {/* 3. Finalidad */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  3. Finalidad del Tratamiento de los Datos
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>Sus datos personales son tratados con las siguientes finalidades principales y necesarias:</p>
                  <ol style={{ paddingLeft: "24px", margin: "8px 0" }}>
                    <li>Gestionar, procesar y confirmar sus reservaciones de habitaciones, bungalows, tours o servicios de restaurante.</li>
                    <li>Emitir comprobantes de pago electrónicos y cumplir con las obligaciones legales tributarias peruanas (SUNAT) y de hospedaje turístico (MINCETUR).</li>
                    <li>Brindar atención al cliente, canalizar consultas, atender solicitudes especiales y enviar recordatorios de su llegada.</li>
                    <li>Gestionar el Libro de Reclamaciones de conformidad con el Código de Protección y Defensa del Consumidor (Ley N° 29571).</li>
                    <li><strong>Finalidad adicional (con su consentimiento previo):</strong> Enviar novedades, promociones exclusivas y boletines informativos de Fundo Achamaqui a su correo electrónico. El usuario puede cancelar esta suscripción en cualquier momento.</li>
                  </ol>
                </div>
              </article>

              {/* 4. Seguridad y confidencialidad */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  4. Seguridad y Confidencialidad de la Información
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>
                    Fundo Achamaqui adopta medidas de seguridad técnicas, legales y organizativas conforme a los estándares de la Ley N° 29733 para proteger sus datos personales contra el acceso no autorizado, alteración, pérdida, destrucción o tratamiento indebido.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>No compartimos ni comercializamos</strong> sus datos personales con terceros para fines publicitarios. Únicamente se transfieren datos a proveedores indispensables para la prestación del servicio (pasarelas de pago cifradas, sistema de gestión hotelera) y a autoridades oficiales competentes cuando lo exija la ley peruana.
                  </p>
                </div>
              </article>

              {/* 5. Derechos ARCO */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px", borderLeft: "4px solid #c9a96e" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  5. Ejercicio de los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>
                    Como titular de sus datos personales, la ley peruana le otorga el derecho de acceder a su información en nuestros registros, rectificarla si es inexacta, solicitar su cancelación cuando ya no sea necesaria, u oponerse a un tratamiento específico.
                  </p>
                  <div style={{ background: "#fbf9f5", padding: "16px 20px", borderRadius: "6px", border: "1px solid #ede5d8", margin: "12px 0" }}>
                    <strong style={{ color: "#2f4137", display: "block", marginBottom: "4px" }}>
                      ¿Cómo ejercer sus Derechos ARCO?
                    </strong>
                    <span>
                      Envíe una comunicación formal al correo electrónico:{" "}
                      <a href="mailto:info@fundoachamaqui.com" style={{ color: "#415f44", fontWeight: 700 }}>info@fundoachamaqui.com</a>{" "}
                      con el asunto <em>&quot;Ejercicio de Derechos ARCO - Datos Personales&quot;</em>, indicando sus nombres completos, número de documento de identidad y el detalle específico de su solicitud. Responderemos en los plazos previstos por la Ley N° 29733.
                    </span>
                  </div>
                </div>
              </article>

              {/* 6. Cookies */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  6. Uso de Cookies y Herramientas Analíticas
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p style={{ margin: 0 }}>
                    Nuestro sitio web utiliza cookies técnicas para garantizar la funcionalidad del portal, recordar su preferencia de idioma y analizar de forma anónima el tráfico de visitas (mediante Google Analytics). El usuario puede configurar o deshabilitar las cookies en cualquier momento desde las opciones de configuración de su navegador web.
                  </p>
                </div>
              </article>

            </div>

            {/* Back to Home / Contact */}
            <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <Link href="/" style={{ color: "#415f44", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                ← Volver al Inicio
              </Link>
              <div style={{ display: "flex", gap: "12px" }}>
                <Link
                  href="/politicas-de-reserva"
                  style={{
                    color: "#2f4137",
                    background: "#f0ece4",
                    padding: "10px 18px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Políticas de Reserva
                </Link>
                <Link
                  href="/terminos-y-condiciones"
                  style={{
                    color: "#2f4137",
                    background: "#f0ece4",
                    padding: "10px 18px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Términos y Condiciones
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
