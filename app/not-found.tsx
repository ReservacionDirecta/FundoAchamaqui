import Link from "next/link";

export default function NotFound() {
  return (
    <div className="utility-page-wrap">
      <div className="_404-logo-wrapper">
        <Link href="/" className="brand w-nav-brand">
          <img src="/images/logo-titulo-negro2x.png" loading="lazy" alt="Logo" height="30" className="logo-header" />
        </Link>
      </div>
      <h1 className="_404-headong" style={{ opacity: 1 }}>404</h1>
      <div className="_404-content-wrapper" style={{ opacity: 1 }}>
        <h2 className="text-center">Vaya, parece que te has perdido.</h2>
        <p className="_404-paragraph">No pudimos encontrar la página que estás buscando.</p>
        <Link href="/" className="primary-button">Volver al inicio</Link>
      </div>
    </div>
  );
}
