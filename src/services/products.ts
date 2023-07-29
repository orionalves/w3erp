import { isAxiosError } from 'axios'
import api from './index'

export const getProducts = async (
  token: string,
  search: string,
  pageNumber: number,
  classification: string
) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`
    api.defaults.headers.common['X-TENANT-ID'] = `${
      import.meta.env.VITE_X_TENANT_ID
    }`
    const response = await api.get<ProductsApi>(
      // eslint-disable-next-line max-len
      `app/produto?classificacao=${classification}&page=${pageNumber}&query=${search}&size=10&sort=id`
    )

    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}
