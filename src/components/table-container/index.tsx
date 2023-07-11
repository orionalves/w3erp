import { ReactNode } from 'react'
import { TableContainerStyled, TableContainerHeader, Title } from './styles'
import Table from '@components/table'

type TableContainerProps = {
  image: string
  th: string[]
  td: Record<string, string | number | ReactNode>[]
}

const TableContainer = ({ image, th, td }: TableContainerProps) => {
  return (
    <TableContainerStyled>
      <TableContainerHeader>
        <Title>
          <img src={image} alt={image + 'image'} />
          <h2>Produtos</h2>
        </Title>
        <div>
          <div>Em alta</div>
          <div>Em baixa</div>
        </div>
      </TableContainerHeader>
      <Table th={th} td={td} />
    </TableContainerStyled>
  )
}

export default TableContainer
