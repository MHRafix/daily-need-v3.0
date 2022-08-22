import { Form } from "formik";
import React, { useState } from "react";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import {
  FormButton,
  FormikFileField,
  FormikTextField,
} from "../../../../utilities/Form/FormField";
import FormikFormLayout from "../../../../utilities/Formik/FormikLayout/FormikFormLayout";
import { AddCategoryFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import ReactModal from "../../../../utilities/Modal/ReactModal";
import CategoryProductsTable from "../../../../utilities/React_Table/CategoryTable/CategoryProductsTable";
import ReactPaginationTable from "../../../../utilities/React_Table/PaginationTable/ReactPaginationTable";
import { PRODUCTS_TABLE_COLUMNS } from "../../../../utilities/React_Table/TableColumns";
import toastConfig from "../../../../utilities/toastConfig";
import DashboardContentLayout from "../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function ManageCatgoryContent({ all_products, all_categories }) {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    setCatImg,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = AddCategoryFormValidator();

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

  return (
    <>
      {/* alert toast here  */}
      {toastOn && <AlertToast toast_config={toast_config} />}
      {/* orders show on table */}
      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="add category">
          <FormikFormLayout
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <FormikTextField
                form_label="category name"
                type="text"
                name="cat_name"
              />
              <FormikFileField
                form_label="category image"
                setState={setCatImg}
                type="file"
                name="cat_image"
                required={true}
              />
              <br />
              <FormButton
                type="submit"
                btn_name="Add Category"
                processing={processing}
              />
            </Form>
          </FormikFormLayout>
        </DashboardContentLayout>
      </div>
      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="category products">
          <CategoryProductsTable
            handleModal={handleModal}
            all_products={all_products}
            CATEGORY_DATA={all_categories}
          />
        </DashboardContentLayout>
        {modal && (
          <ReactModal
            setModal={setModal}
            modal_data={modalData}
            modal_title="Category Products"
          >
            <ReactPaginationTable
              PRODUCTS_DATA={modalData}
              PRODUCTS_TABLE_COLUMNS={PRODUCTS_TABLE_COLUMNS}
            />
          </ReactModal>
        )}
      </div>
    </>
  );
}
