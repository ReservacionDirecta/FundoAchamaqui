"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

// Google Photos extracted list & original images combined
const ALL_IMAGES = [
  // Original Webflow local images
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
  // Google Photos Album
  "https://lh3.googleusercontent.com/pw/AP1GczO5mjuLAQZPqB-kPOQXSF6w2JPXyzS-9-eDSYPXjqwbO_S0AeK2PccXgiiEBXQVOOlPn0_wCwER6ZlV4I5AgZk_aeExp3_DNfVl9PJeqeEG61XN2gVL",
  "https://lh3.googleusercontent.com/pw/AP1GczO7Kd0hQeWkWUkQ6PzRp6ccTOBxW1Yc4I4C3OuWhRxi3IEABd3-v5GK2sA8sY0QtrZQaSBrTDfilJFhQXmb3JPGj2ECVb2EW0_EuldOLW-GFznyQ_pw",
  "https://lh3.googleusercontent.com/pw/AP1GczN4gs9swfTj-fBjKbPomA8LJrDfsqG8xQ06UuoiRlt-yxKfEtqj8FD1-gyu-oJQ5X0UquWJfbLmhVngJQhdaD6h6ONo5L1YNjRUOWHOtot-QaBSZyeB",
  "https://lh3.googleusercontent.com/pw/AP1GczNXBZpawgC8ASs2rZAazQuYXAsrjMkawkSOYyZY34eamV-7VvZjws_Y81ZW1SStil83C2inGM_fw6CqwzpowydQgy4UOVLsgiKDQgy85q5Kt8fWttDK",
  "https://lh3.googleusercontent.com/pw/AP1GczNLJQNcAcL-iR-6dkqCHql46MUcDTha1oRVFX7OUX_GV_YCf-3jsAuPwg9RtI5D81swpDbXh1fxx7hd4bXvh0pYn7IPs95baG0ChgL2scV9_dzRG7TB",
  "https://lh3.googleusercontent.com/pw/AP1GczNr4pmqe5rVM_lcxHGGAh4U0CSyBWdeSHcktKNkSIZ8HF3oQTc3wC28v8W7PEootgxm44xy2cdgxPX9tTwVfO0vVA_maTQTml8lua9iHjQ47-6VKV-l",
  "https://lh3.googleusercontent.com/pw/AP1GczOfooxgEi5WqwVpCWBbQgcj239Fbdaylzf33KB6g1Xcg_MtB3yFOTgwFUdefd98SwUxX0PQ7dfNR2k_Ttb6aUf93NL2E8F03Y8kl5VjRczL-4u0PLaZ",
  "https://lh3.googleusercontent.com/pw/AP1GczPlxPiv_pucKgPKohtBuA5nEm0gi-u5sYvReawq_Z2GkzCvBULjA6x-Ex7Q1o2xOsSjWRfJSNAxdDqDJarm6F4GLXBaeP5S9-dzvbMFHCb3bmT_-UaG",
  "https://lh3.googleusercontent.com/pw/AP1GczOFAdvsTQ4afN8dP8Qr5i4HkIjk6Huo8CZIiL0mg_zUora8fvkPChN9EyZZGf_Y01ywQhyzVGhlPs5J0-lvMtqGlX644SSZvruM4ih1WxobZLhweP9A",
  "https://lh3.googleusercontent.com/pw/AP1GczNjrxcTQQQUFAlLGjTVomQq7ZI8V74JqlFbTDFpPeiMCE3x8aAh8LtSXuLYOhIMMcprcnz2K4KSXVOqj3OWYGGc6QlYxipKai76w4wAuUqENYenDup4",
  "https://lh3.googleusercontent.com/pw/AP1GczNwvqIhDDFa9MkQyuK7UqyiowPOtF-_QU6kuk7Y6FOXZq0_zm5rW_BB_JURE6ahImnBEpubxWMTdfxLma1ar94SNhhglVjr8ADIe0wW0vUfNG-3SMpz",
  "https://lh3.googleusercontent.com/pw/AP1GczO_jmAe8rI09z1ssv2o7m28gz_DHFMo7Q3qMoWHbngTAncsYe0HxhQ-RXKAgLL4R6pJM-jLxfEsUdO70nWoSfQs65qdrS6vutW8lCC7uUsSEU2b5Z1E",
  "https://lh3.googleusercontent.com/pw/AP1GczPDaOpU6AjLh--f-_H1pec2n8mEwpBLrcau--WZlkQKHCGfeF_oVB_qu5JF_ghP9bVBZYTNbmODuclQ-9RpURrD5VW45mditladexJsDbgE7fxvoiQC",
  "https://lh3.googleusercontent.com/pw/AP1GczPpFgKSSNf47raz_pw43C68lFuXjIfvavXUtnYgQVtSYwMGRpydysbohQjqGzlbfyYFoaBd0jrMC0k5LHQyXPVauQPnr5upsTy8MAbR8oxANIINigRV",
  "https://lh3.googleusercontent.com/pw/AP1GczPxJHibvAOy7VIckdi7SEO2AwVkWO3U5ghyHSlV3H82SiT9LZp1hb6KusJGfEd1UFI-cu0ilospfdlVtBnnzss2KjZwDsfqiyYOfhk80wLNMUgK-zkg",
  // Google Photos Second Album (Rooms & Grounds)
  "https://lh3.googleusercontent.com/pw/AP1GczMoacfVeB9nYb0JaJ1Hao5egci-FIJHHpq8MgwpSEso6mVZXrhyHtMSFmyzK6hnjcPVbwu7Oa4-R8U9HCtMajzBOXVTlqed_mtvm52PQmX5KitbW1q6",
  "https://lh3.googleusercontent.com/pw/AP1GczORcSU53JUzkBxXnnLyaCPE8s0WkmgQdUkdFCKsWNtuzW4hMuXJeplnUQSk06fOA2IlfP_eklYeNot-dF8vRQFUK8jsBTsc6sTsk9wBna59W3efMmgp",
  "https://lh3.googleusercontent.com/pw/AP1GczNrvH0aMU4SEGR5guPRn0-vK8DnrUUh3hX5Vi0cI-q_C7xuLmYZoxHkEklkaNsSdbU2YFdx_ehamgPhaAVPJ4MwqhlZB8mUmMBIxThvE2anxBmLtjvL",
  "https://lh3.googleusercontent.com/pw/AP1GczN6YMnjoX-4-OI7AMmlfgaabQwsCuG1K2nficUkcIMcB9RfcjULl08EZaz7M4HrgX-78OilMXB_eJ_urDMqA8FsvTD-b_rQqbj374RnsHRmY3ZwDIoD",
  "https://lh3.googleusercontent.com/pw/AP1GczOaHb1Lu2We0FnuD0VotSRgTV1e1U-rfjxiVwDQiaFj3sOmPnEcAWhH6HDCsaCemj_WEDdEoqIJFC3_Sg8EEqt9zwI2whIdLCVEBirJZrvNWxMXCU_r",
  "https://lh3.googleusercontent.com/pw/AP1GczOicIvhfxdnSWpIRUoO37IjrC5Sul0tw32pINF3dE9SJluFDeXuDa2Ddola_zNT9BJbHMqsxS5aA3a10qvrW_EUKcGdMNHFfD2bzTJqKwQ8K9Oa0m_5",
  "https://lh3.googleusercontent.com/pw/AP1GczMxT2DeZmZWRWuMjYL3vumGzQ7dV5YexWFYjMxEzIJJ0Mi5s_Io35_AG2LQ20DOLCWxbbotnzHPF71Q4Uik_tKbqPotBA3NA8-NMmkMbLdU9t8_4HH3",
  "https://lh3.googleusercontent.com/pw/AP1GczOiuNfyiCDklFvO42r29elWmaWngIA0f8q9_T2Z0C9MiKp2n1aadoHAT0bFuKSLP5BZXMom9dOoxbVeSKqdiNuJp9Ia5zfFDCdfrcKI6DYryew1nPxe",
  "https://lh3.googleusercontent.com/pw/AP1GczPO1HUFh72jesmG_WvDc3qGjeChKWf-rNRsH4fYHz1arYZG3Xk5QPxCGwaoBNaqR_NCfEOcsznR6x_xuQypXR6dfQIIURWwa2EjKiC5it83c7W4yGmS"
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
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  aspectRatio: "4/3",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease"
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
                  borderRadius: "4px",
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
