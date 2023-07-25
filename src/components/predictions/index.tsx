/* eslint-disable indent */
import Cards from '@components/cards-prediction'
import { PredictionsStyled } from './styles'

type PredictionsContainerProps = {
  predictions?: Partial<PredictionsApi>
  search: string
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
  search
}: PredictionsContainerProps) => {
  const cards = predictions?.content?.map(value => {
    return {
      id: value.id,
      name: value.nome,
      products: value.produtos.map(products => ({
        name: products.nome,
        nextPurchase: products.proximaCompra
      }))
    }
  })

  const renderCards = (cardsArray?: CardsType) => {
    return cardsArray?.map((value, index) => (
      <Cards
        key={index}
        name={value.name}
        products={value.products}
        id={value.id}
      />
    ))
  }

  const filteredCards =
    search.length > 0
      ? cards?.filter(filter =>
          filter.name.toLowerCase().includes(search.toLowerCase())
        )
      : []

  return (
    <PredictionsStyled>
      {search.length > 0 ? renderCards(filteredCards) : renderCards(cards)}
    </PredictionsStyled>
  )
}

export default PredictionsContainer
