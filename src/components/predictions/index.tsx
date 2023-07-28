/* eslint-disable indent */
import Cards from '@components/cards-prediction'
import { PredictionsStyled } from './styles'

type PredictionsContainerProps = {
  predictions: PredictionsContent[]
  search: string
  children: React.ReactNode
}
type CardsType = {
  id: number
  name: string
  products: {
    name: string
    nextPurchase: string
  }[]
}[]

const PredictionsContainer = ({
  predictions,
  search,
  children
}: PredictionsContainerProps) => {
  const cards = predictions.map(value => {
    return {
      id: value.id,
      name: value.nome,
      products: value.produtos.map(products => ({
        name: products.nome,
        nextPurchase: products.proximaCompra
      }))
    }
  })

  const renderCards = (cardsArray: CardsType) => {
    return cardsArray.map((value, index) => (
      <Cards
        key={index}
        name={value.name}
        products={value.products}
        id={value.id}
      />
    ))
  }
  const filteredPredictions = predictions.filter(prediction =>
    prediction.nome.toLowerCase().includes(search.toLowerCase())
  )

  const filteredCards = cards.filter(card =>
    filteredPredictions.some(
      prediction => card.name.toLowerCase() === prediction.nome.toLowerCase()
    )
  )

  return (
    <>
      <PredictionsStyled>
        {search.length > 0 ? renderCards(filteredCards) : renderCards(cards)}
        {children}
      </PredictionsStyled>
    </>
  )
}

export default PredictionsContainer
