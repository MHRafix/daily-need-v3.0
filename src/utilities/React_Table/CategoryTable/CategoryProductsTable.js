import Image from "next/image";
import React, { useMemo, useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { usePagination, useSortBy, useTable } from "react-table";
import ReactTooltip from "react-tooltip";
import { uuid } from "uuidv4";
import { TableDataSorter, TablePagination } from "../TableParts";

export default function CategoryProductsTable({
  all_products,
  CATEGORY_DATA,
  TABLE_COLUMNS,
}) {
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const [data, setData] = useState(CATEGORY_DATA);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  // filter functions here
  const handleTypeFilter = (filter_name) => {
    const filtered_data = PRODUCTS_DATA.filter(
      (data) => data.product_type === filter_name
    );
    setData(filtered_data);
  };

  const handleStatusFilter = (filter_name) => {
    const filtered_data = PRODUCTS_DATA.filter(
      (data) => data.product_status === filter_name
    );
    setData(filtered_data);
  };

  // reset filter
  const handleResetFilter = () => {
    setData(PRODUCTS_DATA);
  };

  // pagination dependency
  const pagination_dependency = {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageIndex,
  };

  // sorting dependency
  const sorting_dependency = {
    setPageSize,
    pageSize,
    handleTypeFilter,
    handleStatusFilter,
    handleResetFilter,
    show: true,
  };

  return (
    <>
      {/* data sorter  */}
      <TableDataSorter dependency={sorting_dependency} />
      {/* react table here */}
      <ReactTooltip place="left" type="dark" effect="solid" />
      <table id="products_table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={uuid()} {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={uuid()}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      <span className="flex items-center">
                        <span
                          className={
                            column.isSortedDesc ? "text-black" : "text-black4"
                          }
                        >
                          <BiUpArrowAlt />
                        </span>
                        <span
                          className={
                            !column.isSortedDesc ? "text-black" : "text-black4"
                          }
                        >
                          <BiDownArrowAlt />
                        </span>
                      </span>
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr key={uuid()} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.id === "cat_image") {
                    return (
                      <div
                        className="!p-extra_padding4"
                        style={{
                          borderBottom: "1px solid #ddd",
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-table",
                            width: "50px",
                          }}
                        >
                          <Image
                            src={cell.value}
                            alt="img"
                            // layout="fill"
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                        </span>
                      </div>
                    );
                  } else if (cell.column.Header === "Products Quantity") {
                    const matched_products = all_products.filter(
                      (product) => product.category === cell.value
                    );
                    return <td>{matched_products.length}</td>;
                  } else if (cell.column.Header === "Action") {
                    return (
                      <td>
                        <span className="flex justify-center items-center">
                          <FiEdit
                            data-tip="Edit"
                            className="text-light_purple cursor-pointer text-normal outline-none"
                          />
                          &nbsp;&nbsp;
                          <RiDeleteBinLine
                            data-tip="Delete"
                            className="text-red-500 cursor-pointer text-normal outline-none"
                          />
                        </span>
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* table data pagination here  */}
      {pageOptions.length > 1 && (
        <TablePagination dependency={pagination_dependency} />
      )}
    </>
  );
}
