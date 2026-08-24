import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next/router
vi.mock("next/router", () => ({
  useRouter: vi.fn().mockReturnValue({
    locale: "pt",
    defaultLocale: "pt",
    locales: ["en", "pt"],
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn().mockResolvedValue(undefined),
    events: { on: vi.fn(), off: vi.fn(), emit: vi.fn() }
  })
}));

// next/navigation is aliased to __mocks__/nextNavigationMock.js in vitest.config.mjs
// (so next-intl's createNavigation resolves it in the jsdom environment).

// Mock next/image to a plain <img>
vi.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage({ fill, priority, preload, ...props }) {
    return <img {...props} />;
  }
}));

// Mock next/link to a plain <a>
vi.mock("next/link", () => ({
  __esModule: true,
  default: function MockLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
}));

// Mock next/font (named font loaders return a stable className/variable)
const mockFont = () => ({
  className: "mock-font",
  style: { fontFamily: "mock" },
  variable: "--mock-font"
});
vi.mock("next/font/google", () => ({
  Barlow_Condensed: mockFont,
  DM_Sans: mockFont
}));
vi.mock("next/font/local", () => ({ __esModule: true, default: mockFont }));

// Mock @iconify/react
vi.mock("@iconify/react", () => ({
  Icon: function MockIcon({ icon, ...props }) {
    return <span data-icon={icon} {...props} />;
  }
}));

// Mock insights-js
vi.mock("insights-js", () => ({
  init: vi.fn(),
  trackPages: vi.fn()
}));

// Polyfill window.matchMedia for JSDOM
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// Polyfill IntersectionObserver for JSDOM
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
global.IntersectionObserver = MockIntersectionObserver;
