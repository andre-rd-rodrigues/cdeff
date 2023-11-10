import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

function FeedbackCard({ author, feedback, image, className }) {
  return (
    <div className={`${className}`}>
      <div className="text-yellow-500 opacity-50">
        <Icon icon="ri:double-quotes-l" fontSize={40} />
      </div>
      <p className="">{feedback}</p>
      <div className="flex items-center gap-2 justify-end text-right mt-7">
        <div className="ml-7">
          <h5>{author}</h5>
        </div>
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={image} alt="client" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
