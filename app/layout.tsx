import type { Metadata } from "next";
import "./globals.css";
import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/fundoachamaqui.webflow.css";
import Script from "next/script";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Hotel Fundo Achamaqui | Chachapoyas - Refugio en la Ceja de Selva",
  description: "Sumérgete en la belleza de Chachapoyas en Fundo Achamaqui, donde la serenidad se encuentra con la aventura. Descubre nuestro refugio de lujo junto al río Utcubamba, disfruta de experiencias culturales y relájate en medio de la naturaleza exuberante.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

