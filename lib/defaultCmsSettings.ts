export interface CmsSettingSeed {
  key: string;
  value: string;
  description: string;
}

export const defaultCmsSettings: CmsSettingSeed[] = [
  // Analytics & Measurement Tags
  {
    key: "google_analytics_id",
    value: "G-HHDL1C2BC9",
    description: "ID de medición de Google Analytics (GA4) (ej. G-12345678)",
  },
  {
    key: "google_tag_manager_id",
    value: "GTM-PD68X8QX",
    description: "ID de contenedor de Google Tag Manager (GTM) (ej. GTM-XXXXXXX)",
  },
  {
    key: "google_ads_id",
    value: "AW-XXXXXXXXX",
    description: "ID de conversión de Google Ads (ej. AW-123456789)",
  },
  {
    key: "facebook_pixel_id",
    value: "662792696068649",
    description: "ID del Píxel de Meta (Facebook) (ej. 662792696068649)",
  },
  // Links & General Config
  {
    key: "contact_phone",
    value: "+51 982 836 547",
    description: "Teléfono de contacto de reservas",
  },
  {
    key: "contact_email",
    value: "info@fundoachamaqui.com",
    description: "Correo electrónico de contacto",
  },
  {
    key: "contact_address",
    value: "Km. 39 Carretera Pedro Ruiz, Chachapoyas",
    description: "Dirección física de Fundo Achamaqui",
  },
  {
    key: "contact_map_url",
    value: "https://www.google.com/maps/place/Km.+39+Carretera+Pedro+Ruiz,+Chachapoyas",
    description: "URL del mapa de Google Maps",
  },
  {
    key: "whatsapp_number",
    value: "51982836547",
    description: "Número de WhatsApp para contacto directo (con código de país, sin espacios ni símbolos)",
  },
  {
    key: "facebook_url",
    value: "https://www.facebook.com/",
    description: "Enlace a la página de Facebook",
  },
  {
    key: "instagram_url",
    value: "https://www.instagram.com/",
    description: "Enlace a la página de Instagram",
  },
  {
    key: "twitter_url",
    value: "https://twitter.com/",
    description: "Enlace a la página de Twitter/X",
  },

  // Media (Images/Videos)
  {
    key: "logo_black_image_url",
    value: "/images/logo-titulo-negro2x.png",
    description: "URL del logo en fondo claro (Header)",
  },
  {
    key: "logo_white_image_url",
    value: "/images/logo-titulo-blanco2x.png",
    description: "URL del logo en fondo oscuro (Footer)",
  },
  {
    key: "about_gallery_images",
    value: "https://lh3.googleusercontent.com/pw/AP1GczPR-ZSm9PCV9UeazIbjblpsaYgtF7r3PfiGtZnZ2XY-7GYND19_nX8S-K1KqEYcj5hTXKiE8sA6LdQoxsgQESVfxD9QfaxgxbtC7so5jid16pZzHACS,https://lh3.googleusercontent.com/pw/AP1GczME1PCZhf7qNgTbwhliv1Jy4oA5fv8Pmd9Z2xPJJaHYISOFqynNlBlxJ2kqcaxXKb6cwdtyBCnBvhHlZz7ETD9lfTHYy0ibpAPDmQXm2raDqfOZ5JFb,https://lh3.googleusercontent.com/pw/AP1GczORtnD0ksCQBw3GWk7RhYzv3vIOVdrVSK9Mh7C61SK4uZaY2MFGlTHRvWtcAigsPkRv8UfeGxtc-deDGTL91oNC7mn9EZGSI5P4SUF3XYOZFPExRkZE,https://lh3.googleusercontent.com/pw/AP1GczPltOiZhORn4JPH_-WnJBctgty_iuGm-I1focScUsz0TMPb-3E8pEm9XPEOujSr8GU9XwnefPvWEZSQmYexx6y6orjEYWvmVnWnV6T4MtbkX39JvU1d,https://lh3.googleusercontent.com/pw/AP1GczO5mjuLAQZPqB-kPOQXSF6w2JPXyzS-9-eDSYPXjqwbO_S0AeK2PccXgiiEBXQVOOlPn0_wCwER6ZlV4I5AgZk_aeExp3_DNfVl9PJeqeEG61XN2gVL,https://lh3.googleusercontent.com/pw/AP1GczNWFB7o-cQpOiDt3bNmd9lkRp60iQIz39qRIjcNUcrKEXej1UxZA61kaOG3boWsEin0MFGOQF0zr4MSg1CkIcvuQaYL4YQnAGibUzN9e4rdFHYL3J-E",
    description: "Lista de URLs de imágenes para la galería en la página de Nosotros (separadas por comas)",
  },
  {
    key: "about_video_url",
    value: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "URL del video promocional (YouTube o Vimeo embed)",
  },

  // Homepage Spanish Content
  {
    key: "es_hero_welcome",
    value: "Bienvenido a",
    description: "Texto de bienvenida arriba del título principal (Español)",
  },
  {
    key: "es_hero_title",
    value: "Fundo Achamaqui",
    description: "Título del banner principal de inicio (Español)",
  },
  {
    key: "es_hero_subtitle",
    value: "El refugio de tu próxima aventura en Chachapoyas",
    description: "Subtítulo del banner principal de inicio (Español)",
  },
  {
    key: "es_coupon_text",
    value: "¡Sumérgete en la belleza de Chachapoyas con un 20% de descuento en el Hotel Fundo Achamaqui! Tu refugio en la Ceja de Selva Peruana.",
    description: "Texto del cupón de descuento de reservas (Español)",
  },
  {
    key: "es_coupon_code",
    value: "Cupón de descuento: escapechacha20",
    description: "Código de cupón de descuento visible (Español)",
  },
  {
    key: "es_about_subtitle",
    value: "Naturaleza y comodidad",
    description: "Subtítulo de la sección 'Acerca de' en Inicio (Español)",
  },
  {
    key: "es_about_title",
    value: "Naturaleza y comodidad se unen en Fundo Achamaqui.",
    description: "Título de la sección 'Acerca de' en Inicio (Español)",
  },
  {
    key: "es_about_paragraph",
    value: "Enclavado en la belleza natural de la provincia de Chachapoyas, Fundo Achamaqui te ofrece una experiencia única de relajación y aventura. Descubre la magia de la región Amazonas en nuestro acogedor hotel.",
    description: "Párrafo de la sección 'Acerca de' en Inicio (Español)",
  },

  // Homepage English Content
  {
    key: "en_hero_welcome",
    value: "Welcome to",
    description: "Texto de bienvenida arriba del título principal (Inglés)",
  },
  {
    key: "en_hero_title",
    value: "Fundo Achamaqui",
    description: "Título del banner principal de inicio (Inglés)",
  },
  {
    key: "en_hero_subtitle",
    value: "The refuge of your next adventure in Chachapoyas",
    description: "Subtítulo del banner principal de inicio (Inglés)",
  },
  {
    key: "en_coupon_text",
    value: "Immerse yourself in the beauty of Chachapoyas with a 20% discount at Hotel Fundo Achamaqui! Your refuge in the Peruvian high jungle.",
    description: "Texto del cupón de descuento de reservas (Inglés)",
  },
  {
    key: "en_coupon_code",
    value: "Discount Code: escapechacha20",
    description: "Código de cupón de descuento visible (Inglés)",
  },
  {
    key: "en_about_subtitle",
    value: "Nature & Comfort",
    description: "Subtítulo de la sección 'Acerca de' en Inicio (Inglés)",
  },
  {
    key: "en_about_title",
    value: "Nature and comfort unite at Fundo Achamaqui.",
    description: "Título de la sección 'Acerca de' en Inicio (Inglés)",
  },
  {
    key: "en_about_paragraph",
    value: "Nestled in the natural beauty of the Chachapoyas province, Fundo Achamaqui offers you a unique experience of relaxation and adventure. Discover the magic of the Amazonas region in our cozy hotel.",
    description: "Párrafo de la sección 'Acerca de' en Inicio (Inglés)",
  },
];
