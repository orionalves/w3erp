import { TablePredictionDetailsStyled } from './styles'
import { historyTh, emptyingTh } from '@constants/index'
import clock from '@icons/history.svg'
import facialCleanser from '@icons/facial-cleanser-red.svg'
import v from '@icons/action.svg'
import { color } from '@styles/constants'
import Table from '@components/table'
import TableContainerHeader from '@components/table-container-header'
import { capitalize } from '@utils/capitalize'
import { formatDateWithoutYear } from '@utils/formatDate'

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
        image={title === 'Histórico' ? clock : facialCleanser}
        alt={
          title === 'Histórico' ? 'Gráfico para baixo' : 'Gráfico para baixo'
        }
        color={title === 'Histórico' ? color.gray200 : color.lightRed}
        titleColor={title !== 'Histórico' ? color.error : undefined}
      ></TableContainerHeader>
      <Table th={title === 'Histórico' ? historyTh : emptyingTh}>
        {apiResult !== undefined &&
          apiResult.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{capitalize(value.nome)}</td>
              <td>{formatDateWithoutYear(value.ultimaCompra)}</td>
              {value.proximaCompra != null && (
                <td>{formatDateWithoutYear(value.proximaCompra)}</td>
              )}
              <td>{value.quantidade}</td>
              <td>
                <img src={v} alt="V" />
              </td>
            </tr>
          ))}
      </Table>
    </TablePredictionDetailsStyled>
  )
}

export default TablePredictionDetails
