"use client";

import BlogCard from "@/components/Cards/BlogCard/BlogCard";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Sobre nos"
      />
    </main>
  );
}
