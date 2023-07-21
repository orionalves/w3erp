import { useState } from 'react'
import {
  TableContainerStyled,
  TableContainerHeader,
  Title,
  IconTitle,
  UpDown
} from './styles'
import Table from '@components/table'

type TableContainerProps = {
  title: string
  color: string
  image: string
  th: string[]
  td?: Partial<Products>[] | Partial<Customers>[]
}

const TableContainer = ({
  title,
  color,
  image,
  th,
  td
}: TableContainerProps) => {
  const [classUpDown, setClassUpDown] = useState<UpDownType>('EM_ALTA')
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
            onClick={() => setClassUpDown('EM_ALTA')}
            className={classUpDown === 'EM_ALTA' ? 'up' : ''}
          >
            Em alta
          </div>
          <div
            onClick={() => setClassUpDown('EM_BAIXA')}
            className={classUpDown === 'EM_BAIXA' ? 'down' : ''}
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
