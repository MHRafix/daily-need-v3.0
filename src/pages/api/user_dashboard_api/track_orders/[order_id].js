import nc from 'next-connect';
import Order from '../../../../../models/AllOrders';
import db from '../../../../utilities/database';

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
	const order_id = req.query;
	await db.connect(); // database connect here
	const result = await Order.findById({ _id: order_id });
	await db.disconnect(); // database disconnect here
	// conditionaly send data
	if (result) {
		res.status(200).json(result); // send all orders data
	} else {
		res.status(404).json({ error: 'Opps, no result found!' });
	}
});

// function export here
export default handler;
