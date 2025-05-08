import axios from 'axios'

const API_URL = 'https://fake-api-tau.vercel.app/api/efood/checkout'

export const checkoutRequest = async (payload: unknown) => {
  const response = await axios.post(API_URL, payload)
  return response.data
}
