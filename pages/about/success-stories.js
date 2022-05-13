import VideosPageTemplate from "@/templates/VideosPageTemplate";

import { getData } from "@/utils/api";

const SuccessVideosPage = ({ hero, text, videos }) => {
  return <VideosPageTemplate hero={hero} text={text} videos={videos} />;
};

export async function getStaticProps() {
  const pageData = await getData("/success-stories");
  const videosData = await getData("/stories");

  if (pageData == null && videosData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.text,
      videos: videosData
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((story) => ({
          title: story.title,
          hospital_name: story.hospital_name,
          city: story.city,
          country: story.country,
          link: story.link,
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

export default SuccessVideosPage;
