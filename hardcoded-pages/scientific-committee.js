import Header from "@/components/header/Header";
import ContentSection from "@/components/content-section/ContentSection";
import Biography from "@/components/biography/Biography";
import Hero from "@/components/hero/Hero";
import Text from "@/components/basic/text/Text";
import Footer from "@/components/footer/Footer";

import Person1Image from "@/assets/pages/scientific-committee/person-1.png";
import Person2Image from "@/assets/pages/scientific-committee/person-2.png";
import Person3Image from "@/assets/pages/scientific-committee/person-3.png";
import Person4Image from "@/assets/pages/scientific-committee/person-4.png";
import Person5Image from "@/assets/pages/scientific-committee/person-5.png";
import Person6Image from "@/assets/pages/scientific-committee/person-6.png";
import Person7Image from "@/assets/pages/scientific-committee/person-7.png";
import Person8Image from "@/assets/pages/scientific-committee/person-8.png";
import Person9Image from "@/assets/pages/scientific-committee/person-9.png";
import Person10Image from "@/assets/pages/scientific-committee/person-10.png";
import Person11Image from "@/assets/pages/scientific-committee/person-11.png";
import Person12Image from "@/assets/pages/scientific-committee/person-12.png";
import Person13Image from "@/assets/pages/scientific-committee/person-13.png";
import HeroDesc from "@/assets/pages/scientific-committee/scientific-committee-hero-bg.png";
import HeroMob from "@/assets/pages/scientific-committee/scientific-committee-hero-bg-mobile.png";

import headerMocks from "@/utils/mocks/headerMocks";
import footerMocks from "@/utils/mocks/footerMocks";

