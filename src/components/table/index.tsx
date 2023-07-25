import { ReactNode } from 'react'
import { TableStyled } from './styles'

type TableProps = {
  th: string[]
  children: ReactNode
}

const Table = ({ th, children }: TableProps) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          {th.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </TableStyled>
  )
}

export default Table
