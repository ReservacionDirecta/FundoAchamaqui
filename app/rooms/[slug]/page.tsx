import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import RoomGallery from "@/components/RoomGallery";
import { notFound } from "next/navigation";
import Link from "next/link";

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
  } catch {
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

  const gallery: string[] = (room.images && room.images.length > 0)
    ? room.images
    : [room.mainImage];

  return (
    <>
      <Navbar />
      <main>
        <section className="section room-details">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="div-block-41 title-room">
              <img src="/images/Stars.png" loading="lazy" alt="Estrellas" className="stars-img" />
              <h1>{room.name}</h1>
              <p className="room-details-description">{room.description}</p>
            </div>
          </div>

          <div className="w-layout-blockcontainer base-container w-container">
            <div className="room-detail-grid">
              <RoomGallery images={gallery} roomName={room.name} />

              <aside className="room-detail-aside">
                <div className="room-booking-card">
                  <div className="room-price-block">
                    <span className="room-price-label">Desde</span>
                    <div className="room-price-value">
                      <span className="room-price-currency">S/.</span>
                      <span className="room-price-amount">{room.price}</span>
                      <span className="room-price-period">/ noche</span>
                    </div>
                  </div>

                  <ul className="room-quick-facts">
                    <li>
                      <span className="fact-label">Capacidad</span>
                      <span className="fact-value">{room.capacity} personas</span>
                    </li>
                    {room.category && (
                      <li>
                        <span className="fact-label">Categoría</span>
                        <span className="fact-value">{room.category.name}</span>
                      </li>
                    )}
                  </ul>

                  <a
                    href={`https://wa.me/?text=Hola%2C%20me%20interesa%20la%20habitaci%C3%B3n%20${encodeURIComponent(room.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="room-book-btn"
                  >
                    Reservar por WhatsApp
                  </a>
                  <Link href="/reservar" className="room-book-btn-secondary">
                    Ver disponibilidad
                  </Link>
                </div>
              </aside>
            </div>
          </div>
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
