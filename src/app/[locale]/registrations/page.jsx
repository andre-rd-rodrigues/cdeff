import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import RegistrationsPageClient from "./RegistrationsPage";

export default async function Registrations({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <Suspense>
      <RegistrationsPageClient />
    </Suspense>
  );
}
