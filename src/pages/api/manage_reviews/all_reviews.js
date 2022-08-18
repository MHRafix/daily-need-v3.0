import nc from "next-connect";
import Reviews from "../../../../models/Reviews";
import db from "../../../utilities/database";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const all_reviews = await Reviews.find({});
  await db.disconnect();

  if (all_reviews.length) {
    res.status(200).send(all_reviews);
  }
});

// function export here
export default handler;
