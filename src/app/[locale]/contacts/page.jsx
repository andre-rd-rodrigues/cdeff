import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import ContactsPageClient from "./ContactsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "contactsTitle");
}

export default async function Contacts({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactsPageClient />;
}
