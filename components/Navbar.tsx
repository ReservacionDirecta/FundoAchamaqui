import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" className="navbar-2 w-nav">
      <div className="nav-base-container w-container">
        <div className="nav-menu-wrapper">
          <Link href="/" className="logo-link hidden-desktop w-nav-brand">
            <img 
              src="/images/logo-titulo-negro2x.png" 
              loading="lazy" 
              height="30" 
              alt="Logo" 
              className="logo-header"
            />
          </Link>
          <nav role="navigation" className="nav-menu-2 desktop-menu-full-width w-nav-menu">
            <div className="tablet-menu">
              <Link href="/" className="hidden-desktop w-nav-brand">
                <img src="/images/logo-titulo-negro2x.png" loading="lazy" height="30" alt="Logo" className="logo-header" />
              </Link>
              <div className="nav-close-button w-nav-button">
                <img src="/images/x_icon_1x_icon.webp" loading="lazy" alt="" className="nav-close-button-icon" />
              </div>
            </div>
            <div className="menu-wrapper two-side-blocks">
              <div className="left-side-block">
                <Link href="/" className="nav-link w-nav-link">Inicio</Link>
                <Link href="/alojamiento" className="nav-link w-nav-link">Alojamiento</Link>
                <Link href="/rooms" className="nav-link w-nav-link">Habitaciones</Link>
              </div>
              <Link href="/" className="logo-link hiddent-tablet-mobile w-nav-brand">
                <img src="/images/logo-titulo-negro2x.png" loading="lazy" height="30" alt="Logo" className="logo-header" />
              </Link>
              <div className="right-side-block">
                <Link href="/actividades" className="nav-link w-nav-link">Actividades</Link>
                <Link href="/galeria" className="nav-link w-nav-link">Galería</Link>
                <Link href="/contacto" className="nav-link w-nav-link">Contacto</Link>
                <Link href="/reservar" className="nav-link black w-nav-link">Reservar</Link>
              </div>
            </div>
          </nav>
          <div className="div-block-42">
            {/* Cart component would go here if needed */}
          </div>
          <div className="menu-button-2 w-nav-button">
            <img src="/images/Burger-button_1Burger-button.webp" loading="lazy" alt="" height="16" className="image-burger-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
