import { render, screen } from "@/test-utils";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders title, subtitle when provided, and link button when linkLabel provided", () => {
    render(
      <HeroSection
        imageSrc="/hero.jpg"
        title="Hero Title"
        subtitle="Hero subtitle"
        linkLabel="Learn More"
        href="/learn"
      />
    );

    expect(screen.getByText("Hero Title")).toBeInTheDocument();
    expect(screen.getByText("Hero subtitle")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
  });
});
