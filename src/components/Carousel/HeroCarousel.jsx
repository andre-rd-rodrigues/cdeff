"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

const SWIPE_THRESHOLD = 40;

export default function HeroCarousel({
  children,
  autoPlay = false,
  interval = 4000
}) {
  const slides = Children.toArray(children);
  const total = slides.length;

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startX = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const goTo = useCallback(
    (idx) => {
      if (total === 0) return;
      setCurrent(((idx % total) + total) % total);
    },
    [total]
  );

  const goPrev = useCallback(() => goTo(current - 1), [goTo, current]);
  const goNext = useCallback(() => goTo(current + 1), [goTo, current]);

  // Autoplay: setTimeout keyed on `current` so each slide gets a full interval,
  // and manual navigation resets the timer.
  useEffect(() => {
    if (!autoPlay || paused || reducedMotion || total <= 1) return;
    const id = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, interval);
    return () => clearTimeout(id);
  }, [autoPlay, paused, reducedMotion, total, interval, current]);

  const onPointerDown = (e) => {
    startX.current = e.clientX;
  };

  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    goTo(dx < 0 ? current + 1 : current - 1);
  };

  // Horizontal wheel/trackpad scroll navigates (and we prevent the browser's
  // back/forward swipe gesture while doing so).
  useEffect(() => {
    const el = rootRef.current;
    if (total <= 1 || !el) return;
    let lock = false;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (lock || Math.abs(e.deltaX) < 15) return;
      lock = true;
      goTo(current + (e.deltaX > 0 ? 1 : -1));
      setTimeout(() => {
        lock = false;
      }, 550);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [current, goTo, total]);

  const showProgress = autoPlay && !reducedMotion && total > 1;

  return (
    <div
      ref={rootRef}
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`hero-slide ${idx === current ? "is-active" : ""}`}
          aria-hidden={idx === current ? undefined : true}
        >
          {slide}
        </div>
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            className="hero-arrow hero-arrow--prev"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <span aria-hidden="true">&#8249;</span>
          </button>
          <button
            type="button"
            className="hero-arrow hero-arrow--next"
            aria-label="Next slide"
            onClick={goNext}
          >
            <span aria-hidden="true">&#8250;</span>
          </button>
        </>
      )}

      {total > 1 && (
        <div className="hero-pagination">
          <div className="hero-count">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-num ${idx === current ? "is-active" : ""}`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === current ? "true" : undefined}
                onClick={() => goTo(idx)}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <div className="hero-progress" aria-hidden="true">
            {slides.map((_, idx) => {
              const state =
                idx < current ? "done" : idx === current ? "active" : "todo";
              const animate = state === "active" && showProgress;
              return (
                <span key={idx} className="hero-seg">
                  <span
                    key={animate ? current : `static-${idx}`}
                    className={`hero-seg-fill hero-seg-fill--${state} ${
                      animate ? "is-animating" : ""
                    } ${animate && paused ? "is-paused" : ""}`}
                    style={
                      animate ? { animationDuration: `${interval}ms` } : undefined
                    }
                  />
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
