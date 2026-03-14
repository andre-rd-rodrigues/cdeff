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
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
    ...overrides
  };
  useRouter.mockReturnValue(mockRouter);
  return mockRouter;
}
