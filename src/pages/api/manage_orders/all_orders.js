import nc from "next-connect";
import Order from "../../../../models/AllOrders";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect(); // database connect here
  const all_orders = await Order.find({});

  // conditionaly send data
  if (all_orders.length) {
    await db.disconnect(); // database disconnect here
    res.send(all_orders); // send all orders data
  } else {
    // throw error here
    res.send({ error: "Opps, something wrong!" });
  }
});

// function export here
export default handler;
