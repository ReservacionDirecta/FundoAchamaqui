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
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "es" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
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
