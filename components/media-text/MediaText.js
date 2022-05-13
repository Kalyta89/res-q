import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";

import { placeholderImage } from "@/utils/defaultProps";
import  LiveDashboard  from "@/components/home/LiveDashboard";

import {
  gridMediaOnRight,
  gridMediaOnLeft,
  gridTextArea,
  gridMediaArea,
  mediaTextContent,
} from "./MediaText.module.scss";

const mediaRendered = (typeOfMedia, media) => {
  switch (typeOfMedia){
    case "image": return (<Image src={media} alt="some" layout="intrinsic" placeholder="blur" quality={100} />);
    case "embeddedDashboard": return (<LiveDashboard />);
    default: return (<iframe
      className="w-full"
      src={media}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    />);
  }
}

const MediaText = ({
  typeOfMedia,
  title,
  content,
  contentContainerClasses,
  media,
  contentClasses,
  mediaOn,
  className,
}) => {

  const mediaPos = mediaOn === "right" ? gridMediaOnRight : gridMediaOnLeft;

  return (
    <div className={classNames("container", className)}>
      <div className={classNames(mediaPos, "items-center")}>
        <div className={classNames(gridTextArea, contentContainerClasses)}>
          <Text typography="h2" text={title} />
          <hr className="hr-line mt-18px" />
          <Text typography="body" text={content} className={classNames(mediaTextContent, contentClasses)} />
        </div>
        <div className={classNames(gridMediaArea, "justify-center")}>{mediaRendered(typeOfMedia, media)}</div>
      </div>
    </div>
  );
};

MediaText.propTypes = {
  media: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.any,
  typeOfMedia: PropTypes.oneOf(["image", "video", "embeddedDashboard"]),
  mediaOn: PropTypes.oneOf(["left", "right"]),
  contentContainerClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  className: PropTypes.string,
};

MediaText.defaultProps = {
  media: placeholderImage,
  title: "some text",
  content: "some text",
  typeOfMedia: "image",
  mediaOn: "left",
  contentContainerClasses: "",
  contentClasses: "",
  className: "",
};

export default MediaText;
