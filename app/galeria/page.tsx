"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

// Google Photos extracted list & original images combined
const ALL_IMAGES = [
  "/images/DJI_0033.jpg",
  "/images/DJI_0059.jpg",
  "/images/IMG_20230823_082703-EDIT_DxO_DxO-1918x1440.jpg",
  "/images/DJI_0111_DxO-1920x1440.jpg",
  "/images/DJI_0050.jpg",
  "/images/DJI_0092.jpg",
  "/images/Kuelap.jpg",
  "/images/received_341214391902150.jpeg",
  "/images/Vista-aerea-achamaqui-1.jpg",
  "/images/IMG_20230821_093503-648x1440.jpg",
  "/images/IMG_20230822_162646-1920x1440.jpg",
  "/images/IMG_20230820_145404-811x1440.jpg",
  "/images/IMG_20230822_141537.jpg",
  "/images/IMG_20230822_141539.jpg",
  "/images/IMG_20230822_141541.jpg",
  "/images/IMG_20230822_141542.jpg",
  "/images/IMG_20230822_141551.jpg",
  "/images/IMG_20230822_141553.jpg",
  "/images/IMG_20230822_141601.jpg",
  "/images/IMG_20230822_161622.jpg",
  "/images/IMG_20230823_143925.jpg",
  "/images/IMG_20230823_143927.jpg",
  "/images/IMG_20230823_143938.jpg",
  "/images/IMG_20230823_143940.jpg",
  "/images/IMG_20230823_143955.jpg",
  "/images/IMG_20230823_144010.jpg",
  "/images/IMG_20230823_144013.jpg",
  "/images/IMG_20230823_144024.jpg",
  "/images/IMG_20230823_144028.jpg",
  "/images/IMG_20230823_144036.jpg",
  "/images/IMG_20230823_144105.jpg",
  "/images/IMG_20230823_145728.jpg",
  "/images/VID_20230823_143805.jpg",
];

export default function GaleriaPage() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % ALL_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title={t("gallery_title")}
          paragraph={t("gallery_desc")}
          className="portfolio-grid-banner"
        />

        <div className="section" style={{ padding: "80px 5%" }}>
          <div
            className="gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto"
            }}
          >
            {ALL_IMAGES.map((imgUrl, index) => (
              <div 
                key={index} 
                className="w-layout-cell" 
                style={{
                  opacity: 1,
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  aspectRatio: "4/3",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  willChange: "transform",
                  transform: "translateZ(0)"
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(140, 115, 85, 0.15)";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
                  <img 
                    src={imgUrl} 
                    loading="lazy" 
                    alt={`Fundo Achamaqui Gallery ${index + 1}`} 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Premium Lightbox Modal */}
        {lightboxIndex !== null && (
          <div 
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "fadeIn 0.3s ease"
            }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "36px",
                cursor: "pointer",
                zIndex: 10000,
                opacity: 0.8,
                transition: "opacity 0.2s"
              }}
              onClick={closeLightbox}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
            >
              &times;
            </button>

            {/* Prev Button */}
            <button 
              style={{
                position: "absolute",
                left: "24px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 10000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s"
              }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              &#10094;
            </button>

            {/* Image Container */}
            <div 
              style={{
                maxWidth: "85%",
                maxHeight: "85%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={ALL_IMAGES[lightboxIndex]} 
                alt="Enlarged gallery view" 
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
                }}
              />
              <div 
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "var(--font-lexend, sans-serif)",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  opacity: 0.7
                }}
              >
                {lightboxIndex + 1} / {ALL_IMAGES.length}
              </div>
            </div>

            {/* Next Button */}
            <button 
              style={{
                position: "absolute",
                right: "24px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 10000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s"
              }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              &#10095;
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
