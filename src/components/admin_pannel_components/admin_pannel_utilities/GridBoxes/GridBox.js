import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import cardAnimation from '../../../../hooks/animation/cardAnimation';

export default function GridBox({ box_content }) {
	const { box_name, box_number, box_icon, icon_color, note } = box_content;
	const { initial, animate, exit, transition } = cardAnimation();
	return (
		<>
			<motion.div
				id='box_wrapper'
				whileInView='onscreen'
				viewport={{ once: true, amount: 0.8 }}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<div className='box_content'>
					<div>
						<span id='chart_indicator_label'>{box_name}</span>
					</div>
					<div>
						<div id='amount_label' style={{ height: '43px' }}>
							<CountUp
								start={box_number > 1000 ? box_number - 500 : 0}
								end={box_number}
								duration={2}
								separator=','
							/>
						</div>
					</div>
					{note && (
						<p className='mt-2 text-thin text-black3 tracking-wider'>{note}</p>
					)}
				</div>
				<div
					className='box_icon'
					style={{ fontSize: '50px', color: `${icon_color}` }}
				>
					{box_icon}
				</div>
			</motion.div>
		</>
	);
}
