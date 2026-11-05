"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import BookingWidget from "@/components/BookingWidget";
import HomeRoomsShowcase from "@/components/HomeRoomsShowcase";
import HomeHaciendaExperiences from "@/components/HomeHaciendaExperiences";
import HomeToursBase from "@/components/HomeToursBase";
import HomeGalleryMosaic from "@/components/HomeGalleryMosaic";
import HomeReviews from "@/components/HomeReviews";
import HomeDirectBookingPerks from "@/components/HomeDirectBookingPerks";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Banner */}
        <section className="banner-home-1">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="div-block-20 banner-home-1-wrapper" data-parallax="0.08">
              <img 
                className="stars-banner" 
                src="/images/219-2191012_3-star-vector-transparent-3-stars-png.png" 
                alt="Stars" 
                style={{ opacity: 1 }} 
                loading="lazy" 
              />
              <h6 className="white-text small-text">{t("hero_welcome")}</h6>
              <h1 className="banner-heading-home-1">{t("hero_title")}</h1>
              <p className="white-paragraph banner-paragraph">
                {t("hero_subtitle")}
              </p>
              <div className="banner-cta-row">
                <Link href="/reservar" className="primary-button">{t("hero_cta_book")}</Link>
                <Link href="/rooms" className="primary-button-white">{t("hero_cta_rooms")}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Integrated Booking Engine Bar */}
        <section className="booking-bar-section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="book-banner-wrap" style={{ opacity: 1 }}>
              <div className="booking-promo-badge">
                <span className="booking-promo-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                  {t("coupon_code")}
                </span>
                <span className="booking-promo-desc">{t("coupon_text")}</span>
              </div>
              <BookingWidget />
            </div>
          </div>
        </section>

        {/* 3. Welcome & Heritage Story */}
        <section className="section naturaleza">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="about-section reveal">
              <div className="left-about-wrap">
                <img className="stars-img" src="/images/219-2191012_3-star-vector-transparent-3-stars-png.png" alt="Stars" loading="lazy" />
                <h2 className="heading-4">{t("about_title")}</h2>
                <p className="paragraph">{t("about_paragraph")}</p>
                <div className="button-section-wrap">
                  <Link href="/nosotros" className="primary-button">{t("about_btn")}</Link>
                </div>
              </div>
              <div id="w-node-b1dfaac2-7851-155f-84bd-443661f2c77c-83eba5a0" className="right-img" style={{ opacity: 1 }} data-parallax="0.05">
                <div className="background-video w-background-video w-background-video-atom">
                  <video 
                    id="e565245e-818f-a130-0088-41b7bdc75076-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={{ backgroundImage: "url('https://uploads-ssl.webflow.com/651f4dd8f02881a183eba576/6568a4ffe03dd43e6e243cdd_Gocta-poster-00001.jpg')", objectFit: "cover" }}
                  >
                    <source src="https://uploads-ssl.webflow.com/651f4dd8f02881a183eba576/6568a4ffe03dd43e6e243cdd_Gocta-transcode.mp4" />
                  </video>
                </div>
                <img src="/images/Catarata-Gocta.webp" loading="lazy" alt="Gocta" className="big-img" />
                <img src="/images/Vista-aerea-achamaqui-1.webp" loading="lazy" alt="Vista Aérea" className="absolute-img" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Luxury Rooms & Suites Showcase */}
        <HomeRoomsShowcase />

        {/* 5. Key Hotel Highlights Band */}
        <section className="section img">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="w-layout-grid about-hotel">
              <div className="hotel-info reveal-fade reveal-delay-1">
                <h6 className="white-text">{t("feat_location_title")}</h6>
                <p className="white-paragraph">{t("feat_location_desc")}</p>
              </div>
              <div className="hotel-info reveal-fade reveal-delay-2">
                <h6 className="white-text">{t("feat_rooms_title")}</h6>
                <p className="white-paragraph">{t("feat_rooms_desc")}</p>
              </div>
              <div className="hotel-info reveal-fade reveal-delay-3">
                <h6 className="white-text">{t("feat_events_title")}</h6>
                <p className="white-paragraph">{t("feat_events_desc")}</p>
              </div>
              <div className="hotel-info reveal-fade reveal-delay-4">
                <h6 className="white-text">{t("feat_wifi_title")}</h6>
                <p className="white-paragraph">{t("feat_wifi_desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Hacienda Life & Resort Experiences */}
        <HomeHaciendaExperiences />

        {/* 7. Strategic Exploration Base (Kuélap, Gocta, Karajía, Sonche) */}
        <HomeToursBase />

        {/* 8. Visual Journey & Photo Mosaic */}
        <HomeGalleryMosaic />

        {/* 9. Verified Guest Reviews & Trust Badges */}
        <HomeReviews />

        {/* 10. Direct Booking Advantages */}
        <HomeDirectBookingPerks />
      </main>
      <Footer />
    </>
  );
}
