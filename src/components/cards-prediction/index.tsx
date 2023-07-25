import right from '@icons/right.svg'
import { CardsStyled } from './styles'
import user from '@icons/user-blue.svg'
import { capitalize } from '@utils/capitalize'
import { formatDate } from '@utils/formatDate'
import { Link } from 'react-router-dom'

type ProductsCards = {
  name: string
  nextPurchase: string
}

type CardsProps = {
  id: number
  name: string
  products: ProductsCards[]
}

const Cards = ({ id, name, products }: CardsProps) => (
  <CardsStyled>
    <div className="header">
      <div className="circle">
        <img src={user} alt="Lupa" />
      </div>
      <div className="title">
        <h2>{capitalize(name)}</h2>
        <li>Status vai aqui</li>
      </div>
      <Link to={'/predictionsdetails/' + id}>
        <img src={right} alt="Seta para direita" />
      </Link>
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
