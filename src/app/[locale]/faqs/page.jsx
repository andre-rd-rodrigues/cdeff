import { setRequestLocale } from "next-intl/server";
import FaqsPageClient from "./FaqsPage";

export default async function FaqsRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FaqsPageClient />;
}
