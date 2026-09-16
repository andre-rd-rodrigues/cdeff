"use client";

import Button from "@/components/Button/Button";
import { barlow } from "@/styles/fonts";
import { DATE_FORMAT } from "@/constants";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";
import "dayjs/locale/pt";
import "dayjs/locale/en";

function BlogCard({ article }) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const { title, description, date, image, slug, category } = article;

  const goToCategory = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push({ pathname: "/blog", query: { category } });
  };

  const handleCategoryKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      goToCategory(e);
    }
  };

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative bg-white flex flex-col w-full md:max-w-sm card-lift"
    >
      <div className="relative h-[250px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          style={{
            objectFit: "cover"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="flex items-center justify-between gap-3 px-5 pt-5">
        <p className="text-sm font-medium text-red tracking-wide uppercase">
          {dayjs(date).locale(locale).format(DATE_FORMAT)}
        </p>
        {category && (
          <span
            role="button"
            tabIndex={0}
            onClick={goToCategory}
            onKeyDown={handleCategoryKeyDown}
            className={`${barlow.className} shrink-0 cursor-pointer text-xs uppercase tracking-[1px] font-medium text-blue border border-[rgba(39,62,121,0.2)] px-2.5 py-1 transition-colors duration-fast ease-smooth hover:bg-blue hover:text-white`}
          >
            {t(`pages.blog.categories.${category}`)}
          </span>
        )}
      </div>
      <div className="px-5 pt-3 pb-8">
        <h2
          className={`${barlow.className} text-blue uppercase font-semibold text-2xl mb-2`}
        >
          {title}
        </h2>
        <p className="mb-7 leading-7">{description}</p>
        <div className="text-center mb-1">
          <Button label={t("common.buttons.readMore")} />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
