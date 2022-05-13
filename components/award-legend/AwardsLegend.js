import classNames from "classnames";

import Text from "@/components/basic/text/Text";
import Markdown from "@/components/basic/markdown/Markdown";
import Image from "next/image";

import DiamondFeather from "@/assets/pages/awards-eso/diamond-feather.png";
import GoldFeather from "@/assets/pages/awards-eso/gold-feather.png";
import PlatinumFeather from "@/assets/pages/awards-eso/platinum-feather.png";

import { containerGrid, itemGrid } from "./AwardsLegend.module.scss";

const AwardLegend = ({ title, awardStatus, text, className }) => {
  const setBackgroundImage = (status) => {
    if (status === "Diamond") {
      return DiamondFeather;
    } else if (status === "Platinum") {
      return PlatinumFeather;
    } else if (status === "Gold") {
      return GoldFeather;
    }
  };
  return (
    <div className={classNames(containerGrid, className)}>
      <Markdown markdown={text} className="mb-30px lg:mb-0px lg:mr-137px" />
      <div className="-mt-15px">
        <Text className="mb-0px lg:mb-35px" text={title} typography="h2" />
        <ul>
          {awardStatus.map((status, index) => (
            <li key={index} className={classNames(itemGrid, "mt-7px lg:mt-29px")}>
              <div className="w-34px lg:w-43px h-48 lg:h-51px">
                <Image src={setBackgroundImage(status.title)} alt="awards-image" />
              </div>
              <Text text={status.title} typography="h4" className="font-semibold" />
              <Text text={status.description} typography="h4_medium" className="font-medium -ml-15px md:ml-12px" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AwardLegend;
