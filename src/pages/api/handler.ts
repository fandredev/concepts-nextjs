import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../utils/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req
    const { db } = await connectToDatabase()
    const data = await db.collection('users').find().toArray()

    switch(method) {
      case 'GET':
        res.status(200).json(data)
      break;
      default:
        res.setHeader('Allow', ['GET','PUT'])
        res.status(405).end(`Method ${method} not allowed`)
    }
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler