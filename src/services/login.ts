import { isAxiosError } from 'axios'
import api from './index'

type LoginResponse = {
  token: string
  type: string
}

export const loginService = async ({ email, senha }: LoginType) => {
  try {
    const response = await api.post<LoginResponse>(
      '/central/autenticacao/login',
      {
        email,
        senha
      }
    )
    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}

export const loginName = async (token: string) => {
  try {
    api.defaults.headers.common['Authorization'] = `${
      import.meta.env.VITE_AUTHORIZATION_TYPE
    } ${token}`

    const response = await api.get<Me>('/central/usuario/me')

    return response.data
  } catch (error) {
    if (isAxiosError(error)) return error.response?.data
  }
}
