import Cookie from 'js-cookie';
import Breadcrumb from '../../components/commons/Breadcrumb/Breadcrumb';
import BillingDetails from './BillingDetails';

export default function CheckoutMain() {
	// user info
	const userInfo =
		Cookie.get('user_information') &&
		JSON.parse(Cookie.get('user_information'));

	// if (userInfo?.user_email) {
	// var bread_string = 'checkout';
	// }

	// if user not logged in
	// if (!userInfo?.user_email) {
	// 	// var bread_string = 'fake user';

	// 	return (
	// 		<MyProfileErrMssg
	// 			// bread_string='fake user'
	// 			message='You are not logged in. Please login to explore more!'
	// 		/>
	// 	);
	// }

	return (
		<>
			<Breadcrumb bread_nav={'checkout'} />
			<BillingDetails />
		</>
	);
}
