"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface BookingWidgetProps {
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: string;
  onSearchDirect?: (url: string) => void;
  isEmbeddedTarget?: boolean;
}

export default function BookingWidget({
  initialCheckIn,
  initialCheckOut,
  initialAdults = "2",
  onSearchDirect,
  isEmbeddedTarget = false,
}: BookingWidgetProps) {
  const { language } = useLanguage();
  const isEn = language === "en";

  // Helpers for date calculations in local timezone YYYY-MM-DD
  const formatYMD = (d: Date): string => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const parseYMD = (str: string): Date => {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const addDays = (d: Date, days: number): Date => {
    const res = new Date(d);
    res.setDate(res.getDate() + days);
    return res;
  };

  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const todayStr = useMemo(() => formatYMD(today), [today]);
  const tomorrowStr = useMemo(() => formatYMD(addDays(today, 1)), [today]);

  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || todayStr);
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || tomorrowStr);
  const [adults, setAdults] = useState<string>(initialAdults);

  // Range Picker Popover State
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState<Date>(() => {
    const initial = initialCheckIn ? parseYMD(initialCheckIn) : today;
    return new Date(initial.getFullYear(), initial.getMonth(), 1);
  });
  const [hoverDate, setHoverDate] = useState<string | null>(null);
  const [selectingStep, setSelectingStep] = useState<"checkin" | "checkout">("checkin");

  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Close calendar popover on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Calculate nights
  const nightsCount = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const diff = (parseYMD(checkOut).getTime() - parseYMD(checkIn).getTime()) / (1000 * 60 * 60 * 24);
    return Math.max(1, Math.round(diff));
  }, [checkIn, checkOut]);

  // Display date formatter (e.g. "Lun, 15 Nov" or "Mon, Nov 15")
  const formatDisplay = (ymdStr: string) => {
    if (!ymdStr) return "";
    const d = parseYMD(ymdStr);
    const locale = isEn ? "en-US" : "es-PE";
    const weekday = d.toLocaleDateString(locale, { weekday: "short" });
    const day = d.getDate();
    const month = d.toLocaleDateString(locale, { month: "short" });
    const capitalizedWk = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    const capitalizedMo = month.charAt(0).toUpperCase() + month.slice(1);
    return `${capitalizedWk}, ${day} ${capitalizedMo}`;
  };

  const handleDayClick = (ymd: string) => {
    if (ymd < todayStr) return; // Disabled

    if (selectingStep === "checkin") {
      setCheckIn(ymd);
      // Auto default checkout to next day or keep if later
      if (checkOut <= ymd) {
        setCheckOut(formatYMD(addDays(parseYMD(ymd), 1)));
      }
      setSelectingStep("checkout");
    } else {
      // checkout step
      if (ymd <= checkIn) {
        // User clicked before or on check-in, treat this as new check-in
        setCheckIn(ymd);
        setCheckOut(formatYMD(addDays(parseYMD(ymd), 1)));
        setSelectingStep("checkout");
      } else {
        setCheckOut(ymd);
        setSelectingStep("checkin");
        setIsOpen(false); // Finished selection
      }
    }
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    const baseUrl = "https://secured.hothelia.com/book/645d7798-3e8b-4111-8946-96dac1a6f905";
    const params = new URLSearchParams({
      embed: "1",
      checkIn: checkIn,
      checkin: checkIn,
      checkOut: checkOut,
      checkout: checkOut,
      adults: adults,
      numAdults: adults,
      nights: String(nightsCount),
    });

    const targetUrl = `${baseUrl}?${params.toString()}`;

    if (onSearchDirect) {
      onSearchDirect(targetUrl);
      return;
    }

    if (isEmbeddedTarget) {
      // If we're on the /reservar page with an iframe, notify or redirect
      const iframe = document.querySelector<HTMLIFrameElement>(".reservar-widget-wrap iframe");
      if (iframe) {
        iframe.src = targetUrl;
        iframe.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Modal behavior for home / header
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-hothelia-modal", {
          detail: { url: targetUrl },
        })
      );

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

  // Month navigation
  const prevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Build calendar month grid
  const renderMonth = (monthDate: Date) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0
    const totalDays = new Date(year, month + 1, 0).getDate();

    const monthName = monthDate.toLocaleDateString(isEn ? "en-US" : "es-PE", {
      month: "long",
      year: "numeric",
    });
    const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    const days = [];
    // Blank days
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="cal-cell empty" />);
    }

    // Month days
    for (let d = 1; d <= totalDays; d++) {
      const dayDate = new Date(year, month, d);
      const ymd = formatYMD(dayDate);
      const isPast = ymd < todayStr;
      const isStart = ymd === checkIn;
      const isEnd = ymd === checkOut;

      // Range check
      let inRange = false;
      if (checkIn && checkOut && ymd > checkIn && ymd < checkOut) {
        inRange = true;
      }
      if (selectingStep === "checkout" && hoverDate && checkIn && !inRange) {
        if (ymd > checkIn && ymd <= hoverDate) {
          inRange = true;
        }
      }

      let cellClass = "cal-cell day";
      if (isPast) cellClass += " disabled";
      if (isStart) cellClass += " range-start";
      if (isEnd) cellClass += " range-end";
      if (inRange) cellClass += " in-range";
      if (ymd === todayStr) cellClass += " is-today";

      days.push(
        <button
          type="button"
          key={ymd}
          disabled={isPast}
          onClick={() => handleDayClick(ymd)}
          onMouseEnter={() => {
            if (selectingStep === "checkout" && ymd > checkIn) {
              setHoverDate(ymd);
            }
          }}
          className={cellClass}
          aria-label={ymd}
        >
          <span className="day-number">{d}</span>
        </button>
      );
    }

    return (
      <div className="cal-month">
        <div className="cal-month-title">{capitalizedMonth}</div>
        <div className="cal-weekdays">
          {(isEn ? ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] : ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"]).map(
            (w, i) => (
              <span key={i} className="cal-weekday">
                {w}
              </span>
            )
          )}
        </div>
        <div className="cal-days-grid">{days}</div>
      </div>
    );
  };

  const nextMonthDate = useMemo(() => {
    return new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
  }, [viewDate]);

  return (
    <div className="compact-booking-bar-wrapper">
      <div className="compact-booking-bar">
        {/* Date Range Trigger (Check-In & Check-Out merged into seamless Range Picker) */}
        <div
          ref={triggerRef}
          className={`compact-field range-picker-trigger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          <div className="range-subfield">
            <span className="compact-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{isEn ? "Check-In" : "Llegada"}</span>
            </span>
            <span className="range-date-val">{formatDisplay(checkIn)}</span>
          </div>

          <div className="range-arrow-indicator">
            <span className="nights-pill">
              {nightsCount} {nightsCount === 1 ? (isEn ? "night" : "noche") : isEn ? "nights" : "noches"}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          <div className="range-subfield">
            <span className="compact-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{isEn ? "Check-Out" : "Salida"}</span>
            </span>
            <span className="range-date-val">{formatDisplay(checkOut)}</span>
          </div>
        </div>

        <div className="compact-divider" />

        {/* Guests selector */}
        <div className="compact-field guests-field">
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
      </div>

      {/* Floating Date Range Popover */}
      {isOpen && (
        <div ref={popoverRef} className="range-popover-card">
          <div className="popover-header">
            <div className="popover-status">
              <span className={`step-badge ${selectingStep === "checkin" ? "active" : ""}`}>
                1. {isEn ? "Select Check-in" : "Selecciona Llegada"}
              </span>
              <span className="step-sep">→</span>
              <span className={`step-badge ${selectingStep === "checkout" ? "active" : ""}`}>
                2. {isEn ? "Select Check-out" : "Selecciona Salida"}
              </span>
            </div>
            <div className="popover-nav">
              <button
                type="button"
                onClick={prevMonth}
                className="cal-nav-btn"
                aria-label="Previous Month"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextMonth}
                className="cal-nav-btn"
                aria-label="Next Month"
              >
                ›
              </button>
            </div>
          </div>

          <div className="popover-months-container">
            {renderMonth(viewDate)}
            <div className="popover-months-sep" />
            {renderMonth(nextMonthDate)}
          </div>

          <div className="popover-footer">
            <div className="selection-summary">
              <strong>{nightsCount}</strong> {nightsCount === 1 ? (isEn ? "night" : "noche") : isEn ? "nights" : "noches"} ({checkIn} — {checkOut})
            </div>
            <div className="popover-actions">
              <button
                type="button"
                className="popover-cancel-btn"
                onClick={() => setIsOpen(false)}
              >
                {isEn ? "Cancel" : "Cancelar"}
              </button>
              <button
                type="button"
                className="popover-apply-btn"
                onClick={() => setIsOpen(false)}
              >
                {isEn ? "Apply Dates" : "Aplicar Fechas"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
