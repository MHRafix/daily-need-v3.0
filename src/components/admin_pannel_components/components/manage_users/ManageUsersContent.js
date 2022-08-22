import React from "react";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import { AddCategoryFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import { UserTableColumns } from "../../../../utilities/React_Table/TableColumns";
import toastConfig from "../../../../utilities/toastConfig";
import UsersTable from "../../../../utilities/UsersTable";

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
        {/* <DashboardContentLayout item_name="users table">
          <UsersTable USERS_DATA={all_users} />
        </DashboardContentLayout> */}
        <UsersTable table_columns={UserTableColumns} table_data={all_users} />
      </div>
    </>
  );
}
