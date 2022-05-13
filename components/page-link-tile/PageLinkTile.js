import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";
import Link from "@/components/basic/link/Link";

import DefaultImage from "@/assets/default-image.png";
import Arrow from "@/assets/components/page-link-tile/arrow.svg";

import { tile, grayscale } from "@/components/page-link-tile/PageLinkTile.module.scss";

const PageLinkTile = ({ tileText, tileTextPlacement, image, linkTo, className }) => {
  return (
    <Link link={linkTo} className={classNames("w-full rounded-8px overflow-hidden group", tile, className)}>
      <div className="relative h-216px md:h-315px">
        <Image
          src={image}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          quality={100}
          className={classNames("transform group-hover:scale-106 transition duration-300 ease-out", grayscale)}
        />
        <div className="absolute h-full w-full mix-blend-color bg-theme-blue opacity-5 group-hover:opacity-25"></div>
      </div>
      <div className="flex items-center justify-center min-h-83px md:h-151px px-20px bg-theme-light-blue group-hover:bg-button-light-blue-hover">
        <Text
          typography="font-titillium font-bold text-28px md:text-40px leading-32px md:leading-44px"
          text={tileText}
          color="text-white"
          className={classNames("text-center md:ml-4px", tileTextPlacement)}
        />
        <div className="flex-shrink-0 w-32px h-22px md:w-38px md:h-26px mr-5px md:mr-0px ml-15px">
          <Image src={Arrow} />
        </div>
      </div>
    </Link>
  );
};

PageLinkTile.propTypes = {
  tileText: PropTypes.string,
  tileTextPlacement: PropTypes.string,
  image: PropTypes.object,
  linkTo: PropTypes.string,
  className: PropTypes.string,
};

PageLinkTile.defaultProps = {
  tileText: "some tileText",
  tileTextPlacement: "mt-23px mb-22px",
  image: DefaultImage,
  linkTo: "/",
  className: "",
};

export default PageLinkTile;
