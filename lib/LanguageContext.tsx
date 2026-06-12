"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_accommodation: "Alojamiento",
    nav_rooms: "Habitaciones",
    nav_activities: "Actividades",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    nav_book: "Reservar",

    // Banner / Hero
    hero_welcome: "Bienvenido a",
    hero_title: "Fundo Achamaqui",
    hero_subtitle: "El refugio de tu próxima aventura en Chachapoyas",

    // Booking coupon
    coupon_text: "¡Sumérgete en la belleza de Chachapoyas con un 20% de descuento en el Hotel Fundo Achamaqui! Tu refugio en la Ceja de Selva Peruana.",
    coupon_code: "Cupón de descuento: escapechacha20",

    // Home Section About
    about_subtitle: "Naturaleza y comodidad",
    about_title: "Naturaleza y comodidad se unen en Fundo Achamaqui.",
    about_paragraph: "Enclavado en la belleza natural de la provincia de Chachapoyas, Fundo Achamaqui te ofrece una experiencia única de relajación y aventura. Descubre la magia de la región Amazonas en nuestro acogedor hotel.",
    about_btn: "Leer Más",

    // Services
    services_subtitle: "¿Por qué elegirnos?",
    services_title: "Nuestros Servicios",
    services_paragraph: "En Fundo Achamaqui, la naturaleza y la comodidad se entrelazan en un refugio de tranquilidad a orillas del río Utcubamba. Nuestras acogedoras habitaciones ofrecen vistas panorámicas, mientras que nuestro restaurante te invita a saborear la auténtica cocina peruana.",

    // Features
    feat_location_title: "Excelente Ubicación",
    feat_location_desc: "Aprox. 30 min desde el aeropuerto",
    feat_rooms_title: "Habitaciones Disponibles",
    feat_rooms_desc: "Parejas / Grupos / Familias",
    feat_events_title: "Sala de Eventos",
    feat_events_desc: "Conferencias / Bodas / Retiros",
    feat_wifi_title: "WiFi Gratis",
    feat_wifi_desc: "Wifi 24/7 en áreas comunes",

    // Reviews
    reviews_subtitle: "Reseñas",
    reviews_title: "Testimonios",

    // Gallery
    gallery_title: "Explora Nuestra Galería",
    gallery_desc: "Descubre la belleza de Fundo Achamaqui y Chachapoyas a través de imágenes que cuentan historias. Nuestra galería te transportará a un mundo de paisajes impresionantes, aventuras emocionantes y momentos inolvidables en este rincón de Chachapoyas. ¡Ven y sumérgete en la magia de Fundo Achamaqui a través de nuestra galería de fotos!",
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About Us",
    nav_accommodation: "Accommodations",
    nav_rooms: "Rooms",
    nav_activities: "Activities",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_book: "Book Now",

    // Banner / Hero
    hero_welcome: "Welcome to",
    hero_title: "Fundo Achamaqui",
    hero_subtitle: "The refuge of your next adventure in Chachapoyas",

    // Booking coupon
    coupon_text: "Immerse yourself in the beauty of Chachapoyas with a 20% discount at Hotel Fundo Achamaqui! Your refuge in the Peruvian high jungle.",
    coupon_code: "Discount Code: escapechacha20",

    // Home Section About
    about_subtitle: "Nature & Comfort",
    about_title: "Nature and comfort unite at Fundo Achamaqui.",
    about_paragraph: "Nestled in the natural beauty of the Chachapoyas province, Fundo Achamaqui offers you a unique experience of relaxation and adventure. Discover the magic of the Amazonas region in our cozy hotel.",
    about_btn: "Read More",

    // Services
    services_subtitle: "Why choose us?",
    services_title: "Our Services",
    services_paragraph: "At Fundo Achamaqui, nature and comfort intertwine in a haven of tranquility on the banks of the Utcubamba River. Our cozy rooms offer panoramic views, while our restaurant invites you to savor authentic Peruvian cuisine.",

    // Features
    feat_location_title: "Excellent Location",
    feat_location_desc: "Approx. 30 mins from the airport",
    feat_rooms_title: "Rooms Available",
    feat_rooms_desc: "Couples / Groups / Families",
    feat_events_title: "Event Room",
    feat_events_desc: "Conferences / Weddings / Retreats",
    feat_wifi_title: "Free WiFi",
    feat_wifi_desc: "24/7 WiFi in common areas",

    // Reviews
    reviews_subtitle: "Reviews",
    reviews_title: "Testimonials",

    // Gallery
    gallery_title: "Explore Our Gallery",
    gallery_desc: "Discover the beauty of Fundo Achamaqui and Chachapoyas through images that tell stories. Our gallery will transport you to a world of breathtaking landscapes, exciting adventures, and unforgettable moments in this corner of Chachapoyas. Come and immerse yourself in the magic of Fundo Achamaqui through our photo gallery!",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const [dbSettings, setDbSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "es" || savedLang === "en") {
      setLanguageState(savedLang);
    }

    // Fetch dynamic CMS settings from the DB
    const loadCmsSettings = async () => {
      try {
        const res = await fetch("/api/cms");
        const data = await res.json();
        if (data.success && data.settings) {
          const settingsMap: Record<string, string> = {};
          data.settings.forEach((s: any) => {
            settingsMap[s.key] = s.value;
          });
          setDbSettings(settingsMap);
        }
      } catch (err) {
        console.error("Failed to load CMS settings dynamically:", err);
      }
    };

    loadCmsSettings();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    // 1. Try localized key from DB (e.g. es_hero_title)
    const dbKey = `${language}_${key}`;
    if (dbSettings[dbKey] !== undefined) {
      return dbSettings[dbKey];
    }

    // 2. Try direct key from DB (e.g. contact_phone)
    if (dbSettings[key] !== undefined) {
      return dbSettings[key];
    }

    // 3. Fallback to static dictionary
    return dictionary[language][key] || dictionary["es"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
