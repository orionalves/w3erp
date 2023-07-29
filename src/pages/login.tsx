import { loginService } from '../services/login'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginLayout from '@components/login-container'

const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<LoginType>({
    email: '',
    senha: ''
  })
  const { email, senha } = values

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (email === '' || senha === '') {
      return
    }

    try {
      const result = await loginService(values)
      localStorage.setItem('TOKEN', result.token)
      navigate('/home')
    } catch (event) {
      if (event instanceof Error) {
        window.alert(event.message)
      }
    }
  }

  return (
    <>
      <LoginLayout handleChange={handleChange} handleLogin={handleLogin} />
    </>
  )
}

export default Login
