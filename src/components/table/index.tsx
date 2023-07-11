import { ReactNode } from 'react'
import { TableStyled } from './styles'

type TableProps = {
  th: string[]
  td: Record<string, string | number | ReactNode>[]
}

const Table = ({ th, td }: TableProps) => {
  return (
    <TableStyled>
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
    </TableStyled>
  )
}

export default Table
