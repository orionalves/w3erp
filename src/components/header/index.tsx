import { useState, useRef, useEffect } from 'react'
import { HeaderStyled } from './styles'
import user from '@icons/user.svg'
import chevronDown from '@icons/chevron-down.svg'
import Balloon from '@components/balloon'

type HeaderProps = {
  name: string
  email: string
}

const Header = ({ name, email }: Partial<HeaderProps>) => {
  const [balloon, setBalloon] = useState(false)
  const balloonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        balloonRef.current &&
        !balloonRef.current.contains(event.target as Node)
      ) {
        setBalloon(false)
      }
    }

    if (balloon) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [balloon])

  return (
    <HeaderStyled>
      <img src={user} alt="Ícone de usuário." />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <img
        onClick={() => setBalloon(!balloon)}
        src={chevronDown}
        alt="Seta para baixo."
      />
      {balloon && <Balloon balloonRef={balloonRef} />}
    </HeaderStyled>
  )
}

export default Header
