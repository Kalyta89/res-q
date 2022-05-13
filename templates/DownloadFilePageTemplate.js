import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import DataCollectionBody from "@/components/data-collection-body/DataCollectionBody";

const DownloadFilePageTemplate = ({ hero, text, files }) => {
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container>
        <DataCollectionBody bodyText={text} files={files} />
      </ContentSection.Container>
    </PageLayout>
  );
};

export default DownloadFilePageTemplate;
