import nc from "next-connect";
import Category from "../../../../models/Category";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const categories = await Category.find({});
  await db.disconnect();

  if (categories.length) {
    res.status(200).send(categories);
  }
});

// function export here
export default handler;
