import axios from 'axios'

export function setupApiClient() {
  if (process.env.NODE_ENV === 'production') {
    return axios.create({
      baseURL: process.env.PRODUCTION_URL + '/api'
    })
  } else {
    return axios.create({
      baseURL: 'http://localhost:3000/api'
    })
  }
}