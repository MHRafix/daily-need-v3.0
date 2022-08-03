import { Form } from "formik";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import AdminPannelBreadcrumb from "../../../../components/admin_pannel_components/common/admin_pannel_breadcrumb/AdminPannelBreadcrumb";
import AdminPannelLayoutContainer from "../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import {
  FormButton,
  FormikTextField,
} from "../../../../utilities/Form/FormField";
import FormikFormLayout from "../../../../utilities/Formik/FormikLayout/FormikFormLayout";
import { CreateAdminFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import toastConfig from "../../../../utilities/toastConfig";
import ErrorPage from "../../../404";

export default function CreateAdmin() {
  const router = useRouter();

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  const isLockScreen =
    Cookie.get("lock_screen") && JSON.parse(Cookie.get("lock_screen"));

  if (userInfo?.user_admin) {
    if (isLockScreen === true) {
      router.push("/admin_pannel/authentication/unlock_screen");
    }
  } else {
    return <ErrorPage />;
  }

  // formik hook
  const {
    initialValues,
    validationSchema,
    onSubmit,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = CreateAdminFormValidator();

  // alert toast
  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  const bread_nav = "authentication / create admin";
  return (
    <>
      <AdminPannelLayoutContainer
        title="Create Admin"
        description="This is create admin page of 'Daily Needs Grocery' web application dashboard."
      >
        <AdminPannelBreadcrumb
          page_name="create admin"
          breadcrumb_name={bread_nav}
        />
        <div id="create_user_page_wrapper">
          <div className="bg-white lg:!p-2.4 xs:p-1.5 rounded-md md:!w-3/6 xs:w-full shadow-xl">
            {toastOn && <AlertToast toast_config={toast_config} />}
            <FormikFormLayout
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <FormikTextField
                  form_label="user name"
                  type="text"
                  name="user_name"
                />
                <FormikTextField
                  form_label="user email"
                  type="email"
                  name="user_email"
                />

                <FormButton
                  type="submit"
                  btn_name="Create Admin"
                  processing={processing}
                />
              </Form>
            </FormikFormLayout>
          </div>
        </div>
      </AdminPannelLayoutContainer>
    </>
  );
}
