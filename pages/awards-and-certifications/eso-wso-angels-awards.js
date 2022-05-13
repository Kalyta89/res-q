import AwardsEsoPageTemplate from "@/templates/AwardsEsoPageTemplate";

import { getData } from "@/utils/api";

const angelAwardsRows = [
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "109 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "108 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Poland",
    country: "PL",
    hospital: "107 SZPITAL WOJSKOWY Z PRZYCHODNIĄ SPZOZ W WAŁCZU",
    q1: "PL",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "105 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "103 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
  {
    countryLabel: "Vietnam",
    country: "VN",
    hospital: "102 MILITARY HOSPITAL",
    q1: "VN",
    q2: "gold",
    q3: "gray",
    q4: "black",
    q5: "gold",
    q6: "gold",
    q7: "gray",
    q8: "black",
  },
];

const awardStatus = [
  { title: "Diamond", description: "The most prestigious award" },
  { title: "Platinum", description: "The second tier award" },
  { title: "Gold", description: "The first tier award" },
];

const EsoWsoAngelsAwardsPage = ({ hero, text, countries }) => {
  return (
    <AwardsEsoPageTemplate
      hero={hero}
      text={text}
      countries={countries}
      tableTitle="ESO/WSO Award Winners"
      angelAwardsRows={angelAwardsRows}
      awardStatus={awardStatus}
    />
  );
};

export async function getStaticProps() {
  const pageData = await getData("/eso-wso-angles-awards");
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

export default EsoWsoAngelsAwardsPage;
