import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import AllProducts from "../../../models/AllProducts";
// import Category from "../../../models/Category";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import ShopPageMain from "../../components/shop_page/ShopPageMain";
import { storeAllCategories } from "../../redux/all_data/action";
// import db from "../../utilities/database";

export default function GridShopPage({ all_products, all_categories }) {
  // categories add to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllCategories(all_categories));
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

// get shop products from the server
export async function getStaticProps() {
  // const products = await fetch("http://localhost:3000/api/allproducts");
  // const categories = await fetch("http://localhost:3000/api/allcategories");
  const products = await fetch("https://daily-need.vercel.app/api/allproducts");
  const categories = await fetch(
    "https://daily-need.vercel.app/api/allcategories"
  );
  const all_products = await products.json();
  const all_categories = await categories.json();

  // Pass data to the page via props
  return { props: { all_products, all_categories } };
}

// export async function getServerSideProps() {
//   await db.connect();
//   const all_products = await AllProducts.find({});
//   const all_categories = await Category.find({});
//   await db.disconnect();
//   return {
//     props: {
//       all_products,
//       all_categories,
//     },
//   };
// }
