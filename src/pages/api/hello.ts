// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

type NameProps<T> ={
  readonly name: T
}

export default (req: NextApiRequest, res: NextApiResponse<NameProps<string>>) => res.status(200).json({ name: 'Felipe André' })

