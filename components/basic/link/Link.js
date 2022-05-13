import NextJsLink from "next/link";
import PropTypes from "prop-types";

const Link = ({ link, className, newTab, children }) => {
  const isInternalLink = link.startsWith("/");

  if (isInternalLink) {
    return (
      <NextJsLink href={link}>
        <a className={className}>{children}</a>
      </NextJsLink>
    );
  }

  if (newTab) {
    return (
      <a href={link} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={link} className={className} target="_self">
      {children}
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  newTab: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Link.defaultProps = {
  className: "",
  newTab: false,
};

export default Link;
