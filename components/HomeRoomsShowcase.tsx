"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

interface RoomData {
  id: string;
  name: string;
  slug: string;
  price: number;
  capacity: number;
  mainImage: string;
  description: string;
  amenities: { id: string; name: string; icon: string }[];
}

const fallbackRooms: RoomData[] = [
  {
    id: "cuadruple-king",
    name: "Cuádruple | King",
    slug: "cuadruple-king",
    price: 400,
    capacity: 4,
    mainImage: "/images/IMG_20230823_143927.jpg",
    description: "Espaciosa suite familiar con cama King size y camas adicionales. Vistas al valle y balcón tradicional.",
    amenities: [
      { id: "1", name: "Cama King", icon: "bed" },
      { id: "2", name: "WiFi Alta Velocidad", icon: "wifi" },
      { id: "3", name: "Desayuno incluido", icon: "coffee" },
      { id: "4", name: "Baño Privado", icon: "shower" },
    ],
  },
  {
    id: "matrimonial-king",
    name: "Matrimonial King",
    slug: "matrimonial-king",
    price: 250,
    capacity: 2,
    mainImage: "/images/IMG_20230823_144940.jpg",
    description: "Habitación colonial romántica con cama King de lujo, techos altos de madera y vistas al jardín central.",
    amenities: [
      { id: "1", name: "Cama King", icon: "bed" },
      { id: "2", name: "WiFi Gratis", icon: "wifi" },
      { id: "3", name: "Desayuno incluido", icon: "coffee" },
      { id: "4", name: "Tv Satelital", icon: "tv" },
    ],
  },
  {
    id: "matrimonial-queen",
    name: "Matrimonial Queen",
    slug: "matrimonial-queen",
    price: 230,
    capacity: 2,
    mainImage: "/images/IMG_20230823_151045-1.jpg",
    description: "Cálida y acogedora estancia equipada con cama Queen, baño privado y acabados rústicos de la hacienda.",
    amenities: [
      { id: "1", name: "Cama Queen", icon: "bed" },
      { id: "2", name: "WiFi Gratis", icon: "wifi" },
      { id: "3", name: "Desayuno incluido", icon: "coffee" },
      { id: "4", name: "Agua Caliente 24/7", icon: "shower" },
    ],
  },
  {
    id: "doble-twin",
    name: "Doble | Twin",
    slug: "doble-twin",
    price: 220,
    capacity: 2,
    mainImage: "/images/IMG_20230823_144310.jpg",
    description: "Ideal para amigos o colegas. Cuenta con dos confortables camas individuales y ambiente sereno.",
    amenities: [
      { id: "1", name: "2 Camas Twin", icon: "bed" },
      { id: "2", name: "WiFi Gratis", icon: "wifi" },
      { id: "3", name: "Desayuno incluido", icon: "coffee" },
      { id: "4", name: "Limpieza Diaria", icon: "check" },
    ],
  },
  {
    id: "triple",
    name: "Triple Superior",
    slug: "triple",
    price: 300,
    capacity: 3,
    mainImage: "/images/IMG_20230823_145548_DxO-1082x1440.jpg",
    description: "Capacidad para 3 personas con distribución óptima, luz natural y balcón con brisa del río Utcubamba.",
    amenities: [
      { id: "1", name: "3 Huéspedes", icon: "bed" },
      { id: "2", name: "WiFi Gratis", icon: "wifi" },
      { id: "3", name: "Desayuno incluido", icon: "coffee" },
      { id: "4", name: "Baño Privado", icon: "shower" },
    ],
  },
];

