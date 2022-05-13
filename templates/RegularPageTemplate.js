import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import Markdown from "@/components/basic/markdown/Markdown";

const RegularPageTemplate = ({ hero, text }) => {
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container>
        <Markdown markdown={text} />
      </ContentSection.Container>
    </PageLayout>
  );
};

export default RegularPageTemplate;
