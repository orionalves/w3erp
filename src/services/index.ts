import axios, { isAxiosError } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(null, error => {
  if (isAxiosError(error)) {
    if (
      error.response?.status === 401 ||
      error.response?.status === 403 ||
      error.response?.status === 404
    ) {
      localStorage.removeItem('TOKEN')
      location.href = '/login'
    }
  }
})

export default api
