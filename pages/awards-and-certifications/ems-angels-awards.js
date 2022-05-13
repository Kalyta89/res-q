import AwardsEmsPageTemplate from "@/templates/AwardsEmsPageTemplate";

import { getData } from "@/utils/api";

const emsAwardsRows = [
  {
    quarter: "2021 Q2",
    countryLabel: "Poland",
    country: "PL",
    organisation: "EMS ORGANISATION 4",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2020 Q2",
    countryLabel: "Poland",
    country: "PL",
    organisation: "EMS ORGANISATION 2",
    branch: "EMS BRANCH",
    status: "gold",
  },
  {
    quarter: "2021 Q3",
    countryLabel: "Poland",
    country: "PL",
    organisation: "EMS ORGANISATION 1",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2021 Q4",
    countryLabel: "Poland",
    country: "PL",
    organisation: "EMS ORGANISATION 5",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2019 Q2",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 3",
    branch: "EMS BRANCH",
    status: "gold",
  },
  {
    quarter: "2019 Q3",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 4",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2019 Q4",
    countryLabel: "Poland",
    country: "PL",
    organisation: "EMS ORGANISATION 1",
    branch: "EMS BRANCH",
    status: "diamond",
  },
  {
    quarter: "2018 Q2",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 2",
    branch: "EMS BRANCH",
    status: "gold",
  },
  {
    quarter: "2018 Q3",
    countryLabel: "Poland",
    country: "PL",
    organisation: "EMS ORGANISATION 1",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2017 Q3",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 2",
    branch: "EMS BRANCH",
    status: "diamond",
  },
  {
    quarter: "2017 Q4",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 4",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2017 Q2",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 3",
    branch: "EMS BRANCH",
    status: "platinum",
  },
  {
    quarter: "2016 Q3",
    countryLabel: "Vietnam",
    country: "VN",
    organisation: "EMS ORGANISATION 5",
    branch: "EMS BRANCH",
    status: "platinum",
  },
];

const EmsAngelsAwardsPage = ({ hero, text, countries }) => {
  return (
    <AwardsEmsPageTemplate
      hero={hero}
      text={text}
      countries={countries}
      tableTitle="EMS Award Winners"
      angelAwardsRows={emsAwardsRows}
    />
  );
};

export async function getStaticProps() {
  const pageData = await getData("/ems-angels-awards");
  const countriesData = await getData("/countries");

  if (pageData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      hero: {
        title: pageData.title,
        image: {
          id: pageData.jumbotron_desktop.id,
          mime: pageData.jumbotron_desktop.mime,
          url: pageData.jumbotron_desktop.url,
        },
        imageMobile: {
          id: pageData.jumbotron_mobile.id,
          mime: pageData.jumbotron_mobile.mime,
          url: pageData.jumbotron_mobile.url,
        },
      },
      text: pageData.introduction,
      countries: countriesData
        .sort((a, b) => (a.english_name > b.english_name ? 1 : -1))
        .map((country) => ({
          label: country.english_name,
          value: country.iso_a2_code,
        })),
    },
  };
}

export default EmsAngelsAwardsPage;
