import { render, screen } from "@/test-utils";
import ContactHero from "./ContactHero";

describe("ContactHero", () => {
  it("renders without crashing", () => {
    render(<ContactHero />);

    expect(screen.getByText("contactos")).toBeInTheDocument();
  });
});
