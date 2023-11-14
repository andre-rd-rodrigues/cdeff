import Button from "@/components/Button/Button";
import { barlow } from "@/styles/fonts";
import { DATE_FORMAT } from "@/utils";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
require("dayjs/locale/pt");
require("dayjs/locale/en");

function BlogCard({ article }) {
  const t = useTranslations();
  const { locale } = useRouter();

  const { title, description, date, image, slug } = article;

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative flex flex-col shadow-xl w-full md:max-w-sm"
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
      </div>
      <p className="text-sm font-light text-gray-400 px-5 pt-5">
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
