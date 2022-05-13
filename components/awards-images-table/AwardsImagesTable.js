import React, { useMemo } from "react";
import classNames from "classnames";
import { useTable, useFlexLayout } from "react-table";
import Image from "next/image";

import DiamondFeather from "@/assets/pages/awards-eso/diamond-feather-text.png";
import GoldFeather from "@/assets/pages/awards-eso/gold-feather.png";
import PlatinumFeather from "@/assets/pages/awards-eso/platinum-feather.png";

import { useApplyAfterWidth } from "@/utils/hooks";

import { awardsImagesTableShadow } from "./AwardsImagesTable.module.scss";

const ANGEL_AWARDS_COLUMNS = [
  {
    Header: "Q1",
    SubHeader: "2020",
    accessor: "q1",
  },
  {
    Header: "Q2",
    SubHeader: "2020",
    accessor: "q2",
  },
  {
    Header: "Q3",
    SubHeader: "2020",
    accessor: "q3",
  },
  {
    Header: "Q4",
    SubHeader: "2020",
    accessor: "q4",
  },
  {
    Header: "",
    SubHeader: "",
    accessor: "empty-column",
  },
  {
    Header: "Q1",
    SubHeader: "2021",
    accessor: "q5",
  },
  {
    Header: "Q2",
    SubHeader: "2021",
    accessor: "q6",
  },
  {
    Header: "Q3",
    SubHeader: "2021",
    accessor: "q7",
  },
  {
    Header: "Q4",
    SubHeader: "2021",
    accessor: "q8",
  },
];

const AwardsImagesTable = ({ data, showAllRows, showRowsNumber, className }) => {
  const isBiggerDesktop = useApplyAfterWidth(1279);
  const columnsWithWidths = useMemo(
    () =>
      ANGEL_AWARDS_COLUMNS.map((column) => {
        if (column.accessor === "empty-column") {
          return {
            ...column,
            width: isBiggerDesktop ? 8 : 10,
          };
        }
        return {
          ...column,
          width: isBiggerDesktop ? 59 : 44,
        };
      }),
    [isBiggerDesktop]
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      data,
      columns: columnsWithWidths,
    },
    useFlexLayout
  );

  const setImage = (cell) => {
    if (cell.value === "PL" || cell.value === "VN" || cell.value === "gold") {
      return GoldFeather;
    } else if (cell.value === "black") {
      return DiamondFeather;
    } else if (cell.value === "gray") {
      return PlatinumFeather;
    }
  };

  return (
    <div
      className={classNames(
        "w-404px xl:w-534px mt-11px lg:mt-40px xl:mt-31px mb-11px -ml-4px xl:ml-0px rounded-16px",
        awardsImagesTableShadow,
        className
      )}
    >
      <div className="border-separate" {...getTableProps()}>
        {headerGroups.map((headerGroup) => (
          <div
            className="px-12px xl:px-14px pt-13px xl:pt-29px pb-9px xl:pb-16px text-center bg-award-table-head rounded-t-16px"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()} className="ml-2px xl:ml-3px first:ml-0px">
                <div className="text-16px xl:text-29px leading-21px xl:leading-25px text-white font-bold font-titillium overflow-ellipsis overflow-hidden whitespace-nowrap xl:mb-4px">
                  {column.render("Header")}
                </div>
                <div className="text-9px xl:text-16px xl:leading-24px text-white font-semibold font-titillium xl:">
                  {column.render("SubHeader")}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="px-12px xl:px-14px bg-accordion-color pb-17px xl:pb-27px rounded-b-16px pt-3px">
          {rows.map((row, rowNumber) => {
            if (!showAllRows && rowNumber >= showRowsNumber) {
              return null;
            }
            prepareRow(row);
            return (
              <div className="h-53px xl:h-92px mb-2px md:mb-3px" {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <div
                      key={index}
                      {...cell.getCellProps()}
                      className={classNames("flex justify-center items-center ml-2px xl:ml-3px first:ml-0px", {
                        "bg-white": cell.value,
                        "bg-accordion-color": cell.value === "" || cell.value == undefined,
                      })}
                    >
                      <div className="w-30px xl:w-41px h-42 xl:h-49px">
                        {cell.value && <Image src={setImage(cell)} alt="awards image" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AwardsImagesTable;
