import { useContext } from 'react'
import { BalloonStyled, Menu } from './styles'
import setting from '@icons/setting.svg'
import logout from '@icons/logout.svg'
import { LoginContext } from '@context/login-context'

const Balloon = () => {
  const { setLocalStorageState } = useContext(LoginContext)
  const removeToken = () => {
    localStorage.removeItem('TOKEN')
    setLocalStorageState(null)
  }
  return (
    <BalloonStyled>
      <Menu to="/configuration">
        <img src={setting} alt="Engrenagem." />
        <p>Configurações</p>
      </Menu>
      <hr />
      <Menu onClick={() => removeToken()} to="/login">
        <img src={logout} alt="Seta para sair." />
        <p>Sair</p>
      </Menu>
    </BalloonStyled>
  )
}

export default Balloon
