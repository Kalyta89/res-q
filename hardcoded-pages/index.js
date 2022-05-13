import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContentSection from "@/components/content-section/ContentSection";
import MediaText from "@/components/media-text/MediaText";
import NewsBlock from "@/components/news/NewsBlock";
import HeroHome from "@/components/hero-home/HeroHome";
import Partners from "@/components/partners/Partners";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";
import {
  mediaText1,
  mediaText2,
  mediaText3,
} from "@/utils/mocks/mediaTextMocks";
import newsMock from "@/utils/mocks/newsMock";

const IndexPage = () => {
  return (
    <>
      <Header {...headerMocks} />
      <HeroHome
        title="The first global registry focused on improving stroke care."
      />
      <ContentSection>
        <MediaText className="mt-30px md:mt-85px" {...mediaText1} />
        <MediaText className="mt-51px md:mt-99px" {...mediaText2} />
        <MediaText className="mt-51px md:mt-106px" {...mediaText3} />
        <NewsBlock className="mt-65px md:mt-105px" {...newsMock} />
      </ContentSection>
      <Partners />
      <Footer {...footerMocks} />
    </>
  );
};

export default IndexPage;