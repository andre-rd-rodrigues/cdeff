import { render, screen, act } from "@/test-utils";
import Loading from "./Loading";

describe("Loading", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows loading initially (visible)", () => {
    const { container } = render(<Loading />);

    expect(screen.getByAltText("CDEFF")).toBeInTheDocument();
    const loadingContainer = container.firstChild;
    expect(loadingContainer.className).not.toContain("undefined undefined");
  });

  it("hides after 600ms", () => {
    const { container } = render(<Loading />);

    expect(screen.getByAltText("CDEFF")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(600);
    });

    const loadingContainer = container.firstChild;
    expect(loadingContainer.className).toContain("undefined undefined");
  });
});
