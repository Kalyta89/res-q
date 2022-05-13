import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";
import Image from "@/components/basic/image/Image";
import Markdown from "@/components/basic/markdown/Markdown";

import { useIsDesktop } from "@/utils/hooks";
import { mediumText } from "@/utils/defaultProps";

import DefaultImage from "@/assets/default-image.png";

import {
  biographyImageLeftGrid,
  biographyImageRightGrid,
  biographyImageGridArea,
  biographyTitleGridArea,
  biographyLineGridArea,
  biographyContentGridArea,
  biographyImageFilter,
  fixMobileOverflow,
  shortText,
  longText,
} from "./Biography.module.scss";

const Biography = ({
  image,
  imageOn,
  title,
  subtitle,
  text,
  buttonLabel,
  reduceTextLength,
  className,
  contentClasses,
}) => {
  const [viewMore, setViewMore] = useState(false);
  const applyDesktopContent = useIsDesktop();

  const biographyGrid = imageOn === "right" ? biographyImageRightGrid : biographyImageLeftGrid;
  const textReduceRequired = !viewMore && !applyDesktopContent && reduceTextLength && text && text.length > 300;

  return (
    <div className={`container ${className}`}>
      <div className={classNames(biographyGrid, "items-center w-full")}>
        <div
          className={classNames(
            biographyImageGridArea,
            "relative w-full h-full rounded-full md:h-300px lg:h-382px",
            fixMobileOverflow
          )}
        >
          <Image media={image} sizes="(min-width: 768px) 384px, 132px" />
          <div className={classNames("absolute w-full h-full z-10 left-0px top-0px", biographyImageFilter)} />
        </div>
        <div className={classNames(biographyTitleGridArea, "md:hidden")}>
          <Text typography="h2" text={title} />
          {subtitle ? (
            <Text
              typography="font-titillium font-semibold text-18px leading-27px"
              text={subtitle}
              color="text-theme-light-blue"
            />
          ) : null}
        </div>
        <div
          className={classNames(biographyLineGridArea, "h-2px w-full mt-23px mb-15px bg-theme-blue md:hidden")}
        />
        <div className={classNames(biographyContentGridArea, "grid md:hidden")}>
          <Markdown className={viewMore ? longText : shortText} markdown={text} />
          {textReduceRequired ? (
            <Button
              className="justify-self-center mt-29px"
              onClick={() => setViewMore(!viewMore)}
              variants="light_blue"
              py="py-10px"
              px="px-10px"
              btnClasses="w-137px"
            >
              {buttonLabel}
            </Button>
          ) : null}
        </div>

        <div className={classNames(biographyContentGridArea, "hidden md:block", contentClasses)}>
          <Text typography="h2" text={title} />
          {subtitle ? <Text typography="h4" text={subtitle} color="text-theme-light-blue" className="-mt-11px" /> : null}
          <div
            className={classNames(
              "h-2px w-full bg-theme-blue",
              { "mt-15px mb-15px": subtitle },
              { "mt-20px mb-20px": !subtitle }
            )}
          />
          <Markdown markdown={text} />
        </div>
      </div>
    </div>
  );
};

Biography.propTypes = {
  image: PropTypes.object,
  imageOn: PropTypes.oneOf(["right", "left"]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  textLength: PropTypes.number,
  buttonLabel: PropTypes.string,
  reduceTextLength: PropTypes.bool,
  className: PropTypes.string,
  contentClasses: PropTypes.string,
  contentTextTypography: PropTypes.string,
  contentTextClasses: PropTypes.string,
};

Biography.defaultProps = {
  image: DefaultImage,
  imageOn: "left",
  title: "Some title",
  text: mediumText,
  textLength: 200,
  buttonLabel: "",
  reduceTextLength: true,
  className: "",
  contentClasses: "",
  contentTextTypography: "body",
  contentTextClasses: "",
};

export default Biography;
