import { barlow } from "@/styles/fonts";
import Button from "../Button/Button";
import Link from "next/link";

const TextSection = ({ subtitle, title, description, labelOptions }) => {
  const { href, label } = labelOptions || {};

  return (
    <div className="w-full md:w-1/2 flex p-0 sm:p-4 justify-center items-center">
      <div>
        <h3 className="subtitle uppercase font-semibold tracking-wide mt-5 sm:mt-0">
          {subtitle}
        </h3>
        <h2 className={`${barlow.className} section-header`}>{title}</h2>
        <p className="mb-8 text-justify">{description}</p>
        {labelOptions && (
          <div className="text-right md:text-left">
            <Link href={href} className="w-full">
              <Button label={label} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSection;
