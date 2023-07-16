import Arrow from '@components/arrow'
import { CardsStyled } from './styles'
import user from '@icons/user-blue.svg'

const Cards = () => (
  <CardsStyled>
    <div className="header">
      <div className="circle">
        <img src={user} alt="Lupa" />
      </div>
      <div className="title">
        <h2>Hotel Ibis</h2>
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
        <tr>
          <td>Álcool em gel</td>
          <td className="bold">02/09/22</td>
        </tr>
        <tr>
          <td>Água sanitária</td>
          <td className="bold">05/09/22</td>
        </tr>
        <tr>
          <td>Papel higiênico</td>
          <td className="bold">10/09/22</td>
        </tr>
      </tbody>
    </table>
  </CardsStyled>
)

export default Cards
