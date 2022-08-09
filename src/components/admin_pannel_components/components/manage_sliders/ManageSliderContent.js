import { Form } from "formik";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { MdCloudDone } from "react-icons/md";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import {
  FormButton,
  FormikFileField,
  FormikTextField,
} from "../../../../utilities/Form/FormField";
import FormikFormLayout from "../../../../utilities/Formik/FormikLayout/FormikFormLayout";
import { AddHomeSliderFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import DashboardContentLayout from "../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function ManageSliderContent() {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    setSliderImg,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = AddHomeSliderFormValidator();

  // handle close toast here
  const handleRemoveToast = () => {
    setToastOn(false);
  };

  // auto close toast after ther 5000ms delay
  if (toastOn) {
    setTimeout(() => {
      setToastOn(false);
    }, 5000);
  }

  // toast setting configuration here
  const toast_config = {
    toastStyle: toastType,
    alertText: toastText,
    toastIcon:
      toastType === "error_toast" ? <BiErrorCircle /> : <MdCloudDone />,

    handleRemoveToast: handleRemoveToast,
  };

  return (
    <>
      {/* alert toast here  */}
      {toastOn && <AlertToast toast_config={toast_config} />}
      {/* orders show on table */}
      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="add slider image">
          <FormikFormLayout
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <FormikTextField
                form_label="image name"
                type="text"
                name="image_name"
              />
              <FormikFileField
                form_label="slider image"
                setState={setSliderImg}
                type="file"
                name="slider_image"
                required={true}
              />
              <br />
              <FormButton
                type="submit"
                btn_name="Add Image"
                processing={processing}
              />
            </Form>
          </FormikFormLayout>
        </DashboardContentLayout>
      </div>
    </>
  );
}