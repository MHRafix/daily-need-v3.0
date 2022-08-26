import React, { useState } from 'react';
import useModalFilter from '../../../hooks/filter_func/useModalFilter';
import useOrderFilter from '../../../hooks/filter_func/useOrderFilter';
import useDeleteReq from '../../../hooks/http_req/deleteReq';
import Table from '../../../lib/Tables/table/Table';
import {
	OrderedTableConfig,
	ProductTableConfig,
} from '../../../lib/Tables/table_config/TableColumns';
import AlertToast from '../../../utilities/alertToast/AlertToast';
import ReactModal from '../../../utilities/Modal/ReactModal';
import ProfileContentLayout from '../../../utilities/ProfileContentLayout';
import toastConfig from '../../../utilities/toastConfig';

export default function MyAllOrdersContent({ my_orders }) {
	const [modal, setModal] = useState(false);
	const [modalData, setModalData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [orderData, setOrderData] = useState(my_orders);

	// handle  modal data
	const handleModal = (products_data) => {
		setModalData(products_data);
		setFilterData(products_data);
		setModal(true);
	};

	// initialize filter and sorting dependency
	const { sorting_dependency } = useModalFilter(modalData, setFilterData);
	const { order_sorting_dependency } = useOrderFilter(my_orders, setOrderData);

	// delete hook
	const { toastOn, setToastOn, toastType, toastText, handleDelete } =
		useDeleteReq();

	// toast config
	const { toast_config } = toastConfig(setToastOn, toastType, toastText);

	// table columns and config
	const { OrderedTableColumns } = OrderedTableConfig(handleDelete, handleModal);
	const { ProductTableColumns } = ProductTableConfig(handleDelete);
	return (
		<>
			<ProfileContentLayout content_title='manage all orders'>
				{/* alert toast here */}
				{toastOn && <AlertToast toast_config={toast_config} />}

				{/* orders show on table */}
				<div className='dashboard_row_wrapper'>
					{/* <ReactOrdersTable ORDERS_DATA={my_orders} handleModal={handleModal} /> */}

					<Table
						table_columns={OrderedTableColumns}
						table_data={orderData}
						sorting_dependency={order_sorting_dependency}
						sorter={true}
						isProduct={false}
						handleModal={handleModal}
					/>

					{modal && (
						<ReactModal
							setModal={setModal}
							modal_data={modalData}
							modal_title='Order Details'
						>
							{/* <ReactPaginationTable
                PRODUCTS_DATA={modalData}
                PRODUCTS_TABLE_COLUMNS={ORDERED_PRODUCT_TABLE_COLUMNS}
              />	 */}
							<Table
								table_columns={ProductTableColumns}
								table_data={filterData}
								sorting_dependency={sorting_dependency}
								sorter={true}
								isProduct={true}
							/>
						</ReactModal>
					)}
				</div>
			</ProfileContentLayout>
		</>
	);
}
