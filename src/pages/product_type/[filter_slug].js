import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../components/commons/layout/LayoutContainer';
import FilteredShopMain from '../../components/filter_shop/FilteredShopMain';
import { storeAllCategories } from '../../redux/all_data/action';

export default function ProductByType({ matched_products, all_categories }) {
	// categories add to redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(storeAllCategories(all_categories));
	});

	const router = useRouter();
	const { filter_slug } = router.query;
	const bread_string = `shop / product type / ${filter_slug}`;

	return (
		<>
			<LayoutContainer
				title='Product Type Shop'
				description="This is product type shop page of 'Daily Needs Grocery'"
			>
				<FilteredShopMain
					bread_string={bread_string}
					filtered_products={matched_products}
				/>
			</LayoutContainer>
		</>
	);
}

// find the product based-on type
export async function getStaticPaths() {
	const products = await fetch('https://daily-need.vercel.app/api/allproducts');
	const all_products = await products.json();
	const slug = all_products.map((product) => ({
		params: { filter_slug: product.product_type },
	}));
	return {
		paths: slug,
		fallback: false,
	};
}

// find type products
export async function getStaticProps({ params }) {
	const { filter_slug } = params;
	// req for all prodcuts
	const products = await fetch('https://daily-need.vercel.app/api/allproducts');
	const categories = await fetch(
		'https://daily-need.vercel.app/api/allcategories'
	);
	const all_categories = await categories.json();
	const all_products = await products.json();

	// filter category products which is selected
	const matched_products = all_products.filter(
		(product) => product.product_type === filter_slug
	);
	// return the filtered products here
	return { props: { matched_products, all_categories }, revalidate: 10 };
}
