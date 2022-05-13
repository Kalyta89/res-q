import { useState } from "react";

import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Accordion from "@/components/accordion/Accordion";
import Footer from "@/components/footer/Footer";
import SearchInput from "@/components/search-input/SearchInput";
import TableForCountries from "@/components/tables/TableForCountries";
import Button from "@/components/basic/button/Button";

import { useDebounce } from "@/utils/hooks";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import HeroImage from "@/assets/pages/member-countries/member-countries-hero-bg.png";
import HeroImageMob from "@/assets/pages/member-countries/member-countries-hero-bg-mobile.png";
import AlbaniaImage from "@/assets/pages/member-countries/Albania.svg";
import AlgeriaImage from "@/assets/pages/member-countries/Algeria.svg";
import ArgentinaImage from "@/assets/pages/member-countries/Argentina.svg";
import ArmeniaImage from "@/assets/pages/member-countries/Armenia.svg";
import AustriaImage from "@/assets/pages/member-countries/Austria.svg";

const heroImage = {
  mock: HeroImage,
};
const heroImageMob = {
  mock: HeroImageMob,
};

const dataCountry = {
  coordinator: {
    title: "RES-Q National Coordinator",
    value: "First Lastname",
  },
  enrolledPatients: {
    title: "Total Enrolled Patients",
    value: "0000",
  },
  registered: {
    title: "Total Registered Hospitals",
    value: "000",
  },
  since: {
    title: "Registered Since",
    value: "MM/YY",
  },
};

const countryTableRows = [
  {
    col1: "Hospital",
    col2: "City",
    col3: "Qumber of Patients",
  },
  {
    col1: "Mospital",
    col2: "Mity",
    col3: "Aumber of Patients",
  },
  {
    col1: "Dospital",
    col2: "Bity",
    col3: "Bumber of Patients",
  },
  {
    col1: "Rospital",
    col2: "Dity",
    col3: "Number of Patients",
  },
  {
    col1: "Aospital",
    col2: "Kity",
    col3: "Rumber of Patients",
  },
  {
    col1: "Cospital",
    col2: "Rity",
    col3: "Sumber of Patients",
  },
  {
    col1: "Hospital",
    col2: "City",
    col3: "Qumber of Patients",
  },
  {
    col1: "Mospital",
    col2: "Mity",
    col3: "Aumber of Patients",
  },
  {
    col1: "Dospital",
    col2: "Bity",
    col3: "Bumber of Patients",
  },
  {
    col1: "Rospital",
    col2: "Dity",
    col3: "Number of Patients",
  },
  {
    col1: "Aospital",
    col2: "Kity",
    col3: "Rumber of Patients",
  },
  {
    col1: "Cospital",
    col2: "Rity",
    col3: "Sumber of Patients",
  },
];

const CountryData = ({ coordinator, enrolledPatients, registered, since }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  return (
    <div className="grid justify-items-center">
      <div className="mt-13px px-12px md:px-24px xl:mt-25px w-full max-w-1310px">
        <div className="block xl:flex justify-between mb-16px md:mb-28px">
          <div>
            <Text
              typography="font-titillium font-semibold not-italic text-15px md:text-30px leading-23px md:leading-46px"
              text={`${coordinator.title}: ${coordinator.value}`}
              className="xl:mb-6px"
            />
            <Text
              typography="font-titillium font-semibold not-italic text-15px md:text-30px leading-23px md:leading-46px"
              text={`${enrolledPatients.title}: ${enrolledPatients.value}`}
            />
          </div>
          <div>
            <Text
              typography="font-titillium font-semibold not-italic text-15px md:text-30px leading-23px md:leading-46px"
              text={`${registered.title}: ${registered.value}`}
              className="xl:mb-6px"
            />
            <Text
              typography="font-titillium font-semibold not-italic text-15px md:text-30px leading-23px md:leading-46px"
              text={`${since.title}: ${since.value}`}
            />
          </div>
        </div>
        <TableForCountries data={countryTableRows} showAllRows={showAllRows} className="mb-28px " />
        {!showAllRows ? (
          <div className="flex justify-center">
            <Button variants="light_blue" className="mb-23px md:mb-30px" onClick={() => setShowAllRows(true)}>
              View More
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const accordion = {
  accordionItems: [
    {
      title: "Albania",
      image: AlbaniaImage,
      content: <CountryData {...dataCountry} />,
    },
    {
      title: "Algeria",
      image: AlgeriaImage,
      content: <CountryData {...dataCountry} />,
    },
    {
      title: "Argentina",
      image: ArgentinaImage,
      content: <CountryData {...dataCountry} />,
    },
    {
      title: "Armenia",
      image: ArmeniaImage,
      content: <CountryData {...dataCountry} />,
    },
    {
      title: "Austria",
      image: AustriaImage,
      content: <CountryData {...dataCountry} />,
    },
  ],
};
const headerText1 =
  "RES-Q currently has stroke centres participating from >75 countries across the world. Membership to join RES-Q is free. It is open to all hospitals (primary or comprehensive) or clinics that treat stroke patients anywhere in the world.";
const headerText2 = "Member Countries";

const MemberCountriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  let showCountries = accordion.accordionItems;
  if (debouncedSearchTerm.length > 0) {
    showCountries = showCountries.filter((item) =>
      item.title.toLowerCase().trim().includes(debouncedSearchTerm.toLowerCase().trim())
    );
  }

  return (
    <>
      <Header {...headerMocks} />
      <Hero title="Member Countries" image={heroImage} imageMobile={heroImageMob} />
      <ContentSection className="pb-65px md:pb-105px">
        <div className="container">
          <Text className="mt-30px md:mt-84px mb-16px md:mb-50px" typography="h4" text={headerText1} />
          <div className="grid lg:grid-cols-2 justify-self-start w-full">
            <Text className="justify-self-start mb-24px md:mb-36px" typography="h2" text={headerText2} />
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default MemberCountriesPage;
