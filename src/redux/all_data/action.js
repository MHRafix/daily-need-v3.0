// store all products type
export const addProducts = {
  ADD_PRODUCTS: "ADD_PRODUCTS",
};

// store all categories type
export const storeCategories = {
  STORE_CATEGORIES: "STORE_CATEGORIES",
};

// store all reviews type
export const storeReviews = {
  STORE_REVIEWS: "STORE_REVIEWS",
};

// store all products action
export const addAllProducts = (products) => {
  return { type: addProducts.ADD_PRODUCTS, payload: products };
};

// store all categories action
export const storeAllCategories = (categories) => {
  return { type: storeCategories.STORE_CATEGORIES, payload: categories };
};

// store all reviews action
export const storeAllReviews = (reviews) => {
  return { type: storeReviews.STORE_REVIEWS, payload: reviews };
};
