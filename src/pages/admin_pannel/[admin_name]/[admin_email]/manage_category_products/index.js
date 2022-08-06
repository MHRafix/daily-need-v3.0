import Cookie from "js-cookie";
import React from "react";
import AdminPannelLayoutContainer from "../../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import ManageCategoryMain from "../../../../../components/admin_pannel_components/components/manage_category/ManageCategoryMain";
import ErrorPage from "../../../../404";

export default function ManagCategoryProducts({ all_products }) {
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
        <ManageCategoryMain all_products={all_products} />
      </AdminPannelLayoutContainer>
    </>
  );
}

// export async function getServerSideProps() {
//     await db.connect();
//     const all_orders = await Order.find({});
//     await db.disconnect();

//     return {
//       props: {
//         all_orders,
//       },
//     };
//   }

export async function getServerSideProps() {
  // all orders
  const products = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
  const all_products = await products.json();

  return { props: { all_products } };
}
