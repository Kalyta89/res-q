import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { icon, arrow_button_placement } from "./ContentSection.module.scss";

const ArrowButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={classNames(arrow_button_placement, "hidden md:block")}>
      <button className="flex justify-center items-center w-50px h-50px rounded-full" onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={icon}
          width="18.162"
          height="19.798"
          viewBox="0 0 18.162 19.798"
        >
          <path
            id="Path_123"
            data-name="Path 123"
            d="M55.314,39.95a2.173,2.173,0,0,0-2.592,0L48.6,43.237V29.9a1.881,1.881,0,0,0-3.668,0V43.235l-4.115-3.285a2.179,2.179,0,0,0-2.594,0,1.268,1.268,0,0,0,0,2.071l7.205,5.752a2.414,2.414,0,0,0,1.339.462,2.257,2.257,0,0,0,1.346-.468l7.2-5.746a1.266,1.266,0,0,0,0-2.071Z"
            transform="translate(55.852 48.235) rotate(180)"
          />
        </svg>
      </button>
    </div>
  );
};

const ContentSection = ({ className, children }) => {
  return (
    <div className={classNames("grid justify-items-center relative bg-content-bg", className)}>
      {children}
      <ArrowButton />
    </div>
  );
};

ContentSection.propTypes = {
  className: PropTypes.string,
};

ContentSection.defaultProps = {
  className: "",
};

const Container = ({ children, className }) => {
  return (
    <div className={classNames("container", className)}>
      <div className="w-full">{children}</div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

ContentSection.Container = Container;

export default ContentSection;
