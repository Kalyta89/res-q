import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContentSection from "@/components/content-section/ContentSection";

import headerConfig from "@/configs/header";
import footerConfig from "@/configs/footer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header {...headerConfig} />
      <ContentSection>{children}</ContentSection>
      <Footer {...footerConfig} />
    </>
  );
};

export default BasicLayout;
