import Cookie from 'js-cookie';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MdLogout } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { profile_navigation } from '../../../fake_data/all_fakedata';
import ProfileNav from '../../../utilities/ProfileNav';

export default function ProfileNavigation() {
	// user info
	const userInfo = useSelector((state) => state.users.loggedin_user);

	// handle logout and remove user information cookie from the browser
	const history = useRouter();

	const handleLogout = () => {
		history.push('/my_account/my_acc');
		Cookie.remove('user_information');
		Cookie.remove('user_verify');
		Cookie.remove('lock_screen');
	};

	return (
		<div className='profile_details_wrapper'>
			<div className='profile_details'>
				{userInfo?.user_pic && (
					<Image
						priority={true}
						src={userInfo?.user_pic}
						width={90}
						height={90}
						alt='Profile Picture'
						className='rounded-full my-5 mx-auto'
					/>
				)}
				{userInfo?.user_name && (
					<h3 className='text-deep_cyan font-semibold tracking-wide text-normal capitalize'>
						{userInfo?.user_name}
					</h3>
				)}
				<button
					className='!text-sm tracking-wide'
					id='cart_btn'
					onClick={handleLogout}
				>
					Logout Now &nbsp; <MdLogout className='!text-normal' />
				</button>
			</div>
			<div className='profile_navigation_wrapper'>
				{profile_navigation.map((nav, i) => (
					<ProfileNav key={i} menu_data={nav} />
				))}

				{userInfo?.user_admin && (
					<NextLink
						href={`/admin_pannel/${userInfo?.user_email}/admin_dashboard`}
						passHref
					>
						<div id='profile_nav_normal'>
							<RiAdminFill /> &nbsp; Admin Pannel
						</div>
					</NextLink>
				)}
			</div>
		</div>
	);
}
