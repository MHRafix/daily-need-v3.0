import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../components/commons/layout/LayoutContainer';
import FilteredShopMain from '../../components/filter_shop/FilteredShopMain';
import { fetcher } from '../../hooks/http_req/DataFetch';
import { storeAllCategories } from '../../redux/all_data/action';

export default function ProductByStatus({ matched_products, all_categories }) {
	// categories add to redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(storeAllCategories(all_categories));
	});

	const router = useRouter();
	const { filter_slug } = router.query;
	const bread_string = `shop / product status / ${filter_slug}`;

	return (
		<>
			<LayoutContainer
				title='Product Status Shop'
				description="This is product status shop page of 'Daily Needs Grocery'"
			>
				<FilteredShopMain
					bread_string={bread_string}
					filtered_products={matched_products}
				/>
			</LayoutContainer>
		</>
	);
}

// find the product based-on status
export async function getStaticPaths() {
	const all_products = await fetcher('allproducts');
	const slug = all_products.map((product) => ({
		params: { filter_slug: product.product_status },
	}));
	return {
		paths: slug,
		fallback: false,
	};
}

// find status products
export async function getStaticProps({ params }) {
	const { filter_slug } = params;

	const all_categories = await fetcher('allcategories');
	const all_products = await fetcher('allproducts');

	// filter category products which is selected
	const matched_products = all_products.filter(
		(product) => product.product_status === filter_slug
	);
	// return the filtered products here
	return { props: { matched_products, all_categories }, revalidate: 30 };
}
