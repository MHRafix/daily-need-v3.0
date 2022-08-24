import React from "react";
import DataTable from "react-data-table-component";
import { ProductSorter, UserSorter } from "../table_filterer/FilterSorter";

export default function Table({
  table_columns,
  table_data,
  sorting_dependency,
  sorter,
  isProduct,
}) {
  const customSort = (rows, selector, direction) => {
    return orderBy(rows, selector, direction);
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        borderRight: "1px solid #eee",
        justifyContent: "center !important",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        borderRight: "1px solid #eee",
        justifyContent: "center !important",
      },
    },
  };
  return (
    <>
      {sorting_dependency && (
        <>
          {sorter ? (
            <ProductSorter
              dependency={sorting_dependency}
              isProduct={isProduct}
            />
          ) : (
            <UserSorter dependency={sorting_dependency} />
          )}
        </>
      )}
      <DataTable
        direction="auto"
        fixedHeaderScrollHeight="300px"
        responsive
        subHeaderAlign="right"
        subHeaderWrap
        columns={table_columns}
        data={table_data}
        sortFunction={customSort}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        pagination
      />
    </>
  );
}
