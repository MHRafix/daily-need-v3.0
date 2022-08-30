import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../../../../components/commons/layout/LayoutContainer';
import TrackOrdersResultMain from '../../../../../components/my_profile_page/track_order_result/TrackOrderResultMain';
import { storeTrackOrder } from '../../../../../redux/all_data/action';
import { storeUserData } from '../../../../../redux/user_data/action';
import ErrorPage from '../../../../404';

export default function TrackOrderResult({ track_result, loggedin_user }) {
	// store user_data to redux
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const user_email = loggedin_user.user_email;
	const userInfo =
		Cookie.get('user_information') &&
		JSON.parse(Cookie.get('user_information'));

	useEffect(() => {
		if (user_email === userInfo.user_email) {
			dispatch(storeUserData(loggedin_user));
			dispatch(storeTrackOrder(track_result));
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
				title='Track Order'
				description="This is Track Order page of 'Daily Needs Grocery' application!"
			>
				<TrackOrdersResultMain />
			</LayoutContainer>
		</>
	);
}

// server side render
export async function getServerSideProps({ params }) {
	const { user_email, track_id } = params;

	const user = await fetch(
		`https://daily-need.vercel.app/api/user_dashboard_api/manage_users/single_user/${user_email}`
	);
	const loggedin_user = await user.json();

	const track_order = await fetch(
		`https://daily-need.vercel.app/api/user_dashboard_api/track_orders/${track_id}`
	);
	const track_result = await track_order.json();

	return { props: { track_result, loggedin_user } };
}
