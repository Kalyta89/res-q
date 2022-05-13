import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {
  typography_h1,
  typography_h2,
  typography_h3,
  typography_h3_bold,
  typography_h4,
  typography_h4_medium,
  typography_body,
  typography_footer,
  typography_footer_bold,
  typography_footer_legal,
  typography_button,
  typography_button_scalable,
  typography_rectangular_button,
  typography_navigation,
  typography_faq_accordion_content,
  typography_h1_home_hero,
} from "./Text.module.scss";

const TYPOGRAPHIES = {
  h1: typography_h1,
  h2: typography_h2,
  h3: typography_h3,
  "h3_bold":  typography_h3_bold,
  h4: typography_h4,
  h4_medium: typography_h4_medium,
  body: typography_body,
  footer: typography_footer,
  "footer-bold": typography_footer_bold,
  "footer-legal": typography_footer_legal,
  button: typography_button,
  "button-scalable": typography_button_scalable,
  "typography-rectangular-button": typography_rectangular_button,
  navigation: typography_navigation,
  "faq-accordion-content": typography_faq_accordion_content,
  "h1-home-hero": typography_h1_home_hero,
};

export const resolveTypography = (typography) => {
  const resolvedCss = TYPOGRAPHIES[typography];
  if (!resolvedCss) {
    return typography;
  }
  return resolvedCss;
};

const Text = ({ tag, className, typography, color, text, children, ...otherProps }) => {
  let HtmlElement = null;
  if (tag === "span") {
    HtmlElement = ({ children, __dangerouslySetInnerHTML, ...otherProps }) => {
      return <span {...otherProps}>{children}</span>;
    };
  } else {
    HtmlElement = ({ children, __dangerouslySetInnerHTML, ...otherProps }) => {
      return <div {...otherProps}>{children}</div>;
    };
  }

  const resolveTypographyCss = resolveTypography(typography);
  return (
    <HtmlElement {...otherProps} className={classNames(resolveTypographyCss, color, className)}>
      {text || children || "missing text"}
    </HtmlElement>
  );
};

Text.propTypes = {
  text: PropTypes.any,
  tag: PropTypes.oneOf(["div", "span"]),
  className: PropTypes.string,
  typography: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  tag: "div",
  className: "",
  color: "text-theme-blue",
};

export default Text;
