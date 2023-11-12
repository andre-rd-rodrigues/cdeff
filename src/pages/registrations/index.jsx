import Button from "@/components/Button/Button";
import Card from "@/components/Cards/Card";
import RegistrationCard from "@/components/Cards/RegistrationCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { viiTournamentPreLinks } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function RegistrationPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.registrations.title")}
        image={
          "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Section>
        <div className="flex flex-wrap md:justify-start justify-center">
          <RegistrationCard
            links={viiTournamentPreLinks}
            imageSrc={
              "https://uc77d943bf1a177f1d228ef87c97.previews.dropboxusercontent.com/p/thumb/ACF47XJX1-4Ayl249zWCUeW-tMhQupLWPRKMOrS6HAX1XQ5bJ_X0-NP2S9qX76Lfp6ccGGHNBhfZSWtNqaIA8-kE-hv9RWg2Xfv_7oWSSaqJZRSYqoZkE30DNI55SaaqOz3kInwY1i45vXsfuDXHF1Nk9wa89onU8Dc4g1ck0J1ujrcmIHblRvQgeErPuSCaQaFIYhHEiEaJhsD0csekkB8ZyJ7y1CXxgigrBnaPjRvHtaRwWeu7Ik_JPsGKomkGf8hhl-QRquYdek2Qi7o-SEjtVohDQpMvCcEP_fk26aDOC55bx96Xc-7aq4Gfar6oCPP6AIbIqcplxU5E36PAF-xuiINijRgbd_N-_6X_vBHQ9x4Lukw6NJCEErh5tLHNwibKbBLAMwtQRolXYZ68EKz1Kgy4ArqodIUpq_uDdJrPgw/p.jpeg"
            }
            title={t("pages.registrations.tournament")}
            buttonLabel={t("common.buttons.registration")}
          />
        </div>
      </Section>
    </main>
  );
}

export default RegistrationPage;
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
