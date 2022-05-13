import { useMemo } from "react";
import Image from "next/image";
import ReactSelect, { components } from "react-select";
import { isMobile } from "react-device-detect";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";

import { useApplyAfterWidth } from "@/utils/hooks";

import TriangleIcon from "@/assets/components/header/triangle.svg";

import {
  headerTriangleOpen,
  headerTriangleClose,
  nativeSelectWrap,
  nativeSelect,
  checkbox,
} from "./MultiSelectDropdown.module.scss";

const MultiSelectDropdown = ({ options, label, isSearchable, onChange, className, textClass, selectClass }) => {
  const isDesktop = useApplyAfterWidth(1024);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingTop: isDesktop ? "8px" : "4px",
      paddingBottom: isDesktop ? "6px" : "4px",
      paddingLeft: isDesktop ? "14px" : "8px",
      fontSize: isDesktop ? "30px" : "16px",
      backgroundColor: "#EFEFEF",
      borderRadius: "5px",
      border: "1px solid #DBDBDB",
      fontFamily: "Titillium Web, Roboto, Arial, sans-serif",
      backspaceRemovesValue: false,
      cursor: "pointer",
      boxShadow: undefined,
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
      padding: isDesktop ? "14px" : "8px",
      backgroundColor: "#EFEFEF",
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
      "& label": {
        width: isDesktop ? "333px" : "120px",
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1c5783",
      marginLeft: isDesktop ? "-10px" : "0px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      display: "flex",
      color: "#1c5783",
      paddingLeft: isDesktop ? "12px" : "4px",
      paddingRight: isDesktop ? "12px" : "4px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "158px",
      flexWrap: "nowrap",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontSize: isDesktop ? "20px" : "12px",
      borderRadius: "5px",
      color: "#1C5783",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      padding: "0px",
      "& svg": {
        width: isDesktop ? "30px" : "20px",
        height: isDesktop ? "30px" : "20px",
        color: "#808080",
        "&:hover": { color: "#1C5783" },
      },
    }),
  };

  const DropdownIndicator = (props) => {
    const {
      selectProps: { menuIsOpen },
    } = props;
    return (
      <components.DropdownIndicator {...props} className="lg:mr-5px">
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

  const ValueContainer = ({ children, hasValue, getValue, ...props }) => {
    if (!hasValue) {
      return <components.ValueContainer {...props}>{children}</components.ValueContainer>;
    }

    const [, otherChildren] = children;
    const selectedCountries = getValue();

    if (selectedCountries.length === 1) {
      return (
        <components.ValueContainer {...props}>
          <span className="overflow-hidden overflow-ellipsis whitespace-nowrap"> {selectedCountries[0].label}</span>
          {otherChildren}
        </components.ValueContainer>
      );
    } else {
      return (
        <components.ValueContainer {...props}>
          Selected {selectedCountries.length} countries
          {otherChildren}
        </components.ValueContainer>
      );
    }
  };

  const Option = (props) => {
    return (
      <div className="relative">
        <components.Option {...props}>
          <input
            className={classNames("absolute right-7px top-8px lg:top-15px", checkbox)}
            type="checkbox"
            checked={props.isSelected}
            onChange={() => {
              console.log("test onChange Option");
            }}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const dropdownOptions = useMemo(() => [...options], [options]);

  return (
    <label className={className}>
      <Text
        text={label}
        className={classNames(
          "text-18px lg:text-30px leading-31px lg:leading-46px font-semibold font-titillium",
          textClass
        )}
      />
      {isMobile ? (
        <div>
          <div className={nativeSelectWrap}>
            <select
              multiple
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
        <ReactSelect
          placeholder="- Any -"
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          isSearchable={isSearchable}
          styles={customStyles}
          components={{ Option, DropdownIndicator, ValueContainer }}
          options={dropdownOptions}
          className={selectClass}
          allowSelectAll={false}
          isMulti
          onChange={(selectedOption) => {
            onChange(selectedOption);
          }}
        />
      )}
    </label>
  );
};

MultiSelectDropdown.defaultProps = {
  isSearchable: false,
  onChange: () => {},
  options: [
    { value: "item1", label: "Item 1" },
    { value: "item2", label: "Item 2" },
    { value: "item3", label: "Item 3" },
  ],
};

export default MultiSelectDropdown;
