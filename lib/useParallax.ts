"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Subtle scroll parallax for elements marked with `data-parallax="<speed>"`.
 * Speed ~0.05–0.15; element drifts against the scroll direction.
 * Transform-only, visibility-gated, disabled under prefers-reduced-motion.
 */
export default function useParallax() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const speeds = new Map<Element, number>();
    const visible = new Set<Element>();
    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      visible.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const y = -progress * (speeds.get(el) ?? 0.1) * vh;
        (el as HTMLElement).style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      });
    };

    const schedule = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      });
      schedule();
    });

    const collect = () => {
      document.querySelectorAll("[data-parallax]").forEach((el) => {
        if (!speeds.has(el)) {
          const s = parseFloat((el as HTMLElement).dataset.parallax || "0.1");
          speeds.set(el, Number.isFinite(s) ? s : 0.1);
          io.observe(el);
        }
      });
    };

    collect();
    schedule();

    const mo = new MutationObserver(collect);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      speeds.forEach((_, el) => ((el as HTMLElement).style.transform = ""));
    };
  }, [pathname]);
}
