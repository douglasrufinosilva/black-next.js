import { NextApiRequest, NextApiResponse } from "next";
import products from '../../src/database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products)
}