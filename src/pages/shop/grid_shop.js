import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import AllProducts from "../../../models/AllProducts";
// import Category from "../../../models/Category";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import ShopPageMain from "../../components/shop_page/ShopPageMain";
import {
  addAllProducts,
  storeAllCategories,
} from "../../redux/all_data/action";
// import db from "../../utilities/database";

export default function GridShopPage({ all_products, all_categories }) {
  // categories add to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllCategories(all_categories));
    dispatch(addAllProducts(all_products));
  });

  return (
    <>
      <LayoutContainer
        title="Shop"
        description="This is shop page of 'Daily Needs Grocery' web application."
      >
        <ShopPageMain all_products={all_products} />
      </LayoutContainer>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetch(
    `${process.env.ROOT_API_URI_VERCEL}/allproducts`
  );
  const categories = await fetch(
    `${process.env.ROOT_API_URI_VERCEL}/allcategories`
  );

  const all_products = await products.json();
  const all_categories = await categories.json();

  // Pass data to the page via props
  return {
    props: {
      all_products,
      all_categories,
    },
  };
}
