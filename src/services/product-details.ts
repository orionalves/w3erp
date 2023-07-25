import { isAxiosError } from 'axios'
import api from './index'

export const getProductDetail = async (
  token: string,
  classification: string,
  id?: string
) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get<ProductIdClient>(
      `/app/produto/${id}/clientes?classificacao=${classification}`
    )
    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}

export const getProductSummary = async (token: string, id?: string) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get<ProductIdSummary>(
      `/app/produto/${id}/resumo`
    )
    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}
