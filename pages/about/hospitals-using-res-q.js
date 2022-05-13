import { getClientIp } from "request-ip";

import MemberCountriesPageTemplate from "@/templates/MemberCountriesPageTemplate";

import { getData, fetchUrl } from "@/utils/api";

const MemberCountriesPage = ({ hero, text, userCountry, countries }) => {
  return <MemberCountriesPageTemplate hero={hero} text={text} userCountry={userCountry} countries={countries} />;
};

export async function getServerSideProps({ req }) {
  const userIP = getClientIp(req);

  const [ipData, pageData, countriesData] = await Promise.all([
    fetchUrl(`https://api.hostip.info/get_json.php?ip=${userIP}`),
    getData("/member-countries"),
    getData("/countries"),
  ]);

  if (pageData == null && countriesData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.text,
      userCountry: ipData.country_code !== "XX" ? ipData.country_code : null,
      countries: countriesData
        .sort((a, b) => (a.english_name > b.english_name ? 1 : -1))
        .map((country) => ({
          id: country.flag.id,
          title: country.english_name,
          image: {
            id: country.flag.id,
            alternativeText: country.flag.alternativeText,
            mime: country.flag.mime,
            width: country.flag.width,
            height: country.flag.height,
            url: country.flag.url,
          },
          hospitals: country.id, //for now to simulate real data
          patients: country.flag.id, //for now to simulate real data
          code: country.iso_a2_code,
          countryTableRows: [
            {
              col1: "Hospital General de Agudos Or. Ignacio Pirovano - Stroke Unit",
              col2: "Ostrava",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Republican Clinic Hospital named by M.Mirgasimov - Neurology department",
              col2: "Brno",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Republican Research and Practical Center of Neurology and Neurosurgery",
              col2: "Hradec Kralove",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Unidad de Servicios de Salud Simon Bolivar - Emergency",
              col2: "Prague",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Vitkovick5 nemocnice - Neurologicke oddeleni a Iktove centrum",
              col2: "Prague",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "General Hospital of the North of Guayaquil Los Cei - Emergency",
              col2: "Olomouc",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Szabolcs Szatmar Bereg County Hospitals and University Teaching Hospital - Hospital of Mat",
              col2: "Ostrava",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: 'Astana Central Road Hospital "Railway Hospital of Emergency Medicine"',
              col2: "Plzen",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: 'Astana Central Road Hospital "Railway Hospital of Emergency Medicine"',
              col2: "Brno",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Hospital General ISSSTE Pachuca Ora Columba Rivera - Emergency",
              col2: "Brno",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Hospital General de Agudos Or. Ignacio Pirovano - Stroke Unit",
              col2: "Ostrava",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Republican Clinic Hospital named by M.Mirgasimov - Neurology department",
              col2: "Brno",
              col3: "MM/YY",
              col4: 567,
            },
            {
              col1: "Republican Research and Practical Center of Neurology and Neurosurgery",
              col2: "Hradec Kralove",
              col3: "MM/YY",
              col4: 567,
            },
          ],
        })),
      hero: {
        title: pageData.titile,
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
    },
  };
}

export default MemberCountriesPage;
