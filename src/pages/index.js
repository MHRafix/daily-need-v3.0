// import AllProducts from "../../models/AllProducts";
// import BrandSlider from "../../models/BrandSlider";
// import Category from "../../models/Category";
// import HomeSlider from "../../models/HomeSlider";
import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";

export default function Home({
  products,
  all_categories,
  all_sliders,
  all_brands,
}) {
  return (
    <>
      <LayoutContainer
        title="Organic Food and Grocery"
        description="This is home page of 'Daily Needs Grocery'"
      >
        <HomeMain
          all_products={products}
          all_categories={all_categories}
          all_sliders={all_sliders}
          all_brands={all_brands}
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

// export async function getServerSideProps() {
//   await db.connect();
//   const products = await AllProducts.find({});
//   const all_categories = await Category.find({});
//   const all_sliders = await HomeSlider.find({});
//   const all_brands = await BrandSlider.find({});
//   await db.disconnect();
//   return {
//     props: {
//       products,
//       all_categories,
//       all_sliders,
//       all_brands,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
  const categroies = await fetch(`${process.env.ROOT_URI}/api/allcategories`);
  const sliders = await fetch(`${process.env.ROOT_URI}/api/allsliders`);
  const brands = await fetch(`${process.env.ROOT_URI}/api/allbrands`);
  const products = await res.json();
  const all_categories = await categroies.json();
  const all_sliders = await sliders.json();
  const all_brands = await brands.json();

  return { props: { products, all_categories, all_sliders, all_brands } };
}
