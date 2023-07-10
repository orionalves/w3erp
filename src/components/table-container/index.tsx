import { ReactNode } from 'react'
import { TableContainerStyled, TableContainerHeader } from './styles'

type TableContainerProps = {
  image: string
  th: string[]
  td: Record<string, string | number | ReactNode>[]
}

const TableContainer = ({ image, th, td }: TableContainerProps) => {
  return (
    <TableContainerStyled>
      <TableContainerHeader>
        <div>
          <img src={image} alt={image + 'image'} />
          <h2>Produtos</h2>
        </div>
        <div>
          <div>Em alta</div>
          <div>Em baixa</div>
        </div>
      </TableContainerHeader>
      <table>
        <thead>
          <tr>
            {th.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {td.map((item, index) => (
            <tr key={index}>
              <td>{(index + 1).toString().padStart(3, '0')}</td>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainerStyled>
  )
}

export default TableContainer
