import Cookie from 'js-cookie';
import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../../../components/commons/layout/LayoutContainer';
import HistoryDownloadMain from '../../../../components/my_profile_page/history_download_page/HistoryDownloadMain';
import { storeUserData } from '../../../../redux/user_data/action';
import ErrorPage from '../../../404';

export default function HistoryDownload({ my_orders, loggedin_user }) {
	// store user_data to redux
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const user_email = loggedin_user.user_email;

	// loogedin user cookie
	const userInfo =
		Cookie.get('user_information') &&
		JSON.parse(Cookie.get('user_information'));

	useEffect(() => {
		if (user_email === userInfo.user_email) {
			dispatch(storeUserData(loggedin_user));
		} else {
			setError(true);
		}
	}, [loggedin_user._id]);

	if (error) {
		return <ErrorPage />;
	}

	return (
		<>
			<LayoutContainer
				title='History Download'
				description="This is history download page of 'Daily Needs Grocery' web application!"
			>
				<HistoryDownloadMain my_orders={my_orders} />
			</LayoutContainer>
		</>
	);
}

// find the exact user
export async function getStaticPaths() {
	const users = await fetch('https://daily-need.vercel.app/api/all_users');
	const all_users = await users.json();
	const user = all_users.map((user) => ({
		params: { user_email: user.user_email },
	}));
	return {
		paths: user,
		fallback: false,
	};
}

// filter user orders from all orders
export async function getStaticProps({ params }) {
	const { user_email } = params;

	// user data
	const user = await fetch(
		`https://daily-need.vercel.app/api/admin_pannel_api/manage_users/single_user/${user_email}`
	);
	const loggedin_user = await user.json();

	// user orders
	const orders = await fetch(
		'https:daily-need.vercel.app/api/manage_orders/all_orders'
	);
	const all_orders = await orders.json();

	// find my orders
	const my_orders = all_orders.filter(
		(order) =>
			order.user_email === user_email &&
			order?.order_overview?.order_status === 'shipped'
	);

	return { props: { my_orders, loggedin_user } };
}
