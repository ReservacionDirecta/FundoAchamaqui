import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Reservación y Pagos | Hotel Fundo Achamaqui",
  description:
    "Políticas oficiales de reservación, cuentas bancarias, check-in/check-out, modificaciones y condiciones de estadía en Hotel Fundo Achamaqui, Chachapoyas.",
};

export default function PoliticasReservaPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Políticas de Reservación"
          subtitle="Fundo Achamaqui S.A.C. · Chachapoyas"
          paragraph="Condiciones oficiales de reserva, cuentas bancarias para pagos, horarios y normas de estadía para una experiencia segura y placentera."
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-gilda, serif)",
                      fontSize: "24px",
                      color: "#2f4137",
                      marginBottom: "6px",
                    }}
                  >
                    Fundo Achamaqui S.A.C.
                  </h3>
                  <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
                    <strong>RUC:</strong> 20608407716 &nbsp;|&nbsp; <strong>Dirección:</strong> Km. 39 Carretera Pedro Ruiz, Chachapoyas 01000, Amazonas, Perú
                  </p>
                </div>
                <div style={{ fontSize: "13px", color: "#415f44", background: "#f2f7f3", padding: "6px 12px", borderRadius: "20px", fontWeight: 600 }}>
                  Vigente 2026
                </div>
              </div>
            </div>

            {/* Bank Accounts Box */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "10px",
                border: "1px solid #c9a96e",
                padding: "28px 30px",
                marginBottom: "35px",
                boxShadow: "0 4px 18px rgba(201, 169, 110, 0.12)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "24px" }}>💳</span>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "22px", color: "#2f4137", margin: 0 }}>
                  Instrucciones y Cuentas de Pago
                </h2>
              </div>
              <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
                Para confirmar su reservación debe realizarse el abono correspondiente y enviar el comprobante donde se
                visualice el número de operación. Si la reserva no es confirmada dentro de las <strong>48 horas</strong>, la misma será cancelada por falta de pago.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "18px",
                  marginBottom: "20px",
                }}
              >
                {/* BCP Soles */}
                <div style={{ background: "#fbfaf8", border: "1px solid #e8e2d8", borderRadius: "8px", padding: "18px 20px" }}>
                  <div style={{ fontWeight: "700", color: "#002a8f", fontSize: "16px", marginBottom: "8px" }}>
                    BCP - Soles (S/)
                  </div>
                  <div style={{ fontSize: "14px", color: "#444", marginBottom: "4px" }}>
                    <strong>N° de Cuenta:</strong> 1949866990063
                  </div>
                  <div style={{ fontSize: "14px", color: "#444", marginBottom: "6px" }}>
                    <strong>CCI:</strong> 002 194 009866990063 95
                  </div>
                  <div style={{ fontSize: "12px", color: "#777" }}>
                    Titular: FUNDO ACHAMAQUI SAC (RUC 20608407716)
                  </div>
                </div>

                {/* BCP Dólares */}
                <div style={{ background: "#fbfaf8", border: "1px solid #e8e2d8", borderRadius: "8px", padding: "18px 20px" }}>
                  <div style={{ fontWeight: "700", color: "#002a8f", fontSize: "16px", marginBottom: "8px" }}>
                    BCP - Dólares ($USD)
                  </div>
                  <div style={{ fontSize: "14px", color: "#444", marginBottom: "4px" }}>
                    <strong>N° de Cuenta:</strong> 1947291529115
                  </div>
                  <div style={{ fontSize: "14px", color: "#444", marginBottom: "6px" }}>
                    <strong>CCI:</strong> 002 194007291529115 96
                  </div>
                  <div style={{ fontSize: "12px", color: "#777" }}>
                    Titular: FUNDO ACHAMAQUI SAC (RUC 20608407716)
                  </div>
                </div>
              </div>

              {/* Tarjetas & Enlace */}
              <div style={{ background: "#f4f7f4", borderRadius: "8px", padding: "16px 20px", borderLeft: "4px solid #415f44", marginBottom: "16px" }}>
                <strong style={{ color: "#2f4137", display: "block", marginBottom: "4px" }}>
                  Pago con Tarjeta de Crédito o Débito
                </strong>
                <p style={{ margin: 0, fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
                  Aceptamos pagos con tarjeta de crédito y débito. Si desea utilizar este medio, por favor notifíquenos y con gusto generaremos un enlace de pago seguro personalizado para su comodidad.
                </p>
              </div>

              {/* Notificar pago */}
              <div style={{ textAlign: "center", paddingTop: "8px" }}>
                <a
                  href="mailto:info@fundoachamaqui.com?subject=Pago%20de%20Reserva%20Realizado&body=Estimado%20equipo%20de%20Fundo%20Achamaqui,%20adjunto%20el%20comprobante%20de%20pago%20de%20mi%20reserva%20para%20su%20verificaci%C3%B3n."
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#415f44",
                    color: "#ffffff",
                    padding: "10px 22px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  ✉ Notificar pago por Correo (info@fundoachamaqui.com)
                </a>
              </div>
            </div>

            {/* List of Official Hotel Policies */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* 1 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>1.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Check-in y Check-out
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      El proceso de registro (<strong>Check-in</strong>) en el hotel está programado a partir de las <strong>15:00 horas</strong>, mientras que la hora de salida (<strong>Check-out</strong>) es hasta las <strong>12:00 del mediodía</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>2.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Horario de Desayuno
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      Nuestro servicio de desayuno está disponible desde las <strong>6:30 a.m. hasta las 9:30 a.m.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>3.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Registro de Huéspedes
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      Para la comodidad del pasajero, únicamente se le solicita presentarse en el hotel y proporcionar su pasaporte o documento nacional de identidad (DNI/CE) como parte del proceso de registro.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>4.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Desayuno Continental Incluido
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      La tarifa de alojamiento incluye un delicioso desayuno continental, y este beneficio se extiende a todos los huéspedes que se alojan en las habitaciones y bungalows.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>5.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Anticipos y Confirmación según Temporada
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      <strong>Temporada baja:</strong> La reserva se confirma una vez hecho el pago del <strong>50%</strong> de la misma y enviado el voucher correspondiente donde se visualice el número de operación. El 50% restante deberá pagarse al momento del Check-in.<br />
                      <strong>Temporada alta:</strong> La reserva se confirma una vez hecho el pago del <strong>100%</strong> de la misma y enviado el voucher correspondiente.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 & 7 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>6.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Cambios de Fecha y Reprogramaciones
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      Si un pasajero necesita cambiar la fecha de su reserva, solicitamos que nos lo comunique a través de correo electrónico (<strong>fundoachamaqui@gmail.com</strong> / <strong>info@fundoachamaqui.com</strong>) con al menos <strong>15 días de anticipación</strong> a la fecha de llegada original. Los cambios de fecha están sujetos a disponibilidad y nuevas tarifas acorde a la temporada. En casos de anulación debido a condiciones climáticas adversas o desastres naturales, únicamente se ofrecerá la opción de cambiar las fechas de la reserva.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>7.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Política de No Reembolsos
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      El hotel <strong>no efectuará reembolsos de dinero bajo ningún concepto</strong>. Únicamente se considerarán cambios de fechas según las condiciones mencionadas previamente. En situaciones en las que el pasajero opte por dejar el hotel antes de la fecha de salida originalmente reservada, no se procederá al reembolso de las noches no utilizadas.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>8.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Estacionamiento Gratuito
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      Cada huésped podrá acceder al estacionamiento del hotel de forma gratuita. Sin embargo, es importante destacar que el hotel no asume responsabilidad por la pérdida parcial o total de pertenencias, objetos de valor o vehículos en nuestras instalaciones de estacionamiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* 10 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>9.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Persona Adicional y Niños
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      La tarifa mínima por persona adicional será de <strong>$20 USD</strong> por noche. Asimismo, para niños a partir de 5 años, se aplicará una tarifa de <strong>$20 USD</strong> por noche. Niños menores de 5 años no pagan por estadía (solo se cobra si desean desayuno adicional).
                    </p>
                  </div>
                </div>
              </div>

              {/* 11 & 12 */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>10.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Responsabilidad y Derecho de Admisión
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      El hotel no asume responsabilidad por pérdidas o daños a bienes materiales, tanto dentro como fuera de nuestras instalaciones. Nos reservamos el derecho de negar el acceso a personas bajo los efectos de sustancias alucinógenas o con una fuerte influencia del alcohol. Además, se prohíbe estrictamente el ingreso al establecimiento con armas blancas o de fuego.
                    </p>
                  </div>
                </div>
              </div>

              {/* Areas Naturales y Senderos */}
              <div style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#c9a96e", fontWeight: "700", fontSize: "18px" }}>11.</span>
                  <div>
                    <strong style={{ color: "#2f4137", fontSize: "16px", display: "block", marginBottom: "4px" }}>
                      Uso de Áreas Naturales y Senderos
                    </strong>
                    <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.7" }}>
                      Ofrecemos acceso a nuestros senderos naturales, jardines y orilla del río Utcubamba como parte de la experiencia en Fundo Achamaqui. Al transitar por senderos y áreas al aire libre, los huéspedes deben velar por su seguridad e integridad personal y la de sus acompañantes. El hotel no se hace responsable por accidentes o caídas en zonas agrestes o naturales.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Assistance callout */}
            <div
              style={{
                marginTop: "48px",
                background: "#2f4137",
                borderRadius: "10px",
                padding: "32px 36px",
                textAlign: "center",
                color: "#ffffff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "24px", color: "#c9a96e", marginBottom: "12px" }}>
                ¿Tienes alguna consulta sobre tu reservación?
              </h3>
              <p style={{ maxWidth: "650px", margin: "0 auto 24px auto", color: "#eaeaea", fontSize: "15px", lineHeight: "1.6" }}>
                Estamos para servirte. Contáctanos por WhatsApp al +51 954 754 650 o por teléfono al (041) 754605.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/51954754650?text=Hola%20Fundo%20Achamaqui,%20tengo%20una%20consulta%20sobre%20las%20pol%C3%ADticas%20de%20reservaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  💬 WhatsApp: +51 954 754 650
                </a>
                <Link
                  href="/contacto"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#c9a96e",
                    color: "#ffffff",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Formulario de Contacto
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
