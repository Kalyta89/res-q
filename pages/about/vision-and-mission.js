import RegularPageTemplate from "@/templates/RegularPageTemplate";

import { getData } from "@/utils/api";

const VisionAndMissionPage = ({ hero, text }) => {
  return <RegularPageTemplate hero={hero} text={text} />;
};

export async function getStaticProps() {
  const pageData = await getData("/vision-and-mission");
  if (pageData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.text,
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

export default VisionAndMissionPage;
