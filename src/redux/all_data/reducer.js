// import { addAllProducts } from "./action";

import { addProducts, storeCategories } from "./action";

const initialState = {
  all_products: [],
  all_categories: [],
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
    default:
      return state;
  }
}
