import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Testimonials from "@/components/Testimonials";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Sobre Nosotros" 
          subtitle="Fundo Achamaqui"
          paragraph="Tu Refugio en el Corazón de Chachapoyas: Historia, Naturaleza y Pasión."
          className="about-us-banner"
        />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-central">
              <img className="stars-img" src="/images/219-2191012_3-star-vector-transparent-3-stars-png.png" alt="Stars" loading="lazy" />
              <h2><strong>Nuestra Historia</strong></h2>
              <p>Fundo Achamaqui nació de la pasión por la naturaleza y la cultura de Chachapoyas. Nos enorgullece ser parte de esta comunidad y contribuir al desarrollo sostenible de la región.</p>
            </div>
            <div className="video-about" style={{ opacity: 1 }}>
              <div className="play-button-icon"></div>
              <div className="play-button"></div>
            </div>
          </div>
        </section>

        <section className="section light-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">Misión<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}><strong>Nuestra Misión:</strong><br /></h2>
                <p style={{ opacity: 1 }}>
                  Ofrecer a nuestros huéspedes un refugio de lujo en plena selva, donde la comodidad y la aventura se unen de manera perfecta. Nos esforzamos por proporcionar un servicio excepcional, respetar y preservar el entorno natural y promover la cultura local.<br /><br />
                  <strong>Nuestro Compromiso con la Sostenibilidad:<br />‍</strong>En Fundo Achamaqui, somos conscientes de la importancia de preservar la belleza natural de Chachapoyas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">TRENDING TOPICS<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}>Hotel Blog</h2>
                <p style={{ opacity: 1 }}>Explorando la Magia de Chachapoyas: Descubre Historias, Aventuras y Secretos en el Corazón de la Ceja de Selva Peruana.<br /></p>
              </div>
            </div>
            <div className="collection-list-wrapper-blog-home w-dyn-list">
              <div className="w-dyn-empty">
                <div>No hay artículos publicados aún.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
