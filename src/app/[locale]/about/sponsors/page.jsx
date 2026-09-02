import { setRequestLocale } from "next-intl/server";
import SponsorsPage from "./SponsorsPage";

export default async function Sponsors({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SponsorsPage />;
}
