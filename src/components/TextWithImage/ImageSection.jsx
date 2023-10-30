import Image from "next/image";

const ImageSection = ({ imgSrc, title }) => (
  <div className="w-full md:w-1/2 p-4">
    <div className="max-w-md m-auto h-full">
      <Image
        src={imgSrc}
        alt={title}
        width={800}
        height={800}
        layout="responsive"
        objectFit="cover"
        className="shadow-2xl"
      />
    </div>
  </div>
);

export default ImageSection;
