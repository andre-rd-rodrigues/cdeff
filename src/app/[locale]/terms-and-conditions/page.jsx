import { setRequestLocale } from "next-intl/server";
import TermsAndConditionsPage from "./TermsAndConditionsPage";

export default async function TermsAndConditionsRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsAndConditionsPage />;
}
