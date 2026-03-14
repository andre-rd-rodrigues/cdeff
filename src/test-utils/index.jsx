import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import ptMessages from "@/messages/pt.json";

function AllProviders({ children, locale = "pt", messages = ptMessages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

const customRender = (ui, { locale, messages, ...options } = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AllProviders locale={locale} messages={messages}>
        {children}
      </AllProviders>
    ),
    ...options
  });

export * from "@testing-library/react";
export { customRender as render };
