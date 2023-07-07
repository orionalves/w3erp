import { TitleStyled } from './styles'

type TitleType = {
  title: string
  color: string
}

const Title = ({ title, color }: TitleType) => {
  return <TitleStyled color={color}>{title}</TitleStyled>
}

export default Title
