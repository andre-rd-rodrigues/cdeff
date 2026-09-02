import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";
import RegistrationsPageClient from "./RegistrationsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "registrationsTitle");
}

export default async function Registrations({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <Suspense>
      <RegistrationsPageClient />
    </Suspense>
  );
}
