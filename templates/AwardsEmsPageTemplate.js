import React, { useState } from "react";

import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import FilterSection from "@/components/filter-section/FilterSection";
import TableForAwards from "@/components/tables/TableForAwards";
import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";
import Markdown from "@/components/basic/markdown/Markdown";

const AwardsEmsPageTemplate = ({ text, tableTitle, countries, angelAwardsRows, hero }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  const [quarterFilter, setQuarterFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);
  const [awardStatusFilter, setAwardStatusFilter] = useState(null);

  const showRowsNumber = 8;

  const showRows = angelAwardsRows.filter((item) => {
    if (quarterFilter && quarterFilter !== item.quarter) {
      return false;
    }
    if (countryFilter && countryFilter !== item.country) {
      return false;
    }
    if (awardStatusFilter && awardStatusFilter !== item.status) {
      return false;
    }

    // show everything that pass all filtering
    return true;
  });

  return (
    <PageLayout hero={hero}>
      <div className="container">
        <Markdown markdown={text} className="mb-30px md:mb-35px" />
        <div className="w-full mb-10px">
          <Text typography="h2" text={tableTitle} className="float-left" />
        </div>
        <FilterSection
          countryOptions={countries}
          onQuarterFilterChange={(selectedOption) => setQuarterFilter(selectedOption.value)}
          onCountryFilterChange={(selectedOption) => setCountryFilter(selectedOption.value)}
          onAwardStatusFilterChange={(selectedOption) => setAwardStatusFilter(selectedOption.value)}
        />
        <TableForAwards
          data={showRows}
          showAllRows={showAllRows}
          showRowsNumber={showRowsNumber}
          className="mt-24px md:mt-49px"
        />
        {showRows.length > showRowsNumber && !showAllRows ? (
          <div className="flex justify-center">
            <Button
              variants="light_blue"
              px="px-18px md:px-42px"
              py="py-10px"
              className="mt-32px md:mt-50px"
              onClick={() => setShowAllRows(true)}
            >
              View More
            </Button>
          </div>
        ) : null}
        <Button
          variants="blue_bigger"
          px="px-25px md:px-41px"
          py="py-9px"
          className="max-w-306px md:max-w-none mt-35px md:mt-50px mb-65px md:mb-105px"
        >
          REGISTER YOUR HOSPITAL NOW ON RES-Q
        </Button>
      </div>
    </PageLayout>
  );
};

export default AwardsEmsPageTemplate;
