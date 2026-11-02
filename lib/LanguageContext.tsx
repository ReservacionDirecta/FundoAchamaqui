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
    hero_cta_book: "Reservar",
    hero_cta_rooms: "Ver habitaciones",
    card_cta: "Descubrir",

    // Booking coupon
    coupon_text: "¡Disfruta de la magia de Chachapoyas con un 10% de descuento en el Hotel Fundo Achamaqui! Válido para reservas del 19/06/2026 al 28/02/2027.",
    coupon_code: "Cupón de descuento: FACEBOOK (10% OFF)",

    // Home Section About
    about_subtitle: "Naturaleza y comodidad",
    about_title: "Naturaleza y comodidad se unen en Fundo Achamaqui.",
    about_paragraph: "Enclavado en la belleza natural de la provincia de Chachapoyas, Fundo Achamaqui te ofrece una experiencia única de relajación y aventura. Descubre la magia de la región Amazonas en nuestro acogedor hotel.",
    about_btn: "Leer más",

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
    reviews_heading: "Lo que dicen nuestros huéspedes",

    // Reservar page
    reservar_title: "Reserva tu Estancia",
    reservar_subtitle: "Disponibilidad",
    reservar_paragraph: "Elige tu habitación ideal y reserva en línea.",
    reservar_rooms_title: "Nuestras habitaciones",
    reservar_rooms_desc: "Cada habitación ofrece comodidad, privacidad y vistas únicas a la naturaleza de Chachapoyas.",

    // Gallery
    gallery_title: "Explora Nuestra Galería",
    gallery_desc: "Descubre la belleza de Fundo Achamaqui y Chachapoyas a través de imágenes que cuentan historias. Nuestra galería te transportará a un mundo de paisajes impresionantes, aventuras emocionantes y momentos inolvidables en este rincón de Chachapoyas. ¡Ven y sumérgete en la magia de Fundo Achamaqui a través de nuestra galería de fotos!",

    // Media & Contact defaults (SSR Fallbacks)
    logo_black_image_url: "/images/logo-titulo-negro2x.png",
    logo_white_image_url: "/images/logo-titulo-blanco2x.png",
    contact_phone: "+51 954 754 650",
    contact_email: "info@fundoachamaqui.com",
    contact_address: "Km. 39 Carretera Pedro Ruiz, Chachapoyas",
    contact_map_url: "https://www.google.com/maps/place/Km.+39+Carretera+Pedro+Ruiz,+Chachapoyas",
    whatsapp_number: "51954754650",
    facebook_url: "https://www.facebook.com/",
    instagram_url: "https://www.instagram.com/",
    twitter_url: "https://twitter.com/",

    // Footer & Site Index
    footer_about_hotel: "Un refugio natural a orillas del río Utcubamba en Chachapoyas. Confort, gastronomía auténtica y aventuras inolvidables en la selva alta peruana.",
    footer_site_index: "Índice del Sitio",
    footer_explore: "Explorar",
    footer_reservations_title: "Reservas",
    footer_legal_title: "Protección Legal",
    footer_nav_home: "Inicio",
    footer_nav_about: "El Hotel / Nosotros",
    footer_nav_accommodation: "Alojamiento",
    footer_nav_rooms: "Habitaciones",
    footer_nav_activities: "Actividades y Tours",
    footer_nav_gallery: "Galería de Fotos",
    footer_nav_faq: "Preguntas Frecuentes",
    footer_nav_testimonials: "Testimonios",
    footer_nav_blog: "Blog & Novedades",
    footer_nav_contact: "Contacto",
    footer_nav_book: "Reservar Ahora",
    footer_policy_booking: "Políticas de Reserva y Cancelación",
    footer_policy_privacy: "Política de Privacidad y Manejo de Datos",
    footer_policy_terms: "Términos y Condiciones",
    footer_complaints_book: "Libro de Reclamaciones",
    footer_location: "Ubicación",
    footer_follow_us: "Síguenos",
    footer_hours_title: "Horario de Recepción",
    footer_hours_val: "Lunes a Domingo: 06:00 - 22:00",
    footer_rights_text: "Todos los Derechos Reservados",
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
    hero_cta_book: "Book now",
    hero_cta_rooms: "View rooms",
    card_cta: "Discover",

    // Booking coupon
    coupon_text: "Experience the magic of Chachapoyas with a 10% discount at Hotel Fundo Achamaqui! Valid for bookings from 19/06/2026 to 28/02/2027.",
    coupon_code: "Discount Code: FACEBOOK (10% OFF)",

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
    reviews_heading: "What our guests say",

    // Reservar page
    reservar_title: "Book Your Stay",
    reservar_subtitle: "Availability",
    reservar_paragraph: "Choose your ideal room and book online.",
    reservar_rooms_title: "Our Rooms",
    reservar_rooms_desc: "Each room offers comfort, privacy and unique views of Chachapoyas nature.",

    // Gallery
    gallery_title: "Explore Our Gallery",
    gallery_desc: "Discover the beauty of Fundo Achamaqui and Chachapoyas through images that tell stories. Our gallery will transport you to a world of breathtaking landscapes, exciting adventures, and unforgettable moments in this corner of Chachapoyas. Come and immerse yourself in the magic of Fundo Achamaqui through our photo gallery!",

    // Media & Contact defaults (SSR Fallbacks)
    logo_black_image_url: "/images/logo-titulo-negro2x.png",
    logo_white_image_url: "/images/logo-titulo-blanco2x.png",
    contact_phone: "+51 954 754 650",
    contact_email: "info@fundoachamaqui.com",
    contact_address: "Km. 39 Carretera Pedro Ruiz, Chachapoyas",
    contact_map_url: "https://www.google.com/maps/place/Km.+39+Carretera+Pedro+Ruiz,+Chachapoyas",
    whatsapp_number: "51954754650",
    facebook_url: "https://www.facebook.com/",
    instagram_url: "https://www.instagram.com/",
    twitter_url: "https://twitter.com/",

    // Footer & Site Index
    footer_about_hotel: "A natural sanctuary on the banks of the Utcubamba River in Chachapoyas. Comfort, authentic Peruvian gastronomy, and unforgettable adventures in the high jungle.",
    footer_site_index: "Site Index",
    footer_explore: "Explore",
    footer_reservations_title: "Reservations",
    footer_legal_title: "Legal Protection",
    footer_nav_home: "Home",
    footer_nav_about: "The Hotel / About Us",
    footer_nav_accommodation: "Accommodations",
    footer_nav_rooms: "Rooms",
    footer_nav_activities: "Activities & Tours",
    footer_nav_gallery: "Photo Gallery",
    footer_nav_faq: "Frequently Asked Questions",
    footer_nav_testimonials: "Testimonials",
    footer_nav_blog: "Blog & News",
    footer_nav_contact: "Contact",
    footer_nav_book: "Book Now",
    footer_policy_booking: "Booking & Cancellation Policies",
    footer_policy_privacy: "Privacy Policy & Data Handling",
    footer_policy_terms: "Terms & Conditions",
    footer_complaints_book: "Complaints Book",
    footer_location: "Location",
    footer_follow_us: "Follow Us",
    footer_hours_title: "Front Desk Hours",
    footer_hours_val: "Monday to Sunday: 06:00 - 22:00",
    footer_rights_text: "All Rights Reserved",
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
