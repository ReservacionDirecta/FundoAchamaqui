import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="banner-home-1">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="div-block-20 banner-home-1-wrapper">
              <img 
                className="stars-banner" 
                src="/images/219-2191012_3-star-vector-transparent-3-stars-png.png" 
                alt="Stars" 
                style={{ opacity: 1 }} 
                loading="lazy" 
              />
              <h6 className="white-text small-text">Bienvenido a</h6>
              <h1 className="banner-heading-home-1">Fundo Achamaqui</h1>
              <p className="white-paragraph banner-paragraph">
                El refugio de tu próxima aventura en <strong>Chachapoyas</strong>
              </p>
            </div>
          </div>
        </section>

        <div className="book-banner-wrap" style={{ opacity: 1 }}>
          <div className="booking-engine">
            <h1 className="white-text coupon">
              ¡Sumérgete en la belleza de Chachapoyas con un 20% de descuento en el Hotel Fundo Achamaqui! Tu refugio en la Ceja de Selva Peruana.<br />‍<br />
              Cupón de descuento: <span className="text-span-2"><strong>escapechacha20</strong></span><br />
            </h1>
          </div>
          <div id="sirvoy" className="html-embed w-embed w-script">
            <Script 
              id="sirvoy-widget"
              async 
              data-form-id="a10e4ddb7d5915cb" 
              src="https://secured.sirvoy.com/widget/sirvoy.js" 
            />
          </div>
        </div>
        <section className="section naturaleza">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="about-section" style={{ opacity: 1 }}>
              <div className="left-about-wrap">
                <img className="stars-img" src="/images/219-2191012_3-star-vector-transparent-3-stars-png.png" alt="Stars" loading="lazy" />
                <h2 className="heading-4">Naturaleza y comodidad <br />se unen en<br /><strong>Fundo Achamaqui.</strong></h2>
                <p className="paragraph">Enclavado en la belleza natural de la provincia de Chachapoyas, Fundo Achamaqui te ofrece una experiencia única de relajación y aventura. Descubre la magia de la región Amazonas en nuestro acogedor hotel.</p>
                <div className="button-section-wrap">
                  <a href="/nosotros" className="primary-button">Leer Más</a>
                </div>
              </div>
              <div id="w-node-b1dfaac2-7851-155f-84bd-443661f2c77c-83eba5a0" className="right-img" style={{ opacity: 1 }}>
                <div className="background-video w-background-video w-background-video-atom">
                  <video 
                    id="e565245e-818f-a130-0088-41b7bdc75076-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={{ backgroundImage: "url('https://uploads-ssl.webflow.com/651f4dd8f02881a183eba576/6568a4ffe03dd43e6e243cdd_Gocta-poster-00001.jpg')", objectFit: "cover" }}
                  >
                    <source src="https://uploads-ssl.webflow.com/651f4dd8f02881a183eba576/6568a4ffe03dd43e6e243cdd_Gocta-transcode.mp4" />
                  </video>
                </div>
                <img src="/images/Catarata-Gocta.png" loading="lazy" alt="Gocta" className="big-img" />
                <img src="/images/Vista-aerea-achamaqui-1.jpg" loading="lazy" alt="Vista Aérea" className="absolute-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="section img">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="w-layout-grid about-hotel">
              <div className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">Excelente Ubicación</h6>
                <p className="white-paragraph">Aprox. 30 min desde el aeropuerto</p>
              </div>
              <div className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">Habitaciones Disponibles</h6>
                <p className="white-paragraph">Parejas / Grupos / Familias</p>
              </div>
              <div className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">sala de eventos</h6>
                <p className="white-paragraph">Conferencias / Bodas / Retiros</p>
              </div>
              <div className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">wifi gratis</h6>
                <p className="white-paragraph">Wifi 24/7 en áreas comúnes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">¿Por qué elegirnos?<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}>Nuestros Servicios</h2>
                <p className="paragraph-2" style={{ opacity: 1 }}>
                  En Fundo Achamaqui, la naturaleza y la comodidad se entrelazan en un refugio de tranquilidad a orillas del río Utcubamba. Nuestras acogedoras habitaciones ofrecen vistas panorámicas, mientras que nuestro restaurante te invita a saborear la auténtica cocina peruana.
                </p>
              </div>
            </div>
            <div className="w-layout-grid services-wrap-home-1">
              <div className="service-home" style={{ opacity: 1 }}>
                <img src="/images/IMG_20230823_145150.jpg" loading="lazy" alt="Habitaciones" className="service-img" />
                <h4 className="mt-20"><strong>Habitaciones</strong></h4>
                <p>Descanso y comodidad en nuestras habitaciones. Elige entre habitaciones matrimoniales, dobles, triples y cuádruples.</p>
              </div>
              <div className="service-home" style={{ opacity: 1 }}>
                <img src="/images/IMG_20231010_082516_478.webp" loading="lazy" alt="Gastronomía" className="service-img" />
                <h4 className="mt-20"><strong>Gastronomía<br />Achamaqui</strong></h4>
                <p>Sabores auténticos de la región en nuestro restaurante. Degusta platos peruanos tradicionales y cocina internacional.</p>
              </div>
              <div className="service-home" style={{ opacity: 1 }}>
                <img src="/images/received_1753229811842785.jpeg" loading="lazy" alt="Actividades" className="service-img" />
                <h4 className="mt-20"><strong>Actividades y Aventuras</strong></h4>
                <p>Embárcate en una aventura para descubrir la riqueza de la región. Te aguardan la majestuosa Catarata Gocta y la imponente Fortaleza de Kuélap.</p>
              </div>
            </div>
            <div className="button-margin" style={{ opacity: 1 }}>
              <a href="/actividades" className="primary-button">Leer más</a>
            </div>
          </div>
        </section>

        <section className="section primary-color-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap testimonial">
              <div className="div-block-8 div-block-9 left-subtitle light" style={{ opacity: 1 }}>
                <h6 className="heading-2">Reviews<br /></h6>
              </div>
              <div className="right-title" style={{ opacity: 1 }}>
                <h2 className="white-text">Testimonios</h2>
              </div>
            </div>
            <div className="testimonials-slider-con">
              {/* Slider implementation would go here. For now, we'll keep the structure */}
              <div className="testimonials-item-wrapper" style={{ opacity: 1 }}>
                <img src="/images/Stars_1.png" loading="lazy" alt="Stars" className="stars-testimonials" />
                <p className="testimonials-quote">“Una experiencia mágica en medio de la naturaleza. Achamaqui es un verdadero paraíso lejos del bullicio de la ciudad. El personal es cálido y acogedor, las instalaciones son impecables, y las actividades son una delicia.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con"><img src="/images/Member-Photo-Close-up-6_1Member-Photo-Close-up-6.webp" loading="lazy" alt="Arianna LR" className="testimonials-image" /></div>
                  <div className="testimonials-author">
                    <h5 className="white-text">Arianna LR</h5>
                    <p className="author-position">TripAdvisor</p>
                  </div>
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
