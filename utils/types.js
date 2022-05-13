import PropTypes from "prop-types";

export const mediaPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alternativeText: PropTypes.string,
  mime: PropTypes.string,
  url: PropTypes.string,
  mock: PropTypes.object,
});
