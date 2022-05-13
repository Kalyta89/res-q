import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import MarkdownDownloadLink from "@/components/markdown-download-link/MarkdownDownloadLink";

const DownloadAndLinkPageTemplate = ({ hero, text, file }) => {
    console.log(`DownloadAndLinkPageTemplate ${file}`);
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container>
        <MarkdownDownloadLink bodyText={text} file={file} />
      </ContentSection.Container>
    </PageLayout>
  );
};

export default DownloadAndLinkPageTemplate;
