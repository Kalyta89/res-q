import { useState } from "react";

import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Footer from "@/components/footer/Footer";
import FilterSection from "@/components/filter-section/FilterSection";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";
import TableForAwards from "@/components/tables/TableForAwards";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import heroSectionImgDesktop from "@/assets/pages/eso-wso-ems/eso-wso-ems-hero-bg.png";
import heroSectionImgMobile from "@/assets/pages/eso-wso-ems/eso-wso-ems-hero-bg-mobile.png";

const angelAwardsRows = [
  {
    quarter: "2021 Q2",
    country: "Country",
    organisation: "EMS ORGANISATION 4",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2020 Q2",
    country: "Dountry",
    organisation: "EMS ORGANISATION 2",
    branch: "EMS BRANCH",
    status: "gold",
  },
  {
    quarter: "2021 Q3",
    country: "Mountry",
    organisation: "EMS ORGANISATION 1",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2021 Q4",
    country: "Rountry",
    organisation: "EMS ORGANISATION 5",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2019 Q2",
    country: "Sountry",
    organisation: "EMS ORGANISATION 3",
    branch: "EMS BRANCH",
    status: "gold",
  },
  {
    quarter: "2019 Q3",
    country: "Mountry",
    organisation: "EMS ORGANISATION 4",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2019 Q4",
    country: "Aountry",
    organisation: "EMS ORGANISATION 1",
    branch: "EMS BRANCH",
    status: "diamond",
  },
  {
    quarter: "2018 Q2",
    country: "Oountry",
    organisation: "EMS ORGANISATION 2",
    branch: "EMS BRANCH",
    status: "gold",
  },
  {
    quarter: "2018 Q3",
    country: "Dountry",
    organisation: "EMS ORGANISATION 1",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2017 Q3",
    country: "Mountry",
    organisation: "EMS ORGANISATION 2",
    branch: "EMS BRANCH",
    status: "diamond",
  },
  {
    quarter: "2017 Q4",
    country: "Aountry",
    organisation: "EMS ORGANISATION 4",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2017 Q2",
    country: "Oountry",
    organisation: "EMS ORGANISATION 3",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2016 Q3",
    country: "Dountry",
    organisation: "EMS ORGANISATION 5",
    branch: "EMS BRANCH",
    status: "platinum",
  },
];

const EmsAngelsAwardsPage = () => {
  const image = {
    mock: heroSectionImgDesktop,
  };

  const imageMobile = {
    mock: heroSectionImgMobile,
  };

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
    <>
      <Header {...headerMocks} />
      <Hero title="EMS Angels Awards" image={image} imageMobile={imageMobile} />

      <ContentSection>
        <div className="container">
          <Text
            typography="h4"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
            className="mt-30px mb-30px md:mt-84px md:mb-35px"
          />
          <div className="w-full mb-10px">
            <Text typography="h2" text="EMS Award Winners" className="float-left" />
          </div>
          <FilterSection
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
                className="mt-33px md:mt-50px"
                onClick={() => setShowAllRows(true)}
              >
                View More
              </Button>
            </div>
          ) : null}
          <Button
            variants="blue_bigger"
            px="px-39px md:px-42px"
            py="py-9px md:py-10px"
            className="mt-35px md:mt-50px mb-65px md:mb-114px"
          >
            REGISTER WITH ANGELS
          </Button>
        </div>
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default EmsAngelsAwardsPage;
