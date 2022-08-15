import nc from "next-connect";
import LimitedProducts from "../../../../models/LimitedProducts";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await LimitedProducts.find({});
  await db.disconnect();

  if (products.length) {
    res.status(200).send(products);
  } else {
    res.send({ error: "Opps, something went wrong!" });
  }
});

// function export here
export default handler;
