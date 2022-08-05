import Cookie from "js-cookie";
import React from "react";
import Order from "../../../../models/AllOrders";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import HistoryDownloadMain from "../../../components/my_profile_page/history_download_page/HistoryDownloadMain";
import db from "../../../utilities/database";

export default function HistoryDownload({ all_orders }) {
  // filter out my orders
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  const my_orders = all_orders.filter(
    (order) =>
      order.user_email === userInfo?.user_email &&
      order?.order_overview?.order_status === "shipped"
  );

  return (
    <>
      <LayoutContainer
        title="History Download"
        description="This is history download page of 'Daily Needs Grocery' web application!"
      >
        <HistoryDownloadMain my_orders={my_orders} />
      </LayoutContainer>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const all_orders = await Order.find({});
  await db.disconnect();
  return {
    props: {
      all_orders,
    },
  };
}
