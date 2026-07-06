import type { Metadata } from "next";
import "./globals.css";
import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/fundoachamaqui.webflow.css";
import "./animations.css";
import Script from "next/script";
import { LanguageProvider } from "@/lib/LanguageContext";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getCmsSettingsKeys } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Hotel Fundo Achamaqui | Chachapoyas - Refugio en la Ceja de Selva",
  description: "Sumérgete en la belleza de Chachapoyas en Fundo Achamaqui, donde la serenidad se encuentra con la aventura. Descubre nuestro refugio de lujo junto al río Utcubamba, disfruta de experiencias culturales y relájate en medio de la naturaleza exuberante.",
  keywords: [
    "hotel chachapoyas",
    "fundo achamaqui",
    "alojamiento chachapoyas",
    "gocta",
    "kuelap",
    "turismo amazonas",
    "hotel de lujo peru",
    "utcubamba",
    "chachapoyas hotel",
  ],
  authors: [{ name: "Fundo Achamaqui" }],
  creator: "Fundo Achamaqui",
  publisher: "Fundo Achamaqui",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://fundoachamaqui.com",
    title: "Hotel Fundo Achamaqui | Chachapoyas - Refugio en la Ceja de Selva",
    description: "Refugio de lujo junto al río Utcubamba. Disfruta de la naturaleza exuberante, confort premium y experiencias culturales únicas en Chachapoyas.",
    siteName: "Fundo Achamaqui",
    images: [
      {
        url: "https://fundoachamaqui.com/images/logo-titulo-negro2x.png",
        width: 1200,
        height: 630,
        alt: "Hotel Fundo Achamaqui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Fundo Achamaqui | Chachapoyas - Refugio en la Ceja de Selva",
    description: "Refugio de lujo junto al río Utcubamba en Chachapoyas.",
    images: ["https://fundoachamaqui.com/images/logo-titulo-negro2x.png"],
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch tracking tags directly from DB
  const tags = await getCmsSettingsKeys([
    "google_analytics_id",
    "google_tag_manager_id",
    "google_ads_id",
    "facebook_pixel_id",
  ]);

  const gaId = tags["google_analytics_id"] && tags["google_analytics_id"] !== "G-XXXXXXXXXX" ? tags["google_analytics_id"] : null;
  const gtmId = tags["google_tag_manager_id"] && tags["google_tag_manager_id"] !== "GTM-XXXXXXX" ? tags["google_tag_manager_id"] : null;
  const adsId = tags["google_ads_id"] && tags["google_ads_id"] !== "AW-XXXXXXXXX" ? tags["google_ads_id"] : null;
  const fbId = tags["facebook_pixel_id"] && tags["facebook_pixel_id"] !== "" ? tags["facebook_pixel_id"] : null;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode Default Settings */}
        {(gaId || gtmId || adsId) && (
          <Script id="google-consent-defaults" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            `}
          </Script>
        )}

        {/* Google Tag Manager Container Script (GTM) */}
        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}

        {/* Meta Pixel Code */}
        {fbId && (
          <Script id="meta-pixel-script" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${fbId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Google Analytics (gtag.js) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
                gtag('js', new Date());
                gtag('config', '${gaId}');
                ${adsId ? `gtag('config', '${adsId}');` : ""}
              `}
            </Script>
          </>
        )}

        {/* Fallback load of Google Ads alone if GA is not set up */}
        {!gaId && adsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
              strategy="afterInteractive"
            />
            <Script id="ads-init-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
                gtag('js', new Date());
                gtag('config', '${adsId}');
              `}
            </Script>
          </>
        )}

        <Script id="webfont-loader" strategy="beforeInteractive">
          {`
            var WebFontConfig = {
              google: {
                families: ["Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","Gilda Display:300,400,500,600,700","Lexend:300,400,500,600,700"]
              }
            };
            (function(d) {
              var wf = d.createElement('script'), s = d.scripts[0];
              wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
              wf.async = true;
              s.parentNode.insertBefore(wf, s);
            })(document);
          `}
        </Script>
        <Script id="wf-mod-js" strategy="beforeInteractive">
          {`
            !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
          `}
        </Script>
      </head>
      <body className="body">
        {/* Loadscreen */}
        <Script id="loadscreen-script" strategy="beforeInteractive">
          {`(function(){var d=document,b=document.body;b.style.overflow='hidden';b.style.background='#faf7f2';var o=d.createElement('div');o.id='loadscreen';o.style.cssText='position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#faf7f2;';o.innerHTML='<img src="/images/logo-titulo-negro2x.png" width="260" height="38" style="height:38px;width:260px;object-fit:contain;animation:lp 1.5s ease-in-out infinite;">';var s=d.createElement('style');s.textContent='@keyframes lp{0%,100%{opacity:.7;transform:scale(.97);filter:drop-shadow(0 2px 8px rgba(140,115,85,.15))}50%{opacity:1;transform:scale(1);filter:drop-shadow(0 6px 20px rgba(140,115,85,.35))}}';d.head.appendChild(s);b.appendChild(o);setTimeout(function(){o.style.transition='clip-path 0.8s cubic-bezier(0.4,0,0.2,1)';o.style.clipPath='circle(0% at 50% 50%)';setTimeout(function(){o.remove();s.remove();b.style.overflow='';b.style.background='';},850);},1800);})();`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* Meta Pixel (noscript) */}
        {fbId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${fbId}&ev=PageView&noscript=1`}
              alt="Meta Pixel"
            />
          </noscript>
        )}

        <LanguageProvider>
          <RevealOnScroll />
          {children}
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
