// import RegularPageTemplate from "@/templates/RegularPageTemplate";

import DownloadAndLinkPageTemplate from "@/templates/DownloadAndLinkPageTemplate";

import { getData } from "@/utils/api";

const POPIActPage = ({ hero, text, file }) => {
  return <DownloadAndLinkPageTemplate hero={hero} text={text} file={file}/>;
};

export async function getStaticProps() {
  const pageData = await getData("/popi");
  if (pageData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.introduction,
      file: {name:"Download original document", url:pageData.file.url},
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

export default POPIActPage;
