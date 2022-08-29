import React from 'react';
import { Step, Stepper } from 'react-form-stepper';
import { AiOutlineBarChart, AiOutlineHome } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';

export default function TrackingStepper() {
	const status = { pendding: 1, inprogress: 2, deliver: 3, shipped: 4 };
	return (
		<>
			<div className='order_id text-center'>
				<h3 className='text-medium tracking-wider font-bold text-black2'>
					{'px01254754241'.toUpperCase()}
				</h3>
			</div>

			<Stepper
				activeStep={status.deliver}
				connectorStateColors
				connectorStyleConfig={{
					size: 3,
					activeColor: '#ff7600',
					disabledColor: '#ccc',
					completedColor: '#2bd891',
				}}
				styleConfig={{
					size: 45,
					activeBgColor: '#ff7600',
					completedBgColor: '#2bd891',
					inactiveBgColor: '#ccc',
				}}
			>
				<Step label='Pending'>
					<BiLoaderCircle size={25} />
				</Step>
				<Step label='Inprogress'>
					<AiOutlineBarChart size={25} />
				</Step>
				<Step label='On Delivery'>
					<FaShippingFast size={25} />
				</Step>
				<Step label='Shipped'>
					<AiOutlineHome size={25} />
				</Step>
			</Stepper>
		</>
	);
}
