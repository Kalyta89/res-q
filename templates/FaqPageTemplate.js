import PageLayout from "@/layouts/PageLayout";

import Accordion from "@/components/accordion/Accordion";
import Text from "@/components/basic/text/Text";

const FaqPageTemplate = ({ hero, faqs }) => {
  const accordionItems =
      faqs.map((faq) => ({
        title: faq.question,
        content: (
          <Text
            className="px-15px md:px-107px pt-12px md:pt-30px pb-16px md:pb-30px"
            typography="faq-accordion-content"
            text={faq.answer}
          />
        ),
      }))
  
  return (
    <PageLayout hero={hero}>
      <Accordion accordionItems={accordionItems} titlePx="pl-15px md:pl-37px pr-15px md:pr-43px py-13px" />
    </PageLayout>
  );
};

export default FaqPageTemplate;
