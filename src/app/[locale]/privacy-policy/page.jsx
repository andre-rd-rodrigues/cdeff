import { setRequestLocale } from "next-intl/server";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

export default async function PrivacyPolicyRoute({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyPolicyPage />;
}
