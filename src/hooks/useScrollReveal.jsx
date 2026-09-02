import { useEffect, useRef, useMemo } from "react";

const DEFAULT_THRESHOLD = 0.15;
const DEFAULT_ROOT_MARGIN = "0px 0px -60px 0px";

export default function useScrollReveal({
  threshold = DEFAULT_THRESHOLD,
  rootMargin = DEFAULT_ROOT_MARGIN
} = {}) {
  const ref = useRef(null);

  const observerOptions = useMemo(
    () => ({ threshold, rootMargin }),
    [threshold, rootMargin]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");
          observer.unobserve(element);
        }
      },
      observerOptions
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [observerOptions]);

  return ref;
}
