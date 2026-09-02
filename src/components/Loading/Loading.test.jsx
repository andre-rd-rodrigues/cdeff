import { render, screen, act } from "@/test-utils";
import Loading from "./Loading";

describe("Loading", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows loading initially (visible)", () => {
    const { container } = render(<Loading />);

    expect(screen.getByAltText("CDEFF")).toBeInTheDocument();
    const loadingContainer = container.firstChild;
    expect(loadingContainer.className).toContain("opacity-100");
    expect(loadingContainer.className).not.toContain("pointer-events-none");
  });

  it("hides after 600ms", () => {
    const { container } = render(<Loading />);

    expect(screen.getByAltText("CDEFF")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(600);
    });

    const loadingContainer = container.firstChild;
    expect(loadingContainer.className).toContain("opacity-0");
    expect(loadingContainer.className).toContain("pointer-events-none");
  });
});
