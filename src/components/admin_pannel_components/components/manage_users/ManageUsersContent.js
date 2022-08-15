import React from "react";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import { AddCategoryFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import UsersTable from "../../../../utilities/React_Table/UsersTable/UsersTable";
import toastConfig from "../../../../utilities/toastConfig";
import DashboardContentLayout from "../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function ManageUsersContent({ all_users }) {
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

  return (
    <>
      {/* alert toast here  */}
      {toastOn && <AlertToast toast_config={toast_config} />}

      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="users table">
          <UsersTable USERS_DATA={all_users} />
        </DashboardContentLayout>
      </div>
    </>
  );
}
