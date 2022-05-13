import React from "react";
import PropTypes from "prop-types";
import Text from "../text/Text";

const TextArea = ({ label, placeholder, type, id, name, value, className, onChange, textareaClassName }) => {
  return (
    <div className={`${className}`}>
      {label ? (
        <div className={`grid grid-flow-col w-full`}>
          <label htmlFor={name} className={`justify-self-start`}>
            <Text typography="footer-bold" className="pb-8px" text={label} />
          </label>
        </div>
      ) : null}
      <textarea
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-208px pl-20px pt-10px text-15px resize-none border border-transparent hover:border-theme-blue focus:outline-none ${textareaClassName}`}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  label: "some label",
  placeholder: "",
  type: "",
  id: "",
  name: "",
  className: "",
};

export default TextArea;
