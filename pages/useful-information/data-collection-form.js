import DownloadFilePageTemplate from "@/templates/DownloadFilePageTemplate";

import { getData } from "@/utils/api";

const StrokeCareFormPage = ({ hero, text, files }) => {
  return <DownloadFilePageTemplate hero={hero} text={text} files={files} />;
};

export async function getStaticProps() {
  const pageData = await getData("/stroke-care-forms");

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
      files: pageData.forms[0].localizations.map((file) => ({
        name: file.file.name,
        url: file.file.url,
      })),
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

export default StrokeCareFormPage;
