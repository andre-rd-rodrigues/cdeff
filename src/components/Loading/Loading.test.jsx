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
    render(<Loading />);

    expect(screen.getByAltText("Loading Animation")).toBeInTheDocument();
    const loadingContainer = screen.getByAltText("Loading Animation").closest("div");
    // When visible, styles.hidden is not applied (styleMock returns {} so we check structure)
    expect(loadingContainer.className).not.toContain("undefined undefined");
  });

  it("hides after 500ms", () => {
    render(<Loading />);

    expect(screen.getByAltText("Loading Animation")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    const loadingContainer = screen.getByAltText("Loading Animation").closest("div");
    // When hidden, both styles.loading and styles.hidden are applied (styleMock: "undefined undefined")
    expect(loadingContainer.className).toContain("undefined undefined");
  });
});
