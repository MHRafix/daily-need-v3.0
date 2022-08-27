import { motion } from 'framer-motion';
import React from 'react';
import {
	MdLogout,
	MdManageSearch,
	MdOutlineDashboard,
	MdOutlineShareLocation,
} from 'react-icons/md';
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
				<button id='action_btn_icon'>
					<MdOutlineDashboard className='text-light_purple cursor-pointer text-normal outline-none' />
					&nbsp;My Dashboard
				</button>
				<button id='action_btn_icon'>
					<MdManageSearch className='text-yellow-500 cursor-pointer text-normal outline-none' />
					&nbsp;My Orders
				</button>
				<button id='action_btn_icon'>
					<MdOutlineShareLocation className='text-green cursor-pointer text-normal outline-none' />
					&nbsp;Track Orders
				</button>
				<button id='action_btn_icon' onClick={handleLogout}>
					<MdLogout className='text-red-500 cursor-pointer text-normal outline-none' />
					&nbsp;Sign Out
				</button>
			</div>
		</motion.div>
	);
}
