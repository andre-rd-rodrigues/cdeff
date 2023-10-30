import { barlow } from "@/styles/fonts";
import Button from "../Button/Button";
import Link from "next/link";

const TextSection = ({ subtitle, title, description, labelOptions }) => {
  const { href, label } = labelOptions || {};

  return (
    <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
      <div className="max-w-md">
        <h3 className="subtitle uppercase font-semibold tracking-wide">
          {subtitle}
        </h3>
        <h2 className={`${barlow.className} section-header`}>{title}</h2>
        <p className="mb-8">{description}</p>
        {labelOptions && (
          <Link href={href} className="w-full text-right md:text-left">
            <Button label={label} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TextSection;
