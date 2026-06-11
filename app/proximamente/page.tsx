import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="coming-soon-page-wrap">
      <div className="coming-soon-wrapper">
        <img 
          className="logo-header" 
          src="/images/logo-titulo-negro2x.png" 
          height="30" 
          alt="Logo" 
          style={{ opacity: 1 }} 
          loading="lazy" 
        />
        <h1 className="coming-soon-heading" style={{ opacity: 1 }}>¡Algo grandioso está por venir!</h1>
        <p className="coming-soon-paragraph" style={{ opacity: 1 }}>Puedes suscribirte para ser el primero en enterarte</p>
        <div className="coming-soon-form-main w-form" style={{ opacity: 1 }}>
          <form id="email-form" name="email-form" className="coming-soon-form">
            <input 
              className="coming-soon-input w-input" 
              maxLength={256} 
              name="email" 
              placeholder="Email" 
              type="email" 
              id="email" 
              required 
            />
            <input 
              type="submit" 
              className="primary-button full-width-mobile w-button" 
              value="Suscribirte" 
            />
          </form>
        </div>
      </div>
      <img 
        className="coming-soon-image" 
        src="/images/dji_fly_20230823_092730_87_1692800992341_pano_optimized-EDIT-1.jpg" 
        alt="Coming Soon" 
        style={{ opacity: 1 }} 
        loading="lazy" 
      />
    </div>
  );
}
