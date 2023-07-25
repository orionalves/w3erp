import { TablePredictionDetailsStyled } from './styles'
import { historyTh, emptyingTh } from '@constants/index'
import down from '@icons/trending-down.svg'
import up from '@icons/trending-up.svg'
import { color } from '@styles/constants'
import Table from '@components/table'
import TableContainerHeader from '@components/table-container-header'
import { capitalize } from '@utils/capitalize'

type TablePredictionDetailsProps = {
  title: 'Histórico' | 'Produtos esgotando'
  apiResult?: PreditionDetailsItem[]
}

const TablePredictionDetails = ({
  title,
  apiResult
}: TablePredictionDetailsProps) => {
  return (
    <TablePredictionDetailsStyled>
      <TableContainerHeader
        title={title}
        image={title === 'Histórico' ? down : up}
        alt={
          title === 'Histórico' ? 'Gráfico para baixo' : 'Gráfico para baixo'
        }
        color={title === 'Histórico' ? color.error : color.success}
      ></TableContainerHeader>
      <Table th={title === 'Histórico' ? historyTh : emptyingTh}>
        {apiResult !== undefined &&
          apiResult.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{capitalize(value.nome)}</td>
              <td>{value.ultimaCompra}</td>
              {title !== 'Histórico' && <td>{value.ultimaCompra}</td>}
              <td>{value.quantidade}</td>
              <td>v</td>
            </tr>
          ))}
      </Table>
    </TablePredictionDetailsStyled>
  )
}

export default TablePredictionDetails
