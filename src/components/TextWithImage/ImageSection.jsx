import Image from "next/image";

const ImageSection = ({ imageSrc, title }) => (
  <div className="w-full md:w-1/2 p-4">
    <div className="relative max-w-md m-auto h-full">
      <span className="image-dots-ornament" aria-hidden="true" />
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
        className="z-[1] shadow-2xl rounded-lg"
      />
    </div>
  </div>
);

export default ImageSection;
