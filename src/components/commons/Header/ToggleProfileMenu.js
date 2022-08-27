import { motion } from 'framer-motion';
import NextLink from 'next/link';
import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { toggle_profile_navigation } from '../../../fake_data/all_fakedata';
import useAnimation from '../../../hooks/animation/useAnimation';
import { useHandleLogout } from '../../../hooks/othersHooks/useHandleLogout';

export default function ToggleProfileMenu() {
	const { fadePop } = useAnimation();
	const { handleLogout } = useHandleLogout();
	return (
		<motion.div
			className='absolute z-50'
			initial='offscreen'
			whileInView='onscreen'
			exit={fadePop.exit}
			variants={fadePop}
		>
			<div id='profile_action_menus'>
				{toggle_profile_navigation.map((menu, i) => (
					<MenuBtn key={i} nav_data={menu} />
				))}
				<button id='action_btn_icon' onClick={handleLogout}>
					<MdLogout id='profile_nav_btn_red_btn' />
					&nbsp;Sign Out
				</button>
			</div>
		</motion.div>
	);
}

export const MenuBtn = ({ nav_data }) => {
	const { menu_name, MenuIcon, menu_href } = nav_data;
	const userInfo = useSelector((state) => state.users.loggedin_user);
	return (
		<NextLink
			href={`/my_account/${userInfo?.user_email}/my_profile${menu_href}`}
			passHref
		>
			<button id='action_btn_icon'>
				{MenuIcon}
				&nbsp;{menu_name}
			</button>
		</NextLink>
	);
};
