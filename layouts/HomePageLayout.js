import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContentSection from "@/components/content-section/ContentSection";
import HeroHome from "@/components/hero-home/HeroHome";
import Partners from "@/components/partners/Partners";

import headerConfig from "@/configs/header";
import footerConfig from "@/configs/footer";

const HomePageLayout = ({ heroItems, partnerItems, children }) => {
  return (
    <>
      <Header {...headerConfig} />
      <HeroHome heroItems={heroItems} />
      <ContentSection className="pt-30px md:pt-85px">{children}</ContentSection>
      <Partners partnerItems={partnerItems} />
      <Footer {...footerConfig} />
    </>
  );
};

export default HomePageLayout;
