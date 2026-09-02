"use client";

import React from "react";
import FilterChip from "@/components/FilterChip";
import { useTranslations } from "next-intl";

const CATEGORIES = ["all", "basketball", "futsal", "health", "club"];

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

function BlogFilters({ search, onSearchChange, activeCategory, onCategoryChange }) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="relative w-full max-w-sm">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue/50 pointer-events-none">
          <SearchIcon />
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t("pages.blog.searchPlaceholder")}
          aria-label={t("pages.blog.searchPlaceholder")}
          className="w-full bg-white text-dark border border-[rgba(39,62,121,0.15)] py-3 pl-11 pr-4 text-fs-m outline-none transition-colors duration-fast ease-smooth focus:border-red"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <FilterChip
            key={category}
            label={t(`pages.blog.categories.${category}`)}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogFilters;
