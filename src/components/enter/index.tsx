import { EnterStyled } from './styles'

type EnterProps = {
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Enter = ({ onClick, disabled }: EnterProps) => (
  <EnterStyled onClick={onClick} disabled={disabled}>
    Entrar
  </EnterStyled>
)

export default Enter
