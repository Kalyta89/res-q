import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { useTable, useFlexLayout, useSortBy } from "react-table";

import AwardsImagesTable from "@/components/awards-images-table/AwardsImagesTable";
import Text from "@/components/basic/text/Text";

import sortArrow from "@/assets/components/table/sort-arrow.svg";

import { cellContainer, tablesGrid } from "./TableForEsoAngels.module.scss";

const ANGEL_AWARDS_COLUMNS = [
  {
    Header: "Country",
    accessor: "countryLabel",
    width: 87,
  },
  {
    Header: "Hospital",
    accessor: "hospital",
    width: 443,
  },
];

const getHeaderColumnCss = (index) => {
  if (index === 0) {
    return "max-w-178px";
  } else if (index === 1) {
    return "max-w-806px ml-2px xl:ml-4px";
  }
};

const TableForAwards = ({ data, showAllRows, showRowsNumber, className }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      data,
      columns: ANGEL_AWARDS_COLUMNS,
      disableSortRemove: true,
      autoResetSortBy: false,
    },
    useFlexLayout,
    useSortBy
  );

  const getRowsByIndex = rows.map((row) => data[row.id]);
  return (
    <div className={classNames("w-full overflow-x-auto", tablesGrid)}>
      <div className={classNames("xl:w-full", className)}>
        <div className="border-separate" {...getTableProps()}>
          {headerGroups.map((headerGroup) => (
            <div className="text-center mb-2px xl:mb-3px" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <div
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={classNames(
                    "flex justify-center pt-19px pb-18px xl:pt-17px xl:pb-21px px-3px md:px-10px bg-theme-blue",
                    getHeaderColumnCss(index)
                  )}
                >
                  <Text
                    typography="text-16px xl:text-30px leading-15px xl:leading-46px font-titillium font-semibold not-italic"
                    color=" text-white"
                  >
                    {column.render("Header")}
                  </Text>
                  <div
                    className={classNames(
                      "flex flex-shrink-0 items-center w-7px xl:w-15px ml-3px md:ml-14px mt-3px md:mt-5px",
                      {
                        visible: column.isSorted && !column.isSortedDesc,
                        "visible transform rotate-180": column.isSorted && column.isSortedDesc,
                        hidden: !column.isSorted,
                      }
                    )}
                  >
                    <Image src={sortArrow} />
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div>
            {rows.map((row, rowNumber) => {
              if (!showAllRows && rowNumber >= showRowsNumber) {
                return null;
              }
              prepareRow(row);
              return (
                <div className={cellContainer} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <div
                        {...cell.getCellProps()}
                        className={classNames(
                          "flex justify-center items-center pt-20px pb-18px xl:py-28px px-2px md:px-10px bg-white",
                          getHeaderColumnCss(index)
                        )}
                      >
                        <Text
                          typography="text-16px xl:text-24px leading-15px xl:leading-36px font-titillium font-semibold"
                          className="overflow-ellipsis overflow-hidden whitespace-nowrap"
                          color="text-theme-blue"
                        >
                          {cell.value}
                        </Text>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AwardsImagesTable
        data={getRowsByIndex}
        showAllRows={showAllRows}
        showRowsNumber={showRowsNumber}
        rowsEsoAngels={rows}
      />
    </div>
  );
};

export default TableForAwards;
