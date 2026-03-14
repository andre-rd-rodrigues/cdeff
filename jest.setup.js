import "@testing-library/jest-dom";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    locale: "pt",
    defaultLocale: "pt",
    locales: ["en", "pt"],
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() }
  })
}));

// Mock next/image to a plain <img>
jest.mock("next/image", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: function MockImage({ fill, priority, preload, ...props }) {
      return React.createElement("img", props);
    }
  };
});

// Mock next/link to a plain <a>
jest.mock("next/link", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: function MockLink({ children, href, ...props }) {
      return React.createElement("a", { href, ...props }, children);
    }
  };
});

// Mock @iconify/react
jest.mock("@iconify/react", () => ({
  Icon: function MockIcon({ icon, ...props }) {
    const React = require("react");
    return React.createElement("span", { "data-icon": icon, ...props });
  }
}));

// Mock insights-js
jest.mock("insights-js", () => ({
  init: jest.fn(),
  trackPages: jest.fn()
}));

// Mock keen-slider
jest.mock("keen-slider/react", () => {
  const React = require("react");
  return {
    useKeenSlider: jest.fn(() => [
      React.createRef(),
      { current: null }
    ])
  };
});

// Polyfill window.matchMedia for JSDOM
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
