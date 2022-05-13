import Image from "next/image";
import classNames from "classnames";
import PropTypes from "prop-types";

import Text from "@/components/basic/text/Text";

import DefaultImage from "@/assets/default-image.png";

import { gridImageText, gridTextArea, gridImageArea } from "./ImageText.module.scss";

const ImageText = ({ content, image, className }) => {
  return (
    <div className={classNames("container", className)}>
      <div className={classNames(gridImageText, "w-full")}>
        <div className={gridTextArea}>
          <Text typography="body" text={content} />
        </div>
        <div className={gridImageArea}>
          <Image src={image} alt="img" quality={100} />
        </div>
      </div>
    </div>
  );
};

ImageText.propTypes = {
  image: PropTypes.object,
  content: PropTypes.any,
  className: PropTypes.string,
};

ImageText.defaultProps = {
  image: DefaultImage,
  content: "some text",
  className: "",
};

export default ImageText;
