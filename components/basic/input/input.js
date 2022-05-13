import React from "react";
import PropTypes from "prop-types";
import Text from "../text/Text";

const Input = ({ label, placeholder, id, type, className, name, value, onChange, inputClassName }) => {
  return (
    <div className={`${className}`}>
      {label ? (
        <div className={`grid grid-flow-col w-full`}>
          <label htmlFor={name} className={`justify-self-start sm+:ml-19px`}>
            <Text typography="footer-bold" className="field-labels-font text-black-gray pb-8px" text={label} />
          </label>
        </div>
      ) : null}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-40px pl-20px text-15px border border-transparent hover:border-theme-blue focus:outline-none ${inputClassName}`}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: "some label",
  placeholder: "",
  type: "",
  id: "",
  name: "",
  className: "",
};

export default Input;
