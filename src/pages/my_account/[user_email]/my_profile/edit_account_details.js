import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LayoutContainer from '../../../../components/commons/layout/LayoutContainer';
import EditAccountDetailsMain from '../../../../components/my_profile_page/edit_account_details_page/EditAccountDetailsMain';
import { storeUserData } from '../../../../redux/user_data/action';
import ErrorPage from '../../../404';

export default function EditAccountDetails({ loggedin_user }) {
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
	});

	if (error) {
		return <ErrorPage />;
	}

	return (
		<>
			<LayoutContainer
				title='Edit Account Details'
				description="This is edit account details page of 'Daily Needs Grocery' web application!"
			>
				<EditAccountDetailsMain />
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

	// requested user data
	const user = await fetch(
		`https://daily-need.vercel.app/api/admin_pannel_api/manage_users/single_user/${user_email}`
	);
	const loggedin_user = await user.json();

	return { props: { loggedin_user } };
}
