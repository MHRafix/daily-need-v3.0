import nc from "next-connect";
import BrandSlider from "../../../../models/BrandSlider";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const brands = await BrandSlider.find({});
  await db.disconnect();
  if (brands.length) {
    res.status(200).send(brands);
  } else {
    res.send({ error: "Opps, something went wrong!" });
  }
});

// function export here
export default handler;
