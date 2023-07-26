import { isAxiosError } from 'axios'
import api from './index'

export const getProductCustomerDetail = async (
  token: string,
  classification: string,
  id?: string,
  route?: 'cliente' | 'produto'
) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get<ProductCustomerClient>(
      `/app/${route}/${id}/${
        route === 'cliente' ? 'produtos' : 'clientes'
      }?classificacao=${classification}`
    )
    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}

export const getProductCustomerSummary = async (
  token: string,
  id?: string,
  route?: 'cliente' | 'produto'
) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get<ProductCustomerSummary>(
      `/app/${route}/${id}/resumo`
    )
    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}
