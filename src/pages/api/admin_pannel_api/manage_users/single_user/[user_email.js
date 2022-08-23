import nc from "next-connect";
import User from "../../../../../../models/Users";
import db from "../../../../../utilities/database";

const handler = nc();

handler.get(async (req, res) => {
  const { user_email } = req.query;
  await db.connect();
  const single_user = await User.findOne({ user_email });
  await db.disconnect();
  if (single_user) {
    res.status(200).send(single_user);
  } else {
    res.status(404).json({ error: "No data available!" });
  }
});
export default handler;
