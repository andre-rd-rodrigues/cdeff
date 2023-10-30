import Button from "@/components/Button/Button";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ article }) {
  const t = useTranslations();
  const { title, description, date, image, tag, slug } = article;

  return (
    <Link href={slug} className="relative flex flex-col shadow-xl max-w-sm">
      <div className="relative h-[350px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="p-7 py-10">
        <p className="text-gray-500 mb-2 text-sm">
          <span className="text-blue font-semibold uppercase">{tag}</span> •{" "}
          {date}
        </p>

        <h2
          className={`${barlow.className} text-blue uppercase font-semibold text-2xl my-4`}
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
