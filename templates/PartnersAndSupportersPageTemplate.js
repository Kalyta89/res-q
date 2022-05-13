import PartnerTile from "@/components/partner-tile/PartnerTile";
import PageLayout from "@/layouts/PageLayout";

import { wrapper } from "./PartnersAndSupportersPageTemplate.module.scss";

const PartnersAndSupportersPageTemplate = ({ hero, data }) => {
  return (
    <PageLayout hero={hero} className="pt-20px">
      <div className={wrapper}>
        {data.map((tileItem, index) => {
          return (
            <PartnerTile
              key={index}
              title={tileItem.title}
              buttonLink={tileItem.buttonLink}
              description={tileItem.description}
              image={tileItem.image}
            />
          );
        })}
      </div>
    </PageLayout>
  );
};

export default PartnersAndSupportersPageTemplate;
