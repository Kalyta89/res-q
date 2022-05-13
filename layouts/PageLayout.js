import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ContentSection from "@/components/content-section/ContentSection";
import Footer from "@/components/footer/Footer";

import headerConfig from "@/configs/header";
import footerConfig from "@/configs/footer";
import Seo from "@/components/basic/seo/seo";

const PageLayout = ({ hero, children }) => {
  return (
    <>
      <Seo metadata={hero} />
      <Header {...headerConfig} />
      <Hero image={hero.image} imageMobile={hero.imageMobile} title={hero.title} />
      <ContentSection className="pt-30px md:pt-85px pb-65px md:pb-105px">{children}</ContentSection>
      <Footer {...footerConfig} />
    </>
  );
};

export default PageLayout;
