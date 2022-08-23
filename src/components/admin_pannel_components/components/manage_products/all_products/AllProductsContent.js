import React, { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import useDeleteReq from "../../../../../hooks/http_req/deleteReq";
import AddProductsFormMain from "../../../../../lib/Formik/Forms/add_product_form/AddProductsFormMain";
import Table from "../../../../../lib/Tables/table/Table";
import { ProductTableConfig } from "../../../../../lib/Tables/table_config/TableColumns";
import AlertToast from "../../../../../utilities/alertToast/AlertToast";
import toastConfig from "../../../../../utilities/toastConfig";
import DashboardContentLayout from "../../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function AllProductsContent({ all_products, all_categories }) {
  const [data, setData] = useState(all_products);
  const [active, setActive] = useState("reset");
  const [show, setShow] = useState(false);

  // delete hook
  const { toastOn, setToastOn, toastType, toastText, handleDelete } =
    useDeleteReq();

  // users table config
  const { ProductTableColumns } = ProductTableConfig(handleDelete);

  // toast config
  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  // handle search filtering
  const handleSearchFilter = (e) => {
    const search_res = all_products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(search_res);
  };

  // handle status filter function here
  const handleStatusFilter = (status, activer) => {
    const filtered_products = all_products?.filter(
      (product) => product.product_status === status
    );
    setActive(activer);
    setData(filtered_products);
  };

  // handle type filter function here
  const handleTypeFilter = (type, activer) => {
    const filtered_products = all_products?.filter(
      (product) => product.product_type === type
    );
    setActive(activer);
    setData(filtered_products);
  };

  // reset filter
  const handleResetFilter = (activer) => {
    setActive(activer);
    setData(all_products);
  };
  // sorting dependency
  const sorting_dependency = {
    handleSearchFilter,
    handleStatusFilter,
    handleTypeFilter,
    handleResetFilter,
    active,
  };

  // handle add item form show
  const handleAddFormShow = () => {
    setShow(() => (show ? false : true));
  };
  return (
    <>
      {toastOn && <AlertToast toast_config={toast_config} />}
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
            item_name="all products table"
            btn_content={!show && <HiOutlineViewGridAdd />}
            btn_id={!show && "expand_btn"}
            handleAddItem={handleAddFormShow}
          >
            <Table
              table_columns={ProductTableColumns}
              table_data={data}
              sorting_dependency={sorting_dependency}
              sorter={true}
            />
          </DashboardContentLayout>
        </div>
      </div>
    </>
  );
}
