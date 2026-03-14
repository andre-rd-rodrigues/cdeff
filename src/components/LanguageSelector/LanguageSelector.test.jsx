import { render, screen } from "@/test-utils";
import LanguageSelector from "./LanguageSelector";

const { useRouter } = require("next/router");

describe("LanguageSelector", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      locale: "pt",
      pathname: "/",
      route: "/",
      push: jest.fn(),
      back: jest.fn(),
      query: {}
    });
  });

  it("returns null when route includes blog/[slug]", () => {
    useRouter.mockReturnValue({
      locale: "pt",
      pathname: "/blog/test-post",
      route: "/blog/[slug]",
      push: jest.fn(),
      back: jest.fn(),
      query: {}
    });

    const { container } = render(<LanguageSelector />);

    expect(container.firstChild).toBeNull();
  });

  it("returns null when route includes tournaments/[slug]", () => {
    useRouter.mockReturnValue({
      locale: "pt",
      pathname: "/tournaments/test",
      route: "/tournaments/[slug]",
      push: jest.fn(),
      back: jest.fn(),
      query: {}
    });

    const { container } = render(<LanguageSelector />);

    expect(container.firstChild).toBeNull();
  });

  it("renders globe icon for desktop mode when mobile is false", () => {
    render(<LanguageSelector mobile={false} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(document.querySelector('[data-icon="ph:globe-thin"]')).toBeInTheDocument();
  });

  it("renders globe icon for desktop mode when mobile is not passed", () => {
    render(<LanguageSelector />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(document.querySelector('[data-icon="ph:globe-thin"]')).toBeInTheDocument();
  });

  it("renders as disclosure for mobile mode when mobile is true", () => {
    render(<LanguageSelector mobile handleCloseMenu={jest.fn()} />);

    expect(screen.getByText("Idioma")).toBeInTheDocument();
    expect(document.querySelector('[data-icon="ph:globe-thin"]')).toBeInTheDocument();
  });
});
