import nc from "next-connect";
import HomeSlider from "../../../../models/HomeSlider";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const sliders = await HomeSlider.find({});
  await db.disconnect();
  if (sliders.length) {
    res.status(200).send(sliders);
  } else {
    res.send({ error: "Opps, something went wrong!" });
  }
});

// function export here
export default handler;
