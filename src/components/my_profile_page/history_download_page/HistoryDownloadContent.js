import React, { useState } from "react";
import InvoiceHistory from "../../../utilities/invoice/InvoiceHistory";
import ReactModal from "../../../utilities/Modal/ReactModal";
import ProfileContentLayout from "../../../utilities/ProfileContentLayout";
import ShippedOrdersTable from "../../../utilities/React_Table/OrdersTable/ShippedOrdersTable";

export default function HistoryDownloadContent({ my_orders }) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  // handle modal and modal data
  const handleModal = (dep, id) => {
    const modal_data = my_orders.find((order) => order._id === id);
    setModalData(modal_data);
    setModal(dep);
  };

  return (
    <>
      <ProfileContentLayout content_title="history download">
        {/* shipped orders show on table */}
        <div className="dashboard_row_wrapper">
          {/* <DashboardContentLayout item_name="my all orders"> */}
          <ShippedOrdersTable
            ORDERS_DATA={my_orders}
            handleModal={handleModal}
          />
          {/* </DashboardContentLayout> */}
          {modal && (
            <ReactModal setModal={setModal} modal_title="History Invoice">
              <InvoiceHistory modal_data={modalData} />
            </ReactModal>
          )}
        </div>
      </ProfileContentLayout>
    </>
  );
}
