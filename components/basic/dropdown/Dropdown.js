import { useMemo } from "react";
import Image from "next/image";
import Select, { components } from "react-select";
import { isMobile } from "react-device-detect";

import Text from "@/components/basic/text/Text";

import { useIsDesktop } from "@/utils/hooks";

import TriangleIcon from "@/assets/components/header/triangle.svg";

import { headerTriangleOpen, headerTriangleClose, nativeSelectWrap, nativeSelect } from "./Dropdown.module.scss";

const Dropdown = ({
  options,
  anyOption,
  label,
  isSearchable,
  isAnyOption,
  isContactForm,
  onChange,
  className,
  borderColor,
  placeholder,
}) => {
  const isDesktop = useIsDesktop();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: isDesktop ? "63px" : "41px",
      fontSize: isDesktop ? "30px" : "16px",
      backgroundColor: "#EFEFEF",
      borderRadius: "5px",
      border: `1px solid ${borderColor ? borderColor : "#DBDBDB"}`,
      fontFamily: "Titillium Web, Roboto, Arial, sans-serif",
      backspaceRemovesValue: false,
      cursor: "pointer",
      boxShadow: undefined,
      "&:hover": {
        borderColor: "#1C5783",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#1c5783",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "5px",
      padding: 0,
      border: "1px solid #DBDBDB",
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "583px",
      padding: "14px",
      backgroundColor: "#EFEFEF",
      "&::-webkit-scrollbar": {
        width: isDesktop ? "12px" : "9px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#CECECE",
        borderRadius: "5px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#A3A3A3",
        borderRadius: "5px",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#EFEFEF",
      color: "#1c5783",
      fontFamily: "Titillium Web, Roboto, Arial, sans-serif",
      fontSize: isDesktop ? "30px" : "16px",
      background: state.isFocused && "#DBDBDB",
      cursor: "pointer",
      borderBottom: "1px solid #1C57833E",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1c5783",
    }),
  };
  const whiteSelect = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: isDesktop ? "56px" : "40px",
      fontSize: "16px",
      backgroundColor: "#fff",
      borderRadius: "0px",
      border: `1px solid ${borderColor ? borderColor : "#DBDBDB"}`,
      fontFamily: "Titillium Web, Roboto, Arial, sans-serif",
      backspaceRemovesValue: false,
      cursor: "pointer",
      boxShadow: undefined,
      "&:hover": {
        borderColor: "#1C5783",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#1c5783",
    }),
    menu: (provided) => ({
      ...provided,
      padding: 0,
      border: `1px solid ${borderColor ? borderColor : "#DBDBDB"}`,
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "583px",
      padding: "14px",
      backgroundColor: "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#1c5783",
      fontFamily: "Titillium Web, Roboto, Arial, sans-serif",
      fontSize: isDesktop ? "16px" : "16px",
      background: state.isFocused && "#DBDBDB",
      cursor: "pointer",
      borderBottom: "1px solid #1C57833E",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1c5783",
    }),
  };

  const DropdownIndicator = (props) => {
    const {
      selectProps: { menuIsOpen },
    } = props;
    return (
      <components.DropdownIndicator {...props} className="mr-5px">
        <Image
          src={TriangleIcon}
          alt="triangle"
          width={isDesktop ? "19" : "11"}
          height={isDesktop ? "16" : "10"}
          className={menuIsOpen ? headerTriangleOpen : headerTriangleClose}
        />
      </components.DropdownIndicator>
    );
  };

  const dropdownOptions = useMemo(() => {
    if (isAnyOption) {
      return [anyOption, ...options];
    } else {
      return options;
    }
  }, [isAnyOption, anyOption, options]);
  return (
    <label className={className}>
      <Text
        typography={isContactForm ? "footer-bold" : "h4"}
        text={label}
        className={`${isContactForm ? "mb-9px md:mb-8px" : "mb-9px md:mb-16px"}`}
      />
      {isMobile ? (
        <div>
          <div className={nativeSelectWrap}>
            <select
              className={nativeSelect}
              onChange={(e) => {
                onChange(e.target.value != "- Any -" ? e.target : "");
              }}
            >
              {dropdownOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <Select
          isSearchable={isSearchable}
          styles={isContactForm ? whiteSelect : customStyles}
          components={{ DropdownIndicator }}
          options={dropdownOptions}
          placeholder={placeholder ? placeholder : dropdownOptions[0].label}
          onChange={(selectedOption) => {
            onChange(selectedOption);
          }}
        />
      )}
    </label>
  );
};

Dropdown.defaultProps = {
  isSearchable: false,
  isAnyOption: true,
  onChange: () => {},
  anyOption: {
    value: null,
    label: "- Any -",
  },
  options: [
    { value: "item1", label: "Item 1" },
    { value: "item2", label: "Item 2" },
    { value: "item3", label: "Item 3" },
  ],
};

export default Dropdown;
