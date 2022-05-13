import PropTypes from "prop-types";

import Text from "@/components/basic/text/Text";
import Image from "@/components/basic/image/Image";
import Button from "../basic/button/Button";
import { useIsDesktop } from "@/utils/hooks";
import { rescaleImage } from "@/utils/rescaleImage";

import { partner_tile_grid, partner_tile_text } from "./PartnerTile.module.scss";

const PartnerTile = ({ title, buttonLink, description, image, className }) => {
  const isDesktop = useIsDesktop();
  const desiredHeight = isDesktop ? 260 : 240;

  return (
    <div className={`grid w-full max-w-404px ${className} ${partner_tile_grid}`}>
      <div className="self-center justify-self-center">
        <Image
          media={image}
          alt={title}
          width={rescaleImage(image.width, image.height, desiredHeight)}
          height={desiredHeight}
          quality={100}
        />
      </div>
      <div className="flex items-center justify-between border-b-2 border-theme-blue pt-15px pb-13px">
        <Text typography="font-titillium font-bold text-18px md:text-30px leading-31px md:leading-35px" text={title} />
      </div>
      <Text
        typography="font-titillium font-normal not-italic text-18px md:text-20px leading-24px"
        className={`pt-10px mb-17px text-ellipsis ${partner_tile_text}`}
        text={description}
      />
      <Button link={buttonLink} className="mt-auto justify-self-start">
        View partner profile
      </Button>
    </div>
  );
};

PartnerTile.propTypes = {
  title: PropTypes.string,
  buttonLink: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  className: PropTypes.string,
};

PartnerTile.defaultProps = {
  title: "some title",
  buttonLink: "/",
  description: "some description",
  image: {},
  className: "",
};

export default PartnerTile;
