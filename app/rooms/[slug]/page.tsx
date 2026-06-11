import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function RoomDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const room = await prisma.room.findUnique({
    where: { slug },
    include: { amenities: true },
  });

  if (!room) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section room-details">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="div-block-41 title-room">
              <img src="/images/Stars.png" loading="lazy" alt="Stars" className="stars-img" />
              <h1>{room.name}</h1>
              <p>{room.description}</p>
            </div>
          </div>
          <img alt={room.name} loading="lazy" src={room.mainImage} className="room-big-img" />
        </section>

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="info-room-wrap">
              <h4>Servicios / Amenities</h4>
              <div className="amenities-wrapper">
                {room.amenities.map((amenity) => (
                  <div key={amenity.id} className="amenities-wrap">
                    {/* Icon mapping would happen here */}
                    <p>{amenity.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {room.houseRules && (
              <div className="info-room-wrap">
                <h4>Reglas de la Casa</h4>
                <div className="rich-text-style">{room.houseRules}</div>
              </div>
            )}

            {room.cancellation && (
              <div className="info-room-wrap">
                <h4>Cancelación</h4>
                <div className="rich-text-style">{room.cancellation}</div>
              </div>
            )}
          </div>
        </section>

        {/* Other rooms section could be added here */}
      </main>
      <Footer />
    </>
  );
}
