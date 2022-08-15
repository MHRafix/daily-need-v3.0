import nc from "next-connect";
import LimitedProducts from "../../../../models/LimitedProducts";
import db from "../../../utilities/database";
const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  if (req.body) {
    console.log(req.body);
    // create product
    const newProduct = new LimitedProducts(req.body);
    const added = await newProduct.save();
    await db.disconnect();

    // conditionaly send response
    if (added) {
      res.status(201).send({ success: "Product added successfully!" });
    } else {
      res.send({ error: "Opps, something wrong!" });
    }
  } else {
    res.send({ error: "Please check your internet!" });
  }
});

export default handler;
