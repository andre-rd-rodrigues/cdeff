import { setRequestLocale } from "next-intl/server";
import BasketballPageClient from "./BasketballPage";

export default async function Basketball({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BasketballPageClient />;
}
