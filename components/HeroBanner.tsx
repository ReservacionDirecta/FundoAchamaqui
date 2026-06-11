interface HeroBannerProps {
  title: string;
  subtitle?: string;
  paragraph?: string;
  className: string; // To handle different backgrounds from Webflow CSS
}

export default function HeroBanner({ title, subtitle, paragraph, className }: HeroBannerProps) {
  return (
    <section className={`section ${className}`}>
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="banner-title-wrapper">
          {subtitle && (
            <h6 className="white-text small-text">{subtitle}</h6>
          )}
          <h1 className="details-page-title">{title}</h1>
          {paragraph && (
            <p className="white-paragraph">{paragraph}</p>
          )}
        </div>
      </div>
    </section>
  );
}
