import { setRequestLocale } from "next-intl/server";
import ContactsPageClient from "./ContactsPage";

export default async function Contacts({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactsPageClient />;
}
