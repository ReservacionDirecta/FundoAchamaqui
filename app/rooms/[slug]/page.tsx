import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const room = await prisma.room.findUnique({
      where: { slug }
    });
    if (!room) return {};
    return {
      title: `${room.name} | Hotel Fundo Achamaqui`,
      description: room.description.substring(0, 160),
      openGraph: {
        title: `${room.name} - Hotel Fundo Achamaqui`,
        description: room.description.substring(0, 160),
        images: [room.mainImage],
      }
    };
  } catch (e) {
    return { title: "Habitación | Hotel Fundo Achamaqui" };
  }
}

export const dynamic = 'force-dynamic';

const getIconUrl = (icon: string) => {
  switch (icon.toLowerCase()) {
    case 'wifi':
      return '/images/wifi-solid.svg';
    case 'shower':
      return '/images/shower-solid.svg';
    case 'tv':
      return '/images/tv-solid.svg';
    case 'coffee':
      return '/images/mug-saucer-solid.svg';
    case 'check':
      return '/images/spray-can-sparkles-solid.svg';
    default:
      return '/images/wifi-solid.svg';
  }
};

export default async function RoomDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  let room: any = null;
  let otherRooms: any[] = [];
  try {
    room = await prisma.room.findUnique({
      where: { slug },
      include: { amenities: true },
    });

    if (room) {
      // Fetch other rooms for the bottom carousel/grid
      otherRooms = await prisma.room.findMany({
        where: {
          NOT: { id: room.id },
        },
        take: 3,
        include: { amenities: true },
      });
    }
  } catch (error) {
    console.error("Prisma error in RoomDetailPage:", error);
  }

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
                {room.amenities.map((amenity: any) => (
                  <div key={amenity.id} className="amenities-wrap">
                    <img 
                      src={getIconUrl(amenity.icon)} 
                      loading="lazy" 
                      alt="" 
                      className="icon-rooms" 
                      style={{ width: "24px", height: "24px", marginRight: "10px" }}
                    />
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

        {otherRooms.length > 0 && (
          <section className="section light-background nuevo">
            <div className="w-layout-blockcontainer base-container w-container">
              <div className="title-wrap">
                <div className="div-block-8 div-block-9 left-subtitle">
                  <h6 className="heading-2">Habitaciones<br /></h6>
                </div>
                <div className="right-title">
                  <h2>Otras Habitaciones<br /></h2>
                  <p>Descubre todas las habitaciones que Fundo Achamaqui tiene para ti en tu próxima aventura en Chachapoyas.<br /></p>
                </div>
              </div>
              <div className="w-layout-grid grid">
                {otherRooms.map((r) => (
                  <RoomCard 
                    key={r.id}
                    name={r.name}
                    slug={r.slug}
                    price={r.price}
                    capacity={r.capacity}
                    image={r.mainImage}
                    description={r.description.substring(0, 100) + '...'}
                    amenities={r.amenities}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
