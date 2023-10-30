import Container from "../Container/Container";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

const TextWithImage = ({
  title,
  description,
  labelOptions,
  subtitle,
  imgSrc,
  imageRight
}) => (
  <Container className="flex flex-wrap">
    {imageRight ? (
      <>
        <TextSection {...{ subtitle, title, description, labelOptions }} />
        <ImageSection {...{ imgSrc, title }} />
      </>
    ) : (
      <>
        <ImageSection {...{ imgSrc, title }} />
        <TextSection {...{ subtitle, title, description, labelOptions }} />
      </>
    )}
  </Container>
);

export default TextWithImage;
