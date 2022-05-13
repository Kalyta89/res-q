import FaqPageTemplate from "@/templates/FaqPageTemplate";

import { getData } from "@/utils/api";

const FaqPage = ({ hero, faqs }) => {
  return <FaqPageTemplate hero={hero} faqs={faqs} />;
};

export async function getStaticProps() {
  const pageData = await getData("/faq");
  const questionsAnswerPairs = await getData("/question-and-answers");

  if (pageData == null || questionsAnswerPairs == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: pageData.finish,
      hero: {
        title: pageData.title,
        image: {
          id: pageData.jumbotron_desktop.id,
          mime: pageData.jumbotron_desktop.mime,
          url: pageData.jumbotron_desktop.url,
        },
        imageMobile: {
          id: pageData.jumbotron_mobile.id,
          mime: pageData.jumbotron_mobile.mime,
          url: pageData.jumbotron_mobile.url,
        },
      },
      faqs: questionsAnswerPairs
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        })),
    },
  };
}

export default FaqPage;
