"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function BookingWidget() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous contents (especially if language changed or on re-mount)
    container.innerHTML = "";

    // Create the script element
    const script = document.createElement("script");
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute("data-form-id", "a10e4ddb7d5915cb");
    script.setAttribute("data-lang", language);

    // Append script to container
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [language]);

  return (
    <div 
      ref={containerRef} 
      className="html-embed w-embed w-script"
      style={{ minHeight: "200px", width: "100%" }}
    />
  );
}
