import Link from "next/link";

interface Amenity {
  id: string;
  name: string;
  icon: string;
}

interface RoomCardProps {
  name: string;
  slug: string;
  price: number;
  capacity: number;
  image: string;
  description: string;
  amenities: Amenity[];
}

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

export default function RoomCard({ name, slug, price, capacity, image, description, amenities = [] }: RoomCardProps) {
  return (
    <article className="tarjeta reveal-scale">
      <Link href={`/rooms/${slug}`} className="room-card-media" aria-label={`Ver detalles de ${name}`}>
        <img
          src={image}
          loading="lazy"
          alt={name}
          className="room-image"
        />
        <div className="price-room">
          <span className="price-amount">S/. {price}</span>
          <span className="price-meta">/ noche · {capacity} pers.</span>
        </div>
      </Link>

      <div className="room-card-body">
        <div className="room-card-header">
          <Link href={`/rooms/${slug}`} className="name-room-links">
            <h3 className="room-name">{name}</h3>
          </Link>
        </div>

        <p className="room-card-description">{description}</p>

        <div className="room-card-amenities">
          <ul className="amenities-list">
            {amenities.slice(0, 4).map((amenity) => (
              <li key={amenity.id} className="amenity-item">
                <img
                  src={getIconUrl(amenity.icon)}
                  loading="lazy"
                  alt=""
                  className="amenity-icon"
                  aria-hidden="true"
                />
                <span>{amenity.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="room-card-footer">
          <Link href={`/rooms/${slug}`} className="room-card-cta">
            Ver habitación
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
