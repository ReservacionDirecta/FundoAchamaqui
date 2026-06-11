import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="base-container center w-container">
        <div className="logo-footer-wrapper">
          <Link href="/" className="footer-logo-link w-inline-block">
            <img src="/images/logo-titulo-blanco2x.png" loading="lazy" alt="Logo Footer" className="logo-footer" />
          </Link>
        </div>
        <div className="footer-wrapper">
          <div className="footer-brand-wrapper">
            <h6 className="subtitle-footer">Ubicación</h6>
            <div className="info-footer">
              <a href="https://www.google.com/maps/place/Km.+39+Carretera+Pedro+Ruiz,+Chachapoyas" target="_blank" className="footer-links">Km. 39 Carretera Pedro Ruiz, Chachapoyas</a>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <h6 className="subtitle-footer">RESERVACIONES</h6>
            <div className="info-footer">
              <a href="tel:+51982836547" className="footer-links">+51 982 836 547</a>
              <a href="mailto:info@fundoachamaqui.com" className="footer-links">info@fundoachamaqui.com</a>
            </div>
          </div>
          <div className="footer-links-wrapper last-footer-links">
            <h6 className="subtitle-footer">Siguenos</h6>
            <div className="footer-social-icons-wrapper">
              <a href="https://www.facebook.com/" target="_blank" className="footer-social-icon"></a>
              <a href="https://www.instagram.com/" target="_blank" className="footer-social-icon"></a>
              <a href="https://twitter.com/" target="_blank" className="footer-social-icon last-child"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright">© Fundo Achamaqui SAC. Todos Los Derechos Reservados 2023.</div>
          <div className="footer-rights">by <a href="https://www.reservaciondirecta.com" target="_blank" className="footer-copyright-link">Reservación Directa</a></div>
          <div className="footer-rights">Powered by <a href="https://webflow.com/" target="_blank" className="footer-copyright-link">Webflow</a></div>
        </div>
      </div>
    </div>
  );
}
