import classNames from "classnames";
import Image from "next/dist/client/image";

import SearchIcon from "@/assets/components/member-countries/search-input.svg";

import { inputStyle } from "./SearchInput.module.scss";

const SearchInput = ({ value, onChange, searchRef }) => {
  return (
    <div ref={searchRef} className="relative w-full max-w-367px lg:max-w-587px pt-7px">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e)}
        value={value}
        className={classNames(inputStyle, "relative w-full h-45px lg:h-63px pl-14px pr-60px ")}
      />
      <div className="absolute top-20px lg:top-27px right-19px w-20px lg:w-28px lg:h-32px">
        <Image src={SearchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
