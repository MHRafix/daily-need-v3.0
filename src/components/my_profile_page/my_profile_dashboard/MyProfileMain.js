import { useSelector } from 'react-redux';
import { MyProfileErrMssg } from '../../../utilities/AlertMessage';
import Breadcrumb from '../../commons/Breadcrumb/Breadcrumb';
import ProfileContentContainer from './ProfileContentContainer';
import ProfileDashboardContent from './ProfileDashboardContent';

export default function MyProfileMain({ my_orders }) {
	// loggedin user data
	const userInfo = useSelector((state) => state.users.loggedin_user);

	const bread_string = `${userInfo?.user_name} / my profile/ dashboard`;

	// prevent fake user
	if (!userInfo?.user_email) {
		const bread_string = 'fake user';

		return (
			<MyProfileErrMssg
				bread_string={bread_string}
				message='You are not logged in. Please login to explore more!'
			/>
		);
	}

	return (
		<>
			<Breadcrumb bread_nav={bread_string} />
			<ProfileContentContainer>
				<ProfileDashboardContent my_orders={my_orders} />
			</ProfileContentContainer>
		</>
	);
}
