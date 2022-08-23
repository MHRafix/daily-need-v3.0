import React from "react";
import { FiMinimize } from "react-icons/fi";
import DashboardContentLayout from "../../../../components/admin_pannel_components/admin_pannel_utilities/DashboardLayout/DashboardContentLayout";
import AlertToast from "../../../alertToast/AlertToast";
import toastConfig from "../../../toastConfig";
import FormikFormLayout from "../../FormikLayout/FormikFormLayout";
import { AddProductsFormValidator } from "../../Validators/AllFormValidators";
import AddProductsForm from "./AddProductsForm";

export default function AddProductsFormMain({
  show,
  handleAddFormShow,
  all_categories,
}) {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    setThumbnail,
    setBigThumbnail,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = AddProductsFormValidator();

  // toast config
  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  return (
    <>
      {/* message toast alert */}
      {toastOn && <AlertToast toast_config={toast_config} />}

      <DashboardContentLayout
        item_name="add products"
        btn_content={show && <FiMinimize />}
        btn_id={show && "minimize_btn"}
        handleAddItem={handleAddFormShow}
      >
        <FormikFormLayout
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <AddProductsForm
            setThumbnail={setThumbnail}
            setBigThumbnail={setBigThumbnail}
            processing={processing}
            all_categories={all_categories}
          />
        </FormikFormLayout>
      </DashboardContentLayout>
    </>
  );
}
