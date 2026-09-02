import { setRequestLocale } from "next-intl/server";
import StorePageClient from "./StorePage";

export default async function Store({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StorePageClient />;
}
