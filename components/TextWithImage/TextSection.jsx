import { barlow } from "@/styles/fonts";
import Button from "../Button/Button";

const TextSection = ({ subtitle, title, description, buttonOptions }) => {
  const { onClick, label } = buttonOptions || {};

  return (
    <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
      <div className="max-w-md">
        <h3 className="subtitle">{subtitle}</h3>
        <h2 className={`${barlow.className} section-header`}>{title}</h2>
        <p className="mb-8">{description}</p>
        {buttonOptions && (
          <div className="w-full text-right md:text-left">
            <Button label={label} onClick={onClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSection;
