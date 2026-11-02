import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones Generales | Hotel Fundo Achamaqui",
  description:
    "Términos y condiciones legales que rigen el uso del sitio web y los servicios de hospedaje de Fundo Achamaqui S.A.C. en Chachapoyas, Amazonas, Perú.",
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Términos y Condiciones"
          subtitle="Fundo Achamaqui S.A.C. · Chachapoyas"
          paragraph="Condiciones generales de uso de nuestra plataforma web y contratación de servicios turísticos y de hospedaje."
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
                Condiciones Generales de Contratación
              </h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                El presente documento establece los términos y condiciones generales aplicables al uso del sitio web{" "}
                <strong>fundoachamaqui.com</strong> y a los servicios turísticos, de alojamiento y gastronomía prestados
                por <strong>FUNDO ACHAMAQUI S.A.C.</strong> (RUC N° 20608407716). La navegación en el portal o la
                confirmación de una reserva implica la aceptación plena y sin reservas de estos términos.
              </p>
            </div>

            {/* Terms Articles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>

              {/* 1. Uso del sitio web */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  1. Uso del Sitio Web y Capacidad Legal
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>
                    El usuario declara ser mayor de 18 años y poseer la capacidad legal suficiente para obligarse según
                    las leyes de la República del Perú. El sitio web tiene como finalidad brindar información sobre las
                    instalaciones de Hotel Fundo Achamaqui y facilitar la reserva de habitaciones, paquetes turísticos y
                    comunicación de contacto.
                  </p>
                  <p style={{ margin: 0 }}>
                    Queda prohibido el uso del sitio con fines ilícitos, fraudulentos, especulativos o que atenten contra los sistemas informáticos de la empresa o de terceros.
                  </p>
                </div>
              </article>

              {/* 2. Propiedad Intelectual */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  2. Propiedad Intelectual e Industrial
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p style={{ margin: 0 }}>
                    Todos los derechos de propiedad intelectual sobre el diseño del sitio, marcas registradas, logotipos,
                    fotografías de las instalaciones y paisajes de Chachapoyas, videos, textos, gráficos y código fuente
                    son de titularidad exclusiva de <strong>Fundo Achamaqui S.A.C.</strong> o de sus legítimos licenciantes.
                    Queda expresamente prohibida su reproducción, distribución o comunicación pública sin autorización previa por escrito.
                  </p>
                </div>
              </article>

              {/* 3. Servicios y Tarifas */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  3. Tarifas, Disponibilidad y Servicios Ofrecidos
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p>
                    Los precios y tarifas publicados en el sitio web se expresan en Dólares Estadounidenses (USD) o Soles
                    Peruanos (S/) según se indique, e incluyen los impuestos aplicables. Fundo Achamaqui se reserva el
                    derecho de actualizar tarifas de acuerdo a la temporada (alta o baja) y disponibilidad.
                  </p>
                  <p style={{ margin: 0 }}>
                    El servicio de hospedaje incluye el desayuno continental y acceso a áreas comunes autorizadas del fundo.
                    Servicios opcionales como tours guiados, consumo de restaurante a la carta o traslados son facturados por separado.
                  </p>
                </div>
              </article>

              {/* 4. Normas de Estancia y Limitaciones de Responsabilidad */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  4. Normas de Estancia y Limitaciones de Responsabilidad
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <ul style={{ paddingLeft: "24px", margin: 0 }}>
                    <li>
                      <strong>Seguridad y pertenencias:</strong> El hotel no se responsabiliza por la pérdida o extravío de dinero, joyas u objetos de valor que no hayan sido entregados formalmente para su custodia en recepción.
                    </li>
                    <li style={{ marginTop: "8px" }}>
                      <strong>Estacionamiento:</strong> El servicio de estacionamiento es de cortesía. El hotel no asume responsabilidad por daños o pérdidas de objetos dejados en el interior de los vehículos.
                    </li>
                    <li style={{ marginTop: "8px" }}>
                      <strong>Instalaciones al aire libre y piscina:</strong> El uso de la piscina y los senderos naturales en las inmediaciones del río Utcubamba se realiza bajo la responsabilidad exclusiva del huésped y sus acompañantes. Los menores de edad deben estar siempre supervisados por un adulto.
                    </li>
                    <li style={{ marginTop: "8px" }}>
                      <strong>Conducta y Derecho de Admisión:</strong> Fundo Achamaqui se reserva el derecho de resolver el contrato de hospedaje y retirar del establecimiento a personas que generen desorden, muestren estado de ebriedad severa o porten armas de cualquier tipo.
                    </li>
                  </ul>
                </div>
              </article>

              {/* 5. Ley Aplicable */}
              <article style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #eae3d7", padding: "26px 30px", borderLeft: "4px solid #415f44" }}>
                <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "20px", color: "#2f4137", marginBottom: "12px" }}>
                  5. Ley Aplicable y Jurisdicción
                </h2>
                <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>
                  <p style={{ margin: 0 }}>
                    Los presentes Términos y Condiciones se rigen e interpretan bajo las leyes de la <strong>República del Perú</strong>.
                    Para la resolución de cualquier discrepancia o controversia derivada de la prestación de los servicios, las partes se someten a la competencia territorial de los juzgados y tribunales de la ciudad de <strong>Chachapoyas</strong> o de la ciudad de <strong>Lima</strong>, renunciando a cualquier otro fuero que pudiera corresponderles.
                  </p>
                </div>
              </article>

            </div>

            {/* Footer nav */}
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
                  href="/politica-de-privacidad"
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
                  Política de Privacidad
                </Link>
                <Link
                  href="/libro-de-reclamaciones"
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
                  Libro de Reclamaciones
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
