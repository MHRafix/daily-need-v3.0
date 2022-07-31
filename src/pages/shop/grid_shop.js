import AllProducts from "../../../models/AllProducts";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import ShopPageMain from "../../components/shop_page/ShopPageMain";
import db from "../../utilities/database";

export default function GridShopPage({ products }) {
  return (
    <>
      <LayoutContainer
        title="Shop"
        description="This is shop page of 'Daily Needs Grocery' web application."
      >
        <ShopPageMain products_data={products} />
      </LayoutContainer>
    </>
  );
}

// get shop products from the server
// export async function getServerSideProps() {
//   const res = await fetch("/api/allproducts");
//   const products = await res.json();

//   // Pass data to the page via props
//   return { props: { products } };
// }

export async function getServerSideProps() {
  await db.connect();
  const products = await AllProducts.find({});
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
