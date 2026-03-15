"use client";

import Button from "@/components/Button/Button";
import { barlow } from "@/styles/fonts";
import { DATE_FORMAT } from "@/constants";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";
import "dayjs/locale/pt";
import "dayjs/locale/en";

function BlogCard({ article }) {
  const t = useTranslations();
  const locale = useLocale();

  const { title, description, date, image, slug } = article;

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
          style={{
            objectFit: "cover"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <p className="text-sm font-medium text-red px-5 pt-5 tracking-wide uppercase">
        {dayjs(date).locale(locale).format(DATE_FORMAT)}
      </p>
      <div className="px-5 pt-3 pb-8">
        <h2
          className={`${barlow.className} text-blue uppercase font-semibold text-2xl mb-2`}
        >
          {title}
        </h2>
        <p className="text-gray-700 mb-7 text-sm leading-7">{description}</p>
        <div className="text-center mb-1">
          <Button label={t("common.buttons.readMore")} />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
