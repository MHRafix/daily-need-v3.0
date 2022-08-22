import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminPannelLayoutContainer from "../../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import AllOrdersMain from "../../../../../components/admin_pannel_components/components/manage_orders/all_orders/AllOrdersMain";
import ErrorPage from "../../../../../pages/404";
import { storeUserData } from "../../../../../redux/user_data/action";

export default function AllOrders({ all_orders, this_user }) {
  // store categories to redux
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
        title="Manage Products"
        description="This is manage orders of 'Daily Needs Grocery' web application admin pannel."
      >
        <AllOrdersMain all_orders={all_orders} />
      </AdminPannelLayoutContainer>
    </>
  );
}

// find the user
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

export async function getStaticProps({ params }) {
  const { admin_email } = params;
  const user = await fetch(
    `https://daily-need.vercel.app/api/admin_pannel_api/manage_users/${admin_email}`
  );
  const this_user = await user.json();

  // all orders
  const orders = await fetch(
    `https://daily-need.vercel.app/api/manage_orders/all_orders`
  );
  const all_orders = await orders.json();

  return { props: { all_orders, this_user }, revalidate: 10 };
}
