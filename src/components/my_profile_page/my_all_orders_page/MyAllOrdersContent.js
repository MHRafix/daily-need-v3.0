import React, { useState } from "react";
import ReactModal from "../../../utilities/Modal/ReactModal";
import ProfileContentLayout from "../../../utilities/ProfileContentLayout";
import ReactOrdersTable from "../../../utilities/React_Table/OrdersTable/ReactOrdersTable";
import ReactPaginationTable from "../../../utilities/React_Table/PaginationTable/ReactPaginationTable";
import { ORDERED_PRODUCT_TABLE_COLUMNS } from "../../../utilities/React_Table/TableColumns";

export default function MyAllOrdersContent({ my_orders }) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  // handle modal and modal data
  const handleModal = (dep, id) => {
    const modal_data = my_orders.find((order) => order._id === id);
    console.log(id);
    setModalData(modal_data.products_data);
    setModal(dep);
  };
  return (
    <>
      <ProfileContentLayout content_title="manage all orders">
        {/* orders show on table */}
        <div className="dashboard_row_wrapper">
          <ReactOrdersTable ORDERS_DATA={my_orders} handleModal={handleModal} />
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
      </ProfileContentLayout>
    </>
  );
}
