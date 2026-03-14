import { renderHook, act } from "@testing-library/react";
import useIsMobile from "./useIsMobile";

describe("useIsMobile", () => {
  const originalInnerWidth = Object.getOwnPropertyDescriptor(
    window,
    "innerWidth"
  );

  afterEach(() => {
    if (originalInnerWidth) {
      Object.defineProperty(window, "innerWidth", originalInnerWidth);
    }
  });

  it("returns false when window width is above breakpoint", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024
    });

    const { result } = renderHook(() => useIsMobile(768));
    expect(result.current).toBe(false);
  });

  it("returns true when window width is at or below breakpoint", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 768
    });

    const { result } = renderHook(() => useIsMobile(768));
    expect(result.current).toBe(true);
  });

  it("responds to window resize events", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024
    });

    const { result } = renderHook(() => useIsMobile(768));
    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 500
      });
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(true);
  });

  it("accepts custom breakpoint parameter", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 900
    });

    const { result } = renderHook(() => useIsMobile(1000));
    expect(result.current).toBe(true);

    const { result: result2 } = renderHook(() => useIsMobile(800));
    expect(result2.current).toBe(false);
  });
});
