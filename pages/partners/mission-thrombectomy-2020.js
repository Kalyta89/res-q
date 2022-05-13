import PartnerProfilePageTemplate from "@/templates/PartnerProfilePageTemplate";

import { getData } from "@/utils/api";
import { getSiteUrl } from "@/utils/siteUrl";

const MissionThrombectomy2020Page = ({ hero, logo, text, buttonWebsiteLink }) => {
  return <PartnerProfilePageTemplate hero={hero} logo={logo} text={text} buttonWebsiteLink={buttonWebsiteLink} />;
};

export async function getStaticProps() {
  const pageHero = await getData("/mission-thrombectomy-2020");
  const [pageData] = await getData("/partner-logos?alt=MT%202020%2B");

  if (pageData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageHero.introduction,
      hero: {
        title: pageHero.title,
        image: {
          id: pageHero.jumbotron_desktop.id,
          mime: pageHero.jumbotron_desktop.mime,
          url: pageHero.jumbotron_desktop.url,
        },
        imageMobile: {
          id: pageHero.jumbotron_mobile.id,
          mime: pageHero.jumbotron_mobile.mime,
          url: pageHero.jumbotron_mobile.url,
        },
      },
      logo: pageData.logo,
      buttonWebsiteLink: getSiteUrl(pageData.url),
    },
  };
}

export default MissionThrombectomy2020Page;
