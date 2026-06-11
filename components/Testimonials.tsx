const testimonials = [
  {
    quote: "“Una experiencia mágica en medio de la naturaleza. Achamaqui es un verdadero paraíso lejos del bullicio de la ciudad. El personal es cálido y acogedor, las instalaciones son impecables, y las actividades son una delicia.”",
    author: "Arianna LR",
    source: "TripAdvisor",
    image: "/images/Member-Photo-Close-up-6_1Member-Photo-Close-up-6.webp"
  },
  {
    quote: "“Un aniversario sorpresa inolvidable en una hermosa hacienda. Desde el momento en que llegamos, el personal nos brindó una cálida bienvenida y nos cuidó en cada detalle.”",
    author: "Juancito",
    source: "TripAdvisor",
    image: "/images/Member-Photo-Close-up-8_1Member-Photo-Close-up-8.webp"
  }
];

export default function Testimonials() {
  return (
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
          {testimonials.map((t, index) => (
            <div key={index} className="testimonials-item-wrapper" style={{ opacity: 1, marginBottom: '20px' }}>
              <img src="/images/Stars_1.png" loading="lazy" alt="Stars" className="stars-testimonials" />
              <p className="testimonials-quote">{t.quote}</p>
              <div className="testimonials-quote-author">
                <div className="author-img-con">
                  <img src={t.image} loading="lazy" alt={t.author} className="testimonials-image" />
                </div>
                <div className="testimonials-author">
                  <h5 className="white-text">{t.author}</h5>
                  <p className="author-position">{t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
