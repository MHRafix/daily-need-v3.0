import Cookie from "js-cookie";
import React from "react";
import Product from "../../../../../../models/AllProducts";
import Category from "../../../../../../models/Category";
import AdminPannelLayoutContainer from "../../../../../components/admin_pannel_components/common/layout/AdminPannelLayoutContainer";
import ManageCategoryMain from "../../../../../components/admin_pannel_components/components/manage_category/ManageCategoryMain";
import db from "../../../../../utilities/database";
import ErrorPage from "../../../../404";

export default function ManagCategoryProducts({
  all_products,
  all_categories,
}) {
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
        <ManageCategoryMain
          all_products={all_products}
          all_categories={all_categories}
        />
      </AdminPannelLayoutContainer>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const all_products = await Product.find({});
  const all_categories = await Category.find({});
  await db.disconnect();

  return {
    props: {
      all_products,
      all_categories,
    },
  };
}

// export async function getServerSideProps() {
//   // all orders
//   const products = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const categories = await fetch(`${process.env.ROOT_URI}/api/allcategories`);
//   const all_products = await products.json();
//   const all_categories = await categories.json();

//   return { props: { all_products, all_categories } };
// }
