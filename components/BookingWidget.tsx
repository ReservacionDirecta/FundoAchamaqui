"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function BookingWidget() {
  const { language } = useLanguage();

  // Helper to format Date to YYYY-MM-DD
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getTomorrow = (baseDate: Date) => {
    const next = new Date(baseDate);
    next.setDate(next.getDate() + 1);
    return next;
  };

  const todayStr = formatDate(new Date());
  const tomorrowStr = formatDate(getTomorrow(new Date()));

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [adults, setAdults] = useState("2");

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIn = e.target.value;
    setCheckIn(newIn);
    if (newIn >= checkOut) {
      const inDate = new Date(newIn + "T00:00:00");
      setCheckOut(formatDate(getTomorrow(inDate)));
    }
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    const targetUrl = `https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905?embed=1&checkIn=${encodeURIComponent(
      checkIn
    )}&checkOut=${encodeURIComponent(checkOut)}&adults=${encodeURIComponent(adults)}`;

    // Dispatch custom event to notify HotheliaBookingModal with dynamic dates
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-hothelia-modal", {
          detail: { url: targetUrl },
        })
      );

      // Fallback: trigger click on floating button
      const trigger = document.getElementById("hb-book-trigger");
      const modal = document.getElementById("hb-book-modal");
      if (modal && modal.style.display !== "flex") {
        if (trigger) {
          trigger.click();
        } else {
          modal.style.display = "flex";
          document.body.style.overflow = "hidden";
        }
      }
    }
  };

  const isEn = language === "en";

  return (
    <div className="compact-booking-bar-wrapper">
      <form className="compact-booking-bar" onSubmit={(e) => { e.preventDefault(); }}>
        {/* Check-In */}
        <div className="compact-field">
          <label htmlFor="hb-checkin" className="compact-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{isEn ? "Check-In" : "Llegada"}</span>
          </label>
          <input
            id="hb-checkin"
            type="date"
            value={checkIn}
            min={todayStr}
            onChange={handleCheckInChange}
            className="compact-input"
            required
          />
        </div>

        <div className="compact-divider" />

        {/* Check-Out */}
        <div className="compact-field">
          <label htmlFor="hb-checkout" className="compact-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{isEn ? "Check-Out" : "Salida"}</span>
          </label>
          <input
            id="hb-checkout"
            type="date"
            value={checkOut}
            min={checkIn || todayStr}
            onChange={(e) => setCheckOut(e.target.value)}
            className="compact-input"
            required
          />
        </div>

        <div className="compact-divider" />

        {/* Guests */}
        <div className="compact-field">
          <label htmlFor="hb-guests" className="compact-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>{isEn ? "Guests" : "Huéspedes"}</span>
          </label>
          <select
            id="hb-guests"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="compact-select"
          >
            <option value="1">{isEn ? "1 Guest" : "1 Huésped"}</option>
            <option value="2">{isEn ? "2 Guests" : "2 Huéspedes"}</option>
            <option value="3">{isEn ? "3 Guests" : "3 Huéspedes"}</option>
            <option value="4">{isEn ? "4 Guests" : "4 Huéspedes"}</option>
            <option value="5">{isEn ? "5+ Guests" : "5+ Huéspedes"}</option>
          </select>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleSearch}
          className="compact-submit-btn"
          id="compact-bar-submit"
          title={isEn ? "Check Availability" : "Verificar Disponibilidad"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>{isEn ? "Check Availability" : "Verificar Disponibilidad"}</span>
        </button>
      </form>

      <style jsx>{`
        .compact-booking-bar-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 14px;
        }

        .compact-booking-bar {
          display: flex;
          align-items: center;
          background: #ffffff;
          padding: 8px 12px;
          border-radius: 9999px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(16, 185, 129, 0.35);
          width: 100%;
          max-width: 920px;
          gap: 6px;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .compact-booking-bar:hover {
          box-shadow: 0 14px 35px rgba(16, 185, 129, 0.2), 0 4px 12px rgba(0, 0, 0, 0.06);
          border-color: #10b981;
        }

        .compact-field {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 4px 14px;
          min-width: 0;
          text-align: left;
        }

        .compact-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #64748b;
          margin-bottom: 2px;
          font-family: var(--font-lexend, sans-serif);
        }

        .compact-label svg {
          color: #10b981;
        }

        .compact-input,
        .compact-select {
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          font-family: var(--font-lexend, sans-serif);
          padding: 4px 0;
          width: 100%;
          cursor: pointer;
        }

        .compact-select {
          appearance: auto;
        }

        .compact-divider {
          width: 1px;
          height: 38px;
          background-color: #e2e8f0;
          flex-shrink: 0;
        }

        .compact-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #10b981;
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          padding: 14px 26px;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font-lexend, sans-serif);
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          flex-shrink: 0;
        }

        .compact-submit-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);
        }

        .compact-submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 820px) {
          .compact-booking-bar {
            flex-direction: column;
            border-radius: 16px;
            padding: 16px;
            gap: 12px;
          }

          .compact-divider {
            display: none;
          }

          .compact-field {
            width: 100%;
            padding: 6px 8px;
            border-bottom: 1px solid #f1f5f9;
          }

          .compact-submit-btn {
            width: 100%;
            padding: 14px;
            border-radius: 12px;
            margin-top: 4px;
          }
        }
      `}</style>
    </div>
  );
}
