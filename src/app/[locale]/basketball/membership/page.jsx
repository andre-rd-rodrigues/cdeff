import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import MembershipPageClient from "./MembershipPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "membershipTitle");
}

export default async function Membership({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MembershipPageClient />;
}
