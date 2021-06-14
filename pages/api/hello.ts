// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import apidata from '../../components/data';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let id = Number(req.query.id);
  if (id == undefined) {
    id = 0;
  }
  if (id >= apidata.length) {
    id = 0;
  }

  res.json(apidata[id]);
};
