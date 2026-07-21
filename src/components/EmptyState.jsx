import React from "react";
import { Icon } from "@iconify/react";
import { barlow } from "@/styles/fonts";
import Button from "@/components/Button/Button";
import { Link } from "@/i18n/routing";
import styles from "./emptystate.module.scss";

function EmptyState({
  icon = "ph:hoop",
  title,
  description,
  cta,
  className = ""
}) {
  return (
    <div
      className={`w-full flex flex-col items-center text-center py-14 px-6 ${className}`}
    >
      <span className={`${styles.icon} mb-5 text-blue`}>
        <Icon icon={icon} style={{ fontSize: 60, opacity: 0.28 }} />
      </span>
      {title && (
        <h3
          className={`${barlow.className} text-blue uppercase tracking-wide text-2xl mb-2`}
        >
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 max-w-md leading-relaxed">{description}</p>
      )}
      {cta?.href && cta?.label && (
        <Link href={cta.href} className="mt-7">
          <Button variant label={cta.label} showArrow />
        </Link>
      )}
    </div>
  );
}

export default EmptyState;
