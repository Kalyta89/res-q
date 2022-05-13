import { useState } from "react";

import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import FilterSection from "@/components/filter-section/FilterSection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";
import TableForEsoAngels from "@/components/tables/TableForEsoAngels";
import AwardsLabel from "@/components/awards-label/AwardsLabel";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import heroSectionImgDesktop from "@/assets/pages/eso-wso-ems/eso-wso-ems-hero-bg.png";
import heroSectionImgMobile from "@/assets/pages/eso-wso-ems/eso-wso-ems-hero-bg-mobile.png";

const angelAwardsRows = [
  {
    quarter: "2021 Q2",
    country: "Poland",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2021 Q1",
    country: "Poland",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2020 Q4",
    country: "Poland",
    hospital: "109 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2020 Q3",
    country: "Poland",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2020 Q2",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "platinum",
  },
  {
    quarter: "2020 Q1",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "gold",
  },
  {
    quarter: "2019 Q4",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "platinum",
  },
  {
    quarter: "2019 Q3",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "platinum",
  },
  {
    quarter: "2018 Q4",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "gold",
  },

  {
    quarter: "2017 Q2",
    country: "Poland",
    hospital: "108 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2017 Q1",
    country: "Poland",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "gold",
  },
  {
    quarter: "2016 Q4",
    country: "Poland",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2016 Q3",
    country: "Poland",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    status: "diamond",
  },
  {
    quarter: "2016 Q2",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "platinum",
  },
  {
    quarter: "2016 Q1",
    country: "Vietnam",
    hospital: "105 MILITARY HOSPITAL",
    status: "gold",
  },
  {
    quarter: "2015 Q4",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "platinum",
  },
  {
    quarter: "2015 Q3",
    country: "Vietnam",
    hospital: "103 MILITARY HOSPITAL",
    status: "platinum",
  },
  {
    quarter: "2014 Q4",
    country: "Vietnam",
    hospital: "102 MILITARY HOSPITAL",
    status: "gold",
  },
];

const EsoWsoAngelsAwardsPage = () => {
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
      <Hero
        title="ESO/WSO Angels Awards"
        image={image}
        imageMobile={imageMobile}
        className="w-283px md:w-full"
      />

      <ContentSection>
        <div className="container">
          <Text
            typography="h4"
            text="Hospitals from countries covered by ESO that capture data in RES-Q apply automatically to the ESO Angels Awards and countries outside the ESO territory capturing data in RES-Q apply automatically to the WSO Angels Award based on the quality measures outlined in the tier system."
            className="mt-30px mb-30px md:mt-84px md:mb-35px"
          />
          <div className="w-full mb-10px">
            <Text typography="h2" text="ESO/WSO Award Winners" className="float-left" />
          </div>
          <FilterSection
            onQuarterFilterChange={(selectedOption) => setQuarterFilter(selectedOption.value)}
            onCountryFilterChange={(selectedOption) => setCountryFilter(selectedOption.value)}
            onAwardStatusFilterChange={(selectedOption) => setAwardStatusFilter(selectedOption.value)}
          />
          <TableForEsoAngels
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
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default EsoWsoAngelsAwardsPage;
