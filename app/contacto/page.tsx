import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function ContactUs() {
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
                  <a href="#" target="_blank" className="footer-links contact">Fundo Achamaqui, Chachapoyas, Región Amazonas, Perú</a>
                </div>
                <div className="contacts-detail">
                  <p className="contacts-icon"></p>
                  <a href="tel:+51943398035" className="footer-links contact">Whatsapp (+51) 943 398 035</a>
                </div>
                <div className="contacts-detail">
                  <p className="contacts-icon"></p>
                  <a href="mailto:info@fundoachamaqui.com" className="footer-links contact">info@fundoachamaqui.com</a>
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
                <form id="email-form" className="form-contacts">
                  <input className="contacts-input w-input" placeholder="Nombre" type="text" required />
                  <input className="contacts-input w-input" placeholder="Email" type="email" required />
                  <textarea placeholder="Mensaje" required className="contacts-textarea w-input"></textarea>
                  <input type="submit" className="primary-button full-width-mobile w-button" value="Enviar" />
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
