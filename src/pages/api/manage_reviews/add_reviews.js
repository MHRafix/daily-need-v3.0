import nc from "next-connect";
import Reviews from "../../../../models/Reviews";
import db from "../../../utilities/database";
const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  if (req.body) {
    // create product
    const newReview = new Reviews(req.body);
    const added = await newReview.save();
    await db.disconnect();

    // conditionaly send response
    if (added) {
      res.status(201).send({ success: "Review sent successfully!" });
    } else {
      res.send({ error: "Opps, something wrong!" });
    }
  } else {
    res.send({ error: "Please check your internet!" });
  }
});

export default handler;
