import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function Alojamiento() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Nuestro Alojamiento" 
          subtitle="Comodidad y Lujo"
          paragraph="Experimente la calidez de la generosa hospitalidad en nuestro hotel, rodeado de la belleza natural de Chachapoyas."
          className="accomodation-banner"
        />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle">
                <h6 className="heading-2">AMENIDADES<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}>Experimente La Calidez De La Generosa Hospitalidad En Nuestro Hotel.<br /></h2>
              </div>
            </div>
            <div className="accomodation-wrapper">
              <div className="accomodation-wrap" style={{ opacity: 1 }}>
                <img src="/images/IMG_20231010_082516_478.webp" loading="lazy" alt="Desayuno" className="accomodation-img" />
                <div>
                  <h3>Desayuno saludable<br /></h3>
                  <p>Descubra una deliciosa y nutritiva experiencia de desayuno en nuestro hotel, que ofrece una amplia gama de opciones saludables para comenzar el día con energía y vitalidad.<br /></p>
                </div>
              </div>
              <div className="accomodation-wrap reverse" style={{ opacity: 1 }}>
                <div>
                  <h3>Soporte 24 horas al día, 7 días a la semana<br /></h3>
                  <p>Tenga la seguridad de saber que nuestro hotel brinda soporte y asistencia las 24 horas para garantizar su comodidad y conveniencia a cualquier hora.</p>
                </div>
                <img src="/images/replicate-prediction-cztboozcisgnpfwa6rudiiuzqq.png" loading="lazy" alt="Soporte" className="accomodation-img" />
              </div>
              <div className="accomodation-wrap" style={{ opacity: 1 }}>
                <img src="/images/replicate-prediction-itdg5yjbrrgphvp73ld67oed7y.jpg" loading="lazy" alt="Habitaciones" className="accomodation-img" />
                <div>
                  <h3>Cómodas y amplias habitaciones <br /></h3>
                  <p>Disfrute del lujo de las amplias y cómodas habitaciones de nuestro hotel. Diseñadas para brindarle amplio espacio y relajación.</p>
                </div>
              </div>
              <div className="accomodation-wrap reverse" style={{ opacity: 1 }}>
                <div>
                  <h3>Áreas comunes<br /></h3>
                  <p>Ubicado en el corazón del paraíso, nuestro hotel cuenta con fácil acceso a algunas de las vistas más impresionantes de la ceja de selva.</p>
                </div>
                <img src="/images/IMG_20230823_082703-EDIT_DxO_DxO-1918x1440.jpg" loading="lazy" alt="Áreas Comunes" className="accomodation-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="section img-scroll">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-central">
              <img src="/images/Stars.png" loading="lazy" alt="Stars" className="stars-img" />
              <h2 className="white-text" style={{ opacity: 1 }}>Elija Entre Una Amplia Gama De Habitaciones De Lujo</h2>
            </div>
            <div className="div-block-46" style={{ opacity: 1 }}>
              <Link href="/reservar" className="primary-button-white">Reservar</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-central">
              <img src="/images/Stars.png" loading="lazy" alt="Stars" className="stars-img" />
              <h2 style={{ opacity: 1 }}>Lo Que Dicen Nuestros Clientes<br /></h2>
            </div>
            <div className="w-layout-grid review-wrapper">
              <div className="review-wrap" style={{ opacity: 1 }}>
                <p>“Las habitaciones estaban impecables, muy cómodas y el personal fue increíble. Hicieron todo lo posible para que nuestra estadía fuera perfecta. Lo recomiendo ampliamente.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con"><img src="/images/Member-Photo-Close-up-15_1Member-Photo-Close-up-15.webp" loading="lazy" alt="Robert Huamani" className="testimonials-image" /></div>
                  <div className="testimonials-author pt-0">
                    <h5>Robert Huamani</h5>
                  </div>
                </div>
              </div>
              <div className="central-review" style={{ opacity: 1 }}>
                <p>“Una estadía muy limpia y acogedora. El personal es muy amable, excelente servicio de transporte. El hotel está cerca de la terminal. Definitivamente lo recomiendo.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con"><img src="/images/Member-Photo-Close-up-5_1Member-Photo-Close-up-5.webp" loading="lazy" alt="Nensi Links" className="testimonials-image" /></div>
                  <div className="testimonials-author pt-0">
                    <h5>Nensi Links</h5>
                  </div>
                </div>
              </div>
              <div className="review-wrap right" style={{ opacity: 1 }}>
                <p>“Un aniversario sorpresa inolvidable en una hermosa hacienda. Desde el momento en que llegamos, el personal nos brindó una cálida bienvenida y nos cuidó en cada detalle.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con"><img src="/images/Member-Photo-Close-up-4_1Member-Photo-Close-up-4.webp" loading="lazy" alt="Olga Zapata" className="testimonials-image" /></div>
                  <div className="testimonials-author pt-0">
                    <h5>Olga Zapata</h5>
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
