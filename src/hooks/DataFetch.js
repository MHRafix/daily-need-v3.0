import axios from "axios";
import { useState } from "react";

export default function DataFetcher(end_point) {
  const [data, setData] = useState({});
  const url = `https://daily-need.vercel.app/api/${end_point}`;
  const resp = axios
    .get(url)
    .then((res) => res.json())
    .then((data) => setData(data));

  return { data };
}
