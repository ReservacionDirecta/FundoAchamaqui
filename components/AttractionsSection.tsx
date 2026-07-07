"use client";

import { useState } from "react";

const ATTRACTIONS = [
  {
    id: "kuelap",
    title: "Kuélap",
    subtitle: "La Fortaleza en las Nubes",
    image: "/images/Kuelap.jpg",
    excerpt: "La joya arqueológica de la cultura Chachapoyas que desafía al tiempo desde lo alto de los Andes orientales.",
    content: `<p>Ubicada a más de 3,000 metros sobre el nivel del mar, la fortaleza arqueológica de Kuélap representa el máximo esplendor de la cultura Chachapoyas. Sus murallas de piedra caliza de hasta 20 metros de altura albergan más de 500 viviendas circulares decoradas con frisos geométricos.</p>
    <p>Para los huéspedes de Fundo Achamaqui, Kuélap es una visita indispensable. Planifica tu expedición de un día entero para explorar este santuario histórico que data del siglo VI d.C.</p>
    <p>Se puede acceder a pie por el sendero de Tingo Nuevo (aproximadamente 2 horas de caminata) o de forma cómoda mediante las telecabinas que cubren 4 kilómetros sobre el valle del río Tingo en apenas 20 minutos.</p>`,
  },
  {
    id: "gocta",
    title: "Catarata Gocta",
    subtitle: "El Misterioso Velo del Gigante",
    image: "/images/Catarata-Gocta.png",
    excerpt: "Descubre una de las caídas de agua más altas del mundo, rodeada de exuberante selva y fascinantes leyendas locales.",
    content: `<p>Conocida localmente como 'La Chorrera', la majestuosa Catarata Gocta posee una espectacular caída doble que suma un total de 771 metros de altura. Rodeada de un denso bosque de neblina habitado por el gallito de las rocas y monos de cola amarilla, la caminata a Gocta es una inmersión completa en la biodiversidad del Amazonas.</p>
    <p>A solo 40 minutos en coche desde Fundo Achamaqui se encuentra el pueblo de Cocachimba, el punto de inicio idóneo para recorrer el sendero que lleva al pie de la catarata.</p>
    <p>El recorrido dura aproximadamente 3 horas ida y vuelta, atravesando paisajes de ensueño con vegetación exuberante y avistamiento de aves.</p>`,
  },
  {
    id: "karajia",
    title: "Sarcófagos de Karajía",
    subtitle: "Centinelas de la Eternidad",
    image: "/images/sarcofagos-karajia.png",
    excerpt: "Imponentes tumbas antropomorfas incrustadas en los acantilados verticales de la provincia de Luya.",
    content: `<p>Los Sarcófagos de Karajía representan un rito funerario singular e imponente: cápsulas de arcilla y paja de hasta 2.5 metros de altura colocadas en la cara vertical de gigantescos acantilados. Estos monumentos funerarios miran hacia el abismo, albergando en su interior los restos de los gobernantes más distinguidos del reino de los Chachapoyas.</p>
    <p>Una excursión que te conectará con el misticismo del pasado prehispánico de la región. El mirador ofrece una vista impresionante de los sarcófagos incrustados en la pared rocosa.</p>
    <p>La visita se realiza mediante un sendero de aproximadamente 45 minutos desde el pueblo de Cruzpata, con guías locales que comparten las leyendas ancestrales del lugar.</p>`,
  },
  {
    id: "laguna-condores",
    title: "Laguna de los Cóndores",
    subtitle: "El Santuario en las Nubes",
    image: "/images/laguna-de-los-condores-trekking-amazon-expediton.webp",
    excerpt: "Un espejo de agua sagrado oculto entre montañas, donde los Chachapoyas dejaron a sus ancestrales gobernantes.",
    content: `<p>La Laguna de los Cóndores es un cuerpo de agua sagrado ubicado a más de 3,000 metros de altitud, rodeado de imponentes montañas cubiertas de bosque nublado. En 1997, pescadores locales descubrieron en los acantilados circundantes más de 200 momias prehispánicas en mausoleos de arcilla, junto con quipus, textiles y cerámicas de extraordinaria calidad.</p>
    <p>El viaje hasta la laguna es una aventura en sí misma: varias horas de caminata por senderos que atraviesan bosques de nebrina, cruces de ríos y paisajes de ensueño. Los guías locales de las comunidades cercanas comparten las leyendas ancestrales que han protegido este lugar sagrado durante siglos.</p>
    <p>Las piezas rescatadas se exhiben en el Museo de Leymebamba, pero la laguna en sí misma sigue siendo un santuario natural donde el tiempo parece haberse detenido.</p>`,
  },
  {
    id: "museo-leymebamba",
    title: "Museo de Leymebamba",
    subtitle: "Guardián del Legado Chachapoyas",
    image: "/images/museo-leymebamba.jpg",
    excerpt: "Santuario de más de 200 momias perfectamente preservadas y la colección arqueológica más importante del norte peruano.",
    content: `<p>El Museo de Leymebamba es mundialmente reconocido por albergar la extraordinaria colección arqueológica rescatada de la Laguna de los Cóndores en 1997. Sus salas resguardan más de 200 momias prehispánicas en excelente estado de conservación, así como quipus, finos textiles y cerámicas pre-incas e incas.</p>
    <p>El museo ofrece una ventana única a las antiguas técnicas funerarias y la cosmovisión andino-amazónica de esta misteriosa civilización. Las momias, algunas con expresiones faciales aún visibles, te transportan a un mundo donde lo sagrado y lo natural se entrelazan.</p>
    <p>Ubicado en la ciudad de Leymebamba, a aproximadamente 2 horas en coche desde Chachapoyas, el museo es una parada indispensable para cualquier visitante de la región.</p>`,
  },
  {
    id: "quiocta",
    title: "Cavernas de Quiocta",
    subtitle: "Viaje al Corazón de la Tierra",
    image: "/images/cavernas-quiocta.jpg",
    excerpt: "Explora un fascinante mundo subterráneo colmado de milenarias estalactitas y estalagmitas arqueológicas.",
    content: `<p>La caverna de Quiocta ofrece una expedición espeleológica inolvidable a lo largo de 500 metros de galería subterránea. Alumbrados por linternas, descubrirás asombrosas esculturas naturales talladas por el agua durante millones de años, además de antiguos vestigios óseos funerarios dejados por las civilizaciones pre-incas.</p>
    <p>La entrada se encuentra a pocos kilómetros de la ciudad de Chachapoyas, en la comunidad de Lámud. Los guías locales te acompañarán durante toda la exploración subterránea.</p>
    <p>Se recomienda llevar calzado adecuado y ropa que no importe ensuciarse. La temperatura interior es fresca y constante durante todo el año.</p>`,
  },
  {
    id: "huancas",
    title: "Cañón del Sonche",
    subtitle: "Huancas y Alfarería",
    image: "/images/canyon-de-sonche-chachapoyas.jpg",
    excerpt: "Un pintoresco pueblo de artesanas alfareras asentado al borde de uno de los cañones más espectaculares del norte peruano.",
    content: `<p>Huancas, ubicado a pocos minutos de la ciudad de Chachapoyas, es un pueblo reconocido por su arraigada tradición de alfarería artesanal, elaborada a mano por las mujeres huanquinas. Muy cerca del pueblo se encuentra el imponente mirador del Cañón del Sonche, con profundidades que superan los 900 metros.</p>
    <p>Es el lugar perfecto para comprar cerámica local única y disfrutar de vistas panorámicas impresionantes que te dejarán sin aliento.</p>
    <p>Las artesanas te recibirán encantadas para mostrarte el proceso de elaboración de sus piezas, transmitiendo técnicas heredadas de generación en generación.</p>`,
  },
  {
    id: "bosque-neblina",
    title: "Bosque de Neblina",
    subtitle: "Valle de Urcos",
    image: "/images/standard_bosques-de-neblina-1-sernanp.jpg",
    excerpt: "El singular ecosistema que protege especies emblemáticas como el colibrí cola de espátula y el oso de anteojos.",
    content: `<p>La provincia de Chachapoyas goza de los mágicos bosques de neblina de Urcos, un ecosistema permanentemente envuelto en bruma que alberga orquídeas salvajes, bromelias y helechos gigantes. Este hábitat es el hogar del famoso colibrí cola de espátula, una de las aves más raras del planeta.</p>
    <p>Los senderos ecologísticos te permiten adentrarte en este mundo mágico donde la niebla se mezcla con los rayos del sol creando paisajes etéreos.</p>
    <p>Los amantes de la ornitología encontrarán aquí un paraíso, con más de 300 especies de aves registradas en la región.</p>`,
  },
  {
    id: "jalca-grande",
    title: "Jalca Grande",
    subtitle: "El Templo de Piedra",
    image: "/images/jalca-grande.jpg",
    excerpt: "La capital folklórica de la región que resguarda la iglesia colonial de piedra más antigua y tradiciones prehispánicas vivas.",
    content: `<p>Jalca Grande destaca como el distrito histórico por excelencia de la provincia de Chachapoyas. Su joya es la iglesia de piedra de San Juan Bautista, que muestra elementos arquitectónicos prehispánicos mezclados con la influencia del catolicismo español.</p>
    <p>Sus tejedoras aún practican la elaboración de mantas tradicionales usando telares de cintura prehispánicos, manteniendo vivas técnicas ancestrales que datan de más de 1,000 años de antigüedad.</p>
    <p>La iglesia, construida íntegramente en piedra sinargamada, es considerada una de las joyas arquitectónicas más importantes del norte peruano.</p>`,
  },
];

