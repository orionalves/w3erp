import { HeaderStyled } from './styles'
import user from '@icons/user.svg'
import chevronDown from '@icons/chevron-down.svg'

const Header = () => {
  return (
    <HeaderStyled>
      <img src={user} alt="Ícone de usuário." />
      <div>
        <h3>Orion Alves</h3>
        <p>orion@alves.com</p>
      </div>
      <img src={chevronDown} alt="Seta para baixo." />
    </HeaderStyled>
  )
}

export default Header
