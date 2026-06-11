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
          title="Hotel Reviews"
          paragraph="En nuestra sección de testimonios, escucharás directamente de nuestros huéspedes sobre sus experiencias en Fundo Achamaqui. Aquí, las historias reales y las opiniones sinceras de quienes han compartido su tiempo con nosotros te brindarán una visión auténtica de lo que puedes esperar durante tu estadía. Permítete ser inspirado por las voces de quienes han vivido la magia de Fundo Achamaqui y descubre por qué somos una elección inolvidable en Chachapoyas. ¡Explora estas reseñas y déjate cautivar por las experiencias compartidas por nuestros visitantes!"
          className="banner-testimonials"
        />

        <Testimonials />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-central">
              <img src="/images/Stars.png" loading="lazy" alt="" className="stars-img" style={{ opacity: 1 }} />
              <h2 style={{ opacity: 1 }}>What Our Clients are saying<br /></h2>
            </div>
            <div className="w-layout-grid review-wrapper">
              <div id="w-node-_81c327c0-acad-8846-545e-b9ca811b0af6-83eba647" className="review-wrap" style={{ opacity: 1 }}>
                <p>“The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con">
                    <img src="/images/Member-Photo-Close-up-15_1Member-Photo-Close-up-15.webp" loading="lazy" alt="Photo" className="testimonials-image" />
                  </div>
                  <div className="testimonials-author pt-0">
                    <h5>Robert Ban</h5>
                  </div>
                </div>
              </div>
              <div id="w-node-e6d3b61c-c2ff-e278-1c10-1ee800e98f8f-83eba647" className="central-review" style={{ opacity: 1 }}>
                <p>“Very clean and comfy stay. Very friendly staff, great shuttle service. Hotel is super close to the terminal. Would definitely recommend this hotel.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con">
                    <img src="/images/Member-Photo-Close-up-5_1Member-Photo-Close-up-5.webp" loading="lazy" alt="Photo" className="testimonials-image" />
                  </div>
                  <div className="testimonials-author pt-0">
                    <h5>Nensi Links</h5>
                  </div>
                </div>
              </div>
              <div id="w-node-_70b6238e-a789-309d-31d6-365bce1a107b-83eba647" className="review-wrap right" style={{ opacity: 1 }}>
                <p>“The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel.”</p>
                <div className="testimonials-quote-author">
                  <div className="author-img-con">
                    <img src="/images/Member-Photo-Close-up-4_1Member-Photo-Close-up-4.webp" loading="lazy" alt="Photo" className="testimonials-image" />
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
