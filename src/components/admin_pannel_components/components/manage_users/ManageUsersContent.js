import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { MdCloudDone } from "react-icons/md";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import { AddCategoryFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import UsersTable from "../../../../utilities/React_Table/UsersTable/UsersTable";
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

      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="users table">
          <UsersTable USERS_DATA={all_users} />
        </DashboardContentLayout>
      </div>
    </>
  );
}
