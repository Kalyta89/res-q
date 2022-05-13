import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Biography from "@/components/biography/Biography";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import ImageBgMobile from "@/assets/pages/partner-aalborg-uni/partner-aalborg-uni-hero-bg-mobile.png";
import ImageBgDesktop from "@/assets/pages/partner-aalborg-uni/partner-aalborg-uni-hero-bg.png";
import BiographyImage from "@/assets/pages/partner-aalborg-uni/biography.png";

const image = {
  mock: ImageBgDesktop,
};

const imageMobile = {
  mock: ImageBgMobile,
};

const PartnerAalborgUniPage = () => {
  return (
    <>
      <Header {...headerMocks} />
      <Hero title="Aalborg University" image={image} imageMobile={imageMobile} />

      <ContentSection>
        <div className="container">
          <Text
            typography="h4"
            text="RES-Q closely cooperates with a representative of the Department of Architecture and Media Technology at Aalborg University in Denmark, Assoc. Prof. Hendrik Knoche."
            className="justify-self-start mt-30px md:mt-84px"
          />
          <Text
            typography="body"
            text="Hendrik is a Principal Investigator of the RES-Q UX project and he supervised a study on feedback using and its impact within the user experience project on improved feedback system in RES-Q. This study was used as a basis for further enhancement of RES-Q platform and user experience."
            className="justify-self-start mt-30px"
          />
          <Text
            typography="body"
            text="This project aims to provide physicians, managers, professional societies, insurance companies, Health Ministries, the European Commission, and other policy makers with a tool that will inform them about the unmet needs in the management of stroke care and the implementation of evidence based practices. It will identify country specific targets and set the baseline for future decisions, plans, and actions to improve stroke care quality."
            className="justify-self-start mt-33px md:mt-30px"
          />
        </div>
        <Biography
          reduceTextLength={false}
          image={{ mock: BiographyImage }}
          title="Hendrik Knoche"
          subtitle="Associate professor at Aalborg University, Denmark"
          contentClasses="mt-23px"
          contentTextTypography="font-titillium font-semibold text-18px md:text-25px leading-29px md:leading-38px"
          text={
            <div className="pl-17px md:pl-26px">
              <ul className="list-disc list-outside mt-3px">
                <li className="mb-18px md:mb-24px pl-11px md:pl-21px pr-10px md:pr-0px">
                  Experienced researcher with a demonstrated history of working in ITC, HCI and User eXperience
                </li>
                <li className="mb-18px md:mb-24px pl-11px md:pl-21px">
                  PhD in Computer Science from University College London
                </li>
                <li className="mb-15px md:mb-24px pl-11px md:pl-21px">UX for RES-Q</li>
              </ul>
            </div>
          }
          className="mt-34px md:mt-63px"
        />
        <div className="container mt-13px md:mt-53px mb-65px md:mb-105px">
          <Text
            typography="body"
            text="“The goal of our effort is to improve stroke care quality and increase the standards worldwide by harnessing the knowledge of how to use feedback from the Registry of Stroke Care Quality (RES-Q) more effectively. This should motivate people to do better in terms of their performance in relation to their health or their provision of healthcare.”"
            className="justify-self-start"
          />
          <Text
            typography="body"
            text="Hendrik has been an active member of the Implementation Research Network in Stroke Care Quality (IRENE COST Action, CA18118), which is a project supporting the operations of RES-Q registry, its development, data collection and dissemination of the results. In March 2021 Hendrik became a Leader of the Registry Management Working Group and, based on his displayed efforts in virtual networking within the Action, was appointed as a Virtual Networking Support Manager in July 2021. His expertise and experience has been an invaluable asset to whole Action."
            className="justify-self-start mt-32px md:mt-30px md:pr-1px"
          />
        </div>
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default PartnerAalborgUniPage;
