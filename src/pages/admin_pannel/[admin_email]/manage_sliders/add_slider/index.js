import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminPannelLayoutContainer from "../../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import ManageSliderMain from "../../../../../components/admin_pannel_components/components/manage_sliders/ManageSliderMain";
import ErrorPage from "../../../../../pages/404";
import { storeUserData } from "../../../../../redux/user_data/action";

export default function AddSliders({ this_user }) {
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
        title="Manage Sliders"
        description="This is manage sliders of 'Daily Needs Grocery' web application admin pannel."
      >
        <ManageSliderMain />
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
    `https://daily-need.vercel.app/api/admin_pannel_api/manage_users/single_user/${admin_email}`
  );
  const this_user = await user.json();

  return { props: { this_user }, revalidate: 10 };
}
