import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllProducts from "../../../../models/AllProducts";
import Reviews from "../../../../models/Reviews";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import SignleProductMain from "../../../components/single_product/SignleProductMain";
import { storeAllReviews } from "../../../redux/all_data/action";
import db from "../../../utilities/database";

export default function SingleProduct({ single_product, all_reviews }) {
  // set reviews to redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeAllReviews(all_reviews));
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

// get single product serverSideprops
// export async function getServerSideProps(context) {
//   // selected prodcut unique id
//   const { params } = context;
//   const { slug } = params;

//   // req for all prodcuts
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();

// find single one which is selected
//   const single_product = products.find((product) => product.slug === slug);

//   // get all reviews here
//   const reviews = await fetch(
//     `${process.env.ROOT_URI}/api/manage_reviews/all_reviews`
//   );
//   const all_reviews = await reviews.json();

//   // find this product reviews only
//   const this_reviews = all_reviews.filter(
//     (review) =>
//       review.product_id === single_product._id && review.product_slug === slug
//   );

//   // return the selected product here
//   return { props: { single_product, all_reviews: this_reviews } };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const single_product = await AllProducts.findOne({ slug }).lean();
  const all_reviews = await Reviews.find({
    product_id: single_product._id,
    product_slug: single_product.slug,
  }).lean();
  await db.disconnect();
  return {
    props: {
      single_product,
      all_reviews,
    },
  };
}
