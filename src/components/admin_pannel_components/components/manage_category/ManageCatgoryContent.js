import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import useDeleteReq from "../../../../hooks/http_req/deleteReq";
import CategoryForm from "../../../../lib/Formik/Forms/add_category_form/CategoryForm";
import Table from "../../../../lib/Tables/table/Table";
import {
  CategoryTableConfig,
  ProductTableConfig,
} from "../../../../lib/Tables/table_config/TableColumns";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import ReactModal from "../../../../utilities/Modal/ReactModal";
import toastConfig from "../../../../utilities/toastConfig";
import DashboardContentLayout from "../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function ManageCatgoryContent({ all_products, all_categories }) {
  // handle add item form show
  const [show, setShow] = useState(false);
  const handleAddFormShow = () => {
    setShow(() => (show ? false : true));
  };

  // delete hook
  const { toastOn, setToastOn, toastType, toastText, handleDelete } =
    useDeleteReq();

  // toast config
  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  // handle modal and modal data
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleModal = (cat) => {
    const modal_data = all_products?.filter(
      (product) => product.category === cat
    );
    setModalData(modal_data);
    setModal(true);
  };

  // users table config
  const { CategoryTableColumns } = CategoryTableConfig(
    handleDelete,
    all_products,
    handleModal
  );

  const { ProductTableColumns } = ProductTableConfig();
  return (
    <>
      {/* alert toast here  */}
      {toastOn && <AlertToast toast_config={toast_config} />}
      {/* orders show on table */}
      {show && (
        <div className="dashboard_row_wrapper">
          <DashboardContentLayout
            item_name="add category"
            btn_content={show && <FiMinimize />}
            btn_id={show && "minimize_btn"}
            handleAddItem={handleAddFormShow}
          >
            <CategoryForm />
          </DashboardContentLayout>
        </div>
      )}
      <div className="dashboard_row_wrapper">
        <DashboardContentLayout
          item_name="category products"
          btn_content={!show && <BiCategoryAlt />}
          btn_id={!show && "expand_btn"}
          handleAddItem={handleAddFormShow}
        >
          <Table
            table_columns={CategoryTableColumns}
            table_data={all_categories}
            sorter={false}
          />
        </DashboardContentLayout>
        {modal && (
          <ReactModal
            setModal={setModal}
            modal_data={modalData}
            modal_title="Category Products"
          >
            <Table
              table_columns={ProductTableColumns}
              table_data={modalData}
              sorter={true}
            />
          </ReactModal>
        )}
      </div>
    </>
  );
}
