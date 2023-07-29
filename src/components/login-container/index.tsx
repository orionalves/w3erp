import InputField from '@components/input-field'
import Button from '@components/button'
import { LoginLayoutStyled } from './styles'
import photo from '@images/photo.svg'
import { ChangeEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

type LoginLayoutProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleLogin: (event: MouseEvent<HTMLButtonElement>) => Promise<void>
}

const LoginLayout = ({ handleChange, handleLogin }: LoginLayoutProps) => (
  <LoginLayoutStyled>
    <div className="center">
      <p>Seja bem vindo!</p>
      <h2>Realize seu Login</h2>
      <InputField label="E-mail" type="text" onChange={handleChange} />
      <div className="password">
        <InputField label="Senha" type="password" onChange={handleChange} />
      </div>
      <div className="flex">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Lembrar-me</label>
        </div>
        <Link to="forget-password">Esqueci minha senha</Link>
      </div>
      <Button title="Entrar" onClick={handleLogin} />
    </div>
    <img src={photo} alt="Foto de uma pessoa sorrindo ao acessar o sistema." />
  </LoginLayoutStyled>
)

export default LoginLayout
