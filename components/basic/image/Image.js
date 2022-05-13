import NextImage from "next/image";
import PropTypes from "prop-types";
import classNames from "classnames";

import { getSourceUrl } from "@/utils/url";
import { mediaPropTypes } from "@/utils/types";

const Image = ({ media, width, height, sizes, priority, layout, objectFit, objectPosition, className }) => {
  const imageProps = {
    src: media.mock ? media.mock : getSourceUrl(media.url),
    alt: media.alternativeText || "no description",
    width: width || media.width,
    height: height || media.height,
    sizes: sizes,
    quality: 100,
    priority: priority,
    layout: layout,
    objectFit: objectFit,
    objectPosition: objectPosition,
    className: classNames(className),
  };

  // Fixed size image
  if (width && height) {
    return <NextImage {...imageProps} />;
  }

  // The image is responsive
  return <NextImage layout="responsive" objectFit="contain" {...imageProps} />;
};

Image.propTypes = {
  media: mediaPropTypes.isRequired,
  sizes: PropTypes.string,
  layout: PropTypes.string,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  sizes: undefined,
  className: "",
};

export default Image;
