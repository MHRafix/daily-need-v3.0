import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../components/commons/layout/LayoutContainer';
import ShopPageMain from '../../components/shop_page/ShopPageMain';
import { fetcher } from '../../hooks/http_req/DataFetch';
import {
	addAllProducts,
	storeAllCategories,
} from '../../redux/all_data/action';

export default function GridShopPage({ all_products, all_categories }) {
	// categories add to redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(storeAllCategories(all_categories));
		dispatch(addAllProducts(all_products));
	});

	return (
		<>
			<LayoutContainer
				title='Shop'
				description="This is shop page of 'Daily Needs Grocery' web application."
			>
				<ShopPageMain all_products={all_products} />
			</LayoutContainer>
		</>
	);
}

export async function getStaticProps() {
	const all_products = await fetcher('allproducts');
	const all_categories = await fetcher('allcategories');

	return {
		props: {
			all_products,
			all_categories,
		},
		revalidate: 10,
	};
}
