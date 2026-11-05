import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ReservarEngineSection from "@/components/ReservarEngineSection";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservar | Hotel Fundo Achamaqui",
  description: "Reserva tu habitación en Fundo Achamaqui. Habitaciones matrimoniales, dobles, triples y cuádruples junto al río Utcubamba en Chachapoyas.",
};

export const dynamic = 'force-dynamic';

const ROOM_DISPLAY_ORDER = [
  "cuadruple-king",
  "triple",
  "matrimonial-king",
  "matrimonial-queen",
  "doble-twin",
];

export default async function ReservarPage() {
  let rooms: any[] = [];
  try {
    rooms = await prisma.room.findMany({
      orderBy: { price: "desc" },
    });
    rooms.sort(
      (a, b) =>
        ROOM_DISPLAY_ORDER.indexOf(a.slug) - ROOM_DISPLAY_ORDER.indexOf(b.slug)
    );
  } catch (error) {
    console.error("Failed to fetch rooms for reservar page:", error);
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section reservar-booking-section-full">
          <ReservarEngineSection />
        </section>

        {rooms.length > 0 && (
          <section className="section light-background" style={{ paddingTop: 0 }}>
            <div className="w-layout-blockcontainer base-container w-container">
              <div className="title-wrap reveal">
                <div className="div-block-8 div-block-9 left-subtitle">
                  <h6 className="heading-2">Habitaciones</h6>
                </div>
                <div className="right-title">
                  <h2>Nuestras habitaciones</h2>
                  <p>Cada habitación ofrece comodidad, privacidad y vistas únicas a la naturaleza de Chachapoyas.</p>
                </div>
              </div>
              <div className="reservar-rooms-bento">
                {rooms.map((room, index) => {
                  const isFeatured = index === 0;
                  return (
                    <Link
                      key={room.id}
                      href={`/rooms/${room.slug}`}
                      className={`reservar-bento-card ${isFeatured ? "reservar-bento-featured" : ""}`}
                    >
                      <div className="reservar-bento-media">
                        <img
                          src={room.mainImage}
                          alt={room.name}
                          className="reservar-bento-img"
                          loading="lazy"
                        />
                        <div className="reservar-bento-overlay" />
                        <div className="reservar-room-price">
                          <span className="reservar-price-amount">S/. {room.price}</span>
                          <span className="reservar-price-period">/ noche</span>
                        </div>
                        {isFeatured && (
                          <span className="reservar-bento-badge">Recomendada</span>
                        )}
                      </div>
                      <div className="reservar-bento-content">
                        <div className="reservar-bento-meta">
                          <span className="reservar-bento-capacity">
                            👥 {room.capacity} personas
                          </span>
                        </div>
                        <h3 className="reservar-room-name">{room.name}</h3>
                        <p className="reservar-bento-desc">
                          {room.description ? room.description.substring(0, 90) + "..." : ""}
                        </p>
                        <span className="reservar-bento-cta">
                          Ver detalles y fotos →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="reservar-trust-grid">
              <div className="reservar-trust-item reveal-scale">
                <div className="reservar-trust-icon">&#127968;</div>
                <h4>Estancia premium</h4>
                <p>Habitaciones con techo artesanal, vistas al río Utcubamba y acceso directo al jardín.</p>
              </div>
              <div className="reservar-trust-item reveal-scale">
                <div className="reservar-trust-icon">&#127860;</div>
                <h4>Desayuno incluido</h4>
                <p>Desayuno buffet con productos frescos del huerto orgánico del fundo.</p>
              </div>
              <div className="reservar-trust-item reveal-scale">
                <div className="reservar-trust-icon">&#128640;</div>
                <h4>Actividades incluidas</h4>
                <p>Caminata al sarcófago de +1000 años y convivencia con los animales del fundo.</p>
              </div>
              <div className="reservar-trust-item reveal-scale">
                <div className="reservar-trust-icon">&#128172;</div>
                <h4>Atención personalizada</h4>
                <p>Te ayudamos a planificar tu itinerario con los mejores destinos de Chachapoyas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section primary-color-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap testimonial">
              <div className="div-block-8 div-block-9 left-subtitle light">
                <h6 className="heading-2">Reseñas</h6>
              </div>
              <div className="right-title">
                <h2 className="white-text">Lo que dicen nuestros huéspedes</h2>
              </div>
            </div>
            <div className="testimonials-slider-con">
              <div className="testimonials-item-wrapper">
                <img src="/images/Stars_1.png" loading="lazy" alt="Stars" className="stars-testimonials" />
                <p className="testimonials-quote">&ldquo;Una experiencia mágica en medio de la naturaleza. El personal es cálido y acogedor, las instalaciones son impecables, y las actividades son una delicia.&rdquo;</p>
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
