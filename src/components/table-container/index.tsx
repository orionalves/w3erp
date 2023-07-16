import { useState } from 'react'
import {
  TableContainerStyled,
  TableContainerHeader,
  Title,
  IconTitle,
  UpDown
} from './styles'
import Table from '@components/table'

type UpDownType = 'up' | 'down'

type TableContainerProps = {
  title: string
  color: string
  image: string
  th: string[]
  td: Products[] | Customers[]
}

const TableContainer = ({
  title,
  color,
  image,
  th,
  td
}: TableContainerProps) => {
  const [classUpDown, setClassUpDown] = useState<UpDownType>('up')
  return (
    <TableContainerStyled>
      <TableContainerHeader>
        <Title>
          <IconTitle color={color}>
            <img src={image} alt={image + 'image'} />
          </IconTitle>
          <h2>{title}</h2>
        </Title>
        <UpDown>
          <div
            onClick={() => setClassUpDown('up')}
            className={classUpDown === 'up' ? 'up' : ''}
          >
            Em alta
          </div>
          <div
            onClick={() => setClassUpDown('down')}
            className={classUpDown === 'down' ? 'down' : ''}
          >
            Em baixa
          </div>
        </UpDown>
      </TableContainerHeader>
      <Table th={th} td={td} />
    </TableContainerStyled>
  )
}

export default TableContainer
