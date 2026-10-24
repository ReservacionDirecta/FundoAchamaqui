export default function Loading() {
  return (
    <div className="route-loading" aria-busy="true" aria-label="Cargando contenido">
      <div className="route-loading-hero" />
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="route-loading-bar route-loading-title" />
        <div className="route-loading-bar" />
        <div className="route-loading-bar route-loading-short" />
        <div className="route-loading-grid">
          <div className="route-loading-card" />
          <div className="route-loading-card" />
          <div className="route-loading-card" />
        </div>
      </div>
      <style>{`
        .route-loading {
          background-color: #fcf8f4;
          min-height: 80vh;
          padding-bottom: 60px;
        }
        .route-loading-hero {
          height: 320px;
          background-color: #e7ddcc;
          margin-bottom: 48px;
        }
        .route-loading-bar {
          height: 16px;
          border-radius: 4px;
          background-color: #e9e0d2;
          margin-bottom: 14px;
          animation: route-loading-shimmer 1.6s ease-in-out infinite;
        }
        .route-loading-title {
          height: 34px;
          width: 42%;
          margin-bottom: 22px;
        }
        .route-loading-short {
          width: 65%;
          margin-bottom: 40px;
        }
        .route-loading-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .route-loading-card {
          height: 220px;
          border-radius: 8px;
          background-color: #e9e0d2;
          animation: route-loading-shimmer 1.6s ease-in-out infinite;
        }
        @media (max-width: 767px) {
          .route-loading-hero {
            height: 200px;
          }
          .route-loading-grid {
            grid-template-columns: 1fr;
          }
        }
        @keyframes route-loading-shimmer {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .route-loading-bar,
          .route-loading-card {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
