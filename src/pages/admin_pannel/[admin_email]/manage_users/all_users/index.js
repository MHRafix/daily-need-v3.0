import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminPannelLayoutContainer from "../../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import ManageAllUsersMain from "../../../../../components/admin_pannel_components/components/manage_users/ManageAllUsersMain";
import ErrorPage from "../../../../../pages/404";
import { storeUserData } from "../../../../../redux/user_data/action";

export default function ManageAllUsers({ all_users, this_user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeUserData(this_user));
  });

  if (!this_user?.user_admin) {
    return <ErrorPage />;
  }
  return (
    <>
      <AdminPannelLayoutContainer
        title="Manage Users"
        description="This is manage users of 'Daily Needs Grocery' web application admin pannel."
      >
        <ManageAllUsersMain all_users={all_users} />
      </AdminPannelLayoutContainer>
    </>
  );
}

// find the right user here
export async function getStaticPaths() {
  const users = await fetch("https://daily-need.vercel.app/api/all_users");
  const all_users = await users.json();
  const user = all_users.map((user) => ({
    params: { admin_email: user.user_email },
  }));
  return {
    paths: user,
    fallback: false,
  };
}

// return the data here
export async function getStaticProps({ params }) {
  const { admin_email } = params;
  const user = await fetch(
    `https://daily-need.vercel.app/api/admin_pannel_api/manage_users/${admin_email}`
  );
  const this_user = await user.json();

  // all users
  const users = await fetch(`https://daily-need.vercel.app/api/all_users`);
  const all_users = await users.json();

  return { props: { all_users, this_user }, revalidate: 10 };
}
