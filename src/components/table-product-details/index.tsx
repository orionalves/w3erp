import { TableProductDetailsStyled } from './styles'
import { productDetailsTh } from '@constants/index'
import down from '@icons/trending-down.svg'
import up from '@icons/trending-up.svg'
import { color } from '@styles/constants'
import Table from '@components/table'
import TableContainerHeader from '@components/table-container-header'
import { capitalize } from '@utils/capitalize'

type TableProductDetailsProps = {
  title: 'Clientes em baixa' | 'Clientes em alta'
  apiResult?: ProductIdClient
}

const TableProductDetails = ({
  title,
  apiResult
}: TableProductDetailsProps) => {
  return (
    <TableProductDetailsStyled>
      <TableContainerHeader
        title={title}
        image={title === 'Clientes em baixa' ? down : up}
        alt={
          title === 'Clientes em baixa'
            ? 'Gráfico para baixo'
            : 'Gráfico para baixo'
        }
        color={title === 'Clientes em baixa' ? color.error : color.success}
      ></TableContainerHeader>
      <Table th={productDetailsTh}>
        {apiResult !== undefined &&
          apiResult.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td style={{ textAlign: 'left' }}>{capitalize(value.nome)}</td>
              <td>
                {value.percentual !== undefined && value.percentual > 0 && '+'}
                {value.percentual}%
              </td>
              <td>{value.quantidade}</td>
            </tr>
          ))}
      </Table>
    </TableProductDetailsStyled>
  )
}

export default TableProductDetails
