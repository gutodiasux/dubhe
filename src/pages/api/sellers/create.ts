import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onNoMatch: (req, res) => {
    res.status(200).json({ message: 'Resource not found!' })
  },
  onError: (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({ message: 'Something broke!' })
  }
})

export default handler