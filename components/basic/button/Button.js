import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Link from "@/components/basic/link/Link";

import {
  buttonBorderBlue,
  buttonBigBorderBlue,
  buttonBlue,
  buttonScaled,
  buttonBorderWhite,
  buttonLightBlue,
  focusOutline,
  joinButton,
  signInButton,
} from "./Button.module.scss";
import {
  typography_button,
  typography_button_bigger,
  typography_button_scalable,
  typography_rectangular_button,
} from "@/components/basic/text/Text.module.scss";

const BUTTONS = {
  border_blue: classNames(buttonBorderBlue, typography_button),
  border_blue_big: classNames(buttonBigBorderBlue, typography_button_bigger),
  blue: classNames(buttonBlue, typography_button),
  blue_bigger: classNames(buttonBlue, typography_button_bigger),
  scaled: classNames(buttonScaled, typography_button_scalable),
  border_white: classNames(buttonBorderWhite, typography_button),
  light_blue: classNames(buttonLightBlue, typography_button_bigger),
  join_button: classNames(joinButton, typography_rectangular_button),
  sign_in_button: classNames(signInButton, typography_rectangular_button),
};

const resolveButton = (variants) => {
  const resolvedCss = BUTTONS[variants];
  if (!resolvedCss) {
    throw new Error(`Failed to resolve variant: ${variants}`);
  }
  return resolvedCss;
};

const ScaledButton = ({ children, link, onClick, className, buttonClasses }) => {
  if (link) {
    return (
      <div className={classNames("inline-block mt-2px mb-2px", className)}>
        <div className="flex items-center p-2px -my-2px h-65px md:h-73px">
          <div tabIndex={1} className={classNames("grid p-5px -m-5px rounded-5px focus:outline-none", focusOutline)}>
            <Link link={link} className={buttonClasses}>
              {children}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames("inline-block mt-2px mb-2px", className)}>
      <div className="grid items-center -my-2px h-65px md:h-73px">
        <button onClick={onClick} className="p-5px -m-5px">
          <span className={buttonClasses}>{children}</span>
        </button>
      </div>
    </div>
  );
};

const Button = ({
  children,
  btnClasses,
  link,
  onClick,
  variants,
  px,
  py,
  classForButton,
  tabSelectClass,
  className,
}) => {
  const buttonClasses = classNames(
    px,
    py,
    btnClasses,
    resolveButton(variants),
    "focus-visible:outline-none, focus:outline-none"
  );
  if (link) {
    return variants == "scaled" ? (
      <ScaledButton link={link} buttonClasses={buttonClasses} className={className}>
        {children}
      </ScaledButton>
    ) : (
      <div className={classNames("inline-block", className)}>
        <div tabIndex={1} className={classNames("grid focus:outline-none", focusOutline, tabSelectClass)}>
          <Link link={link} className={buttonClasses}>
            {children}
          </Link>
        </div>
      </div>
    );
  }

  return variants == "scaled" ? (
    <ScaledButton onClick={onClick} buttonClasses={buttonClasses} className={className}>
      {children}
    </ScaledButton>
  ) : (
    <div className={classNames("inline-block", className)}>
      <button onClick={onClick} className={classNames(tabSelectClass, classForButton)}>
        <span className={classNames(buttonClasses, "block")}>{children}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
  variants: PropTypes.oneOf([
    "border_blue",
    "blue",
    "blue_bigger",
    "scaled",
    "border_white",
    "light_blue",
    "border_blue_big",
    "join_button",
    "sign_in_button",
  ]),
  py: PropTypes.string,
  px: PropTypes.string,
  classForButton: PropTypes.string,
  className: PropTypes.string,
  tabSelectClass: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  variants: "blue",
  py: "py-9px",
  px: "px-30px",
  classForButton: "",
  className: "",
  tabSelectClass: "p-5px -m-5px",
};

export default Button;
