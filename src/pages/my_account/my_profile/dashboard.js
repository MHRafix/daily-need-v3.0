import Cookie from "js-cookie";
import Order from "../../../../models/AllOrders";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import MyProfileMain from "../../../components/my_profile_page/my_profile_dashboard/MyProfileMain";
import db from "../../../utilities/database";

export default function Dashboard({ my_orders }) {
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  const my_all_orders = my_orders.filter(
    (order) => order.user_email === userInfo?.user_email
  );

  return (
    <>
      <LayoutContainer
        title="My Profile"
        description="This is my profile page of 'Daily Needs Grocery' application!"
      >
        <MyProfileMain my_orders={my_all_orders} />
      </LayoutContainer>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const my_orders = await Order.find({});
  await db.disconnect();
  return {
    props: {
      my_orders,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${process.env.ROOT_URI}/api/manage_orders/my_orders`
//   );
//   const my_orders = await res.json();

//   return { props: { my_orders } };
// }
