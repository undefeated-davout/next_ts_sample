import type { NextApiRequest, NextApiResponse } from 'next';
import apidata from '../../../components/data';

type Data = {
  id: string;
  item: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {
    query: {
      params: [id, itemName],
    },
  } = req;

  const result = { id: id, item: apidata[Number(id)][itemName] };
  res.json(result);
}
