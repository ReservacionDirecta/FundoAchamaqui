import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Hotel Fundo Achamaqui",
  description: "Respuestas a las preguntas más comunes sobre tu estadía en Fundo Achamaqui, Chachapoyas: ubicación, atracciones, servicios y reservas.",
};

const LEFT_FAQS: FaqItem[] = [
  {
    q: "¿Dónde está ubicado Fundo Achamaqui?",
    a: "Fundo Achamaqui se encuentra en Chachapoyas, en la Región Amazonas, Perú. Estamos a aproximadamente 20 kilómetros (20 minutos) de la plaza principal de Chachapoyas.",
  },
  {
    q: "¿Cuáles son las atracciones turísticas cercanas?",
    a: "Algunas de las atracciones cercanas incluyen la Catarata Gocta, la Fortaleza de Kuélap, el Museo de Leymebamba y las ruinas de Karajía, entre otras.",
  },
  {
    q: "¿Aceptan mascotas en el hotel?",
    a: "Lamentablemente, no permitimos mascotas en nuestras instalaciones.",
  },
];

const RIGHT_FAQS: FaqItem[] = [
  {
    q: "¿Tienen acceso a internet y Wi-Fi en el hotel?",
    a: "Sí, ofrecemos acceso a Wi-Fi gratuito en las áreas comunes del hotel.",
  },
  {
    q: "¿Puedo reservar excursiones y actividades en el hotel?",
    a: "Sí, podemos ayudarte a organizar excursiones a las atracciones cercanas. Comunícate con nuestro personal para obtener más información y reservas.",
  },
  {
    q: "¿Qué incluye?",
    a: "Alojamiento de lujo en plena selva, desayuno delicioso y nutritivo para comenzar tus días llenos de energía, acceso a nuestras instalaciones de clase mundial, diseñadas para tu relajación y disfrute. Consejos locales personalizados para explorar los secretos mejor guardados de Chachapoyas. Caminata al sarcófago de Fundo Achamaqui de más de 1000 años de antigüedad. Actividades dentro del fundo: convivencia con nuestros animales, caballos y vacas, y experiencia de nuestro huerto orgánico.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Preguntas Frecuentes (FAQ)"
          paragraph="Aquí encontrarás respuestas a algunas de las preguntas más comunes que nuestros huéspedes suelen hacer sobre su estadía en Fundo Achamaqui. Si tienes alguna pregunta adicional o necesitas más información, no dudes en ponerte en contacto con nuestro equipo. Estamos aquí para ayudarte."
          className="banner-faq"
        />

        <section className="section">
          <div className="base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle">
                <h6 className="heading-2">faq<br /></h6>
              </div>
              <div className="right-title">
                <h2>Preguntas más comunes</h2>
                <p>Esperamos que estas respuestas a preguntas frecuentes te sean útiles. Si tienes alguna pregunta adicional o necesitas más detalles, no dudes en contactarnos. Estamos aquí para hacer que tu estadía en Fundo Achamaqui sea inolvidable.<br /></p>
              </div>
            </div>
            <div className="accordion-wrapper">
              <FaqAccordion items={LEFT_FAQS} defaultOpen={0} />
              <FaqAccordion items={RIGHT_FAQS} className="last-child" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
