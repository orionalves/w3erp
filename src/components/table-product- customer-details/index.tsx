import { TableProductCustomerDetailsStyled } from './styles'
import { productDetailsTh } from '@constants/index'
import down from '@icons/trending-down.svg'
import up from '@icons/trending-up.svg'
import { color } from '@styles/constants'
import Table from '@components/table'
import TableContainerHeader from '@components/table-container-header'
import { capitalize } from '@utils/capitalize'

type TableProductCustomerDetailsProps = {
  title:
    | 'Clientes em baixa'
    | 'Clientes em alta'
    | 'Produtos em baixa'
    | 'Produtos em alta'
  apiResult?: ProductCustomerClient
}

const TableProductCustomerDetails = ({
  title,
  apiResult
}: TableProductCustomerDetailsProps) => {
  return (
    <TableProductCustomerDetailsStyled>
      <TableContainerHeader
        title={title}
        image={title.includes('em baixa') ? down : up}
        alt={
          title.includes('em baixa')
            ? 'Gráfico para baixo'
            : 'Gráfico para baixo'
        }
        color={title.includes('em baixa') ? color.error : color.success}
      ></TableContainerHeader>
      <Table th={productDetailsTh}>
        {apiResult !== undefined &&
          apiResult.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{capitalize(value.nome)}</td>
              <td>
                {value.percentual !== undefined && value.percentual > 0 && '+'}
                {value.percentual}%
              </td>
              <td>{value.quantidade}</td>
            </tr>
          ))}
      </Table>
    </TableProductCustomerDetailsStyled>
  )
}

export default TableProductCustomerDetails
