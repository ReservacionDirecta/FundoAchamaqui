"use client";

import { useEffect, useState } from "react";
import { ATTRACTIONS, MUSEUM_HALLS, MORE_ATTRACTIONS } from "@/lib/attractions";

export default function MuseumTour() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = ATTRACTIONS.find((a) => a.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section className="section museum" aria-label="Museo vivo de Chachapoyas">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap reveal">
          <div className="div-block-8 div-block-9 left-subtitle">
            <h6 className="heading-2">Museo vivo<br /></h6>
          </div>
          <div className="right-title">
            <h2 className="museum-title">Siete salas, un territorio</h2>
            <p className="museum-intro">
              Recorre los destinos que hacen legendaria a Chachapoyas como quien
              recorre un museo: sala por sala, historia por historia.
            </p>
          </div>
        </div>

        <nav className="museum-index reveal" aria-label="Índice de salas">
          {MUSEUM_HALLS.map((hall, i) => (
            <a key={hall.id} href={`#sala-${hall.id}`} className="museum-index-link">
              <span className="museum-index-num">{String(i + 1).padStart(2, "0")}</span>
              {hall.title}
            </a>
          ))}
        </nav>

        <div className="museum-halls">
          {MUSEUM_HALLS.map((hall, i) => (
            <article
              key={hall.id}
              id={`sala-${hall.id}`}
              className={`museum-hall${i % 2 === 1 ? " flip" : ""}`}
            >
              <div className="museum-media reveal-scale">
                <div className="museum-frame">
                  <img
                    src={hall.museumImage}
                    alt={hall.title}
                    loading="lazy"
                    data-parallax="0.12"
                  />
                </div>
                <div className="museum-plaque" aria-hidden="true">
                  Sala {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="museum-placard reveal">
                <div data-parallax="0.03">
                  <p className="museum-kicker">{hall.subtitle}</p>
                  <h3 className="museum-name">{hall.title}</h3>
                  <p className="museum-excerpt">{hall.excerpt}</p>
                  <ul className="museum-facts">
                    {hall.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="museum-btn"
                    onClick={() => setActiveId(hall.id)}
                  >
                    Leer la ficha
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {MORE_ATTRACTIONS.length > 0 && (
          <div className="museum-more">
            <h3 className="museum-more-title reveal">Seguir explorando</h3>
            <div className="museum-more-grid">
              {MORE_ATTRACTIONS.map((attr, i) => (
                <div
                  key={attr.id}
                  className={`attraction-card museum-more-card reveal-scale reveal-delay-${(i % 3) + 1}`}
                >
                  <div className="attraction-card-media">
                    <img src={attr.image} alt={attr.title} loading="lazy" />
                  </div>
                  <div className="attraction-card-body">
                    <h4 className="attraction-card-title">{attr.title}</h4>
                    <p className="attraction-card-subtitle">{attr.subtitle}</p>
                    <p className="attraction-card-excerpt">{attr.excerpt}</p>
                    <button
                      type="button"
                      onClick={() => setActiveId(attr.id)}
                      className="attraction-card-btn"
                    >
                      Leer más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {active && (
        <div
          className="museum-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Ficha de ${active.title}`}
          onClick={() => setActiveId(null)}
        >
          <div
            className="museum-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="museum-modal-hero">
              <img
                src={active.museumImage ?? active.image}
                alt={active.title}
              />
              <button
                type="button"
                autoFocus
                onClick={() => setActiveId(null)}
                className="museum-modal-close"
                aria-label="Cerrar ficha"
              >
                ✕
              </button>
              <div className="museum-modal-caption">
                <p className="museum-kicker">{active.subtitle}</p>
                <h3 className="museum-modal-title">{active.title}</h3>
              </div>
            </div>
            <div
              className="museum-modal-body"
              dangerouslySetInnerHTML={{ __html: active.content }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
