import React from "react";
import "./textwithimage.scss";

import Image from "next/image";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { barlow } from "@/styles/fonts";

const TextWithImage = ({
  title,
  description,
  buttonOptions,
  subtitle,
  imgSrc
}) => {
  const { onClick, label } = buttonOptions;

  return (
    <Container className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <div className="max-w-md m-auto h-full">
          <Image
            src={imgSrc}
            alt={title}
            width={800}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
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
    </Container>
  );
};

export default TextWithImage;
