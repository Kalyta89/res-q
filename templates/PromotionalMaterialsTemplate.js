import ContentSection from "@/components/content-section/ContentSection";
import DownloadTile from "@/components/download-tile/DownloadTile";
import PageLayout from "@/layouts/PageLayout";

import { wrapper } from "./PromotionalMaterialsTemplate.module.scss";

const PromotionalMaterialsTemplate = ({ hero, data }) => {
  return (
    <PageLayout hero={hero} className="pt-20px">
      <ContentSection.Container>
        <div className={wrapper}>
          {data.map((tileItem, index) => {
            return (
              <DownloadTile
                key={index}
                title={tileItem.title}
                links={tileItem.links}
                description={tileItem.description}
                fileLink={tileItem.fileLink}
                fileName={tileItem.fileName}
                image={tileItem.image}
              />
            );
          })}
        </div>
      </ContentSection.Container>
    </PageLayout>
  );
};

export default PromotionalMaterialsTemplate;
