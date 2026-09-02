"use client";

import { useEffect, useRef, useState } from "react";
import { barlow } from "@/styles/fonts";

function StatCounter({
  value = 0,
  prefix = "",
  suffix = "",
  label,
  staticText,
  duration = 1600
}) {
  const ref = useRef(null);
  const isStatic = staticText != null;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [display, setDisplay] = useState(() => {
    if (isStatic) return staticText;
    if (prefersReducedMotion) return `${prefix}${value}${suffix}`;
    return `${prefix}0${suffix}`;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isStatic || prefersReducedMotion) return;

    let rafId;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${prefix}${Math.round(eased * value)}${suffix}`);
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          observer.unobserve(element);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, prefix, suffix, isStatic, prefersReducedMotion, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <div
        className={`${barlow.className} text-white leading-none tabular-nums`}
        style={{ fontSize: "clamp(2.75rem, 7vw, 4rem)", fontWeight: 600 }}
      >
        {display}
      </div>
      <span
        aria-hidden="true"
        className="block mt-3 mb-2.5"
        style={{ width: 28, height: 3, background: "var(--cyan)" }}
      />
      {label && (
        <div
          className={`${barlow.className} uppercase`}
          style={{
            color: "rgba(255, 255, 255, 0.82)",
            letterSpacing: "0.14em",
            fontSize: "var(--fs-s)"
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}

export default StatCounter;
