import { isAxiosError } from 'axios'
import api from './index'

type LoginResponse = {
  token: 'string'
  type: 'string'
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

// export const loginName = async ({ email }: Omit<LoginType, 'senha'>) => {
//   try {
//     const response = await api.get<CentralUsuario>('/central/usuario')
//     const user = response.data.content[0].nome

//     if (response.data.content[0].email === email) {
//       return user
//     }
//   } catch (error) {
//     if (isAxiosError(error)) return error.response?.data
//   }
// }
