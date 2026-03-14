import { render, screen, fireEvent } from "@/test-utils";
import {
  CTAButton,
  CompanyLogo,
  CloseButton,
  Sponsors
} from "./NavbarWidgets";

describe("NavbarWidgets", () => {
  describe("CTAButton", () => {
    it("renders registration button text", () => {
      render(<CTAButton />);

      expect(screen.getByText("Inscrições")).toBeInTheDocument();
    });
  });

  describe("CompanyLogo", () => {
    it("renders image", () => {
      render(<CompanyLogo />);

      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  });

  describe("CloseButton", () => {
    it("calls handleClose on click", () => {
      const handleClose = jest.fn();
      render(<CloseButton handleClose={handleClose} />);

      fireEvent.click(screen.getByRole("button"));

      expect(handleClose).toHaveBeenCalled();
    });
  });

  describe("Sponsors", () => {
    it("renders sponsor images", () => {
      render(<Sponsors />);

      const imgs = screen.getAllByRole("img");
      expect(imgs.length).toBeGreaterThan(0);
    });
  });
});
