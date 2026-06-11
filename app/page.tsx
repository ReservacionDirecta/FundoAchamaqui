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
          <div id="sbw_widget_1" className="sbw yui3-cssreset sbw_form_id_a10e4ddb7d5915cb sbw_id_sbw_widget_1">
            <img 
              style={{ display: "none", margin: "50px auto" }} 
              className="sbw-loader" 
              alt="" 
              src="data:image/gif;base64,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端M0AiyHUkVTzDAA90UHV5eo0qUjB8mgUBACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCwqFIuickk0FIiCo6A4ZSoZnRBUSiwoEtYipNOBDKOKKgD9DBNHHU4brc4c3cUBeSOk949geEQUZA5rXABHEW4PD0UOZBSHaQAJiEMJgQATFBQVBkQHZKACUwtHbX0RR0mVFp0UFwRCBSQDSgsZrQteqEUPGrAQmmG9ChFqRAkMsBd4xsRLBBsUoG6nBa14E4IA2kUFDuLjDql4peilAA0H7e4H1udH8/Ps7+3xbmj0qOTj5mEWpEP3DUq3glYWOBgAcEmUaNI+DBjwAY+dS0USGJg4wABEXMYyJNvE8UOGISKVCNClah4xjg60WUKyINOCUwrMzVRARMGENWQ4n/jpNTKTm15J/CTK2e0MoD+UKmHEs4onVDVVmyqdpAbNR4cKTjqNSots07EjzzJh1S0IADsAAAAAAAAAAAA="
            />
            <iframe 
              name="sirvoy-engine" 
              src="https://secured.sirvoy.com/engine/book?t=6a068433-9ce5-43cf-bd95-c5530ccf46ad&id=a10e4ddb7d5915cb&container_id=sbw_widget_1" 
              sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-popups allow-popups-to-escape-sandbox allow-modals" 
              title="Sirvoy Booking Engine" 
              style={{ height: "383px" }}
            ></iframe>
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
