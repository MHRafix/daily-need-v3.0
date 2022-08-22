import React from "react";
import DataTable from "react-data-table-component";

export default function UsersTable({ table_columns, table_data }) {
  return (
    <DataTable
      title="All Users"
      columns={table_columns}
      data={table_data}
      // customStyles={customStyles}
      highlightOnHover
      pointerOnHover
    />
  );
}
