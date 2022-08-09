import React from "react";
import BestSaleProductsMain from "./BestSaleProducts/BestSaleProductsMain";
import BannerSlider from "./HomeSlider/BannerSlider/BannerSlider";
import CategorySlider from "./HomeSlider/CategoriesSlider/CategorySlider";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import SaleProductsMain from "./SaleProducts/SaleProductsMain";

export default function HomeMain({
  sale_products,
  all_categories,
  all_sliders,
}) {
  return (
    <>
      <CategorySlider
        all_categories={all_categories}
        sale_products={sale_products}
      />
      <BannerSlider all_sliders={all_sliders} />
      <SaleProductsMain sale_products_data={sale_products} />
      <MiddleBanner />
      <BestSaleProductsMain sale_products_data={sale_products} />
    </>
  );
}
