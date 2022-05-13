import PropTypes from "prop-types";
import Image from "next/image";
import classNames from "classnames";

import Button from "@/components/basic/button/Button";
import IconDownload from "@/components/icons/IconDownload";
import Markdown from "@/components/basic/markdown/Markdown";

import { useIsDesktop } from "@/utils/hooks";
import { getSourceUrl } from "@/utils/url";

import DefaultImage from "@/assets/pages/data-collection/data-colection-document.png";
                
const MarkdownDownloadLink = ({ image, bodyText, file }) => {
  const isDesktop = useIsDesktop();
  return (
    <div className="grid justify-items-center">
      <Markdown className="mb-50px md:mb-84px" markdown={bodyText} />
      <div className="grid justify-items-center gap-35px md:gap-50px">
          <Button
            variants={"light_blue"}
            px="px-44px"
            py="py-10px"
            btnClasses="flex items-center"
            link="/data-policies/popi-act-full"
          >
            {"View full text"}
          </Button>
          <a key={1} href={getSourceUrl(file.url)} >

            <Button
              variants={"blue_bigger"}
              px="px-44px"
              py="py-10px"
              btnClasses="flex items-center"
            >
              <IconDownload />
              {file.name}
            </Button>
          </a>
          



      </div>
    </div>
  );
};

MarkdownDownloadLink.propTypes = {
  image: PropTypes.object,
  bodyText: PropTypes.string,
  files: PropTypes.array,
};

MarkdownDownloadLink.defaultProps = {
  image: DefaultImage,
  bodyText: "some text",
  files: [],
};

export default MarkdownDownloadLink;
