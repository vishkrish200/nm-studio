import { getStrapiMedia } from "../lib/media";
import Image from "next/image";
const SomethingElse = ({ image, style, width, height, objectFit }) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      width={width}
      height={height}
      layout="intrinsic"
      loading="lazy"
      style={style}
      objectFit={objectFit}
    />
    
  );
};

export default SomethingElse;
