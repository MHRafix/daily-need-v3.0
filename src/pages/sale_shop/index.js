import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllProducts from "../../../models/AllProducts";
import Category from "../../../models/Category";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import SaleProductsShopMain from "../../components/sale_shop_page/SaleProductsShopMain";
import { storeAllCategories } from "../../redux/all_data/action";
import db from "../../utilities/database";

export default function SaleProductsShop({ sale_products, all_categories }) {
  // categories add to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllCategories(all_categories));
  });

  return (
    <>
      <LayoutContainer
        title="Shop"
        description="This is shop page of 'Daily Needs Grocery'"
      >
        <SaleProductsShopMain products_data={sale_products} />
      </LayoutContainer>
    </>
  );
}

// get shop products from the server
// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();
//   const sale_products = products.filter(
//     (product) => product.prices.sale_price !== 0
//   );
//   // Pass data to the page via props
//   return { props: { sale_products } };
// }

export async function getServerSideProps() {
  await db.connect();
  const products = await AllProducts.find({}).lean();
  const all_categories = await Category.find({});
  const sale_products = products.filter(
    (product) => product.prices.sale_price !== 0
  );
  await db.disconnect();
  return {
    props: {
      sale_products,
      all_categories,
    },
  };
}
