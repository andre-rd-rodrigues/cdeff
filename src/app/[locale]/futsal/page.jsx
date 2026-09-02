import { setRequestLocale } from "next-intl/server";
import FutsalPageClient from "./FutsalPage";

export default async function Futsal({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FutsalPageClient />;
}
