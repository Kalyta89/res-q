import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import BlogPostDate from "@/components/basic/blog-post-date/BlogPostDate";
import Markdown from "@/components/basic/markdown/Markdown";

const NewsPostPageTemplate = ({ hero, date, text }) => {
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container>
        <BlogPostDate className="mb-19px" date={date} />
        <Markdown markdown={text} />
      </ContentSection.Container>
    </PageLayout>
  );
};

export default NewsPostPageTemplate;
