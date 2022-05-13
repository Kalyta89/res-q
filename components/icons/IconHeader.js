import React from "react";
import classNames from "classnames";

import { headerTriangle } from "../header/Header.module.scss";

const IconHeader = () => {
  return (
    <svg
      className={classNames(headerTriangle, "mt-5px ml-8px")}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 24 24"
    >
      <path d="M24 22h-24l12-20z" fill="#1C5783" />
    </svg>
  );
};

export default IconHeader;
