import { TableContainerStyled } from './styles'

const products = [
  { product: 'Papel higiênico', percent: 72 },
  { product: 'Álcool em gel', percent: 68 },
  { product: 'Sabonete', percent: 64 },
  { product: 'Detergente', percent: 56 },
  { product: 'Água sanitária', percent: 52 },
  { product: 'Limpador Multiuso', percent: 45 },
  { product: 'Perfume', percent: 40 },
  { product: 'Cloro', percent: 32 },
  { product: 'Limpa piso', percent: 26 },
  { product: 'Alvejante', percent: 20 }
]

// const customers = [
//   { customer: 'Hótel Ibis', percent: 72 },
//   { customer: 'Restaurante Carretão', percent: 68 },
//   { customer: 'Nobile Hotel', percent: 64 },
//   { customer: 'Mc Donald’s', percent: 56 },
//   { customer: 'Academia Smart Fit', percent: 52 },
//   { customer: 'iZap Softworks', percent: 45 },
//   { customer: 'Vida Plena Academia', percent: 40 },
//   { customer: 'Hermes Pardini', percent: 32 },
//   { customer: 'Hospital Santa Rita', percent: 26 },
//   { customer: 'Restaurante Comida da Roça', percent: 20 }
// ]

const TableContainer = () => {
  return (
    <TableContainerStyled>
      <div>
        <div>
          <p>Image</p>
          <h2>Produtos</h2>
        </div>
        <div></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Percentual</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value, index) => (
            <tr key={index}>
              <td>{(index + 1).toString().padStart(3, '0')}</td>
              <td>{value.product}</td>
              <td>{value.percent}</td>
              <td>{'>'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainerStyled>
  )
}

export default TableContainer
