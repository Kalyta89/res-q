import React from "react";
import classNames from "classnames";

import { useIsDesktop } from "@/utils/hooks";

const IconDownload = ({ className }) => {
  const isDesktop = useIsDesktop();
  return (
    <svg
      className={classNames("flex-shrink-0 mr-7px md:mr-15px", className)}
      xmlns="http://www.w3.org/2000/svg"
      height={isDesktop ? 24 : 20}
      width={isDesktop ? 22 : 19}
      viewBox="0 0 19.124 20.527"
    >
      <g id="np_download_1331277_000000" transform="translate(-33.879 -28.437)">
        <path
          id="Path_119"
          data-name="Path 119"
          d="M51.487,71.137H35.395a1.212,1.212,0,1,1,0-2.348H51.487a1.212,1.212,0,1,1,0,2.348Z"
          transform="translate(0 -22.173)"
          fill="#fff"
        />
        <path
          id="Path_120"
          data-name="Path 120"
          d="M53.153,37.668a2.052,2.052,0,0,0-2.274,0L47.266,40.3V29.611c0-.648-.72-1.174-1.609-1.174s-1.609.526-1.609,1.174V40.3l-3.611-2.634a2.059,2.059,0,0,0-2.276,0,.968.968,0,0,0,0,1.661l6.322,4.612a2.239,2.239,0,0,0,1.175.37,2.092,2.092,0,0,0,1.181-.375l6.315-4.607a.966.966,0,0,0,0-1.661Z"
          transform="translate(-2.233)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default IconDownload;
