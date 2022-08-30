// import Cookie from 'js-cookie';
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import LayoutContainer from '../../../../../components/commons/layout/LayoutContainer';
// import TrackOrdersMain from '../../../../../components/my_profile_page/track_orders/TrackOrdersMain';
// import { storeUserData } from '../../../../../redux/user_data/action';
// import ErrorPage from '../../../../404';

// export default function TrackOrderResult({ loggedin_user }) {
// 	// store user_data to redux
// 	const [error, setError] = useState(false);
// 	const dispatch = useDispatch();
// 	const user_email = loggedin_user.user_email;
// 	const userInfo =
// 		Cookie.get('user_information') &&
// 		JSON.parse(Cookie.get('user_information'));

// 	useEffect(() => {
// 		if (user_email === userInfo.user_email) {
// 			dispatch(storeUserData(loggedin_user));
// 		} else {
// 			setError(true);
// 		}
// 	}, [loggedin_user._id]);

// 	if (error) {
// 		return <ErrorPage />;
// 	}

// 	return (
// 		<>
// 			<LayoutContainer
// 				title='Track Order'
// 				description="This is Track Order page of 'Daily Needs Grocery' application!"
// 			>
// 				<TrackOrdersMain my_orders={my_orders} />
// 			</LayoutContainer>
// 		</>
// 	);
// }

// // find the exact user
// export async function getStaticPaths() {
// 	const orders = await fetch(
// 		'https://daily-need.vercel.app/api/manage_orders/all_orders'
// 	);
// 	const all_orders = await orders.json();

// 	const order = all_orders.map((order) => ({
// 		params: { order_id: order._id },
// 	}));

// 	return {
// 		paths: order,
// 		fallback: false,
// 	};
// }

// // filter user orders from all orders
// export async function getStaticProps({ params }) {
// 	const { order_id } = params;

// 	// user orders
// 	const orders = await fetch(
// 		'https:daily-need.vercel.app/api/manage_orders/all_orders'
// 	);
// 	const all_orders = await orders.json();

// 	// find my orders
// 	const my_orders = all_orders.filter(
// 		(order) => order.user_email === user_email
// 	);

// 	return { props: { my_orders, loggedin_user } };
// }

import React from 'react';

export default function TrackOrderResult() {
	return <div>TrackOrderResult</div>;
}
