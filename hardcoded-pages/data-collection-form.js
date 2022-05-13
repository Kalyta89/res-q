import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContentSection from "@/components/content-section/ContentSection";
import DataCollectionBody from "@/components/data-collection-body/DataCollectionBody";
import Hero from "@/components/hero/Hero";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import desktopHeroImg from "@/assets/pages/data-collection/data-collection-hero-bg.png";
import mobileHeroImg from "@/assets/pages/data-collection/data-collection-hero-bg-mobile.png";
import documentImg from "@/assets/pages/data-collection/data-colection-document.png";

const DataCollectionFormPage = () => {
  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";
  const buttonText = [
    {
      linkText1: "Download PDF",
      link1: "/",
      linkText2: "Download Word Doc",
      link2: "/",
    },
    {
      linkText1: "Download PDF (Spanish)",
      link1: "/",
      linkText2: "Download Word Doc (Spanish)",
      link2: "/",
    },
  ];

  const image = {
    mock: desktopHeroImg,
  };

  const imageMobile = {
    mock: mobileHeroImg,
  };

  return (
    <>
      <Header {...headerMocks} />
      <Hero title="RES-Q Data Collection Form" image={image} imageMobile={imageMobile} />
      <ContentSection className="pt-30px md:pt-84px pb-50px md:pb-107px">
        <DataCollectionBody image={documentImg} bodyText={text} buttonText={buttonText} />
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default DataCollectionFormPage;
