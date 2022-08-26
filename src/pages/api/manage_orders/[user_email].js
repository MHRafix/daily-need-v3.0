import nc from 'next-connect';
import Order from '../../../../models/AllOrders';
import db from '../../../utilities/database';

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
	const user_email = req.query;
	await db.connect(); // database connect here
	const all_orders = await Order.find({ user_email });
	await db.disconnect(); // database disconnect here
	// conditionaly send data
	if (all_orders.length) {
		res.status(200).send(all_orders); // send all orders data
	}
});

// function export here
export default handler;
