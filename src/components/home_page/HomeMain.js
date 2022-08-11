import React from "react";
import BestSaleProductsMain from "./BestSaleProducts/BestSaleProductsMain";
import BannerSlider from "./HomeSlider/BannerSlider/BannerSlider";
import BrandSlider from "./HomeSlider/BrandsSlider/BrandSlider";
import CategorySlider from "./HomeSlider/CategoriesSlider/CategorySlider";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import SaleProductsMain from "./SaleProducts/SaleProductsMain";

export default function HomeMain({
  all_products,
  all_categories,
  all_sliders,
  all_brands,
}) {
  const latest_products = all_products.slice(
    all_products?.length,
    all_products?.length - 1,
    all_products?.length - 2,
    all_products?.length - 3,
    all_products?.length - 4,
    all_products?.length - 5,
    all_products?.length - 6,
    all_products?.length - 7,
    all_products?.length - 8
  );

  return (
    <>
      <CategorySlider
        all_categories={all_categories}
        all_products={latest_products}
      />
      <BannerSlider all_sliders={all_sliders} />
      <SaleProductsMain sale_products_data={all_products} />
      <MiddleBanner />
      <BestSaleProductsMain sale_products_data={all_products} />
      <BrandSlider all_brands={all_brands} />
    </>
  );
}
