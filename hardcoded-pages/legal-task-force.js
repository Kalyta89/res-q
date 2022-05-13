import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Biography from "@/components/biography/Biography";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Footer from "@/components/footer/Footer";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

import MiniYoda from "@/assets/pages/scientific-committee/person-1.png";
import ImageBg from "@/assets/pages/legal-task-force/legal-task-force-hero-bg.png";
import ImageBgMobile from "@/assets/pages/legal-task-force/legal-task-force-hero-bg-mobile.png";

const image = {
  mock: ImageBg,
};
const imageMobile = {
  mock: ImageBgMobile,
};

const LegalTaskForcePage = () => {
  const buttonLabel = "Load More";

  const person1 = {
    imageOn: "left",
    image: {
      mock: MiniYoda,
    },
    title: "First Lastname",
    subtitle: "Job Title",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    className: "mt-30px md:mt-40px",
  };

  const person2 = {
    imageOn: "right",
    image: {
      mock: MiniYoda,
    },
    title: "First Lastname",
    subtitle: "Job Title",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    className: "mt-54px md:mt-90px",
  };

  const person3 = {
    imageOn: "left",
    image:  {
      mock: MiniYoda,
    },
    title: "Zuzana Ondrůjová",
    subtitle: "Data Protection Officer",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    className: "mt-30px md:mt-40px",
  };

  return (
    <>
      <Header {...headerMocks} />
      <Hero title="Legal Task Force" image={image} imageMobile={imageMobile} />

      <ContentSection>
        <div className="container">
          <Text
            typography="font-titillium font-bold not-italic text-28px md:text-50px leading-38px md:leading-76px"
            text="Who is behind data protection in RES-Q?"
            className="justify-self-start mt-30px md:mt-84px"
          />
          <Text
            typography="font-titillium font-semibold text-20px md:text-40px leading-31px md:leading-61px"
            text="Masaryk university"
            className="justify-self-start mt-20px md:mt-32px"
          />
          <Text
            typography="body"
            text="In 2020, the RES-Q team started to cooperate with a large team from Masaryk university in Brno, Czech republic, which consists of numerous experts on GDPR, data protection and cyber security."
            className="justify-self-start mt-19px md:mt-15px"
          />
        </div>
        <Biography contentTextClasses="mt-15px" buttonLabel={buttonLabel} reduceTextLength={false} {...person1} />
        <Biography contentTextClasses="mt-15px" buttonLabel={buttonLabel} reduceTextLength={false} {...person2} />

        <hr className="container-hr my-40px md:my-68px opacity-24" />

        <div className="container">
          <Text
            typography="font-titillium font-semibold text-20px md:text-40px leading-31px md:leading-61px"
            text="St. Anne’s University Hospital Brno (FNUSA)"
            className="justify-self-start"
          />
          <Text
            typography="body"
            text="Another member of the RES-Q Legal Task Force team is Data Protection Officer – Zuzana Ondrůjová."
            className="justify-self-start mt-19px md:mt-15px"
          />
        </div>
        <Biography contentTextClasses="mt-15px" buttonLabel={buttonLabel} reduceTextLength={false} {...person3} />

        <hr className="container-hr my-40px md:my-68px opacity-24" />

        <div className="container">
          <Text
            typography="font-titillium font-semibold text-20px md:text-40px leading-31px md:leading-61px"
            text="St. Anne’s University Hospital Brno"
            className="justify-self-start mt-8"
          />
          <Text
            typography="body"
            text="Address: Pekařská 664/53, 656 91 Brno"
            className="justify-self-start mt-19px md:mt-15px"
          />
          <Text typography="body" text="T: +420 543 184 070" className="justify-self-start" />
          <Text typography="body" text="E: dpo@fnusa.cz" className="justify-self-start" />
          <Text
            typography="body"
            text="The entire team works hard to ensure that data handling complies with all applicable data protection laws."
            className="justify-self-start mt-24px md:mt-32px mb-65px md:mb-88px"
          />
        </div>
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default LegalTaskForcePage;
