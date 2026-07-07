import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import AttractionsSection from "@/components/AttractionsSection";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function ActividadesPage() {
  const activities = await prisma.activity.findMany();

  const fallbackActivities = [
    {
      name: "Trekkings y la caminata al sarcófago de Fundo Achamaqui",
      description: "Descubre la misteriosa caminata al sarcófago de Fundo Achamaqui, con más de 1000 años de antigüedad, que te transportará en el tiempo.",
      image: "/images/DJI_0092.jpg",
    },
    {
      name: "Restaurant: Sabores de la Selva",
      description: "Nuestro restaurante y bar te esperan con una deliciosa variedad de comidas locales y amazónicas, así como una cuidadosa selección de vinos nacionales e internacionales.",
      image: "/images/360900551_DxO.jpg",
    },
    {
      name: "Piscina: Relajación en el Agua",
      description: "Refréscate y relájate en nuestra piscina, donde podrás disfrutar de un chapuzón revitalizante mientras te rodeas de la belleza natural que nos rodea.",
      image: "/images/casa-hacienda-achamaqui.jpg",
    },
    {
      name: "Descubre la Magia del Río Utcubamba",
      description: "Te brindamos una experiencia única junto al Río Utcubamba. Deja que las aguas te lleven a un estado de relajación y conexión con la naturaleza.",
      image: "/images/DJI_0111_DxO-1920x1440.jpg",
    },
    {
      name: "Convivencia con la Naturaleza",
      description: "Disfruta de la vida en la selva de manera única. Conoce a nuestros animales, desde majestuosos caballos hasta tranquilas vacas. Sumérgete en la experiencia de nuestro huerto orgánico.",
      image: "/images/received_1753229811842785.jpeg",
    },
    {
      name: "Secretos de Chachapoyas",
      description: "Nuestros consejos locales personalizados te llevarán a explorar los tesoros ocultos de Chachapoyas, una región llena de misterio y belleza por descubrir.",
      image: "/images/DJI_0050_DxO-1080x1440.jpg",
    },
  ];

  const displayActivities = activities.length > 0 ? activities.map(a => ({
    name: a.name,
    description: a.description,
    image: a.image,
  })) : fallbackActivities;

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner
          title="Actividades"
          paragraph="En Fundo Achamaqui, tu aventura comienza en la comodidad de nuestro alojamiento de lujo en plena selva."
          className="services-banner"
        />

        <section className="section light-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="w-layout-grid services-wrap-home-1 services">
              {displayActivities.map((activity, index) => (
                <div key={index} className="service-home" style={{ opacity: 1 }}>
                  <img src={activity.image} loading="lazy" alt="" className="service-img" />
                  <h4 className="mt-20">{activity.name}</h4>
                  <p>{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AttractionsSection />

        <section className="section img">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="w-layout-grid about-hotel">
              <div id="w-node-fdb4df8e-bd71-4de1-cabb-66f443773860-83eba641" className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">EXCELENTE UBICACIÓN</h6>
                <p className="white-paragraph">Aprox. 30 min desde el aeropuerto<br /></p>
              </div>
              <div id="w-node-fdb4df8e-bd71-4de1-cabb-66f443773866-83eba641" className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">HABITACIONES DISPONIBLES</h6>
                <p className="white-paragraph">Parejas / Grupos / Familias<br /></p>
              </div>
              <div id="w-node-fdb4df8e-bd71-4de1-cabb-66f44377386c-83eba641" className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">SALA DE EVENTOS</h6>
                <p className="white-paragraph">Conferencias / Bodas / Retiros<br /></p>
              </div>
              <div id="w-node-fdb4df8e-bd71-4de1-cabb-66f443773872-83eba641" className="hotel-info" style={{ opacity: 1 }}>
                <h6 className="white-text">WIFI GRATIS</h6>
                <p className="white-paragraph">Wifi 24/7 en áreas comunes<br /></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
