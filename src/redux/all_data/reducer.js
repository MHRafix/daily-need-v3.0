// import { addAllProducts } from "./action";

import { addProducts, storeCategories, storeReviews } from "./action";

const initialState = {
  all_products: [],
  all_categories: [],
  all_reviews: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case addProducts.ADD_PRODUCTS: {
      const products = payload;
      return { ...state, all_products: products };
    }
    case storeCategories.STORE_CATEGORIES: {
      const categories = payload;
      return { ...state, all_categories: categories };
    }
    case storeReviews.STORE_REVIEWS: {
      const reviews = payload;
      return { ...state, all_reviews: reviews };
    }
    default:
      return state;
  }
}
