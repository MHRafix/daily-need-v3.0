import React, { useState } from "react";
import ReactModal from "../../../../../utilities/Modal/ReactModal";
import ReactOrdersTable from "../../../../../utilities/React_Table/OrdersTable/ReactOrdersTable";
import ReactPaginationTable from "../../../../../utilities/React_Table/PaginationTable/ReactPaginationTable";
import { ORDERED_PRODUCT_TABLE_COLUMNS } from "../../../../../utilities/React_Table/TableColumns";
import DashboardContentLayout from "../../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function AllOrdersContent({ all_orders }) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  // handle modal and modal data
  const handleModal = (dep, id) => {
    const modal_data = all_orders.find((order) => order._id === id);
    setModalData(modal_data.products_data);
    setModal(dep);
  };

  return (
    <>
      {/* orders show on table */}
      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="all orders">
          <ReactOrdersTable
            ORDERS_DATA={all_orders}
            handleModal={handleModal}
          />
        </DashboardContentLayout>
        {modal && (
          <ReactModal
            setModal={setModal}
            modal_data={modalData}
            modal_title="Order Details"
          >
            <ReactPaginationTable
              PRODUCTS_DATA={modalData}
              PRODUCTS_TABLE_COLUMNS={ORDERED_PRODUCT_TABLE_COLUMNS}
            />
          </ReactModal>
        )}
      </div>
    </>
  );
}
