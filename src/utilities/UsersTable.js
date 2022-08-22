import React from "react";
import DataTable from "react-data-table-component";
export default function UsersTable({ table_columns, table_data }) {
  //  Internally, customStyles will deep merges your customStyles with the default styling.
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  const handleSort = (column, sortDirection) =>
    console.log(column.selector, sortDirection);
  return (
    <DataTable
      title="All Users"
      sortDirection
      columns={table_columns}
      data={table_data}
      // customStyles={customStyles}
      highlightOnHover
      pointerOnHover
      onSort={handleSort}
      pagination
    />
  );
}
