"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({
  items,
  defaultOpen = null,
  className = "",
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={`accordion-wrap${className ? ` ${className}` : ""}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`accordion-item w-dropdown${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="accordion-toggle w-dropdown-toggle"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="accordion-title">
                <strong>{item.q}</strong>
              </span>
              <span className="accordion-icon" aria-hidden="true">
                
              </span>
            </button>
            <div className="accordion-list w-dropdown-list">
              <p className="accordion-list-content">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
