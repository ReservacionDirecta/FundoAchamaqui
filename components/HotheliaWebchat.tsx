"use client";

import React, { useEffect } from "react";

/**
 * HotheliaWebchat loads the official Hothelia AI Webchat Widget.
 * Tenant: Fundo Achamaqui (645d7798-3e8b-4111-8946-96dac1a6f905)
 * Position: bottom-right
 * 
 * Strategy:
 * - On desktop: Standard bottom-right launcher that opens into a floating concierge card.
 * - On mobile (<= 768px): To avoid overcrowding the viewport, blocking form inputs,
 *   and triggering accidental taps (missclicks):
 *   1. The redundant left floating "Reservar Ahora" pill is removed on mobile (already accessible
 *      via the Hero booking bar, room buttons, and the top navbar button).
 *   2. The webchat iframe remains strictly collapsed to a sleek 64x64px launcher circle at the
 *      bottom-right corner. It ONLY expands to fullscreen when the guest consciously taps the bubble.
 *   3. Secondary WhatsApp option is comfortably separated right above it, providing effortless
 *      one-tap access without overlap.
 */
export default function HotheliaWebchat() {
  useEffect(() => {
    // Avoid duplicate initialization
    if (typeof window === "undefined" || (window as unknown as { __hothelia_loaded?: boolean }).__hothelia_loaded) {
      return;
    }
    (window as unknown as { __hothelia_loaded?: boolean }).__hothelia_loaded = true;

    const TENANT_ID = "645d7798-3e8b-4111-8946-96dac1a6f905";
    const FRONTEND_URL = "https://secured.hothelia.com";
    const BACKEND_URL = "https://hothelia-master-backend-multi-tenant-production.up.railway.app";
    const POSITION = "bottom-right";
    const WIDGET_CONFIG = {};
    const WIDGET_URL = `${FRONTEND_URL}/widget?tenantId=${TENANT_ID}&position=${POSITION}&backendUrl=${encodeURIComponent(
      BACKEND_URL
    )}&config=${encodeURIComponent(JSON.stringify(WIDGET_CONFIG))}&origin=${encodeURIComponent(
      window.location.origin
    )}`;

    const isBottom = POSITION.indexOf("bottom") !== -1;
    const isRight = POSITION.indexOf("right") !== -1;

    // Inject iframe responsive styles
    const style = document.createElement("style");
    style.id = "hothelia-webchat-styles";
    style.textContent = [
      "#hothelia-webchat-iframe {",
      "  border: none;",
      "  position: fixed;",
      "  z-index: 2147483647;",
      "  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);",
      "  pointer-events: auto;",
      "  background: transparent;",
      "  overflow: visible;",
      "}",
      "#hothelia-webchat-iframe.hothelia-hidden {",
      "  display: none !important;",
      "  pointer-events: none !important;",
      "}",
      "#hothelia-webchat-iframe.hothelia-collapsed {",
      "  width: 90px;",
      "  height: 90px;",
      "  pointer-events: auto;",
      isBottom ? "  bottom: 12px;" : "  top: 12px;",
      isRight ? "  right: 12px;" : "  left: 12px;",
      "}",
      "#hothelia-webchat-iframe.hothelia-expanded {",
      "  width: 410px;",
      "  height: 640px;",
      "  pointer-events: auto;",
      isBottom ? "  bottom: 16px;" : "  top: 16px;",
      isRight ? "  right: 16px;" : "  left: 16px;",
      "  border-radius: 20px;",
      "  box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);",
      "}",
      "@media (max-width: 768px) {",
      "  #hothelia-webchat-iframe.hothelia-collapsed {",
      "    width: 68px !important;",
      "    height: 68px !important;",
      "    bottom: 16px !important;",
      "    right: 16px !important;",
      "    pointer-events: auto !important;",
      "  }",
      "  #hothelia-webchat-iframe.hothelia-expanded {",
      "    width: 100vw !important;",
      "    height: 100vh !important;",
      "    height: 100dvh !important;",
      "    top: 0 !important;",
      "    left: 0 !important;",
      "    bottom: 0 !important;",
      "    right: 0 !important;",
      "    border-radius: 0 !important;",
      "    box-shadow: none !important;",
      "    pointer-events: auto !important;",
      "  }",
      "}",
    ].join("\n");
    document.head.appendChild(style);

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.src = WIDGET_URL;
    iframe.id = "hothelia-webchat-iframe";
    iframe.className = "hothelia-collapsed";
    iframe.setAttribute("title", "Chat Fundo Achamaqui");
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("loading", "lazy");
    document.body.appendChild(iframe);

    let hasUserInteracted = false;

    // Detect user interactions on the iframe container or launcher
    const markInteracted = () => {
      hasUserInteracted = true;
    };

    window.addEventListener("pointerdown", markInteracted, { capture: true, passive: true });
    window.addEventListener("touchstart", markInteracted, { capture: true, passive: true });

    // Listen to resize messages sent from Hothelia webchat
    const handleMessage = (event: MessageEvent) => {
      let widgetOrigin = "";
      try {
        widgetOrigin = new URL(iframe.src).origin;
      } catch {
        // ignore
      }
      if (event.origin !== FRONTEND_URL && event.origin !== widgetOrigin) return;
      if (!event.data || event.data.type !== "hothelia-resize") return;

      const isMobile = window.innerWidth <= 768;
      const willExpand = !!event.data.expanded;

      // If on mobile and this expansion was triggered by an automatic timer rather than a user tap,
      // keep it collapsed so it does not hijack the user's screen or cause missclicks!
      if (isMobile && willExpand && !hasUserInteracted) {
        iframe.className = "hothelia-collapsed";
        return;
      }

      iframe.className = willExpand ? "hothelia-expanded" : "hothelia-collapsed";
    };

    window.addEventListener("message", handleMessage);

    // Listen to booking modal events to hide webchat when booking engine modal is open
    let wasExpandedBeforeModal = false;
    const handleBookingModalChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ open?: boolean }>;
      const isModalOpen = !!customEvent.detail?.open;
      if (isModalOpen) {
        wasExpandedBeforeModal = iframe.classList.contains("hothelia-expanded");
        iframe.classList.add("hothelia-hidden");
      } else {
        iframe.classList.remove("hothelia-hidden");
        if (wasExpandedBeforeModal) {
          iframe.className = "hothelia-expanded";
        }
      }
    };

    window.addEventListener("booking-modal-change", handleBookingModalChange);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("booking-modal-change", handleBookingModalChange);
      window.removeEventListener("pointerdown", markInteracted, { capture: true });
      window.removeEventListener("touchstart", markInteracted, { capture: true });
      try {
        iframe.remove();
        style.remove();
      } catch {
        // ignore
      }
      (window as unknown as { __hothelia_loaded?: boolean }).__hothelia_loaded = false;
    };
  }, []);

  return null;
}
