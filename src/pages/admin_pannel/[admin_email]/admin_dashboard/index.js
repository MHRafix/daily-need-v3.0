import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminPannelLayoutContainer from "../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import AdminDashboardMain from "../../../../components/admin_pannel_components/components/admin_dashboard/AdminDashboardMain";
import ErrorPage from "../../../../pages/404";
import { storeUserData } from "../../../../redux/user_data/action";

export default function AdminDashboard({
  all_orders,
  all_users,
  all_products,
  this_user,
}) {
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
        title="Admin Dashboard"
        description="This is admin dashboard of 'Daily Needs Grocery' web application."
      >
        <AdminDashboardMain
          all_orders={all_orders}
          all_users={all_users}
          all_products={all_products}
        />
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
    `https://daily-need.vercel.app/api/admin_pannel_api/manage_users/single_user/${admin_email}`
  );
  const this_user = await user.json();

  // all orders
  const orders = await fetch(
    `https://daily-need.vercel.app/api/manage_orders/all_orders`
  );
  const all_orders = await orders.json();

  // all products
  const products = await fetch(`https://daily-need.vercel.app/api/allproducts`);
  const all_products = await products.json();

  // all users
  const users = await fetch(`https://daily-need.vercel.app/api/all_users`);
  const all_users = await users.json();

  return {
    props: { all_orders, all_products, all_users, this_user },
    revalidate: 10,
  };
}
