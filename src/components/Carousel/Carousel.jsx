"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

export default function Carousel({
  children,
  autoPlay = false,
  interval = 2500,
  perView = 1,
  spacing = 20,
  darkArrows = false
}) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const trackRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 600px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const effectivePerView = isDesktop ? perView : 1;
  const pageCount = Math.max(1, Math.ceil(total / effectivePerView));

  // Keep the active dot in sync with the native scroll position.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const width = el.clientWidth || 1;
        const p = Math.round(el.scrollLeft / width);
        setPage(Math.min(pageCount - 1, Math.max(0, p)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pageCount]);

  const scrollToPage = useCallback((p) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: p * el.clientWidth, behavior: "smooth" });
  }, []);

  // Autoplay: advance one page-width, looping back to the start at the end.
  useEffect(() => {
    if (!autoPlay || paused || pageCount <= 1) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + el.clientWidth,
        behavior: "smooth"
      });
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, pageCount, interval]);

  const slideWidth =
    effectivePerView === 1
      ? "100%"
      : `calc((100% - ${
          (effectivePerView - 1) * spacing
        }px) / ${effectivePerView})`;

  return (
    <div
      className="navigation-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="carousel-track"
        ref={trackRef}
        style={{ gap: `${spacing}px` }}
      >
        {slides.map((slide, idx) => (
          <div
            className="carousel-slide"
            key={idx}
            style={{ flex: `0 0 ${slideWidth}`, width: slideWidth }}
          >
            {slide}
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className={`dots ${darkArrows ? "darkDots" : ""}`}>
          {Array.from({ length: pageCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to page ${idx + 1}`}
              aria-current={page === idx ? "true" : undefined}
              onClick={() => scrollToPage(idx)}
              className={
                "dot" +
                (page === idx ? " active" : "") +
                (darkArrows ? " darkArrows" : "")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
