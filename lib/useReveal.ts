"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR =
  ".reveal, .reveal-fade, .reveal-scale, .title-wrap, .banner-title, .banner-paragraph, .banner-subtitle";

export default function useReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    const scan = () => {
      const els = document.querySelectorAll(SELECTOR);
      els.forEach((el) => {
        if (!(el as HTMLElement).classList.contains("visible")) {
          io!.observe(el);
        }
      });
    };

    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io!.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    scan();

    const mo = new MutationObserver(() => {
      const fresh = document.querySelectorAll(SELECTOR);
      fresh.forEach((el) => {
        if (!(el as HTMLElement).classList.contains("visible")) {
          io!.observe(el);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, [pathname]);
}
