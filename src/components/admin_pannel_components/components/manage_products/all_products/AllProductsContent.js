import React, { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import AddProductsFormMain from "../../../../../utilities/Formik/Forms/product_form/AddProductsFormMain";
import ReactPaginationTable from "../../../../../utilities/React_Table/PaginationTable/ReactPaginationTable";
import { PRODUCTS_TABLE_COLUMNS } from "../../../../../utilities/React_Table/TableColumns";
import DashboardContentLayout from "../../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function AllProductsContent({ all_products, all_categories }) {
  const [show, setShow] = useState(false);

  // handle add item form show
  const handleAddFormShow = () => {
    setShow(() => (show ? false : true));
  };
  return (
    <>
      {/* add products form  */}
      {show && (
        <div className="dashboard_row_wrapper">
          <div className="add_products_form">
            <AddProductsFormMain
              show={show}
              handleAddFormShow={handleAddFormShow}
              all_categories={all_categories}
            />
          </div>
        </div>
      )}

      {/* all products managing table */}
      <div className="dashboard_row_wrapper">
        <div className="manage_products_table">
          <DashboardContentLayout
            item_name="all users table"
            btn_content={!show && <HiOutlineViewGridAdd />}
            btn_id={!show && "expand_btn"}
            handleAddItem={handleAddFormShow}
          >
            <ReactPaginationTable
              PRODUCTS_DATA={all_products}
              PRODUCTS_TABLE_COLUMNS={PRODUCTS_TABLE_COLUMNS}
            />
          </DashboardContentLayout>
        </div>
      </div>
    </>
  );
}