const ScientificCommitteePage = () => {
  const heroImage = {
    mock: HeroDesc,
  };
  const heroImageMob = {
    mock: HeroMob,
  };
  const buttonLabel = "View More";
  const headerText =
    "RES- Q Scientific Committee comprises of expert members from various organisations and geographies who are dedicated and committed to bring continuous improvement in stroke care. The goal of this committee is to improve quality of stroke care and reduce the stroke burden by close cooperation and working together to drive continuous quality monitoring . To achieve such goals, one of the important role of the Scientific Committee is governance of the use of global RES-Q data for research purposes, to help countries/ regions to publish more and more evidence in stroke management.";
  const person1 = {
    image: {
      mock: Person1Image,
    },
    imageOn: "left",
    title: "Robert Mikulik",
    subtitle: "Director of Stroke Research Program",
    text: "Robert Mikulik, MD, Ph.D. is Professor of Neurology and Director of the Stroke Research Program at St. Anne’s University Hospital and Masaryk University in Brno. He is the founder of RES-Q registry. Dr Mikulik is one of the co-founders of the ICRC, which is being built as one of the biggest research infrastructural projects in the Czech Republic. The main research interest of Robert Mikulik is treatment of acute strokes, an organization of health care, stroke care logistics, and rising stroke awareness. He has developed a training program that is using simulation environment to improve decision-making and logistics of stroke teams in treatment with intravenous thrombolysis. In 2015 Prof. Mikulik and his team established RES-Q, Registry of Stroke Care Quality. Robert Mikulik served as Member at Large in the Executive Committee in the European Stroke Organization in 2016-2017 and has been chairing the ESO-EAST project aiming to improve stroke care in Central and Eastern European countries. He serves as Chair for research in St. Anne’s University Hospital in Brno since August 2019. He has published more than 150 articles in renowned journals and participated in several national or international projects.",
  };
  const person2 = {
    image: {
      mock: Person12Image,
    },
    imageOn: "right",
    title: "Sandy Middleton",
    text: "Sandy Middleton is the Professor of Nursing and Director of the Nursing Research Institute at St Vincent’s Health Network Sydney, St Vincent’s Hospital Melbourne and Australian Catholic University. She was the lead investigator on the landmark QASC Trial demonstrating decreased death and dependency following implementation of nurse-initiated protocols to manage fever, hyperglycaemia and swallowing post-stroke (FeSS Protocols). Working with RES-Q and the Angels Initiative, Professor Middleton successfully implemented the FeSS Protocols into 64 hospitals in 17 European countries. She is committed to a vision of quality monitoring in stroke by using routinely collected data – collected once but used for multiple purposes such as research and local quality improvement initiatives.",
  };
  const person3 = {
    image: {
      mock: Person10Image,
    },
    imageOn: "left",
    title: "Sheila Martins",
    text: "Sheila Cristina Ouriques Martins is neurologist, PhD in Stroke Neurology, Professor of Universidade Federal of Rio Grande do Sul/Hospital de Clínicas de Porto Alegre and Chief of Neurology and Neurosurgery of Hospital Moinhos de Vento. She is the founder and President of the Brazilian Stroke Network. As advisor of the MOH of Brazil she started the organization and the implementation of the National Stroke Policy. She works with research to modify public policies. In 2021 she started the implementation of a World Stroke Organization (WSO) program together with the MOH: primary prevention for stroke in middle risk patients based on a polypill associated with lifestyle modification and use of Stroke Riskometer App. Since 2015 she is working with other Latin America countries to improve stroke care in the region. She has a lot of experience as clinician in public health, and also as health manager working globally with different levels of governments (Ministries of Health, Health secretaries of States and Cities), helping to implement strategies to improve stroke care. She is part of the World Stroke Organization since 2008 and since 2020 she is the President-Elect.",
  };
  const person4 = {
    image: {
      mock: Person2Image,
    },
    imageOn: "right",
    title: "Michael Hill",
    text: "Michael Hill is a stroke neurologist, professor in the department of clinical neurosciences at the University of Calgary, Foothills Medical Centre located in Calgary, Canada. His work has focussed on many aspects of stroke care from stroke epidemiology to acute stroke intervention. He has worked extensively on quality improvement, and principally on the acute care of the stroke patient. The value of quality metrics is critical in driving the behaviour and system change required to improve the outcome of stroke patients globally.",
  };
  const person5 = {
    image: {
      mock: Person6Image,
    },
    imageOn: "left",
    title: "Pablo M. Lavados",
    text: "Dr Lavados is a professor of Neurology at Clinica Alemana, Universidad del Desarrollo. Dr. Lavados is a clinician and researcher at the Vascular Neurology Unit in Clínica Alemana, as well as the director of the Research and Clinical Trials Unit at Clínica Alemana in Santiago.Dr. Lavados was the principal investigator of the PISCIS epidemiological stroke Project and is the country’s leader of three international academic clinical trials: INTERACT2, ENCHANTED and HEADPOST MAIN, and the principal co-investigator of the HEADPOST PILOT clinical trial and the RECCA stroke registry in Clínica Alemana, and co-investigator in the OPTIC Stroke Registry, the SOCRATES, and NAVIGATE ESUS international clinical trials, as well as the recently published ÑANDU stroke surveillance study in southern Chile. He is also a Ministry of Health advisor on the national stroke program in Chile. Dr Lavados has authored more than 150 papers in peer-reviewed journals around the topics that include quality control in stroke care, organized stroke care, secondary prevention of stroke, epidemiology of stroke, thrombolysis in acute ischemic stroke.",
  };
  const person6 = {
    image: {
      mock: Person4Image,
    },
    imageOn: "right",
    title: "Hany Aref",
    text: "Dr Aref is a Head of the Neurology department, and director of the stroke program for Ain Shams University, Cairo, Egypt. He is also the General Secretary of; Egyptian Society of Neurology, Psychiatry and neurosurgery. Board Member of Pan Arab Union on Neurological Societies Treasurer of Pan Arab Union on Neurological Societies Fellow of American Academy of Neurology (FAAN) Fellow of the European Stroke Organization (FESO) Member of European Academy of Neurology Member of editorial board of the European Journal of Neurology. Dr Aref published more than 100 publications in peer reviewed journals. Also he is in the editorial board of many prestigious journals including the European Journal of Neurology. He played a major role in improving the stroke service quality in Egypt, through his activity with the Stroke chapter of the Egyptian society of Neurology. Improving stroke service quality is becoming very important in the era of minimizing door to needle time and thrombectomy. Any stroke center should monitor its quality and benchmark itself against other stroke units.",
  };
  const person7 = {
    image: {
      mock: Person7Image,
    },
    imageOn: "left",
    title: "Georgios K. Tsivgoulis",
    text: "Dr Tsivgoulis is a Professor & Chairman, Second Department of Neurology, National & Kapodistrian University of Athens, Greece. He is also a visiting Professor & Director of Stroke Research, Department of Neurology, University of Tennessee Health Science Center, Memphis, TN, USA. He is also the Director of Neurosonology Laboratory, the Director of Resident Training and Cerebrovascular Fellowship Program in his Department. Dr Tsivgoulis serves as Vice-President of the European Stroke Organization (ESO). His research interests focus on acute reperfusion therapies in acute ischemic stroke, applications of neurosonology in cerebrovascular diseases, secondary stroke prevention and clinical trial methodology. Dr Tsivgoulis has authored >550 papers and 16 book chapters. He has acted as Reviewer in >60 International Medical Journals presented 153 invited lectures in International Scientific Conferences and Institutions. His research has received >17.000 citations (Google Scholar) and his H-index is 66 (Google Scholar)",
  };
  const person8 = {
    image: {
      mock: Person13Image,
    },
    imageOn: "right",
    title: "P N Sylaja",
    text: "Prof Sylaja is a Professor and Head of Neurology and in charge of the Comprehensive stroke Care Program, SCTIMST, Trivandrum. She did her Stroke fellowship from the University of Calgary in 2006. She has been the Past President, Indian Stroke Association. Dr Sylaja is the Honorary Clinical Professor, University of Lancashire, UK, Member of the Task force group of the Noncommunicable diseases division of ICMR, Member of the GBD Cardiovascular diseases and Stroke working group. She is also a member representing India, Educational Committee of the World Stroke Organization(2017-20). She is a Technical consultant of stroke care activities, Government of Kerala and CME convenor of the Indian Academy of Neurology (2020-2023). Prof Sylaja has written over 150 publications and 12 book chapters. She believes in how initiatives like Angels has led to help hospitals do quality monitoring using RES-Q in India. This has helped to improve the quality of stroke care in both government and private hospitals.",
  };
  const person9 = {
    image: {
      mock: Person5Image,
    },
    imageOn: "left",
    title: "Natan M Bornstein",
    text: "Dr Natan is a Professor of Neurology at the Tel-Aviv University, Sackler Faculty of Medicine. He is also the Chairman of the Israeli Stroke Society (ISS) since 2019 and Director of the Brain Division at the Shaare-Zedek Medical Center since 2016. He was also the Head of Stroke Unit at the Tel-Aviv Medical Center (1989-2016). Dr Natan has been the Chairman of the ESNCH (2013-2017), Chairman of the Israeli Neurological Association (since 2008-2017), Vice President of the World Stroke Organization (WSO) (2008-2018), Chairman of Neurology Department, Tel-Aviv Medical Center (2002-2007) He is also the Consulting Editor of Stroke and Neurological Sciences and on the editorial board of STROKE, CVD, EjoN, Acta Neurologica Scandinavica, International Journal of Stroke, Neurosonology, Frontiers in Stroke, Journal of Annals of Medical Science. His main research interests are: Epidemiology of stroke, Stroke prevention, Vascular dementia, Inflammation and stroke, Neurosonology.",
  };
  const person10 = {
    image: {
      mock: Person8Image,
    },
    imageOn: "right",
    title: "Bart van der Worp",
    text: "Bart van der Worp is a neurologist with a special interest in cerebrovascular diseases at the University Medical Center in Utrecht, the Netherlands. He has been (co-)Chief Investigator of the randomised stroke trials HAMLET, PAIS, COOLIST, and VAST and is (co-)Chief Investigator of PRECIOUS, APACHE-AF, and MR ASAP. He is a member of the Dutch CONTRAST consortium which aims to identify and test new treatments for patients with acute ischaemic stroke or intracerebral haemorrhage. He is Past President of ESO.",
  };
  const person11 = {
    image: {
      mock: Person9Image,
    },
    imageOn: "left",
    title: "Nijasri C. Suwanwela",
    text: "Dr. Nijasri C. Suwanwela is a Professor of Neurology at Chulalongkorn University in Thailand. She received her medical degree and completed her residency in neurology from Chulalongkorn University. She was awarded by the Anandamahidol Foundation and had her fellowship training in cerebrovascular disease at Massachusetts General Hospital in Boston, USA. She also received a Certificate in Neurosonology from the American Society of Neuroimaging. Dr. Suwanwela pioneered the ‘Stroke Fast Track’ program and the use of thrombolysis in acute ischemic stroke in Thailand. She is presently the Director of Chulalongkorn Comprehensive Stroke Center and the Chula Neuroscience Center. She is the former President of the Neurological Society of Thailand. Recently, she was appointed as Director of Chulalongkorn University, International Medical Program at the Faculty of Medicine, Chulalongkorn University. She is also the Vice President of the ASEAN Neurological Association and Executive Committee (Treasurer) of the Asia Pacific Stroke Organization (APSO). She is a Past-President of Asian Stroke Advisory Panel. She has published many articles in international peer-reviewed journals. She has also delivered many local and international lectures.",
  };
  const person12 = {
    image: {
      mock: Person3Image,
    },
    imageOn: "right",
    title: "Thang Huy Nguyen",
    text: "Dr Thang is a Senior Stroke Consultant and Head, Department of Cerebrovascular Disease, The People ‘s 115 Hospital, HCM city. He is also the Chair of Department of Neurology, Pham Ngoc Thach University of Medicine, HCM city. Dr Thang serves as the Vice President of VietNam Stroke Association, President of HCM city Stroke Association and Member of the Asian Stroke Advisor Board Committee, Vietnam. Dr Thang joined the Angels Initiative and has been using RES-Q since 2017. Quality monitoring has been very useful for us to monitor and improve stroke care quality. After few years, we have developed nearly a hundred stroke units around the country that has saved lives for a lot of stroke patients. Our participation in RES-Q has been a most important decision towards better stroke care.",
  };
  const person13 = {
    image: {
      mock: Person11Image,
    },
    imageOn: "left",
    title: "Thomas Fischer",
    text: "Thomas is a global angels lead based out of Germany. He joined Boehringer Ingelheim in 1985 in sales force, progressed to trainer for sales reps for specialty care medications, product manager and team leader in Marketing for HIV medication in Germany. In 2004, Thomas joined the corporate marketing team in different positions in HIV, Parkinson’s disease, myocardial infarction and stroke. Getting more and more involved in stroke care projects as QUICK, Arabic Health and ESO EAST, Thomas developed together with Jan the concept of the Angels Initiative in 2016. Since the launch, angels has developed a community of >61,000 Health care professionals from > 5,500 hospitals in 130 countries. Angels Initiative has been showcased as “best practice” example for capacity building in Low and Middle Income Countries in the Report Access to Medicine Index Report. Quality Monitoring is apart from Standardisation, Education and Community one of the four pillars of the strategy of the Angels Initiative. It is crucial for the improvement and the maintenance of the processes along the patient pathway. Thomas has been actively involved in the development of RES-Q since the early time of ESO EAST and working together to make quality monitoring in stroke care more meaningful and easy to use.",
  };

  return (
    <>
      <Header {...headerMocks} />
      <Hero title="RES-Q Scientific Committee" image={heroImage} imageMobile={heroImageMob} />
      <ContentSection className="pt-30px md:pt-84px pb-65px md:pb-105px">
        <Text
          className="container mb-49px md:mb-42px"
          typography="font-titillium font-semibold text-20px md:text-30px leading-27px md:leading-46px"
          text={headerText}
        />
        <Biography textLength={200} buttonLabel={buttonLabel} {...person1} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person2} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person3} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person4} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person5} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person6} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person7} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person8} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person9} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person10} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person11} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person12} />
        <Biography className="mt-40px md:mt-126px" textLength={200} buttonLabel={buttonLabel} {...person13} />
      </ContentSection>
      <Footer {...footerMocks} />
    </>
  );
};

export default ScientificCommitteePage;
