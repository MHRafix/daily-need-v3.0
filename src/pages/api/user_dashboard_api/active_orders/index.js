import nc from 'next-connect';
import Order from '../../../../../models/AllOrders';
import db from '../../../../utilities/database';

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
	await db.connect();
	const all_orders = await Order.find({});
	await db.disconnect();

	if (all_orders.length) {
		const active_orders = all_orders.filter(
			(order) =>
				order.order_overview.order_status === 'pendding' ||
				order.order_overview.order_status === 'inprogress'
		);

		if (active_orders.length) {
			res.status(200).json(active_orders);
		} else {
			res.status(404).json({ error: 'Opps, no result found!' });
		}
	} else {
		res.status(404).json({ error: 'Opps, something went wrong!' });
	}
});

// function export here
export default handler;
