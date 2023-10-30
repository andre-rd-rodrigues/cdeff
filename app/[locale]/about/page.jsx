"use client";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";

import React from "react";

function About() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.about.title")}
        image="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </main>
  );
}

export default About;
