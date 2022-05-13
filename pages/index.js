import HomePageTemplate from "@/templates/HomePageTemplate";

import { getData } from "@/utils/api";

import MainBanner from "@/assets/pages/home/main-banner.png";
import SheilaMartins from "@/assets/pages/home/sheila-martins.png";
import NatanBornstein from "@/assets/pages/home/natan-bornstein.png";
import ThangHuyNguyen from "@/assets/pages/home/thang-huy-nguyen.png";

const heroItemsStub = [
  {
    title: "Global registry improving stroke care",
    image: {
      mock: MainBanner,
    },
    imageMobile: {
      mock: MainBanner,
    },
  },
  {
    title: "Global registry improving stroke care",
    subtitle: "“Using RES-Q helps hospitals to fulfill criteria for WSO Stroke Certification.”",
    quote:
      "Sheila Martins, President elect, World Stroke Organisation, Founder & President of Brazilian Stroke Network",
    image: {
      mock: SheilaMartins,
    },
    imageMobile: {
      mock: SheilaMartins,
    },
  },
  {
    title: "Global registry improving stroke care",
    subtitle: "“RES-Q is instrumental in changing the quality of stroke care nationwide.”",
    quote: "Natan Bornstein, Chairman of Israeli Stroke Society",
    image: {
      mock: NatanBornstein,
    },
    imageMobile: {
      mock: NatanBornstein,
    },
  },
  {
    title: "Global registry improving stroke care",
    subtitle:
      "“Participating in RES-Q was an important decision which helped us to develop hundreds of stroke centers around the country.”",
    quote:
      "Thang Huy Nguyen, Vice president of Vietnam Stroke Association & Member of Asian Stroke Advisory board committee",
    image: {
      mock: ThangHuyNguyen,
    },
    imageMobile: {
      mock: ThangHuyNguyen,
    },
  },
];

const HomePage = ({ partners, newsItems, videos }) => {
  return <HomePageTemplate heroItems={heroItemsStub} partners={partners} newsItems={newsItems} videos={videos} />;
};

export async function getStaticProps() {
  const partnersData = await getData("/partner-logos");
  const newsData = await getData("/public-news");
  const videosData = await getData("/stories");

  if (partnersData == null && newsData == null && videosData == null) {
    return {
      props: {
        show404: true,
      },
    };
  }

  return {
    props: {
      partners: partnersData
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((partner) => {
          return {
            url: partner.url,
            logo: {
              id: partner.logo.id,
              mime: partner.logo.mime,
              width: partner.logo.width,
              height: partner.logo.height,
              url: partner.logo.url,
            },
          };
        }),
      newsItems: newsData.map((item) => ({
        title: item.Title,
        content: item.content,
        date: item.published_at,
        link: `news-post/${item.id}`,
      })),
      videos: videosData
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((story) => ({
          title: story.title,
          hospital_name: story.hospital_name,
          city: story.city,
          country: story.country,
          link: story.link,
        })),
    },
  };
}

export default HomePage;
