import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Accordion from "@/components/accordion/Accordion";
import Footer from "@/components/footer/Footer";

import HeroImage from "@/assets/pages/faq-page/faq-page-hero-bg.png";
import HeroImageMob from "@/assets/pages/faq-page/faq-page-hero-bg-mobile.png";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

const FaqPage = () => {
  const heroImage = {
    mock: HeroImage,
  };
  const heroImageMob = {
    mock: HeroImageMob,
  };
  const headerText =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.";
  const accordion = {
    accordionItems: [
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
      {
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing."
          />
        ),
      },
    ],
  };

  return (
    <>
      <Header {...headerMocks} />
      <Hero title="FAQ" image={heroImage} imageMobile={heroImageMob} />

      <ContentSection className="pb-65px md:pb-105px">
        <Text className="container mt-30px md:mt-84px mb-30px md:mb-75px" typography="h4" text={headerText} />
        <Accordion {...accordion} titlePx="pl-15px md:pl-37px pr-15px md:pr-43px py-13px" />
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default FaqPage;
