import { render, screen } from "@/test-utils";
import LanguageSelector from "./LanguageSelector";

const { mockUsePathname } = vi.hoisted(() => ({
  mockUsePathname: vi.fn(() => "/")
}));

vi.mock("@/i18n/routing", () => ({
  usePathname: () => mockUsePathname(),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  Link: ({ children, href, locale, ...props }) => (
    <a href={typeof href === "string" ? href : "#"} {...props}>
      {children}
    </a>
  )
}));

describe("LanguageSelector", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
  });

  it("returns null when route is a blog post", () => {
    mockUsePathname.mockReturnValue("/blog/test-post");

    const { container } = render(<LanguageSelector />);

    expect(container.firstChild).toBeNull();
  });

  it("returns null when route is a tournament detail", () => {
    mockUsePathname.mockReturnValue("/tournaments/test");

    const { container } = render(<LanguageSelector />);

    expect(container.firstChild).toBeNull();
  });

  it("renders globe icon for desktop mode when mobile is false", () => {
    render(<LanguageSelector mobile={false} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      document.querySelector('[data-icon="ph:globe-thin"]')
    ).toBeInTheDocument();
  });

  it("renders globe icon for desktop mode when mobile is not passed", () => {
    render(<LanguageSelector />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      document.querySelector('[data-icon="ph:globe-thin"]')
    ).toBeInTheDocument();
  });

  it("renders as disclosure for mobile mode when mobile is true", () => {
    render(<LanguageSelector mobile handleCloseMenu={vi.fn()} />);

    expect(screen.getByText("Idioma")).toBeInTheDocument();
    expect(
      document.querySelector('[data-icon="ph:globe-thin"]')
    ).toBeInTheDocument();
  });
});
