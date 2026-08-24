import { setRequestLocale } from "next-intl/server";
import CookiePolicyPage from "./CookiePolicyPage";

export default async function CookiePolicyRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookiePolicyPage />;
}
