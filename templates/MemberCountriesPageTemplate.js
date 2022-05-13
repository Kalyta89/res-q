import { useState, useRef, useCallback, useMemo } from "react";

import PageLayout from "@/layouts/PageLayout";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";
import Image from "@/components/basic/image/Image";
import ContentSection from "@/components/content-section/ContentSection";
import SearchInput from "@/components/search-input/SearchInput";
import TableForCountries from "@/components/tables/TableForCountries";
import CountriesSelectSection from "@/components/countries/CountriesSelectSection";
import Button from "@/components/basic/button/Button";

import { useDebounce } from "@/utils/hooks";

import { table_head_shadow } from "./MemberCountriesPageTemplate.module.scss";

const MemberCountriesPageTemplate = ({ hero, userCountry, countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [countryCode, setCountryCode] = useState(userCountry || "GB");
  const [showAllRows, setShowAllRows] = useState(false);

  const searchRef = useRef(null);

  const visibleCountry = useMemo(
    () => countries.find((country) => country.code === countryCode),
    [countryCode, countries]
  );

  const scrollToTop = useCallback(() => {
    searchRef.current.scrollIntoView({ behavior: "smooth" });
  }, [searchRef]);

  const onShowAllRaws = () => setShowAllRows(true);

  const onOpenClose = useCallback(
    (code) => {
      setCountryCode(code);
      scrollToTop();
      setShowAllRows(false);
    },
    [setCountryCode, scrollToTop]
  );

  let showCountries = countries;
  if (debouncedSearchTerm.length > 0) {
    showCountries = showCountries.filter((item) =>
      item.title.toLowerCase().trim().includes(debouncedSearchTerm.toLowerCase().trim())
    );
  }

  return (
    <PageLayout hero={hero}>
      <ContentSection.Container>
        <SearchInput searchRef={searchRef} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div
          className={classNames(
            table_head_shadow,
            "flex justify-start flex-col md:flex-row md:justify-between w-full h-110px rounded-10px md:rounded-12px bg-theme-blue mt-40px px-20px md:px-20px lg:px-46px xl:px-66px"
          )}
        >
          <div className="flex items-center pt-10px md:pt-0px">
            <div className="lg:hidden h-26px w-26px rounded-full overflow-hidden mr-11px">
              <Image media={visibleCountry.image} width={26} height={26} />
            </div>
            <div className="hidden lg:flex h-45px w-45px rounded-full overflow-hidden mr-20px">
              <Image media={visibleCountry.image} width={45} height={45} />
            </div>
            <Text
              color="text-white"
              typography="text-24px lg:text-28px leading-29px md:leading-46px font-titillium font-semibold not-italic"
            >
              {visibleCountry.title}
            </Text>
          </div>
          <Text
            typography="text-18px lg:text-22px xl:text-30px leading-21px lg:leading-36px xl:leading-46px font-titillium font-semibold not-italic"
            className="flex items-center md:justify-end pt-8px md:pt-0px"
            color="text-white"
          >
            Total Registered Hospitals:
            <span className="text-theme-light-blue ml-10px">{visibleCountry.hospitals}</span>
          </Text>
          <Text
            typography="text-18px lg:text-22px xl:text-30px leading-21px lg:leading-36px xl:leading-46px font-titillium font-semibold not-italic"
            color="text-white"
            className="flex items-center md:justify-end pt-5px md:pt-0px"
          >
            Total Enrolled Patients: <span className="text-theme-light-blue ml-10px">{visibleCountry.patients}</span>
          </Text>
        </div>
      </ContentSection.Container>
      <div className="container">
        <div className="px-20px md:px-66px py-20px md:py-53px bg-table-background rounded-b-8px w-full overflow-hidden">
          <Text typography="text-14px" className="w-full md:hidden mb-10px" text="Scroll right to see table" />
          <TableForCountries visibleCountry={visibleCountry} showAllRows={showAllRows} onShowAllRaws={onShowAllRaws} />
        </div>
      </div>
      <ContentSection.Container>
        {!showAllRows && (
          <div className="w-full mt-28px">
            <Button
              onClick={onShowAllRaws}
              className="w-full"
              px="px-18px"
              py="py-10px"
              classForButton="w-full"
              tabSelectClass="p-0px -m-0px"
              variants="light_blue"
            >
              View More
            </Button>
          </div>
        )}
        <CountriesSelectSection
          showCountries={showCountries}
          onOpenClose={onOpenClose}
          countryCode={countryCode}
          className="mt-28px"
        />
      </ContentSection.Container>
    </PageLayout>
  );
};

export default MemberCountriesPageTemplate;
