import Arrow from '@components/arrow'
import { CardsStyled } from './styles'
import user from '@icons/user-blue.svg'
import { capitalize } from '@utils/capitalize'
import { formatDate } from '@utils/formatDate'

type ProductsCards = {
  name: string
  nextPurchase: string
}

type CardsProps = {
  name: string
  products: ProductsCards[]
}

const Cards = ({ name, products }: CardsProps) => (
  <CardsStyled>
    <div className="header">
      <div className="circle">
        <img src={user} alt="Lupa" />
      </div>
      <div className="title">
        <h2>{capitalize(name)}</h2>
        <li>Status vai aqui</li>
      </div>
      <Arrow />
    </div>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th className="center">Próx. compra</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{capitalize(product.name)}</td>
            <td className="bold">{formatDate(product.nextPurchase)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </CardsStyled>
)

export default Cards
