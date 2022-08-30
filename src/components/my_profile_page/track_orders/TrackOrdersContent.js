import React from 'react';
import Table from '../../../lib/Tables/table/Table';
import { UserActiveOrdersTableConfig } from '../../../lib/Tables/table_config/TableColumns';
import ProfileContentLayout from '../../../utilities/ProfileContentLayout';

export default function TrackOrdersContent({ active_orders }) {
	const { UserActiveOrdersTableColumns } = UserActiveOrdersTableConfig();

	return (
		<>
			<ProfileContentLayout content_title='Track Orders'>
				<Table
					table_columns={UserActiveOrdersTableColumns}
					table_data={active_orders}
					sorter={false}
				/>
			</ProfileContentLayout>
		</>
	);
}
