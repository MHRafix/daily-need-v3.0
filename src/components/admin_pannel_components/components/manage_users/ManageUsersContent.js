import React, { useState } from "react";
import useDeleteReq from "../../../../hooks/deleteReq";
import { UserSorter } from "../../../../lib/Tables/FilterSorter";
import { UserTableConfig } from "../../../../lib/Tables/TableColumns";
import UsersTable from "../../../../lib/Tables/UsersTable";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import toastConfig from "../../../../utilities/toastConfig";
import DashboardContentLayout from "../../admin_pannel_utilities/DashboardLayout/DashboardContentLayout";

export default function ManageUsersContent({ all_users }) {
  const [data, setData] = useState(all_users);
  const [active, setActive] = useState("reset");

  // delete hook
  const { toastOn, setToastOn, toastType, toastText, handleDelete } =
    useDeleteReq();

  // users table config
  const { UserTableColumns } = UserTableConfig(handleDelete);

  // toast config
  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  // handle search filtering
  const handleFiltering = (e) => {
    const search_res = all_users.filter((user) =>
      user.user_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(search_res);
  };

  // filter function here
  const handleUserFilter = (role, activer) => {
    const filtered_user = all_users?.filter((user) => user.user_admin === role);
    setActive(activer);
    setData(filtered_user);
  };

  // reset filter
  const handleResetFilter = (activer) => {
    setActive(activer);
    setData(all_users);
  };

  // sorting dependency
  const sorting_dependency = {
    handleFiltering,
    handleUserFilter,
    handleResetFilter,
    active,
  };
  return (
    <>
      {/* alert toast here  */}
      {toastOn && <AlertToast toast_config={toast_config} />}

      <div className="dashboard_row_wrapper">
        <DashboardContentLayout item_name="all users table">
          <UserSorter dependency={sorting_dependency} />
          <UsersTable table_columns={UserTableColumns} table_data={data} />
        </DashboardContentLayout>
      </div>
    </>
  );
}
