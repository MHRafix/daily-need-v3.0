import React from 'react';
import TrackingStepper from '../../../lib/react_stepper/TrackingStepper';
import ProfileContentLayout from '../../../utilities/ProfileContentLayout';

export default function TrackOrderResultContent({ track_result }) {
	const { UserActiveOrdersTableColumns } = UserActiveOrdersTableConfig();
	console.log(active_orders);
	return (
		<>
			<ProfileContentLayout content_title='Track Orders'>
				<TrackingStepper />
			</ProfileContentLayout>
		</>
	);
}
