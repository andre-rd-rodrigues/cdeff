import { render, screen } from "@testing-library/react";
import StatCounter from "./StatCounter";

describe("StatCounter", () => {
  afterEach(() => {
    // Restore the default (non-reduced-motion) matchMedia from setup.
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }));
  });

  it("renders the label", () => {
    render(<StatCounter value={150} label="Athletes" />);

    expect(screen.getByText("Athletes")).toBeInTheDocument();
  });

  it("renders staticText verbatim without counting", () => {
    render(<StatCounter staticText="5-19" label="Age range" />);

    expect(screen.getByText("5-19")).toBeInTheDocument();
    expect(screen.getByText("Age range")).toBeInTheDocument();
  });

  it("shows the initial zero value before it scrolls into view", () => {
    // IntersectionObserver is a no-op in tests, so the count never starts.
    render(<StatCounter value={42} prefix="+" label="Titles" />);

    expect(screen.getByText("+0")).toBeInTheDocument();
  });

  it("renders the final value immediately under reduced motion", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }));

    render(<StatCounter value={20} suffix="+" label="Years" />);

    expect(screen.getByText("20+")).toBeInTheDocument();
  });
});