export default function AttractionsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <section className="section light-background">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="title-wrap reveal">
            <div className="div-block-8 div-block-9 left-subtitle">
              <h6 className="heading-2">Atractivos<br /></h6>
            </div>
            <div className="right-title">
              <h2>Descubre Chachapoyas</h2>
              <p>Los destinos turísticos más emblemáticos de la región, a tu alcance.</p>
            </div>
          </div>

          <div
            className="attractions-grid"
            style={{
              display: "grid",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {ATTRACTIONS.map((attr, i) => (
              <div
                key={attr.id}
                className={`reveal-scale reveal-delay-${(i % 4) + 1}`}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={attr.image}
                    alt={attr.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h4 style={{ margin: "0 0 4px", fontSize: "18px", fontWeight: "600", color: "#2f4137" }}>
                    {attr.title}
                  </h4>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#8c7355", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {attr.subtitle}
                  </p>
                  <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                    {attr.excerpt}
                  </p>
                  <button
                    onClick={() => setActiveModal(attr.id)}
                    style={{
                      background: "none",
                      border: "1px solid #8c7355",
                      color: "#8c7355",
                      padding: "8px 20px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily: "var(--font-lexend, sans-serif)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#8c7355";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#8c7355";
                    }}
                  >
                    Leer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="attraction-modal"
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              maxWidth: "680px",
              width: "90%",
              maxHeight: "85vh",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const attr = ATTRACTIONS.find((a) => a.id === activeModal)!;
              return (
                <>
                  <div className="attraction-modal-hero" style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                    <img
                      src={attr.image}
                      alt={attr.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                      }}
                    />
                    <button
                      onClick={() => setActiveModal(null)}
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        fontSize: "18px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#333",
                      }}
                    >
                      ✕
                    </button>
                    <div style={{ position: "absolute", bottom: "20px", left: "24px", right: "24px" }}>
                      <h3 style={{ margin: "0 0 4px", color: "#fff", fontSize: "24px", fontWeight: "700" }}>
                        {attr.title}
                      </h3>
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>
                        {attr.subtitle}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ padding: "24px", overflowY: "auto", flex: 1 }}
                    dangerouslySetInnerHTML={{ __html: attr.content }}
                  />
                </>
              );
            })()}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
