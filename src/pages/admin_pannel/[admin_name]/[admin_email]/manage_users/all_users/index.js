import Cookie from "js-cookie";
import React from "react";
import User from "../../../../../../../models/Users";
import AdminPannelLayoutContainer from "../../../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import ManageAllUsersMain from "../../../../../../components/admin_pannel_components/components/manage_users/ManageAllUsersMain";
import ErrorPage from "../../../../../../pages/404";
import db from "../../../../../../utilities/database";

export default function ManageAllUsers({ all_users }) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addAllProducts(all_products));
  // }, [all_products?.length]);

  // render error page
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (!userInfo?.user_admin) {
    return <ErrorPage />;
  }
  return (
    <>
      <AdminPannelLayoutContainer
        title="Manage Category"
        description="This is manage category of 'Daily Needs Grocery' web application admin pannel."
      >
        <ManageAllUsersMain all_users={all_users} />
      </AdminPannelLayoutContainer>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const all_users = await User.find({});
  await db.disconnect();

  return {
    props: {
      all_users,
    },
  };
}

// export async function getServerSideProps() {
//   // all users
//   const users = await fetch(`${process.env.ROOT_URI}/api/all_users`);
//   const all_users = await users.json();

//   return { props: { all_users } };
// }
