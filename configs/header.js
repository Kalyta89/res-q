import LogoImage from "@/assets/components/header/header-logo.png";

export default {
  image: LogoImage,
  logoLink: "/",
  headerLinksMobile: [
    {
      label: "About",
      link: "/about",
      relatedLinks: [
        { label: "Vision & Mission", link: "/about/vision-and-mission" },
        { label: "History", link: "/about/history" },
        { label: "Funding", link: "/about/funding" },
        { label: "Hospitals using RES-Q", link: "/about/hospitals-using-res-q" },
        { label: "Scientific Committee", link: "/about/scientific-committee" },
        { label: "Core Team", link: "/about/core-team" },
        { label: "Legal Team", link: "/about/legal-team" },
        { label: "Success Stories", link: "/about/success-stories" },
        { label: "Presentations & Lectures", link: "/about/presentations-and-lectures" },
        { label: "Data collection forms", link: "/useful-information/data-collection-form" },
        { label: "Contact us", link: "/about/contact-us" },
      ],
    },
    {
      label: "Awards & Certification",
      link: "/awards-and-certifications",
      relatedLinks: [
        { label: "ESO/WSO Angels Awards", link: "/awards-and-certifications/eso-wso-angels-awards" },
        { label: "Emergency Services (EMS) Angels Award", link: "/awards-and-certifications/ems-angels-awards" },
      ],
    },
    /* {
      label: "Useful information",
      link: "/useful-information",
      relatedLinks: [
        { label: "How to use RES-Q tool", link: "/useful-information/how-to-use-res-q-tool" },
        { label: "RES-Q data collection form", link: "/useful-information/data-collection-form" },
        { label: "Fever Sugar Swallowing (FeSS) form", link: "/useful-information/fever-sugar-swallowing-form" },
        { label: "FAQ", link: "/useful-information/faq" },
      ],
    }, */
    {
      label: "Partners & Supporters",
      link: "/partners-and-supporters",
      relatedLinks: [
        { label: "Partners & Supporters", link: "/partners-and-supporters" },
        { label: "World Stroke Organization", link: "/partners/world-stroke-organization" },
        { label: "European Stroke Organization", link: "/partners/european-stroke-organization" },
        { label: "AHA/ASA", link: "/partners/american-heart-association" },
        { label: "Angels Initiative", link: "/partners/angels-initiative" },
        { label: "Mission Thrombectomy 2020+", link: "/partners/mission-thrombectomy-2020" },
        { label: "Nursing Research Institute", link: "/partners/nursing-research-institute" },
        { label: "IRENE", link: "/partners/irene" },
        { label: "Czech Stroke Society", link: "/partners/czech-stroke-society" },
        { label: "Aalborg University", link: "/partners/aalborg-university" },
        { label: "STROCZECH", link: "/partners/stroczech" },
        { label: "Ministry of education, youth and sports", link: "/partners/ministry-education-youth-sports" },
      ],
    },
    {
      label: "Data Policies",
      link: "/data-policies",
      relatedLinks: [
        { label: "Data Privacy", link: "/data-policies/data-privacy" },
        { label: "Data Request Policy", link: "/data-policies/data-request-policy" },
        { label: "Data Security Policy", link: "/data-policies/data-security-policy" },
        { label: "Data Sharing & Ownership Policy", link: "/data-policies/data-sharing-and-ownership-policy" },
        { label: "GDPR Compliance", link: "/data-policies/gdpr-compliance" },
        { label: "POPI Act", link: "/data-policies/popi-act" },
      ],
    },
  ],
  headerLinksDesktop: [
    {
      type: "mega",
      aboutLabel: "About",
      aboutLink: "/about",
      aboutRelatedLinks: [
        { label: "Vision & Mission", link: "/about/vision-and-mission" },
        { label: "History", link: "/about/history" },
        { label: "Funding", link: "/about/funding" },
        { label: "Hospitals using RES-Q", link: "/about/hospitals-using-res-q" },
        { label: "Scientific Committee", link: "/about/scientific-committee" },
        { label: "Core Team", link: "/about/core-team" },
        { label: "Legal Team", link: "/about/legal-team" },
        { label: "Success Stories", link: "/about/success-stories" },
        { label: "Presentations & Lectures", link: "/about/presentations-and-lectures" },
        { label: "Data collection forms", link: "/useful-information/data-collection-form" },
        { label: "Contact us", link: "/about/contact-us" },
      ],
      partnersLabel: "Partners & Supporters",
      partnersLink: "/partners-and-supporters",
      partnersRelatedLinks: [
        { label: "World Stroke Organization", link: "/partners/world-stroke-organization" },
        { label: "European Stroke Organization", link: "/partners/european-stroke-organization" },
        { label: "AHA/ASA", link: "/partners/american-heart-association" },
        { label: "Angels Initiative", link: "/partners/angels-initiative" },
        { label: "Mission Thrombectomy 2020+", link: "/partners/mission-thrombectomy-2020" },
        { label: "Nursing Research Institute", link: "/partners/nursing-research-institute" },
        { label: "IRENE", link: "/partners/irene" },
        { label: "Czech Stroke Society", link: "/partners/czech-stroke-society" },
        { label: "Aalborg University", link: "/partners/aalborg-university" },
        { label: "STROCZECH", link: "/partners/stroczech" },
        { label: "Ministry of education, youth and sports", link: "/partners/ministry-education-youth-sports" },
      ],
    },
    {
      label: "Awards & Certification",
      link: "/awards-and-certifications",
      relatedLinks: [
        { label: "ESO/WSO Angels Awards", link: "/awards-and-certifications/eso-wso-angels-awards" },
        { label: "Emergency Services (EMS) Angels Award", link: "/awards-and-certifications/ems-angels-awards" },
      ],
    },/*
    {
      label: "Useful information",
      link: "/useful-information",
      relatedLinks: [
        { label: "How to use RES-Q tool", link: "/useful-information/how-to-use-res-q-tool" },
        { label: "RES-Q data collection form", link: "/useful-information/data-collection-form" },
        { label: "Fever Sugar Swallowing (FeSS) form", link: "/useful-information/fever-sugar-swallowing-form" },
        { label: "FAQ", link: "/useful-information/faq" },
      ],
    }, */
    {
      label: "Data Policies",
      link: "/data-policies",
      relatedLinks: [
        { label: "Data Privacy", link: "/data-policies/data-privacy" },
        { label: "Data Request Policy", link: "/data-policies/data-request-policy" },
        { label: "Data Security Policy", link: "/data-policies/data-security-policy" },
        { label: "Data Sharing & Ownership Policy", link: "/data-policies/data-sharing-and-ownership-policy" },
        { label: "GDPR Compliance", link: "/data-policies/gdpr-compliance" },
        { label: "POPI Act", link: "/data-policies/popi-act" },
      ],
    },
  ],
  metricsLabel: "RES-Q Live Metrics",
  metricsLink: "/useful-information/live-metrics",
  signInButtonLabel: "Sign in",
  signInButtonLink: "https://qualityregistry.eu/resq/pages/login/login",
  registerButtonLabel: "Join RES-Q",
  registerButtonLink: "https://qualityregistry.eu/quality-registry-centre-registration",
};
