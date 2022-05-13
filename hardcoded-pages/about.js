import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import PageLinkTile from "@/components/page-link-tile/PageLinkTile";
import Footer from "@/components/footer/Footer";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import ImageBg from "@/assets/pages/about/about-hero-bg.png";
import ImageBgMobile from "@/assets/pages/about/about-hero-bg-mobile.png";
import Image_1 from "@/assets/pages/about/about-tile-1.png";
import Image_2 from "@/assets/pages/about/about-tile-2.png";
import Image_3 from "@/assets/pages/about/about-tile-3.png";
import Image_4 from "@/assets/pages/about/about-tile-4.png";
import Image_5 from "@/assets/pages/about/about-tile-5.png";
import Image_6 from "@/assets/pages/about/about-tile-6.png";
import Image_7 from "@/assets/pages/about/about-tile-7.png";

import { gridTiles } from "@/components/page-link-tile/PageLinkTile.module.scss";

const image = {
  mock: ImageBg,
};
const imageMobile = {
  mock: ImageBgMobile,
};

const AboutPage = () => {
  return (
    <>
      <Header {...headerMocks} />
      <Hero title="About RES-Q" image={image} imageMobile={imageMobile} />

      <ContentSection>
        <Text
          typography="font-titillium font-semibold not-italic text-20px md:text-30px leading-28px md:leading-46px"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
          className="container mt-32px md:mt-86px"
        />

        <div className="container mt-18px md:mt-83px mb-70px md:mb-85px">
          <div className={gridTiles}>
            <PageLinkTile tileText={"Vision & Mission"} image={Image_1} linkTo={"/vision-and-mission"} />
            <PageLinkTile tileText={"RES-Q History"} image={Image_2} linkTo={"/about"} />
            <PageLinkTile tileText={"Member Countries"} image={Image_3} linkTo={"/member-countries"} />
            <PageLinkTile
              tileText={"RES-Q Scientific Committee"}
              tileTextPlacement="max-w-202px md:max-w-280px mt-22px md:mt-30px mb-23px md:mb-22px"
              image={Image_4}
              linkTo={"/scientific-committee"}
            />
            <PageLinkTile tileText={"RES-Q Core Team"} image={Image_5} linkTo={"/legal-task-force"} />
            <PageLinkTile tileText={"Support & Funding"} image={Image_6} />
            <PageLinkTile tileText={"Contact Us"} image={Image_7} />
          </div>
        </div>
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default AboutPage;
