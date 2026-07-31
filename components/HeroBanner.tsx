interface HeroBannerProps {
  title: string;
  subtitle?: string;
  paragraph?: string;
  className: string;
}

export default function HeroBanner({ title, subtitle, paragraph, className }: HeroBannerProps) {
  return (
    <section className={`section hero-section ${className}`}>
      <div className="hero-overlay" />
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="banner-title-wrapper">
          {subtitle && (
            <span className="hero-subtitle">{subtitle}</span>
          )}
          <h1 className="hero-title">{title}</h1>
          {paragraph && (
            <p className="hero-paragraph">{paragraph}</p>
          )}
        </div>
      </div>
    </section>
  );
}
