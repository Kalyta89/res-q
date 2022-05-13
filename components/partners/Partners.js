import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Image from "@/components/basic/image/Image";
import Link from "@/components/basic/link/Link";

import { useApplyAfterWidth } from "@/utils/hooks";
import { rescaleImage } from "@/utils/rescaleImage";

import { listGrid } from "./Partners.module.scss";

const DESKTOP_HEIGHT = 86;
const MOBILE_HEIGHT = 68;

const PartnerLogo = ({ image, url, desiredHeight }) => {
  if (url) {
    return (
      <Link newTab link={`https://${url}`}>
        <Image
          priority
          media={image}
          width={rescaleImage(image.width, image.height, desiredHeight)}
          height={desiredHeight}
        />
      </Link>
    );
  } else {
    return (
      <Image
        priority
        media={image}
        width={rescaleImage(image.width, image.height, desiredHeight)}
        height={desiredHeight}
      />
    );
  }
};

const Partners = ({ partnerItems, className }) => {
  // required for very small mobile devices
  const isBiggerMobileOrDesktop = useApplyAfterWidth(429);

  const desiredHeight = isBiggerMobileOrDesktop ? DESKTOP_HEIGHT : MOBILE_HEIGHT;

  return (
    <div className="bg-white">
      <div className={classNames("container", className)}>
        <div className="py-30px">
          <ul className={classNames("mx-auto", listGrid)}>
            {partnerItems.map(({ image, url }, index) => (
              <li key={index} className="grid justify-center content-center">
                <PartnerLogo image={image} url={url} desiredHeight={desiredHeight} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Partners.propTypes = {
  partnerItems: PropTypes.array,
  className: PropTypes.string,
};

Partners.defaultProps = {
  className: "",
};
export default Partners;
