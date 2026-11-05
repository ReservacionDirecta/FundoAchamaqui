"use client";

import React, { useEffect } from "react";

/**
 * HotheliaWebchat loads the official Hothelia AI Webchat Widget.
 * Tenant: Fundo Achamaqui (645d7798-3e8b-4111-8946-96dac1a6f905)
 * Position: bottom-right
 * 
 * Supports both the direct official embed and self-healing URL fallback
 * in case the upstream railway endpoint contains typographical errors.
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
      "  pointer-events: none;",
      "  background: transparent;",
      "  overflow: visible;",
      "}",
      "#hothelia-webchat-iframe.hothelia-collapsed {",
      "  width: 360px;",
      "  height: 150px;",
      isBottom ? "  bottom: 0px;" : "  top: 0px;",
      isRight ? "  right: 0px;" : "  left: 0px;",
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
      "@media (max-width: 480px) {",
      "  #hothelia-webchat-iframe.hothelia-collapsed {",
      "    width: 280px;",
      "    height: 110px;",
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
      "  }",
      "}",
      "@media (min-width: 481px) and (max-width: 768px) {",
      "  #hothelia-webchat-iframe.hothelia-expanded {",
      "    width: 370px;",
      "    height: 560px;",
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
      iframe.className = event.data.expanded ? "hothelia-expanded" : "hothelia-collapsed";
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
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
