import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Text from "@/components/basic/text/Text";
import EmbedYouTubeVideo from "@/components/embed-youtube-video/EmbedYouTubeVideo";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import ImageBgMobile from "@/assets/pages/success-videos-page/success-videos-bg-image-mobile.png";
import ImageBgDesctop from "@/assets/pages/success-videos-page/success-videos-bg-image.png";

const image = {
  mock: ImageBgDesctop,
};

const imageMobile = {
  mock: ImageBgMobile,
};

const headertext = (
  <>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </>
);

const SuccessVideosPage = () => {
  return (
    <>
      <Header {...headerMocks} />
      <Hero title="Stroke Care Stories" image={image} imageMobile={imageMobile} />
      <ContentSection>
        <Text
          typography="font-titillium font-semibold md:font-bold not-italic text-20px md:text-30px leading-31px md:leading-46px"
          text={headertext}
          className="container mt-30px md:mt-84px mb-29px md:mb-74px"
        />
        <EmbedYouTubeVideo
          media="https://www.youtube.com/embed/-0bYWnP3jH4"
          title="Improving quality of stroke care with Dysphagia screening using RES-Q registry"
          subtitle="St. Anne’s University Hospital Brno, Czech Republic"
        />
        <hr className="container-hr mt-30px md:mt-68px mb-30px md:mb-54px opacity-24" />
        <EmbedYouTubeVideo
          media="https://www.youtube.com/embed/N_gD9-Oa0fg"
          title="Video Title"
          subtitle="Hospital Name, Country"
        />
        <hr className="container-hr mt-30px md:mt-68px mb-30px md:mb-54px opacity-24" />
        <EmbedYouTubeVideo
          media="https://www.youtube.com/embed/X4QYV5GTz7c"
          className="mb-58px md:mb-110px"
          title="Video Title"
          subtitle="Hospital Name, Country"
        />
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default SuccessVideosPage;
