import type { NextApiRequest, NextApiResponse } from 'next';
import apidata from '../../../components/data';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {
    query: { id },
  } = req;

  res.json(apidata[Number(id)]);
}
