import PartnerProfilePageTemplate from "@/templates/PartnerProfilePageTemplate";

import { getData } from "@/utils/api";
import { getSiteUrl } from "@/utils/siteUrl";

const IrenePage = ({ hero, logo, text, buttonWebsiteLink }) => {
  return <PartnerProfilePageTemplate hero={hero} logo={logo} text={text} buttonWebsiteLink={buttonWebsiteLink} />;
};

export async function getStaticProps() {
  const pageHero = await getData("/irene");
  const [pageData] = await getData("/partner-logos?alt=IRENE%20COST%20Action");

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

export default IrenePage;
