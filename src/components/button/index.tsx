import { ButtonStyled } from './styles'

type ButtonProps = {
  title: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ title, onClick, disabled }: ButtonProps) => (
  <ButtonStyled onClick={onClick} disabled={disabled}>
    {title}
  </ButtonStyled>
)

export default Button
