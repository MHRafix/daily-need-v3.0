import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import Order from "../../../../models/AllOrders";
// import AllProducts from "../../../../models/AllProducts";
// import Reviews from "../../../../models/Reviews";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import SignleProductMain from "../../../components/single_product/SignleProductMain";
import {
  addCutomerAccess,
  storeAllReviews,
} from "../../../redux/all_data/action";
// import db from "../../../utilities/database";

export default function SingleProduct({
  single_product,
  all_reviews,
  all_orders,
}) {
  const Router = useRouter();
  const { slug } = Router.query;
  let access = false;

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));
  const user_orders = all_orders?.filter(
    (order) => order?.user_email === userInfo?.user_email
  );

  user_orders?.map((order) => {
    const isExist = order.products_data.find(
      (product) => product.slug === slug
    );
    if (isExist) {
      access = true;
    }
  });

  // set reviews to redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllReviews(all_reviews));
    if (access) {
      dispatch(addCutomerAccess(true));
    } else {
      dispatch(addCutomerAccess(false));
    }
  });

  // bread cruimb navigation making here
  const bread_string = `${single_product?.category} / ${single_product?.title}`;
  return (
    <>
      <LayoutContainer
        title={single_product?.title}
        description={`This is single product page of ${single_product?.title} of Daily Needs Grocery`}
      >
        <SignleProductMain
          bread_string={bread_string}
          single_product={single_product}
        />
      </LayoutContainer>
    </>
  );
}

// find the path
export async function getStaticPaths() {
  const products = await fetch(
    `${process.env.ROOT_API_URI_VERCEL}/allproducts`
  );
  const all_products = await products.json();
  const slug = all_products.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths: slug,
    fallback: false,
  };
}

// find single product
export async function getStaticProps({ params }) {
  const { slug } = params;
  console.log(params);
  const products = await fetch(
    `${process.env.ROOT_API_URI_VERCEL}/allproducts`
  );
  const all_products = await products.json();
  // find single product here
  const single_product = all_products.find((product) => product.slug === slug);

  // get all reviews here
  const reviews = await fetch(
    `${process.env.ROOT_API_URI_VERCEL}/manage_reviews/all_reviews`
  );
  const all_reviews = await reviews.json();

  // find this product reviews only
  const this_reviews = all_reviews.filter(
    (review) =>
      review.product_id === single_product?._id && review.product_slug === slug
  );

  // get all orders
  const orders = await fetch(
    `${process.env.ROOT_API_URI_VERCEL}/manage_orders/all_orders`
  );
  const all_orders = await orders.json();

  // return the all data as props
  return {
    props: {
      single_product,
      all_reviews: this_reviews,
      all_orders,
    },
  };
}
