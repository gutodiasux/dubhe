import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { prisma } from '../../../infra/prisma'

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onNoMatch: (req, res) => {
    res.status(200).json({ message: 'Resource not found!' })
  },
  onError: (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({ message: 'Something broke!' })
  }
})

handler.get(async (req, res) => {
  const sellers = await prisma.seller.findMany({
    include: {
      seller_profile: true
    }
  })

  return res.status(200).json(sellers)
})

export default handler