import { useRouter } from "next/router";

export function createMockRouter(overrides = {}) {
  const mockRouter = {
    locale: "pt",
    defaultLocale: "pt",
    locales: ["en", "pt"],
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn().mockResolvedValue(undefined),
    events: { on: vi.fn(), off: vi.fn(), emit: vi.fn() },
    ...overrides
  };
  useRouter.mockReturnValue(mockRouter);
  return mockRouter;
}
