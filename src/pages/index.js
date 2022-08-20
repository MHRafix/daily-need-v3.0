import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";

export default function Home({
  all_products,
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
          all_products={all_products}
          all_categories={all_categories}
          all_sliders={all_sliders}
          all_brands={all_brands}
        />
      </LayoutContainer>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetch("https://daily-need.vercel.app/api/allproducts");
  const categories = await fetch(
    "https://daily-need.vercel.app/api/allcategories"
  );
  const sliders = await fetch("https://daily-need.vercel.app/api/allsliders");
  const brands = await fetch("https://daily-need.vercel.app/api/allbrands");
  const all_products = await products.json();
  const all_categories = await categories.json();
  const all_sliders = await sliders.json();
  const all_brands = await brands.json();

  return { props: { all_products, all_categories, all_sliders, all_brands } };
}
