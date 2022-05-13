import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { useTable, useFlexLayout, useSortBy } from "react-table";

import AwardsLabel from "@/components/awards-label/AwardsLabel";

import sortArrow from "@/assets/components/table/sort-arrow.svg";

import { cellContainer } from "./TableForAwards.module.scss";

const ANGEL_AWARDS_COLUMNS = [
  {
    Header: "Quarter",
    accessor: "quarter",
    width: 51,
    sortType: (rowA, rowB) => {
      const rowAQuarter = rowA?.values?.quarter;
      const rowBQuarter = rowB?.values?.quarter;

      if (rowAQuarter >= rowBQuarter) {
        return -1;
      } else {
        return 1;
      }
    },
  },
  {
    Header: "Country",
    accessor: "countryLabel",
    width: 45,
  },
  {
    Header: "Organization",
    accessor: "organisation",
    width: 70,
  },
  {
    Header: "Branch",
    accessor: "branch",
    width: 47,
  },
  {
    Header: "Award Status",
    accessor: "status",
    width: 69,
    Cell: ({ value }) => <AwardsLabel variant={value} />,
    sortType: (rowA, rowB) => {
      const rowAStatus = rowA?.values?.status;
      const rowBStatus = rowB?.values?.status;

      if (rowAStatus === rowBStatus) {
        return 0;
      }

      if (rowAStatus === "diamond") {
        return -1;
      } else if (rowBStatus === "diamond") {
        return 1;
      }

      if (rowAStatus === "platinum") {
        return -1;
      } else if (rowBStatus === "platinum") {
        return 1;
      }

      if (rowAStatus === "gold") {
        return -1;
      } else if (rowBStatus === "gold") {
        return 1;
      }
    },
  },
];

const getHeaderColumnCss = (index) => {
  if (index === 0) {
    return "max-w-182px";
  } else if (index === 1) {
    return "max-w-178px ml-2px md:ml-4px";
  } else if (index === 2) {
    return "max-w-475px ml-2px md:ml-4px";
  } else if (index === 3) {
    return "max-w-362px ml-2px md:ml-4px";
  } else if (index === 4) {
    return "max-w-273px ml-2px md:ml-4px";
  }
};

const TableForAwards = ({ data, showAllRows, showRowsNumber, className }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      data,
      columns: ANGEL_AWARDS_COLUMNS,
      disableSortRemove: true,
      autoResetSortBy: false,
      initialState: {
        sortBy: [{ id: "quarter" }],
      },
    },
    useFlexLayout,
    useSortBy
  );

  return (
    <div className={classNames("w-full", className)}>
      <div className="border-separate mx-auto" {...getTableProps()}>
        {headerGroups.map((headerGroup) => (
          <div className="text-center mb-2px md:mb-3px" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <div
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={classNames(
                  "flex justify-center pt-5px pb-7px md:pt-13px md:pb-13px px-3px md:px-10px bg-theme-blue",
                  getHeaderColumnCss(index)
                )}
              >
                <div className="overflow-ellipsis overflow-hidden whitespace-nowrap text-10px sm:text-14px lg:text-30px leading-15px sm:leading-21px lg:leading-46px font-titillium font-semibold not-italic text-white">
                  {column.render("Header")}
                </div>
                <div
                  className={classNames(
                    "flex flex-shrink-0 items-center w-7px lg:w-15px ml-3px md:ml-14px sm:mt-3px md:mt-5px",
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
                        "flex justify-center items-center py-6px md:py-7px px-1px md:px-10px bg-white",
                        getHeaderColumnCss(index)
                      )}
                    >
                      <div className="break-words overflow-hidden text-10px sm:text-14px lg:text-30px leading-15px sm:leading-21px lg:leading-46px font-titillium font-semibold not-italic text-theme-blue">
                        {cell.render("Cell")}
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

export default TableForAwards;
