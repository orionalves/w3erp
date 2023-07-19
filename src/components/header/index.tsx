import { useEffect, useState } from 'react'
import { HeaderStyled } from './styles'
import user from '@icons/user.svg'
import chevronDown from '@icons/chevron-down.svg'
import Balloon from '@components/balloon'
import { loginName } from '@services/login'

const Header = ({ token }: TokenProps) => {
  const [balloon, setBalloon] = useState(false)
  const [data, setData] = useState<Me | null>(null)
  useEffect(() => {
    if (!token) {
      return
    }
    const fetchLoginName = async () => {
      try {
        const result = await loginName({ token })
        setData(result)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchLoginName()
  }, [token])

  return (
    <HeaderStyled>
      <img src={user} alt="Ícone de usuário." />
      <div>
        {data !== null && <h3>{data.nome}</h3>}
        {data !== null && <p>{data.email}</p>}
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
