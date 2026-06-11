import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import RoomCard from "@/components/RoomCard";

export const dynamic = 'force-dynamic';

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Nuestras Habitaciones" 
          subtitle="Alojamiento"
          paragraph="Descubre el confort y la elegancia en cada una de nuestras habitaciones diseñadas para tu descanso."
          className="rooms-banner"
        />

        <section className="section light-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle">
                <h6 className="heading-2">Habitaciones<br /></h6>
              </div>
              <div className="right-title">
                <h2>Elige tu estancia ideal</h2>
                <p>Variedad de estilos y tamaños para parejas, familias y grupos.</p>
              </div>
            </div>
            
            {rooms.length > 0 ? (
              <div className="w-layout-grid grid-3">
                {rooms.map((room) => (
                  <RoomCard 
                    key={room.id}
                    name={room.name}
                    slug={room.slug}
                    price={room.price}
                    image={room.mainImage}
                    description={room.description.substring(0, 100) + '...'}
                  />
                ))}
              </div>
            ) : (
              <div className="w-dyn-empty">
                <div>No se encontraron habitaciones. Ejecuta el script de seed para poblar la base de datos.</div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
