import React from "react";
import BestSaleProductsMain from "./BestSaleProducts/BestSaleProductsMain";
import BannerSlider from "./HomeSlider/BannerSlider/BannerSlider";
import BrandSlider from "./HomeSlider/BrandsSlider/BrandSlider";
import CategorySlider from "./HomeSlider/CategoriesSlider/CategorySlider";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import SaleProductsMain from "./SaleProducts/SaleProductsMain";

export default function HomeMain({
  sale_products,
  all_categories,
  all_sliders,
  all_brands,
}) {
  return (
    <>
      <CategorySlider
        all_categories={all_categories}
        all_products={sale_products}
      />
      <BannerSlider all_sliders={all_sliders} />
      <SaleProductsMain sale_products_data={sale_products} />
      <MiddleBanner />
      <BestSaleProductsMain sale_products_data={sale_products} />
      <BrandSlider all_brands={all_brands} />
    </>
  );
}
