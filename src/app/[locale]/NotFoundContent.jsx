"use client";

import Button from "@/components/Button/Button";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Icon } from "@iconify/react";
import styles from "./notFoundContent.module.scss";

export default function NotFoundContent() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <main
      style={{ minHeight: "55vh" }}
      className="text-center flex flex-col items-center justify-center px-6 pt-20"
    >
      <span className={`${styles.ball} text-blue mb-4`}>
        <Icon
          icon="ph:soccer-ball"
          style={{ fontSize: 64, opacity: 0.25 }}
        />
      </span>
      <h1
        className={`${barlow.className} text-blue`}
        style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}
      >
        {t("pages.notFound.title")}
      </h1>
      <h2
        className={`${barlow.className} text-blue text-2xl mt-3 mb-2 uppercase tracking-wider`}
      >
        {t("pages.notFound.subtitle")}
      </h2>
      <p className="mb-8 max-w-md text-gray-600">
        {t("pages.notFound.description")}
      </p>
      <Button
        label={t("common.buttons.goBack")}
        onClick={() => router.back()}
      />
    </main>
  );
}
