import { useState } from 'react'
import { HeaderStyled } from './styles'
import user from '@icons/user.svg'
import chevronDown from '@icons/chevron-down.svg'
import Balloon from '@components/balloon'

const Header = () => {
  const [balloon, setBalloon] = useState(false)

  return (
    <HeaderStyled>
      <img src={user} alt="Ícone de usuário." />
      <div>
        <h3>{localStorage.getItem('NAME')}</h3>
        <p>orion@alves.com</p>
      </div>
      <img
        onClick={() => setBalloon(!balloon)}
        src={chevronDown}
        alt="Seta para baixo."
      />
      {balloon && <Balloon />}
    </HeaderStyled>
  )
}

export default Header
