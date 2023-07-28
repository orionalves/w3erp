import { isAxiosError } from 'axios'
import api from './index'

export const getPredictions = async (
  token: string,
  id?: string,
  page?: number
) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get<PredictionsApi>(
      `app/predicao?clienteId=${id !== undefined ? id : ''}&page=${page}`
    )

    return response.data.content
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}
