import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { useTable, useFlexLayout, useSortBy } from "react-table";

import sortArrow from "@/assets/components/table/sort-arrow.svg";

import { cellContainer } from "./TableForCountries.module.scss";

const MEMBER_COUNTRY_COLUMNS = [
  {
    Header: "Hospital",
    accessor: "col1",
    width: 300,
  },
  {
    Header: "City",
    accessor: "col2",
    width: 120,
  },
  {
    Header: "In RES-Q Since",
    accessor: "col3",
    width: 100,
  },
  {
    Header: "No. of Pts",
    accessor: "col4",
    width: 100,
  },
];

const getHeaderColumnCss = (index) => {
  if (index === 0) {
    return "max-w-776px mr-3px md:mr-6px";
  } else if (index === 1) {
    return "max-w-172px mr-3px md:mr-6px";
  } else if (index === 2) {
    return "max-w-213px mr-3px md:mr-6px";
  } else if (index === 3) {
    return "max-w-168px";
  }
};

const TableForCountries = ({ showAllRows, visibleCountry, showRowsNumber = 10, className }) => {
  if (visibleCountry) {
    const data = visibleCountry.countryTableRows;

    const { getTableProps, headerGroups, rows, prepareRow } = useTable(
      {
        data,
        columns: MEMBER_COUNTRY_COLUMNS,
        disableSortRemove: false,
      },
      useFlexLayout,
      useSortBy
    );
    return (
      <div className={classNames("overflow-x-auto", className)}>
        <div className="mx-auto border-separate" {...getTableProps()}>
          {headerGroups.map((headerGroup) => (
            <div className="text-center mb-3px md:mb-6px" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <div
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={classNames(
                    getHeaderColumnCss(index),
                    "flex justify-center items-center bg-theme-blue py-5px md:py-19px px-5px md:px-10px"
                  )}
                >
                  <span className="text-white text-14px lg:text-30px leading-21px lg:leading-46px font-titillium font-semibold not-italic">
                    {column.render("Header")}
                  </span>
                  <div
                    className={classNames("flex items-center w-7px md:w-10px lg:w-15px ml-3px md:ml-14px mt-5px", {
                      visible: column.isSorted && !column.isSortedDesc,
                      "visible transform rotate-180": column.isSorted && column.isSortedDesc,
                      hidden: !column.isSorted,
                    })}
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
                          getHeaderColumnCss(index),
                          "flex justify-center items-center overflow-ellipsis overflow-hidden pt-5px pb-5px md:pb-13px md:pt-19px px-5px md:px-10px",
                          "text-14px lg:text-22px leading-21px lg:leading-28px font-titillium font-normal text-theme-blue text-center"
                        )}
                      >
                        {cell.render("Cell")}
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
  } else {
    return null;
  }
};

export default TableForCountries;
