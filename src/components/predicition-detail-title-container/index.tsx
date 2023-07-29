import Title from '@components/title'
import { TitleContainer } from './styles'
import phone from '@icons/phone-telephone.svg'
import mail from '@icons/mail.svg'
import background from '@images/background-prediction-details.png'
import { color } from '@styles/constants'

type PredictionDetailTitleContainerProps = {
  title?: string
  phoneNumber?: string
  email?: string
}

const PredictionDetailTitleContainer = ({
  title,
  phoneNumber,
  email
}: PredictionDetailTitleContainerProps) => {
  return (
    <TitleContainer>
      <img className="background" src={background} alt="Imagem de fundo" />

      <Title
        title={title != null ? title : ''}
        color={color.white}
        className="bold"
      />
      <div>
        {phoneNumber != null && (
          <div>
            <img src={phone} alt="Ícone de telefone" />
            <p>{phoneNumber}</p>
          </div>
        )}
        {email != null && (
          <div>
            <img src={mail} alt="Ícone de carta" />
            <p>{email}</p>
          </div>
        )}
      </div>
    </TitleContainer>
  )
}

export default PredictionDetailTitleContainer
