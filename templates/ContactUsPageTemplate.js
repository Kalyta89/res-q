import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import ContentSection from "@/components/content-section/ContentSection";
import PageLayout from "@/layouts/PageLayout";
import Markdown from "@/components/basic/markdown/Markdown";

const ContactUsPageTemplate = ({ hero, text, countries }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
      }}
    >
      <PageLayout hero={hero} className="pt-20px">
        <ContentSection.Container>
          <Markdown markdown={text} className="mb-40px" />
          <ContactUsForm countries={countries} />
        </ContentSection.Container>
      </PageLayout>
    </GoogleReCaptchaProvider>
  );
};

export default ContactUsPageTemplate;
