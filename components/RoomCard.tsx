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
    <div className="tarjeta">
      <div className="relative div-block-34">
        <Link href={`/rooms/${slug}`} className="recent-link w-inline-block">
          <img 
            src={image} 
            loading="lazy" 
            alt={name} 
            className="room-image" 
          />
        </Link>
        <div className="price-room">
          <div className="price-rooms">
            Desde S/. {price}/noche para {capacity} Pers.
          </div>
        </div>
      </div>
      <div className="info-room-wrapper">
        <div className="left-info-room">
          <Link href={`/rooms/${slug}`} className="name-room-links w-inline-block">
            <h5 className="room-name">{name}</h5>
          </Link>
          <p>{description}</p>
        </div>
        <div className="right-info-room">
          <div className="rich-text-style w-richtext">
            <p>
              {amenities.map(a => a.name).join(", ")}
            </p>
          </div>
          <div className="icon-room-wrapper">
            {amenities.slice(0, 5).map((amenity) => (
              <img 
                key={amenity.id} 
                src={getIconUrl(amenity.icon)} 
                loading="lazy" 
                alt={amenity.name} 
                className="icon-room" 
                title={amenity.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

