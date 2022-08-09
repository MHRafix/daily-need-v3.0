import nc from "next-connect";
import HomeSlider from "../../../../models/HomeSlider";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const sliders = await HomeSlider.find({});
  await db.disconnect();
  res.send(sliders);
});

// function export here
export default handler;
