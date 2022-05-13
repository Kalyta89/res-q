import MediaText1Image from "@/assets/pages/home/home-media-text-1.png";
import MediaText2Image from "@/assets/pages/home/home-media-text-2.png";
import MediaText3Image from "@/assets/pages/home/home-media-text-3.png";
import OverviewImage from "@/assets/pages/home/overview.png";

export const mediaText1 = {
  media: null,
  typeOfMedia: "embeddedDashboard",
  contentContainerClasses: "md:mt-7px",
  title: "RES-Q",
  content: (
    <ul>
      <li>Worldwide stroke care quality improvement registry </li>
      <li>Offers data visualization and comprehensive analyses of your hospital stroke care quality</li>
      <li>Platform for participation in ESO/WSO Angels Awards</li>
      <li>100% free, strong grant-based funding</li>
      <li>GDPR compliant</li>
    </ul>
  ),
};

export const mediaText2 = {
  media: OverviewImage,
  mediaOn: "right",
  typeOfMedia: "image",
  contentContainerClasses: "md:mt-4px",
  title: "RES-Q in clinical practice",
  content: (
    <ul>
      <li>Collect stroke care data with simple web based (no installation) forms</li>
      <li>Realtime stroke care quality dashboards to support decision making</li>
      <li>Download in-depth quarter and annual analyses in PowerPoint</li>
      <li>Available raw data download for further analyses</li>
    </ul>
  ),
};

export const mediaText3 = {
  media: MediaText2Image,
  typeOfMedia: "image",
  contentContainerClasses: "md:mt-23px",
  title: "What is the impact of RES-Q?",
  content: (
    <ol>
      <li>RES-Q brings new, more accurate, knowledge about stroke care in our countries.</li>
      <li>RES-Q will provide the evidence base for targeting what should be improved.</li>
      <li>ESO and local professional societies can collaborate with governments on improving stroke care.</li>
      <li>Improvements can be observed through the data provided to RES-Q every year.</li>
      <li>RES-Q is a tool that can change the quality of health care in every hospital and every country.</li>
    </ol>
  ),
};
