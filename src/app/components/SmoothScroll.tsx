"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Тривалість анімації
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Функція згладжування
      smoothWheel: true, // Дозволяє плавний скрол мишкою
    //   smoothTouch: false, 
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Очищення ресурсу при розмонтуванні
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;