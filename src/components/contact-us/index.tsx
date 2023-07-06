import { ContainerStyled, ButtonStyled } from './styles'
import hands from '@images/hands.svg'

const ContacUs = () => {
  return (
    <ContainerStyled>
      <img src={hands} alt="Mãos se conectando" />
      <p>
        Precisando de {}
        <span className="bold">ajuda ou suporte</span>
        {} em algo?
      </p>
      <ButtonStyled to="/contactus">Fale conosco</ButtonStyled>
    </ContainerStyled>
  )
}

export default ContacUs
