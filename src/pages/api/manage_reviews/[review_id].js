import nc from "next-connect";
import Reviews from "../../../../models/Reviews";
import db from "../../../utilities/database";

const handler = nc();

handler.delete(async (req, res) => {
  const { review_id } = req.query;
  await db.connect();
  const delete_review = await Reviews.deleteOne({ _id: review_id });
  await db.disconnect();
  if (delete_review) {
    res.status(202).send({ success: "Review deleted successfully!" });
  } else {
    res.send({ error: "Opps, something went wrong!" });
  }
});
export default handler;
