"use client";

import { useState, useEffect, useCallback } from "react";

interface RoomGalleryProps {
  images: string[];
  roomName: string;
}

export default function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (i: number) => setActiveIndex(i);
  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <div className="room-detail-gallery">
        <div className="room-gallery-main" onClick={() => open(0)}>
          <img
            src={images[0]}
            alt={`${roomName} - vista principal`}
            className="room-detail-main-img"
          />
          <div className="room-gallery-expand">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
            </svg>
            <span>Ver galería</span>
          </div>
        </div>

        {images.length > 1 && (
          <div className="room-gallery-thumbs">
            {images.slice(1).map((img, i) => (
              <div key={i} className="room-gallery-thumb" onClick={() => open(i + 1)}>
                <img src={img} alt={`${roomName} - foto ${i + 2}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <div className="room-lightbox" onClick={close}>
          <button className="room-lightbox-close" onClick={close} aria-label="Cerrar galería">
            &times;
          </button>

          <button className="room-lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior">
            &#10094;
          </button>

          <div className="room-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${roomName} - foto ${activeIndex + 1}`}
              className="room-lightbox-img"
            />
            <div className="room-lightbox-counter">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          <button className="room-lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Siguiente">
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
