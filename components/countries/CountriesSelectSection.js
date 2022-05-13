import React from "react";
import classNames from "classnames";

import { useApplyAfterWidth } from "@/utils/hooks";
import ColumnWithCountries from "@/components/countries/ColumnWithCountries";
import Accordion from "../accordion/Accordion";
import CountryTile from "./CoutryTile";
import {
  getAmericansCountries,
  getAfricanCountries,
  getEuropeanCountries,
  getAsianCountries,
} from "@/utils/memberCountries";

const CountriesSelectSection = ({ showCountries, onOpenClose, countryCode, className }) => {
  const isDesktop = useApplyAfterWidth(1023);

  const americansCountries = getAmericansCountries(showCountries);
  const africanCountries = getAfricanCountries(showCountries);
  const europeanCountries = getEuropeanCountries(showCountries);
  const asianCountries = getAsianCountries(showCountries);

  const allCoutries = [
    {
      countries: americansCountries,
      title: "Americas",
      content: americansCountries.map((country, index) => (
        <CountryTile key={index} {...country} onOpenClose={onOpenClose} countryCode={countryCode} />
      )),
    },
    {
      countries: europeanCountries,
      title: "Europe",
      content: europeanCountries.map((country, index) => (
        <CountryTile key={index} {...country} onOpenClose={onOpenClose} countryCode={countryCode} />
      )),
    },
    {
      countries: africanCountries,
      title: "Africa",
      content: africanCountries.map((country, index) => (
        <CountryTile key={index} {...country} onOpenClose={onOpenClose} countryCode={countryCode} />
      )),
    },
    {
      countries: asianCountries,
      title: "Asia/Australia",
      content: asianCountries.map((country, index) => (
        <CountryTile key={index} {...country} onOpenClose={onOpenClose} countryCode={countryCode} />
      )),
    },
  ];

  return (
    <div className={classNames("lg:grid lg:grid-cols-4 items-start gap-x-10px", className)}>
      {showCountries.length > 0 ? (
        <>
          {isDesktop ? (
            <>
              {allCoutries.map(({ countries, title }, index) => {
                return (
                  <ColumnWithCountries
                    key={index}
                    title={title}
                    countries={countries}
                    onOpenClose={onOpenClose}
                    countryCode={countryCode}
                    className="mb-10px"
                  />
                );
              })}
            </>
          ) : (
            <Accordion isLargeTiles accordionItems={allCoutries} titlePx="pl-30px pr-15px py-13px" contentClass="" />
          )}
        </>
      ) : (
        <Text typography="h4" text="No countries were found" />
      )}
    </div>
  );
};

export default CountriesSelectSection;
