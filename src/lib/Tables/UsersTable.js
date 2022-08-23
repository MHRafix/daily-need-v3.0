import React from "react";
import DataTable from "react-data-table-component";
export default function UsersTable({ table_columns, table_data }) {
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
  );
}
