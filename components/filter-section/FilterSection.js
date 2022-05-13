import Dropdown from "@/components/basic/dropdown/Dropdown";
import Text from "@/components/basic/text/Text";

import FilterConfigs from "@/configs/awards-filters";

import {
  dropdown_section_grid,
  dropdown_quarter_area,
  dropdown_awards_status_area,
  dropdown_county_area,
} from "./FilterSection.module.scss";

export default function FilterSection({
  countryOptions,
  onQuarterFilterChange,
  onCountryFilterChange,
  onAwardStatusFilterChange,
}) {
  return (
    <div className="w-full">
      <Text typography="h4" text={<span className="font-bold">Filter</span>} />
      <div className={dropdown_section_grid}>
        <Dropdown
          label="Quarter"
          options={FilterConfigs.quarterOptions}
          onChange={onQuarterFilterChange}
          className={dropdown_quarter_area}
        />
        <Dropdown
          label="Country"
          options={countryOptions}
          onChange={onCountryFilterChange}
          className={dropdown_county_area}
        />
        <Dropdown
          label="Award Status"
          options={FilterConfigs.awardOptions}
          onChange={onAwardStatusFilterChange}
          className={dropdown_awards_status_area}
        />
      </div>
    </div>
  );
}
