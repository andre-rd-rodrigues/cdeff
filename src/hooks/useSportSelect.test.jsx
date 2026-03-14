import { renderHook, act } from "@testing-library/react";
import { SPORTS } from "@/constants";
import useSportSelect from "./useSportSelect";

const mockPush = jest.fn();
const { useRouter } = require("next/router");

describe("useSportSelect", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useRouter.mockReturnValue({
      push: mockPush,
      query: {}
    });
  });

  it("default state is not basketball (isBasket = false when query.basketball is not 'true')", () => {
    useRouter.mockReturnValue({
      push: mockPush,
      query: {}
    });

    const { result } = renderHook(() => useSportSelect());
    expect(result.current.isBasket).toBe(false);
  });

  it("updateSelectedSport(SPORTS.BASKETBALL) sets isBasket to true and calls router.push", () => {
    const { result } = renderHook(() => useSportSelect());

    act(() => {
      result.current.updateSelectedSport(SPORTS.BASKETBALL);
    });

    expect(result.current.isBasket).toBe(true);
    expect(mockPush).toHaveBeenCalledWith(
      { query: { [SPORTS.BASKETBALL]: true } },
      undefined,
      { shallow: true }
    );
  });

  it("updateSelectedSport(SPORTS.FUTSAL) sets isBasket to false and calls router.push", () => {
    useRouter.mockReturnValue({
      push: mockPush,
      query: { basketball: "true" }
    });

    const { result } = renderHook(() => useSportSelect());
    expect(result.current.isBasket).toBe(true);

    act(() => {
      result.current.updateSelectedSport(SPORTS.FUTSAL);
    });

    expect(result.current.isBasket).toBe(false);
    expect(mockPush).toHaveBeenCalledWith(
      { query: { [SPORTS.BASKETBALL]: false } },
      undefined,
      { shallow: true }
    );
  });
});
