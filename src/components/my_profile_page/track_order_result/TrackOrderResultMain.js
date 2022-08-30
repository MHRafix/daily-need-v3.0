import { useSelector } from 'react-redux';
import { MyProfileErrMssg } from '../../../utilities/AlertMessage';
import Breadcrumb from '../../commons/Breadcrumb/Breadcrumb';
import ProfileContentContainer from '../my_profile_dashboard/ProfileContentContainer';
import TrackOrderResultContent from './TrackOrderResultContent';

export default function TrackOrdersMain({ active_orders }) {
	// loggedin user data
	const userInfo = useSelector((state) => state.users.loggedin_user);

	const bread_string = `${userInfo?.user_name} / my profile/ track order result`;

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
				<TrackOrderResultContent active_orders={active_orders} />
			</ProfileContentContainer>
		</>
	);
}
