import bcrypt from "bcryptjs";
import nc from "next-connect";
import User from "../../../../../models/Users";
import db from "../../../../utilities/database";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ user_email: req?.body?.user_email });
  await db.disconnect();

  // check authentication
  const match = await bcrypt.compare(
    req?.body?.user_password,
    user?.user_password
  );

  if (match) {
    res.status(202).send({
      success: "Screen successfully unlocked!",
    });
  } else {
    res.send({ error: "Opps, incorrect password!" });
  }
});

export default handler;
