import left from '@icons/arrow-left.svg'
import { HistoryBackStyled } from './styles'

type HistoryBackProps = {
  title: string
}

const HistoryBack = ({ title }: HistoryBackProps) => {
  const historyBack = () => {
    history.back()
  }
  return (
    <HistoryBackStyled onClick={() => historyBack()}>
      <img src={left} alt="Seta para esquerda." />
      <p>{title}</p>
    </HistoryBackStyled>
  )
}

export default HistoryBack
