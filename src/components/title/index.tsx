import { TitleStyled } from './styles'

type TitleType = {
  title: string
  color: string
  className?: string
}

const Title = ({ title, color, className }: TitleType) => {
  return (
    <TitleStyled className={className} color={color}>
      {title}
    </TitleStyled>
  )
}

export default Title
