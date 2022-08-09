import AllProducts from "../../models/AllProducts";
import Category from "../../models/Category";
import HomeSlider from "../../models/HomeSlider";
import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";
import db from "../utilities/database";

export default function Home({ products, all_categories, all_sliders }) {
  return (
    <>
      <LayoutContainer
        title="Organic Food and Grocery"
        description="This is home page of 'Daily Needs Grocery'"
      >
        <HomeMain
          sale_products={products}
          all_categories={all_categories}
          all_sliders={all_sliders}
        />
      </LayoutContainer>
    </>
  );
}

/**
 *
 * direct find from database
 *
 **/

export async function getServerSideProps() {
  await db.connect();
  const products = await AllProducts.find({}).limit(8);
  const all_categories = await Category.find({});
  const all_sliders = await HomeSlider.find({});
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
      all_categories,
      all_sliders,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const categroies = await fetch(`${process.env.ROOT_URI}/api/allcategories`);
//   const sliders = await fetch(`${process.env.ROOT_URI}/api/allsliders`);
//   const products = await res.json();
//   const all_categories = await categroies.json();
//   const all_sliders = await sliders.json();

//   return { props: { products, all_categories, all_sliders } };
// }
