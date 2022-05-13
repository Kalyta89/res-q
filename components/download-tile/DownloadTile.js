import PropTypes from "prop-types";

import Image from "../basic/image/Image";
import Text from "@/components/basic/text/Text";

import { getSourceUrl } from "@/utils/url";
import { rescaleImage } from "@/utils/rescaleImage";

import IconDownload from "../icons/IconDownload";

const DownloadTile = ({ title, links, fileLink, fileName, description, image, className }) => {
  const desiredHeight = 246;

  return (
    <div className={`mx-auto ${className}`}>
      <div className="grid place-items-center h-246px">
        <Image
          media={image}
          alt={title}
          width={rescaleImage(image.width, image.height, desiredHeight)}
          height={desiredHeight}
          quality={100}
        />
      </div>

      <div className="flex items-center justify-between border-b-2 border-theme-blue pt-15px pb-13px">
        <Text typography="h3_bold" text={title} className="w-10/12" />
        <a
          href={getSourceUrl(fileLink)}
          download={fileName}
          className="w-52px md:w-62px h-52px md:h-62px rounded-full bg-theme-light-blue grid justify-center min-w-62px"
        >
          <IconDownload className="mt-14px ml-6px md:ml-15px md:mt-18px" />
        </a>
      </div>
      <Text
        typography="font-titillium font-normal not-italic text-18px leading-29px md:text-20px md:leading-24px"
        className="pt-10px mb-17px"
        text={description}
      />
      {links.map((link, index) => {
        return (
          <a key={index} href={getSourceUrl(link.link)} download={link.linkLabel} className="my-5px">
            <Text typography="body" className="underline" text={link.linkLabel} />
          </a>
        );
      })}
    </div>
  );
};

DownloadTile.propTypes = {
  title: PropTypes.string,
  linkTopLabel: PropTypes.string,
  linkTop: PropTypes.string,
  linkBottomLabel: PropTypes.string,
  linkBottom: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  image: PropTypes.object,
  className: PropTypes.string,
};
DownloadTile.defaultProps = {
  title: "some title",
  linkTopLabel: "some linkTopLabel",
  linkTop: "/",
  linkBottomLabel: "some linkBottomLabel",
  linkBottom: "/",
  description: "some description",
  image: {},
  className: "",
};
export default DownloadTile;
