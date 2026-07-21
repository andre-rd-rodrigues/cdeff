import { renderHook, act } from "@testing-library/react";
import { SPORTS } from "@/constants";
import useSportSelect from "./useSportSelect";

const { mockReplace, mockUseSearchParams, mockUsePathname } = vi.hoisted(
  () => ({
    mockReplace: vi.fn(),
    mockUseSearchParams: vi.fn(() => new URLSearchParams()),
    mockUsePathname: vi.fn(() => "/tournaments")
  })
);

vi.mock("@/i18n/routing", () => ({
  useRouter: () => ({ replace: mockReplace }),
  usePathname: () => mockUsePathname()
}));

vi.mock("next/navigation", () => ({
  useSearchParams: () => mockUseSearchParams()
}));

describe("useSportSelect", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    mockUsePathname.mockReturnValue("/tournaments");
  });

  it("default state is not basketball when the query param is absent", () => {
    const { result } = renderHook(() => useSportSelect());
    expect(result.current.isBasket).toBe(false);
  });

  it("is basketball when the query param is 'true'", () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams(`${SPORTS.BASKETBALL}=true`)
    );
    const { result } = renderHook(() => useSportSelect());
    expect(result.current.isBasket).toBe(true);
  });

  it("updateSelectedSport(BASKETBALL) sets isBasket and replaces the URL", () => {
    const { result } = renderHook(() => useSportSelect());

    act(() => {
      result.current.updateSelectedSport(SPORTS.BASKETBALL);
    });

    expect(result.current.isBasket).toBe(true);
    expect(mockReplace).toHaveBeenCalledWith(
      `/tournaments?${SPORTS.BASKETBALL}=true`,
      { scroll: false }
    );
  });

  it("updateSelectedSport(FUTSAL) unsets isBasket and replaces the URL", () => {
    const { result } = renderHook(() => useSportSelect());

    act(() => {
      result.current.updateSelectedSport(SPORTS.FUTSAL);
    });

    expect(result.current.isBasket).toBe(false);
    expect(mockReplace).toHaveBeenCalledWith(
      `/tournaments?${SPORTS.BASKETBALL}=false`,
      { scroll: false }
    );
  });
});
