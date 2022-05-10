/* import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

export type CreateSessionDTO = {
  email: string
  password: string
}

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onNoMatch: (req, res) => {
    res.status(404).json({ message: 'Resource not found!' })
  },
  onError: (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send({ message: err.stack })
  }
})

handler.post('/sessions', (request, response) => {
  const { email, password } = request.body as CreateSessionDTO

  const user = users.get(email)

  if (!user || password !== user.password) {
    return response
      .status(401)
      .json({
        error: true,
        message: 'E-mail or password incorrect.'
      })
  }

  const { token, refreshToken } = generateJwtAndRefreshToken(email, {
    permissions: user.permissions,
    roles: user.roles,
  })

  return response.json({
    token,
    refreshToken,
    permissions: user.permissions,
    roles: user.roles,
  })
}) */

export { }
