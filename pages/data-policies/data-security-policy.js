import RegularPageTemplate from "@/templates/RegularPageTemplate";

import { getData } from "@/utils/api";

const DataSecurityPolicyPage = ({ hero, text }) => {
  return <RegularPageTemplate hero={hero} text={text} />;
};

export async function getStaticProps() {
  const pageData = await getData("/data-security-policy");

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
    },
  };
}

export default DataSecurityPolicyPage;
