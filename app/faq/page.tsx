import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Preguntas Frecuentes (FAQ)"
          paragraph="Aquí encontrarás respuestas a algunas de las preguntas más comunes que nuestros huéspedes suelen hacer sobre su estadía en Fundo Achamaqui. Si tienes alguna pregunta adicional o necesitas más información, no dudes en ponerte en contacto con nuestro equipo. Estamos aquí para ayudarte."
          className="banner-faq"
        />

        <section className="section">
          <div className="base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">faq<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}>Preguntas mas comúnes</h2>
                <p style={{ opacity: 1 }}>Esperamos que estas respuestas a preguntas frecuentes te sean útiles. Si tienes alguna pregunta adicional o necesitas más detalles, no dudes en contactarnos. Estamos aquí para hacer que tu estadía en Fundo Achamaqui sea inolvidable.<br /></p>
              </div>
            </div>
            <div className="accordion-wrapper">
              <div className="accordion-wrap" style={{ opacity: 1 }}>
                <div className="accordion-item w-dropdown">
                  <div className="accordion-toggle w-dropdown-toggle">
                    <h6 className="accordion-title"><strong>¿Dónde está ubicado Fundo Achamaqui?</strong></h6>
                    <div className="accordion-icon"></div>
                  </div>
                  <nav className="accordion-list w-dropdown-list">
                    <p className="accordion-list-content">Fundo Achamaqui se encuentra en Chachapoyas, en la Región Amazonas, Perú. Estamos a aproximadamente 20 kilómetros (20 minutos) de la plaza principal de Chachapoyas.</p>
                  </nav>
                </div>
                <div className="accordion-item w-dropdown">
                  <div className="accordion-toggle w-dropdown-toggle">
                    <h6 className="accordion-title"><strong>¿Cuáles son las atracciones turísticas cercanas?</strong></h6>
                    <div className="accordion-icon"></div>
                  </div>
                  <nav className="accordion-list w-dropdown-list">
                    <p className="accordion-list-content">Algunas de las atracciones cercanas incluyen la Catarata Gocta, la Fortaleza de Kuélap, el Museo de Leymebamba y las ruinas de Karajía, entre otras.</p>
                  </nav>
                </div>
                <div className="accordion-item w-dropdown">
                  <div className="accordion-toggle w-dropdown-toggle">
                    <h6 className="accordion-title"><strong>¿Aceptan mascotas en el hotel?</strong></h6>
                    <div className="accordion-icon"></div>
                  </div>
                  <nav className="accordion-list w-dropdown-list">
                    <p className="accordion-list-content">Lamentablemente, no permitimos mascotas en nuestras instalaciones. </p>
                  </nav>
                </div>
              </div>
              <div className="accordion-wrap last-child" style={{ opacity: 1 }}>
                <div className="accordion-item w-dropdown">
                  <div className="accordion-toggle w-dropdown-toggle">
                    <h6 className="accordion-title"><strong>¿Tienen acceso a internet y Wi-Fi en el hotel?</strong></h6>
                    <div className="accordion-icon"></div>
                  </div>
                  <nav className="accordion-list w-dropdown-list">
                    <p className="accordion-list-content">Sí, ofrecemos acceso a Wi-Fi gratuito en las áreas comunes del hotel.</p>
                  </nav>
                </div>
                <div className="accordion-item w-dropdown">
                  <div className="accordion-toggle w-dropdown-toggle">
                    <h6 className="accordion-title"><strong>¿Puedo reservar excursiones y actividades en el hotel?</strong></h6>
                    <div className="accordion-icon"></div>
                  </div>
                  <nav className="accordion-list w-dropdown-list">
                    <p className="accordion-list-content">Sí, podemos ayudarte a organizar excursiones a las atracciones cercanas. Comunícate con nuestro personal para obtener más información y reservas.</p>
                  </nav>
                </div>
                <div className="accordion-item w-dropdown">
                  <div className="accordion-toggle w-dropdown-toggle">
                    <h6 className="accordion-title">¿Qué incluye?</h6>
                    <div className="accordion-icon"></div>
                  </div>
                  <nav className="accordion-list w-dropdown-list">
                    <p className="accordion-list-content">Alojamiento de lujo en plena selva, desayuno delicioso y nutritivo para comenzar tus días llenos de energía, acceso a nuestras instalaciones de clase mundial, diseñadas para tu relajación y disfrute. Consejos locales personalizados para explorar los secretos mejor guardados de Chachapoyas.  Caminata al sarcófago de Fundo Achamaqui de más de 1000 años de antigüedad. Actividades dentro del fundo: convivencia con nuestros animales, caballos y vacas, y experiencia de nuestro huerto orgánico.</p>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
