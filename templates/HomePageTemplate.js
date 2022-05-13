import HomePageLayout from "@/layouts/HomePageLayout";

import MediaText from "@/components/media-text/MediaText";
import NewsBlock from "@/components/news/NewsBlock";
import SuccessStoriesSlider from "@/components/success-stories-slider/SuccessStoriesSlider";
import MapSection from "@/components/map-section/MapSection";

import { mediaText1, mediaText2, mediaText3 } from "@/utils/mocks/mediaTextMocks";

const HomePageTemplate = ({ heroItems, partners, newsItems, videos }) => {
  const partnerItems = partners.map((partner) => ({
    image: partner.logo,
    url: partner.url,
  }));
  return (
    <HomePageLayout heroItems={heroItems} partnerItems={partnerItems}>
      <MediaText {...mediaText1} />
      <MediaText className="mt-51px md:mt-99px" {...mediaText2} />
      <MediaText className="mt-51px md:mt-106px" {...mediaText3} />
      <MapSection className="pt-40px md:pt-72px pb-40px md:pb-73px" />
      <SuccessStoriesSlider videos={videos} />
      <NewsBlock
        newsItems={newsItems}
        title="News"
        subtitle="Latest news posts"
        viewMoreBtnLabel="View Posts"
        readMoreBtnLabel="Read More"
      />
    </HomePageLayout>
  );
};

export default HomePageTemplate;
