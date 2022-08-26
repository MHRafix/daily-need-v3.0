import { useSelector } from 'react-redux';
import { MyProfileErrMssg } from '../../../utilities/AlertMessage';
import Breadcrumb from '../../commons/Breadcrumb/Breadcrumb';
import ProfileContentContainer from '../my_profile_dashboard/ProfileContentContainer';
import HistoryDownloadContent from './HistoryDownloadContent';

export default function HistoryDownloadMain({ my_orders }) {
	// logged in user data
	const userInfo = useSelector((state) => state.users.loggedin_user);

	// breadcrunb navigation
	var bread_string = `${userInfo?.user_name} / my profile / history download`;

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
				<HistoryDownloadContent my_orders={my_orders} />
			</ProfileContentContainer>
		</>
	);
}
