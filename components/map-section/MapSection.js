import React from "react";
import classNames from "classnames";
import Image from "next/image";

import Link from "@/components/basic/link/Link";
import Text from "@/components/basic/text/Text";

import WorldMap from "@/assets/pages/home/homepage-map.png";

const MapSection = ({ className }) => {
  return (
    <div className={classNames("w-full bg-white", className)}>
      <div className="container">
        <Link link="/about/hospitals-using-res-q" className="justify-self-start">
          <Text
            typography="h2"
            color="text-theme-blue"
            text="Where is RES-Q used?"
            className="mb-20px md:mb-56px"
          />
        </Link>
        <Link link="/about/hospitals-using-res-q">
          <Image src={WorldMap} quality={100} alt="world map" />
        </Link>
      </div>
    </div>
  );
};

export default MapSection;
