import { useContext } from 'react'
import { BalloonStyled, Menu, Triangle } from './styles'
import setting from '@icons/setting.svg'
import logout from '@icons/logout.svg'
import { LoginContext } from '@context/login-context'

type BalloonProps = {
  balloonRef?: React.RefObject<HTMLDivElement>
}

const Balloon = ({ balloonRef }: BalloonProps) => {
  const { setLocalStorageState } = useContext(LoginContext)
  const removeToken = () => {
    localStorage.removeItem('TOKEN')
    setLocalStorageState(null)
  }
  return (
    <BalloonStyled ref={balloonRef}>
      <Triangle />
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
