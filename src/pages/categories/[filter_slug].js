import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllProducts from "../../../models/AllProducts";
import Category from "../../../models/Category";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import FilteredShopMain from "../../components/filter_shop/FilteredShopMain";
import { storeAllCategories } from "../../redux/all_data/action";
import db from "../../utilities/database";

export default function CategoryShop({ matched_products, all_categories }) {
  // categories add to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllCategories(all_categories));
  });

  const router = useRouter();
  const { filter_slug } = router.query;
  const bread_string = `shop / categories / ${filter_slug}`;
  return (
    <>
      <LayoutContainer
        title="Category Shop"
        description="This is category shop page of 'Daily Needs Grocery'"
      >
        <FilteredShopMain
          bread_string={bread_string}
          filtered_products={matched_products}
        />
      </LayoutContainer>
    </>
  );
}

// // get category product serverSideprops
// export async function getServerSideProps(context) {
//   // selected prodcut unique id
//   const { params } = context;
//   const { filter_slug } = params;

//   // req for all prodcuts
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();
//   const categories = await fetch(`${process.env.ROOT_URI}/api/allcategories`);
//   const all_categories = await categories.json();

//   // filter category products which is selected
//   const matched_products = products.filter(
//     (product) => product.category === filter_slug
//   );
//   // return the filtered products here
//   return { props: { matched_products, all_categories } };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { filter_slug } = params;

  await db.connect();
  const matched_products = await AllProducts.find({
    category: filter_slug,
  }).lean();
  const all_categories = await Category.find({});
  await db.disconnect();
  return {
    props: {
      matched_products,
      all_categories,
    },
  };
}
