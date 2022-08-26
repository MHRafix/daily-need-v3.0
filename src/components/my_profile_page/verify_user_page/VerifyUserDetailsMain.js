import Cookie from 'js-cookie';
import Breadcrumb from '../../commons/Breadcrumb/Breadcrumb';
import ProfileContentContainer from '../my_profile_dashboard/ProfileContentContainer';
import VerifyUserContent from './VerifyUserContent';

export default function VerifyUserDetailsMain() {
	// user info
	const userInfo =
		Cookie.get('user_information') &&
		JSON.parse(Cookie.get('user_information'));

	// const bread_string = `My Profile / ${userInfo?.user_name} / user verification`;

	const bread_string = 'My Profile / user verification';

	// if (userInfo?.user_name) {
	// } else {
	//   // prevent fake user
	//   const bread_string = "fake user";

	//   return (
	//     <MyProfileErrMssg
	//       bread_string={bread_string}
	//       message="You are not logged in. Please login to explore more!"
	//     />
	//   );
	// }

	return (
		<>
			<Breadcrumb bread_nav={bread_string} />
			<ProfileContentContainer>
				<VerifyUserContent />
			</ProfileContentContainer>
		</>
	);
}
