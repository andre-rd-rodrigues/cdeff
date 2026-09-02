import { render, screen, fireEvent } from "@/test-utils";
import NotFoundContent from "@/app/[locale]/NotFoundContent";

const { mockBack } = vi.hoisted(() => ({ mockBack: vi.fn() }));

vi.mock("@/i18n/routing", () => ({
  useRouter: () => ({ back: mockBack, push: vi.fn(), replace: vi.fn() })
}));

describe("NotFound (404)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the 404 title, out-of-bounds copy and the ball icon", () => {
    render(<NotFoundContent />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Fora de jogo!")).toBeInTheDocument();
    expect(
      document.querySelector('[data-icon="ph:soccer-ball"]')
    ).toBeInTheDocument();
  });

  it("calls router.back() when the go-back button is clicked", () => {
    render(<NotFoundContent />);

    fireEvent.click(screen.getByText("voltar"));

    expect(mockBack).toHaveBeenCalledTimes(1);
  });
});
