import { barlow } from "@/styles/fonts";
import { DATE_FORMAT, DATE_FORMAT_HOURS } from "@/utils";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";

function EventCard({ event, href }) {
  const t = useTranslations();

  const { locale } = useRouter();

  const { title, description, dateStart, dateEnd, image, location } = event;

  return (
    <Link href={href} className="relative flex flex-col shadow-xl max-w-xs">
      <div className="relative h-[450px]">
        <Image
          src={image || "/images/metadata.png"}
          alt={title}
          fill
          style={{
            objectFit: "cover"
          }}
          preload="true"
        />
      </div>
      <h2
        className={`${barlow.className} text-blue uppercase font-semibold text-2xl pt-7 px-7`}
      >
        {title}
      </h2>
      <div className="px-7 py-3">
        <div className="flex gap-2 items-center py-2">
          <Icon
            icon="solar:calendar-outline"
            className="text-red"
            fontSize={20}
          />
          <p className="text-sm font-light text-gray-400">
            {`${dayjs(dateStart).locale(locale).format(DATE_FORMAT)} ${
              dateEnd
                ? `- ${dayjs(dateEnd).locale(locale).format(DATE_FORMAT)}`
                : ""
            }`}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="fluent:location-48-regular"
            className="text-red"
            fontSize={20}
          />
          <p className="text-sm font-light text-gray-400">{location}</p>
        </div>
      </div>

      <div className="px-7 pb-8">
        <p className="text-gray-700 mb-4 text-sm leading-7">{description}</p>
        <div className="text-center mb-1">
          <Button label={t("common.buttons.seeMore")} />
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
