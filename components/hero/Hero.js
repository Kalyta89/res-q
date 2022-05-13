import React from "react";
import PropTypes from "prop-types";
import Image from "@/components/basic/image/Image";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";
import { useIsDesktop } from "@/utils/hooks";

import DefaultImage from "@/assets/default-image.png";

import { hero_image } from "./Hero.module.scss";

const defaultImage = {
  mock: DefaultImage,
};

const Hero = ({ image, imageMobile, title, className }) => {
  const isDesktop = useIsDesktop();

  return (
    <div className={classNames("flex items-center relative h-131px md:h-300px px-24px xl:px-0px bg-white")}>
      {isDesktop ? (
        <Image
          media={image}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className={hero_image}
        />
      ) : (
        <Image
          media={imageMobile}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className={hero_image}
        />
      )}
      <div className="relative text-center mx-auto">
        <Text typography="h1" text={title} className={classNames("text-white", className)} />
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.object,
  imageMobile: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string,
};

Hero.defaultProps = {
  image: defaultImage,
  imageMobile: defaultImage,
  title: "some title",
  className: "",
};
export default Hero;
