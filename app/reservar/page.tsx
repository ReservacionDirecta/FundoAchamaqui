import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Script from "next/script";

export default function ReservarPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Reserva tú próxima aventura en Chachapoyas"
          className="contacts-banner"
        />

        <section className="section">
          <div className="base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">Contáctanos<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}><strong>Síguenos en Facebook, Instagram y Twitter para mantenerte actualizado sobre nuestras ofertas y eventos especiales.<br /></strong></h2>
                <p style={{ opacity: 1 }}>En Fundo Achamaqui, estamos comprometidos a proporcionarte una experiencia excepcional. ¡Esperamos tenerte como nuestro huésped muy pronto! Contáctanos.<br /></p>
              </div>
            </div>
          </div>
          <div>
            <div className="book-banner-wrap" style={{ opacity: 1 }}>
              <div className="booking-engine">
                <h1 className="white-text coupon">¡Sumérgete en la belleza de Chachapoyas con un 20% de descuento en el Hotel Fundo Achamaqui! Tu refugio en la Ceja de Selva Peruana.<br />‍<br />Cupón de descuento: <span className="text-span-2"><strong>escapechacha20</strong></span><br /></h1>
              </div>
              <div id="sirvoy" className="html-embed w-embed w-script">
                <Script async data-form-id="a10e4ddb7d5915cb" src="https://secured.sirvoy.com/widget/sirvoy.js" />
              </div>
            </div>
          </div>
        </section>

        <section className="section img">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="contacts-form-wrapper">
              <h3 className="contacts-form-title">Completa nuestro formulario en línea y te responderemos a la brevedad.<br /></h3>
              <div className="form-block-contacts w-form">
                <form id="email-form" name="email-form" className="form-contacts">
                  <input className="contacts-input w-input" maxLength={256} name="name-2" placeholder="Nombre" type="text" id="name-2" required />
                  <input className="contacts-input w-input" maxLength={256} name="email-2" placeholder="Email" type="email" id="email-2" required />
                  <textarea placeholder="Mensaje / Consulta" maxLength={5000} id="field-2" name="field-2" required className="contacts-textarea w-input"></textarea>
                  <input type="submit" className="primary-button full-width-mobile w-button" value="Enviar" />
                </form>
                <div className="success-message-book w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message-book w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
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
