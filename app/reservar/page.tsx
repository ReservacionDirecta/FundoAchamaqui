"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ReservarPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title={t("nav_book")}
          className="contacts-banner"
        />

        <section className="section">
          <div className="base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">{t("nav_contact")}<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}>
                  <strong>
                    {t("language") === "en" 
                      ? "Follow us on Facebook, Instagram, and Twitter to stay updated on our offers and special events." 
                      : "Síguenos en Facebook, Instagram y Twitter para mantenerte actualizado sobre nuestras ofertas y eventos especiales."
                    }
                    <br />
                  </strong>
                </h2>
                <p style={{ opacity: 1 }}>
                  {t("language") === "en"
                    ? "At Fundo Achamaqui, we are committed to providing you with an exceptional experience. We look forward to having you as our guest very soon!"
                    : "En Fundo Achamaqui, estamos comprometidos a proporcionarte una experiencia excepcional. ¡Esperamos tenerte como nuestro huésped muy pronto!"
                  }
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="book-banner-wrap" style={{ opacity: 1 }}>
              <div className="booking-engine">
                <h1 className="white-text coupon">
                  {t("coupon_text")}<br />‍<br />
                  <span className="text-span-2"><strong>{t("coupon_code")}</strong></span><br />
                </h1>
              </div>
              <div 
                id="sirvoy" 
                className="html-embed w-embed w-script"
                dangerouslySetInnerHTML={{
                  __html: '<script async="" data-form-id="a10e4ddb7d5915cb" src="https://secured.sirvoy.com/widget/sirvoy.js"></script>'
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

