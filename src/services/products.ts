import { isAxiosError } from 'axios'
import api from './index'

export const getProducts = async ({
  token,
  upDown
}: DashboardTableApiProps) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get(
      '/app/dashboard/produtos?classificacao=' + upDown
    )

    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}
