import nc from 'next-connect';
import User from '../../../../../../models/Users';
import db from '../../../../../utilities/database';

const handler = nc();

handler.get(async (req, res) => {
	const { user_email } = req.query;
	await db.connect();
	const loggedin_user = await User.findOne({
		user_email: user_email,
	});
	await db.disconnect();
	if (loggedin_user) {
		res.status(200).json(loggedin_user);
	} else {
		res.status(404).json({ error: 'User is not found!' });
	}
});
export default handler;
