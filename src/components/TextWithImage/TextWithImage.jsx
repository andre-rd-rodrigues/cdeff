import Container from "../Container/Container";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

const TextWithImage = ({
  title,
  description,
  labelOptions,
  subtitle,
  imageSrc,
  imageRight,
  location,
  schedule,
  contact
}) => (
  <Container className="flex flex-wrap">
    {imageRight ? (
      <>
        <TextSection
          {...{
            subtitle,
            title,
            description,
            labelOptions,
            location,
            schedule,
            contact
          }}
        />
        <ImageSection {...{ imageSrc, title }} />
      </>
    ) : (
      <>
        <ImageSection {...{ imageSrc, title }} />
        <TextSection
          {...{
            subtitle,
            title,
            description,
            labelOptions,
            location,
            schedule,
            contact
          }}
        />
      </>
    )}
  </Container>
);

export default TextWithImage;
