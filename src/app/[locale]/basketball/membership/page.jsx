import { setRequestLocale } from "next-intl/server";
import MembershipPageClient from "./MembershipPage";

export default async function Membership({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MembershipPageClient />;
}
