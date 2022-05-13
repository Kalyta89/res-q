import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageText from "@/components/image-text/ImageText";
import Text from "@/components/basic/text/Text";
import ListText from "@/components/list-text/ListText";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import ImageBgMobile from "@/assets/pages/vision-and-mission-page/vision-and-mission-hero-bg-mobile.png";
import ImageBgDesktop from "@/assets/pages/vision-and-mission-page/vision-and-mission-hero-bg.png";
import ImageTextDesktop from "@/assets/pages/vision-and-mission-page/image-text-desktop.png";

const image = {
  mock: ImageBgDesktop,
};

const imageMobile = {
  mock: ImageBgMobile,
};

const VisionAndMissionPage = () => {
  return (
    <>
      <Header {...headerMocks} />
      <Hero title="Vision & Mission" image={image} imageMobile={imageMobile} />
      <ContentSection>
        <div className="container">
          <div className="justify-items-start">
            <Text typography="h2" className="mt-30px md:mt-70px mb-14px md:mb-50px" text="The Challenge" />
            <Text
              typography="body"
              text={
                <>
                  Healthcare policy should be driven by the best scientific evidence available. When it come to strokes
                  a large amount of evidence already exists, based primarily on randomized clinical trials or large
                  international registries. After decades of research, strokes can be treated as effectively as other
                  acute conditions such as myocardial infarction. However, less than 50% of stroke cases are admitted to
                  stroke units, while less than 5% are treated with recanalization therapies, and only 10% receive
                  anticoagulation therapy (if this is indicated). The lack of implementation is most likely due to the
                  following factors:
                </>
              }
            />
            <ListText
              content={
                <ol>
                  <li>
                    Advances in the treatment of strokes are relatively recent (e.g. as compared to myocardial
                    infarction)
                  </li>
                  <li>
                    Strokes have received less attention than other health hazards of modern society (i.e. heart disease
                    and cancer)
                  </li>
                  <li>Strokes are not a separate specialization, but exists within the field of neurology</li>
                </ol>
              }
            />
            <Text
              typography="body"
              className="mt-29px md:mt-35px"
              text={
                <>
                  This project aims to provide physicians, managers, professional societies, insurance companies, Health
                  Ministries, the European Commission, and other policy makers; with a tool that will inform them about
                  the unmet needs in the management of the quality of stroke care and the implementation of evidence
                  based practices. It will identify country specific targets and set the baseline for future decisions,
                  plans, and actions to improve stroke care quality.
                </>
              }
            />
          </div>
        </div>
        <ImageText
          image={ImageTextDesktop}
          className="mt-39px md:mt-60px mb-65px md:mb-105px"
          content={
            <>
              In this project, the goal is to develop a new registry (and integrate data from existing ones in select
              countries) to monitor the most important quality (performance) measures for stroke care. The collected
              data should provide a snapshot of the level of quality of care and prioritize the targets for
              interventions to improve the quality of stroke care. Usually, providing feedback on stroke care
              performance establishes motivation for many hospitals and physicians to improve stroke care quality. It is
              anticipated that data will come from different databases, from many hospitals and countries, and that it
              will provide important information to support and guide public health policies for one of the most
              devastating diseases - strokes. The final goal is to improve stroke care quality and decrease disparities
              in stroke care between different countries.
            </>
          }
        />
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default VisionAndMissionPage;
