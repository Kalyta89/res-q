import PromotionalMaterialsTemplate from "@/templates/PromotionalMaterialsTemplate";

import { getData } from "@/utils/api";
import { getSourceUrl } from "@/utils/url";

const PromotionalMaterialsPage = ({ hero, data }) => {
  return <PromotionalMaterialsTemplate hero={hero} data={data} />;
};

export async function getStaticProps() {
  const pageHero = await getData("/contact-us");
  const pageData = await getData("/promotional-materials");
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
        title: "Promotional Materials",
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
      data: pageData.map((data) => {
        return {
          title: data.name,
          fileLink: getSourceUrl(data.archive.url),
          fileName: data.archive.name,
          links: data.items.map((item) => {
            return {
              link: item?.name,
              linkLabel: getSourceUrl(item?.file?.url),
            };
          }),
          description: data.description,
          image: data.preview,
        };
      }),
    },
  };
}

export default PromotionalMaterialsPage;
