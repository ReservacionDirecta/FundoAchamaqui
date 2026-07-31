import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Testimonials from "@/components/Testimonials";

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Reseñas de Huéspedes"
          paragraph="Escucha directamente de quienes han vivido la magia de Fundo Achamaqui. Historias reales y opiniones sinceras de nuestros visitantes."
          className="banner-testimonials"
        />

        <Testimonials />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-central">
              <img src="/images/Stars.png" loading="lazy" alt="Estrellas" className="stars-img" />
              <h2>Lo que dicen nuestros huéspedes</h2>
            </div>
            <div className="w-layout-grid review-wrapper">
              <div className="review-wrap">
                <p>&ldquo;Las habitaciones estaban impecables, muy cómodas y el personal fue increíble. Hicieron todo lo posible para que nuestra estadía fuera perfecta. Lo recomiendo ampliamente.&rdquo;</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con">
                    <img src="/images/Member-Photo-Close-up-15_1Member-Photo-Close-up-15.webp" loading="lazy" alt="Foto" className="testimonials-image" />
                  </div>
                  <div className="testimonials-author pt-0">
                    <h5>Robert Ban</h5>
                  </div>
                </div>
              </div>
              <div className="central-review">
                <p>&ldquo;Una estadía muy limpia y acogedora. El personal es muy amable, excelente servicio de transporte. El hotel está cerca de la terminal. Definitivamente lo recomiendo.&rdquo;</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con">
                    <img src="/images/Member-Photo-Close-up-5_1Member-Photo-Close-up-5.webp" loading="lazy" alt="Foto" className="testimonials-image" />
                  </div>
                  <div className="testimonials-author pt-0">
                    <h5>Nensi Links</h5>
                  </div>
                </div>
              </div>
              <div className="review-wrap right">
                <p>&ldquo;Un aniversario sorpresa inolvidable en una hermosa hacienda. Desde el momento en que llegamos, el personal nos brindó una cálida bienvenida y nos cuidó en cada detalle.&rdquo;</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con">
                    <img src="/images/Member-Photo-Close-up-4_1Member-Photo-Close-up-4.webp" loading="lazy" alt="Foto" className="testimonials-image" />
                  </div>
                  <div className="testimonials-author pt-0">
                    <h5>Olga Fox</h5>
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
