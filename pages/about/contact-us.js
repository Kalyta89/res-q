import ContactUsPageTemplate from "@/templates/ContactUsPageTemplate";

import { getData } from "@/utils/api";

const ContactUsPage = ({ hero, text, countries }) => {
  return <ContactUsPageTemplate hero={hero} text={text} countries={countries} />;
};

export async function getStaticProps() {
  const pageData = await getData("/contact-us");
  const countriesData = await getData("/countries");

  if (pageData == null || countriesData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      text: "Please visit our [FAQs page](/useful-information/faq) to see if your question is answered there. If you still don’t find what you are looking for then you can contact us using the form below.",
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
      countries: countriesData
        .sort((a, b) => (a.english_name > b.english_name ? 1 : -1))
        .map((country) => ({
          label: country.english_name,
          value: country.iso_a2_code,
        })),
    },
  };
}

export default ContactUsPage;
