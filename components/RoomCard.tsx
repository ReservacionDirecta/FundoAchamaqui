import Link from "next/link";

interface RoomCardProps {
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}

export default function RoomCard({ name, slug, price, image, description }: RoomCardProps) {
  return (
    <div className="tarjeta-2">
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
          <div className="price-rooms">S/ {price}</div>
        </div>
      </div>
      <div className="info-room-wrapper">
        <div className="left-info-room">
          <Link href={`/rooms/${slug}`} className="name-room-links w-inline-block">
            <h5 className="room-name">{name}</h5>
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
