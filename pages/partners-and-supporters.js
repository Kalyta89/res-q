import PartnersAndSupportersPageTemplate from "@/templates/PartnersAndSupportersPageTemplate";

import { getData } from "@/utils/api";

const PartnersAndSupportersPage = ({ hero, data }) => {
  return <PartnersAndSupportersPageTemplate hero={hero} data={data} />;
};

export async function getStaticProps() {
  const pageData = await getData("/contact-us");
  // World Stroke Organization data
  const [wsoLogo] = await getData("/partner-logos?alt=World%20Stroke%20Organization");
  const wsoText = await getData("/world-stroke-organization");
  // European Stroke Organization data
  const [esoLogo] = await getData("/partner-logos?alt=European%20Stroke%20Organization");
  const esoText = await getData("/european-stroke-organization");
  // AHA/ASA data
  const [ahaAsaLogo] = await getData("/partner-logos?alt=American%20Stroke%20Association");
  const ahaAsaText = await getData("/aha-asa");
  // Angels Initiative data
  const [angelsInitiativeLogo] = await getData("/partner-logos?alt=Angels%20Initiative");
  const angelsInitiativeText = await getData("/angels-initiative");
  // Mission Thrombectomy 2020+ data
  const [missionThrombectomyLogo] = await getData("/partner-logos?alt=MT%202020%2B");
  const missionThrombectomyText = await getData("/mission-thrombectomy-2020");
  // Nursing Research Institute data
  const [nursingResearchInstituteLogo] = await getData("/partner-logos?alt=Nursing%20Research%20Institute");
  const nursingResearchInstituteText = await getData("/nursing-research-institute");
  // IRENE data
  const [ireneLogo] = await getData("/partner-logos?alt=IRENE%20COST%20Action");
  const ireneText = await getData("/irene");
  // Czech Stroke Society data
  const [czechStrokeSocietyLogo] = await getData("/partner-logos?alt=Czech%20Stroke%20Society");
  const czechStrokeSocietyText = await getData("/czech-stroke-society");
  // Aalborg University data
  const [aalborgUniLogo] = await getData("/partner-logos?alt=Aalborg%20University");
  const aalborgUniText = await getData("/aalborg-university");
  // STROCZECH data
  const [stroczechLogo] = await getData("/partner-logos?alt=STROCZECH");
  const stroczechText = await getData("/stroczech");

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
        title: "Partners & Supporters",
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
      data: [
        {
          title: wsoLogo.alt,
          buttonLink: `/partners/world-stroke-organization`,
          description: wsoText.introduction,
          image: wsoLogo.logo,
        },
        {
          title: esoLogo.alt,
          buttonLink: `/partners/european-stroke-organization`,
          description: esoText.introduction,
          image: esoLogo.logo,
        },
        {
          title: ahaAsaLogo.alt,
          buttonLink: `/partners/american-heart-association`,
          description: ahaAsaText.introduction,
          image: ahaAsaLogo.logo,
        },
        {
          title: angelsInitiativeLogo.alt,
          buttonLink: `/partners/angels-initiative`,
          description: angelsInitiativeText.introduction,
          image:angelsInitiativeLogo.logo,
        },
        {
          title: missionThrombectomyLogo.alt,
          buttonLink: `/partners/mission-thrombectomy-2020`,
          description: missionThrombectomyText.introduction,
          image: missionThrombectomyLogo.logo,
        },
        {
          title: nursingResearchInstituteLogo.alt,
          buttonLink: `/partners/nursing-research-institute`,
          description: nursingResearchInstituteText.introduction,
          image: nursingResearchInstituteLogo.logo,
        },
        {
          title: ireneLogo.alt,
          buttonLink: `/partners/irene`,
          description: ireneText.introduction,
          image: ireneLogo.logo,
        },
        {
          title: czechStrokeSocietyLogo.alt,
          buttonLink: `/partners/czech-stroke-society`,
          description: czechStrokeSocietyText.introduction,
          image: czechStrokeSocietyLogo.logo,
        },
        {
          title: aalborgUniLogo.alt,
          buttonLink: `/partners/aalborg-university`,
          description: aalborgUniText.introduction,
          image: aalborgUniLogo.logo,
        },
        {
          title: stroczechLogo.alt,
          buttonLink: `/partners/stroczech`,
          description: stroczechText.introduction,
          image: stroczechLogo.logo,
        },
      ],
    },
  };
}

export default PartnersAndSupportersPage;
