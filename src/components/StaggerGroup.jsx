"use client";

import React, { Children, useEffect, useRef } from "react";

/**
 * Reveals its children in sequence as the group scrolls into view.
 * Sibling stagger is the legitimate rhythm for cards-in-a-grid — each card
 * enters a beat after the previous one, instead of the whole block fading as
 * one. Each child is wrapped in a `.stagger-item` whose `--i` (index) drives
 * the delay; the cap lives in CSS so long lists never drag.
 *
 * Respects `prefers-reduced-motion`: children appear immediately, no motion.
 */
function StaggerGroup({
  as: Tag = "div",
  itemClassName = "",
  children,
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-in");
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const items = Children.toArray(children);

  return (
    <Tag ref={ref} className={`stagger-group ${className}`.trim()} {...rest}>
      {items.map((child, i) => (
        <div
          key={i}
          className={`stagger-item ${itemClassName}`.trim()}
          style={{ "--i": i }}
        >
          {child}
        </div>
      ))}
    </Tag>
  );
}

export default StaggerGroup;
