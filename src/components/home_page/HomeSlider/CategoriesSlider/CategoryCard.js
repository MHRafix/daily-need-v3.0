import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export default function CategoryCard({ category_data, all_products }) {
  const { cat_name, cat_image } = category_data;

  const matched_products = all_products.filter(
    (product) => product.category === cat_name
  );

  console.log(cat_name, matched_products);

  return (
    <NextLink href={`/categories/${cat_name}`} passHref>
      <div className="category_card_wrapper">
        <div className="category_image">
          <Image
            className="catImg"
            src={cat_image}
            alt="category_image"
            width={80}
            height={80}
          />
        </div>
        <div className="cat_det">
          <h1 className="cat_name capitalize">{cat_name}</h1>
          <p className="cat_items_qty">
            {matched_products?.length} &nbsp; Items
          </p>
        </div>
      </div>
    </NextLink>
  );
}
