import { ReactNode } from 'react'
import { TableStyled } from './styles'

type TableProps = {
  th: string[]
  td?: Record<string, ReactNode>[]
}

const Table = ({ th, td }: TableProps) => {
  // const convertToCamelCase = (text: string) => {
  //   if (typeof text === 'string') {
  //     return (
  //       text
  //         .toLowerCase()
  //         .replace(/\b\w/g, (letter: string) => letter.toUpperCase())
  //     )
  //   }
  // }
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
        {td !== undefined &&
          td.map((item, i) => (
            <tr key={i}>
              {Object.values(item).map((value, index) => (
                // <td key={index}>{convertToCamelCase(value as string)}</td>
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </TableStyled>
  )
}

export default Table
