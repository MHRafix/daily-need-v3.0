import React from "react";
import DataTable from "react-data-table-component";
import { UserSorter } from "./FilterSorter";
export default function UsersTable({ table_columns, table_data }) {
  const customSort = (rows, selector, direction) => {
    return orderBy(rows, selector, direction);
  };

  return (
    <DataTable
      direction="auto"
      fixedHeaderScrollHeight="300px"
      responsive
      subHeaderAlign="right"
      subHeaderWrap
      columns={table_columns}
      data={table_data}
      sortFunction={customSort}
      // customStyles={customStyles}
      highlightOnHover
      pointerOnHover
      pagination
    />
  );
}
