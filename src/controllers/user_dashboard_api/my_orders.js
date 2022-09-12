/**
 * my orders api controller
 */

import Order from '../../../models/AllOrders';
import db from '../../utilities/database';

export const myOrders = async (req, res) => {
	const user_email = req.query;
	await db.connect();
	const all_orders = await Order.find({ user_email });
	await db.disconnect();

	// send response
	if (all_orders.length) {
		// data response
		res.status(200).json(all_orders);
	} else {
		// error response
		res.status(404).json({ error: 'Opps, no result found!' });
	}
};
