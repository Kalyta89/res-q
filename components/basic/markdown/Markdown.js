import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ReactMarkdown from "react-markdown";

import { resolveTypography } from "@/components/basic/text/Text";

import {
  markdown_heading,
  markdown_text,
  markdown_ol,
  markdown_ol_li,
  markdown_ul,
  markdown_ul_li,
} from "./Markdown.module.scss";

const COMPONENTS = {
  h1: ({ node, level, ...props }) => (
    <h1 className={classNames(resolveTypography("h2"), "text-theme-blue", markdown_heading)} {...props} />
  ),
  h2: ({ node, level, ...props }) => (
    <h2 className={classNames(resolveTypography("h2"), "text-theme-blue", markdown_heading)} {...props} />
  ),
  h3: ({ node, level, ...props }) => (
    <h3 className={classNames(resolveTypography("h3"), "text-theme-blue", markdown_heading)} {...props} />
  ),
  h4: ({ node, level, ...props }) => (
    <h4 className={classNames(resolveTypography("h4"), "text-theme-light-blue", markdown_heading)} {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className={classNames(resolveTypography("body"), "text-theme-blue", markdown_text)} {...props} />
  ),
  ol: ({ node, depth, ordered, ...props }) => (
    <ol className={classNames(resolveTypography("body"), "text-theme-blue", markdown_ol)} {...props} />
  ),
  ul: ({ node, depth, ordered, ...props }) => (
    <ul className={classNames(resolveTypography("body"), markdown_ul, "text-theme-blue")} {...props} />
  ),
  li: ({ node, index, ordered, children, ...props }) => (
    <li className={classNames(ordered ? markdown_ol_li : markdown_ul_li, "text-theme-blue")} {...props}>
      <div>{children}</div>
    </li>
  ),
  a: ({ node, href, children, ...props }) => (
    <a href={href} target="_blank" className="text-theme-light-blue hover:text-link-hover underline " {...props}>
      {children}
    </a>
  ),
};

const Markdown = ({ markdown, components, ignoreDefaultComponents, dropWrapper, className }) => {
  const mergedComponents = ignoreDefaultComponents ? components : { ...COMPONENTS, ...components };

  if (dropWrapper) {
    return <ReactMarkdown components={mergedComponents}>{markdown}</ReactMarkdown>;
  }
  return (
    <div className={className}>
      <ReactMarkdown components={mergedComponents}>{markdown}</ReactMarkdown>
    </div>
  );
};

Markdown.propTypes = {
  markdown: PropTypes.string,
  components: PropTypes.object,
  ignoreDefaultComponents: PropTypes.bool,
  dropWrapper: PropTypes.bool,
  className: PropTypes.string,
};

Markdown.defaultProps = {
  components: {},
  ignoreDefaultComponents: false,
  dropWrapper: false,
  className: "",
};

export default Markdown;
