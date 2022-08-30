import React from 'react';
import TrackingStepper from '../../../lib/react_stepper/TrackingStepper';
import ProfileContentLayout from '../../../utilities/ProfileContentLayout';

export default function TrackOrderResultContent({ track_result }) {
	return (
		<>
			<ProfileContentLayout content_title='Track Orders'>
				<TrackingStepper track_result={track_result} />
			</ProfileContentLayout>
		</>
	);
}
