import { render, screen, fireEvent } from "@/test-utils";
import RegistrationCard from "./RegistrationCard";

describe("RegistrationCard", () => {
  const defaultProps = {
    title: "Test Title",
    description: "Test description",
    imageSrc: "/test-image.jpg"
  };

  it("renders title, description, subtitle, and image", () => {
    render(
      <RegistrationCard
        {...defaultProps}
        subTitle="Test subtitle"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("Test subtitle")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test Title" })).toBeInTheDocument();
  });

  it("renders a single registration button when href is provided and links is not", () => {
    render(
      <RegistrationCard
        {...defaultProps}
        href="https://example.com/register"
      />
    );

    const link = screen.getByRole("link", { name: "Inscrição" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com/register");
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });

  it("renders country dropdown when links object is provided", () => {
    const links = {
      PT: "https://example.com/pt",
      EN: "https://example.com/en",
      ES: "https://example.com/es",
      FR: "https://example.com/fr"
    };

    render(
      <RegistrationCard
        {...defaultProps}
        links={links}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const registrationLink = screen.getByRole("link", { name: "Inscrição" });
    expect(registrationLink).toHaveAttribute("href", "https://example.com/pt");
  });

  it("changing country dropdown updates the registration link", () => {
    const links = {
      PT: "https://example.com/pt",
      EN: "https://example.com/en",
      ES: "https://example.com/es",
      FR: "https://example.com/fr"
    };

    render(
      <RegistrationCard
        {...defaultProps}
        links={links}
      />
    );

    const registrationLink = screen.getByRole("link", { name: "Inscrição" });
    expect(registrationLink).toHaveAttribute("href", "https://example.com/pt");

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "EN" } });

    expect(registrationLink).toHaveAttribute("href", "https://example.com/en");
  });
});
