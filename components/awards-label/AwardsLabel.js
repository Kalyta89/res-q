import classNames from "classnames";
import PropTypes from "prop-types";

import { label, platinum, gold, diamond } from "./AwardsLabel.module.scss";

const resolveLabelTypeCss = (variant) => {
  switch (variant) {
    case "platinum":
      return platinum;
    case "gold":
      return gold;
    case "diamond":
      return diamond;
  }
};

const resolveLabelText = (variant) => {
  switch (variant) {
    case "platinum":
      return "Platinum";
    case "gold":
      return "Gold";
    case "diamond":
      return "Diamond";
  }
};

const AwardsLabel = ({ variant }) => {
  return <div className={classNames(label, resolveLabelTypeCss(variant))}>{resolveLabelText(variant)}</div>;
};

AwardsLabel.propTypes = {
  variant: PropTypes.oneOf(["platinum", "gold", "diamond"]),
};

AwardsLabel.defaultProps = {
  variant: "",
};

export default AwardsLabel;
