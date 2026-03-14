import { render, screen } from "@/test-utils";
import HeroHeader from "./HeroHeader";

describe("HeroHeader", () => {
  it("renders children and link button when linkLabel provided", () => {
    render(
      <HeroHeader
        imageSrc="/hero.jpg"
        linkLabel="Register"
        href="/register"
      >
        <span>Header content</span>
      </HeroHeader>
    );

    expect(screen.getByText("Header content")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });
});
