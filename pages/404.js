import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";

import ImageBgMobile from "@/assets/pages/partner-aalborg-uni/partner-aalborg-uni-hero-bg-mobile.png";
import ImageBgDesktop from "@/assets/pages/partner-aalborg-uni/partner-aalborg-uni-hero-bg.png";

import headerConfig from "@/configs/header";
import footerConfig from "@/configs/footer";

const heroStub = {
  title: "Page Not Found",
  image: {
    mock: ImageBgDesktop,
  },
  imageMobile: {
    mock: ImageBgMobile,
  },
};

export default function Custom404() {
  return (
    <>
      <Header {...headerConfig} />
      <Hero {...heroStub} />
      <Footer {...footerConfig} />
    </>
  );
}