export default function HomeRoomsShowcase({ rooms = fallbackRooms }: { rooms?: RoomData[] }) {
  const { language } = useLanguage();
  const displayRooms = rooms.length > 0 ? rooms : fallbackRooms;

  return (
    <section className="section rooms-showcase-section" style={{ backgroundColor: "#faf8f5", padding: "80px 0" }}>
      <style jsx>{`
        .rooms-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 40px;
        }
        @media (max-width: 1024px) {
          .rooms-showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .rooms-showcase-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .room-home-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .room-home-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(43, 61, 48, 0.12);
          border-color: rgba(201, 169, 110, 0.4);
        }
        .room-media {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #e6dfd5;
        }
        .room-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .room-home-card:hover .room-media img {
          transform: scale(1.06);
        }
        .room-badge-capacity {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(43, 61, 48, 0.9);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .room-badge-price {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: #2b3d30;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .room-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .room-title {
          font-family: var(--font-gilda, serif);
          font-size: 22px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        .room-desc {
          color: #666;
          font-size: 13.5px;
          line-height: 1.55;
          margin-bottom: 18px;
          flex: 1;
        }
        .room-amenities-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          padding-top: 12px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }
        .room-amenity-chip {
          background: #f4efe8;
          color: #555;
          font-size: 11px;
          padding: 4px 9px;
          border-radius: 6px;
          font-weight: 500;
        }
        .room-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .btn-room-details {
          flex: 1;
          text-align: center;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #c9a96e;
          color: #2b3d30;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-room-details:hover {
          background: #c9a96e;
          color: #ffffff;
        }
        .btn-room-book {
          flex: 1;
          text-align: center;
          padding: 10px 14px;
          border-radius: 8px;
          background: #10b981;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .btn-room-book:hover {
          background: #059669;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap" style={{ textAlign: "center", marginBottom: "20px" }}>
          <div className="div-block-8 div-block-9" style={{ margin: "0 auto 8px" }}>
            <h6 className="heading-2" style={{ color: "#c9a96e" }}>
              {language === "en" ? "Exclusive Accommodations" : "Alojamiento Exclusivo"}
            </h6>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", marginBottom: "12px", color: "#1a1a1a" }}>
            {language === "en" ? "Rooms & Suites with Heritage Character" : "Nuestras Habitaciones & Suites"}
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto", color: "#5a5a5a", fontSize: "15px" }}>
            {language === "en"
              ? "Designed for quiet contemplation and absolute comfort. Enjoy handcrafted wooden balconies, private bathrooms, and fresh breezes from the Utcubamba River."
              : "Diseñadas para el descanso y la contemplación. Disfruta de balcones coloniales de madera, vistas al valle, baño privado y el murmullo relajante del río Utcubamba."}
          </p>
        </div>

        <div className="rooms-showcase-grid">
          {displayRooms.slice(0, 3).map((room) => (
            <article key={room.id} className="room-home-card">
              <div className="room-media">
                <img src={room.mainImage} alt={room.name} loading="lazy" />
                <div className="room-badge-capacity">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{room.capacity} {language === "en" ? "Guests" : "Huéspedes"}</span>
                </div>
                <div className="room-badge-price">
                  <span style={{ fontSize: "11px", fontWeight: 500, color: "#777", marginRight: "3px" }}>
                    {language === "en" ? "From " : "Desde "}
                  </span>
                  S/. {room.price}
                  <span style={{ fontSize: "11px", fontWeight: 400, color: "#888" }}>
                    {language === "en" ? "/night" : "/noche"}
                  </span>
                </div>
              </div>

              <div className="room-content">
                <h3 className="room-title">{room.name}</h3>
                <p className="room-desc">{room.description}</p>

                <div className="room-amenities-row">
                  {room.amenities.slice(0, 3).map((a, i) => (
                    <span key={i} className="room-amenity-chip">✓ {a.name}</span>
                  ))}
                  <span className="room-amenity-chip">✓ {language === "en" ? "Breakfast" : "Desayuno"}</span>
                </div>

                <div className="room-actions">
                  <Link href={`/rooms/${room.slug}`} className="btn-room-details">
                    {language === "en" ? "View Details" : "Ver Detalles"}
                  </Link>
                  <button
                    data-open-hothelia
                    className="btn-room-book"
                    title="Reservar habitación"
                  >
                    {language === "en" ? "Book Now" : "Reservar"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/rooms" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {language === "en" ? "View All Accommodations (5 Room Types)" : "Ver Todas las Habitaciones (5 Tipos)"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
