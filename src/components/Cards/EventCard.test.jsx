import { render, screen, waitFor } from "@/test-utils";
import EventCard from "./EventCard";

describe("EventCard", () => {
  const defaultEvent = {
    title: "Test Event",
    description: "Test event description",
    dateStart: "2025-03-15",
    dateEnd: "2025-03-16",
    location: "Funchal, Madeira",
    image: "/images/test-event.png"
  };

  it("renders event title and description", () => {
    render(<EventCard event={defaultEvent} href="/events/test" />);

    expect(screen.getByText("Test Event")).toBeInTheDocument();
    expect(screen.getByText("Test event description")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<EventCard event={defaultEvent} href="/events/test" />);

    expect(screen.getByText("Funchal, Madeira")).toBeInTheDocument();
  });

  it("renders image with fallback when no image provided", () => {
    const eventWithoutImage = { ...defaultEvent, image: null };
    render(<EventCard event={eventWithoutImage} href="/events/test" />);

    const img = screen.getByRole("img", { name: "Test Event" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("/images/metadata.png"));
  });

  it("renders custom image when provided", () => {
    render(<EventCard event={defaultEvent} href="/events/test" />);

    const img = screen.getByRole("img", { name: "Test Event" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("/images/test-event.png"));
  });

  it("renders a See More button", async () => {
    render(<EventCard event={defaultEvent} href="/events/test" />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /ver mais/i })).toBeInTheDocument();
    });
  });
});
