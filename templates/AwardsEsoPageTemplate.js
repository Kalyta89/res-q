import React, { useState } from "react";

import PageLayout from "@/layouts/PageLayout";

import TableForEsoAngels from "@/components/tables/TableForEsoAngels";
import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";
import AwardsLegend from "@/components/award-legend/AwardsLegend";
import MultiSelectDropdown from "@/components/basic/dropdown/MultiSelectDropdown";

const AwardsEsoPageTemplate = ({ text, tableTitle, countries, angelAwardsRows, hero, awardStatus }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  const [countryFilter, setCountryFilter] = useState([]);

  const showRowsNumber = 8;

  const shownRows = angelAwardsRows.filter((item) => {
    if (countryFilter.some((country) => country.value === item.country)) {
      return true;
    }
    return false;
  });

  const showFilteredRows = countryFilter.length > 0 ? shownRows : angelAwardsRows;

  return (
    <PageLayout hero={hero}>
      <div className="container">
        <AwardsLegend title="Our Award Status" awardStatus={awardStatus} text={text} />
        <div className="w-full">
          <Text
            text={tableTitle}
            typography="text-25px lg:text-50px lg:leading-76px font-bold font-titillium float-left"
          />
        </div>
        <div className="w-full mt-10px lg:mt-31px">
          <MultiSelectDropdown
            label="Filter by Country"
            options={countries}
            onChange={(selectedOption) => setCountryFilter(selectedOption)}
            className="w-full flex items-center justify-between md:justify-start"
            textClass="mr-26px md:mr-50px"
            selectClass="w-215px lg:w-472px duration-300"
          />
        </div>
        <Text typography="text-14px" className="w-full lg:hidden mt-15px" text="Scroll right to see awards" />
        <TableForEsoAngels
          data={showFilteredRows}
          showAllRows={showAllRows}
          showRowsNumber={showRowsNumber}
          className="mt-15px lg:mt-45px"
        />
        {showFilteredRows.length > showRowsNumber && !showAllRows ? (
          <div className="flex justify-center">
            <Button
              variants="light_blue"
              px="px-21px md:px-42px"
              py="py-6px md:py-10px"
              className="mt-32px md:mt-50px"
              onClick={() => setShowAllRows(true)}
            >
              View More
            </Button>
          </div>
        ) : null}
        <Button
          variants="blue"
          px="px-13px md:px-41px"
          py="py-6px md:py-10px"
          btnClasses="mx-18px"
          className="max-w-none mt-35px md:mt-50px mb-65px md:mb-105px"
          link="/"
        >
          REGISTER YOUR HOSPITAL NOW ON RES-Q
        </Button>
      </div>
    </PageLayout>
  );
};

export default AwardsEsoPageTemplate;
