import React from "react";
import classNames from "classnames";

import CountryTile from "./CoutryTile";

const ColumnWithCountries = ({ countries, title, onOpenClose, countryCode, className }) => {
  return (
    <div className={classNames("grid grid-cols-1 gap-y-10px", className)}>
      <div className="bg-theme-blue rounded-12px py-18px px-28px text-28px leading-30px font-bold font-titillium text-white">
        {title}
      </div>
      {countries.map((country, index) => (
        <CountryTile key={index} {...country} onOpenClose={onOpenClose} countryCode={countryCode} />
      ))}
    </div>
  );
};

export default ColumnWithCountries;
