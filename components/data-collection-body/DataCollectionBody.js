import PropTypes from "prop-types";
import Image from "next/image";
import classNames from "classnames";

import Button from "@/components/basic/button/Button";
import IconDownload from "@/components/icons/IconDownload";
import Markdown from "@/components/basic/markdown/Markdown";

import { useIsDesktop } from "@/utils/hooks";
import { getSourceUrl } from "@/utils/url";

import DefaultImage from "@/assets/pages/data-collection/data-colection-document.png";

import { shadow } from "./DataCollectionBody.module.scss";

const DataCollectionBody = ({ image, bodyText, files }) => {
  const isDesktop = useIsDesktop();
  return (
    <div className="grid justify-items-center">
      <Markdown className="mb-50px md:mb-84px" markdown={bodyText} />
      <div className={classNames(shadow, "mb-72px md:mb-89px")}>
        <Image src={image} width={isDesktop ? 451 : 273} height={isDesktop ? 630 : 384} />
      </div>
      <div className="grid justify-items-center gap-35px md:gap-50px">
        {files.map((file, index) => (
          <a key={index} href={getSourceUrl(file.url)} download={file.name}>
            <Button
              variants={index % 2 ? "light_blue" : "blue_bigger"}
              px="px-44px"
              py="py-10px"
              btnClasses="flex items-center"
            >
              <IconDownload />
              {file.name}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

DataCollectionBody.propTypes = {
  image: PropTypes.object,
  bodyText: PropTypes.string,
  files: PropTypes.array,
};

DataCollectionBody.defaultProps = {
  image: DefaultImage,
  bodyText: "some text",
  files: [],
};

export default DataCollectionBody;
