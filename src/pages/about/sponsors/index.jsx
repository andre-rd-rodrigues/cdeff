import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Sponsors() {
  const t = useTranslations();

  const SponsorSection = ({ images, basket }) => {
    return (
      <div className="flex gap-10 justify-center">
        <div>
          <SectionTitle
            title={
              basket ? t("common.sports.basketball") : t("common.sports.futsal")
            }
            isSubSectionTitle
          />
          <div>
            {images.map(({ image, alt }, i) => (
              <div className="relative w-[120px] h-[60px]" key={i}>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={image}
                  alt={alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      <PageHeader
        title={t("pages.sponsors.title")}
        image="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Section>
        <SectionTitle title={t("pages.sponsors.mainSponsors")} />
        <div className="flex gap-10 justify-center">
          <SponsorSection
            images={[
              {
                image: "/images/navbar/basket/hospital.png",
                alt: "Hospital Particular da Madeira"
              }
            ]}
            basket
          />
          <SponsorSection
            images={[
              {
                image: "/images/navbar/futsal/tourigalo.png",
                alt: "Tourigalo"
              }
            ]}
          />
        </div>
      </Section>
      <Section>
        <SectionTitle title={t("pages.sponsors.premium")} />
        <SponsorSection
          images={[
            {
              image:
                "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACHS0BnzJAdtL06IwF7dqexI3Yv8QUFD4vL-xwmv9qny-ph42Gy0YrF3X0oCZ2XV5UGQ4WswmhsHZYNy1PjMHvIifpOqh8BGgHgIGuAA4EW3iH6RZv0bx92peGKUf_r-d6DxY_iFSVH3YKCDDxMxsLgnMAqfVZxQdd9x5LAt-ZiJrJZ5MlxqOixf7kTspfR0dKGuhRTiBGLV3JtB88r_rw7emaCUHWNSjMSHKUI7iVKOY9ed2Hy0yyIlHOXj7syRQNNUMQYwjhLdIejknDvYqG5fE9ZX1M0HnAvW3y4gHs_ONQ/p.png?size=512x512&size_mode=2",
              name: "Folgado"
            }
          ]}
        />
      </Section>
      <HeroSection
        title={t("pages.sponsors.hero.title")}
        subtitle={t("pages.sponsors.hero.subtitle")}
        imageSrc={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        linkLabel={t("common.buttons.contact")}
        href={"/contacts"}
      />
      <Section>
        <SectionTitle title={t("pages.sponsors.sponsors")} />
      </Section>
      <Section>
        <SectionTitle title={t("pages.sponsors.collaborations")} />
      </Section>
    </main>
  );
}

export default Sponsors;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default
    }
  };
}
