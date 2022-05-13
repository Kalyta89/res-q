import React from "react";
import classNames from "classnames";

import Image from "@/components/basic/image/Image";

const CountryTile = ({ title, hospitals, patients, code, image, onOpenClose, countryCode }) => {
  return (
    <a
      href="#"
      title={"Total Registered Hospitals: " + hospitals + ",  Total Enrolled Patients: " + patients}
      onClick={(e) => {
        onOpenClose(code);
        e.preventDefault();
      }}
      className={classNames("flex items-center rounded-12px pl-15px pr-10px py-10px cursor-pointer my-10px", {
        "bg-theme-blue": code === countryCode,
        "bg-accordion-color": code !== countryCode,
      })}
    >
      <div className="flex h-42px w-42px rounded-full overflow-hidden mr-15px">
        <Image media={image} width={42} height={42} />
      </div>
      <div
        className={classNames("flex flex-col content-center justify-center", {
          "text-white": code === countryCode,
          "text-theme-blue": code !== countryCode,
        })}
      >
        <div className="text-24px font-semibold font-titillium">{title}</div>
        <div className="flex text-14px">
          <div className="mr-7px">Hosp: {hospitals}</div>
          <div>Pts: {patients}</div>
        </div>
      </div>
    </a>
  );
};

export default CountryTile;
