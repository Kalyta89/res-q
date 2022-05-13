import PageLayout from "@/layouts/PageLayout";
import ContentSection from "@/components/content-section/ContentSection";
import Text from "@/components/basic/text/Text";
import Image from "@/components/basic/image/Image";
import Button from "@/components/basic/button/Button";

import { subpage_grid, subpage_image_area, subpage_content_area } from "./PartnerProfilePageTemplate.module.scss";

const PartnerProfilePageTemplate = ({ hero, logo, text, buttonWebsiteLink }) => {
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container>
        <div className={`grid mb-50px ${subpage_grid}`}>
          <div className={`relative w-full ${subpage_image_area}`}>
            <Image media={logo} width="365px" height="240px" alt={hero.title} quality={100} layout="responsive" />
          </div>
          <div className={subpage_content_area}>
            <Text typography="body" text={text} className="mb-30px lg:mb-65px mt-30px lg:mt-0px" />
            <div className="grid md:flex items-center justify-items-center justify-center lg:justify-start">
              {buttonWebsiteLink ? (
                <Button
                  variants="blue"
                  link={buttonWebsiteLink}
                  btnClasses="py-11px"
                  className="pb-20px md:pb-0px md:pr-20px md:pr-32px"
                >
                  View website
                </Button>
              ) : null}
              <Button variants="border_blue" link="/partners-and-supporters">
                View all partners
              </Button>
            </div>
          </div>
        </div>
      </ContentSection.Container>
    </PageLayout>
  );
};

export default PartnerProfilePageTemplate;
