import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../components/commons/layout/LayoutContainer';
import SaleProductsShopMain from '../../components/sale_shop_page/SaleProductsShopMain';
import { storeAllCategories } from '../../redux/all_data/action';

export default function SaleProductsShop({ sale_products, all_categories }) {
	// categories add to redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(storeAllCategories(all_categories));
	});

	return (
		<>
			<LayoutContainer
				title='Shop'
				description="This is shop page of 'Daily Needs Grocery'"
			>
				<SaleProductsShopMain products_data={sale_products} />
			</LayoutContainer>
		</>
	);
}

// get shop products from the server
export async function getStaticProps() {
	// prodcut fetch here
	const products = await fetch(
		'https://daily-need.vercel.app/api/sale_products'
	);
	const sale_products = await products.json();

	// categories fetch here
	const categories = await fetch(
		'https://daily-need.vercel.app/api/allcategories'
	);
	const all_categories = await categories.json();
	// Pass data to the page via props
	return { props: { sale_products, all_categories }, revalidate: 10 };
}
