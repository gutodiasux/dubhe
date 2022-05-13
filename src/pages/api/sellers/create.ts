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


handler.post(async (req, res) => {
  const { business_name, business_phone, business_email, location_mark } = req.body
  await prisma.seller.create({
    data: {
      business_name: business_name,
      seller_profile: {
        create: {
          business_email: business_email,
          business_phone: business_phone,
          location_mark: location_mark
        }
      }
    }
  })

  return res.status(201).end()
})

export default handler