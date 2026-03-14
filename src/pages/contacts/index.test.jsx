import { render, screen } from "@/test-utils";
import Contacts from "./index";

describe("Contacts Page", () => {
  it("renders the page header with title", () => {
    render(<Contacts />);

    expect(screen.getByText("Contactos")).toBeInTheDocument();
  });

  it("renders the Google Maps iframe", () => {
    render(<Contacts />);

    const iframe = document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain("google.com/maps");
  });

  it("renders contact items", () => {
    render(<Contacts />);

    const contactLinks = screen.getAllByRole("link");
    expect(contactLinks.length).toBeGreaterThan(0);
  });
});
