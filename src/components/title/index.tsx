import { capitalize } from '@utils/capitalize'
import { TitleStyled } from './styles'

type TitleType = {
  title: string
  color: string
  className?: string
}

const Title = ({ title, color, className }: TitleType) => {
  return (
    <TitleStyled className={className} color={color}>
      {capitalize(title)}
    </TitleStyled>
  )
}

export default Title
