import { render, screen, fireEvent } from "@/test-utils";
import { useRouter } from "next/router";
import NotFoundPage from "./404";

describe("404 Page", () => {
  it("renders error title and description", () => {
    render(<NotFoundPage />);

    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("calls router.back() when go back button is clicked", () => {
    const mockBack = jest.fn();
    useRouter.mockReturnValue({
      locale: "pt",
      pathname: "/404",
      route: "/404",
      query: {},
      asPath: "/404",
      push: jest.fn(),
      replace: jest.fn(),
      back: mockBack,
      prefetch: jest.fn(),
      events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() }
    });

    render(<NotFoundPage />);

    const goBackButton = screen.getByText("voltar");
    fireEvent.click(goBackButton);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });
});
