import NewsPostPageTemplate from "@/templates/NewsPostPageTemplate";

import { getData } from "@/utils/api";

import ImageBgMobile from "@/assets/pages/partner-aalborg-uni/partner-aalborg-uni-hero-bg-mobile.png";
import ImageBgDesktop from "@/assets/pages/partner-aalborg-uni/partner-aalborg-uni-hero-bg.png";

const heroStub = {
  image: {
    mock: ImageBgDesktop,
  },
  imageMobile: {
    mock: ImageBgMobile,
  },
};

const NewsPost = ({ newsItem }) => {
  return (
    <NewsPostPageTemplate
      hero={{
        title: newsItem.title,
        ...heroStub,
      }}
      date={newsItem.date}
      text={newsItem.content}
    />
  );
};

export async function getStaticPaths() {
  const newsData = await getData("/public-news");

  const paths = newsData.map(({ id }) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const newsData = await getData(`/public-news/${params.id}`);
  if (newsData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }
  return {
    props: {
      newsItem: {
        id: newsData.id,
        title: newsData.Title,
        content: newsData.content,
        date: newsData.published_at,
      },
    },
  };
}

export default NewsPost;
