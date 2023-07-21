import { TableDashboardStyled, UpDown } from './styles'
import { productsTh, customersTh } from '../../assets/constants/index'
import Arrow from '@components/arrow'
import { color } from '@styles/constants'
import facialCleanser from '@icons/facial-cleanser-blue.svg'
import people from '@icons/every-user.svg'
import Table from '@components/new-table'
import TableContainerHeader from '@components/table-container-header'

type TableDashboardProps = {
  title: 'Produtos' | 'Clientes'
  apiResult: Partial<ProductsCustomersData>
  upDown: UpDownType
  setUpDown: React.Dispatch<React.SetStateAction<UpDownType>>
}

const convertToCapitalize = (text?: string) => {
  if (typeof text === 'string') {
    return text
      .toLowerCase()
      .replace(/(?<!\p{L})\b\w(?!\/)/gu, letter => letter.toUpperCase())
  }
}

const TableDashboard = ({
  title,
  apiResult,
  upDown,
  setUpDown
}: TableDashboardProps) => {
  return (
    <TableDashboardStyled>
      <TableContainerHeader
        title={title}
        image={title === 'Produtos' ? facialCleanser : people}
        alt={title === 'Produtos' ? 'Imagem de um ítem' : 'Pessoas'}
        color={title === 'Produtos' ? color.primaryBlue4 : color.primary}
      >
        <UpDown>
          <div
            onClick={() => setUpDown('EM_ALTA')}
            className={upDown === 'EM_ALTA' ? 'up' : ''}
          >
            Em alta
          </div>
          <div
            onClick={() => setUpDown('EM_BAIXA')}
            className={upDown === 'EM_BAIXA' ? 'down' : ''}
          >
            Em baixa
          </div>
        </UpDown>
      </TableContainerHeader>
      <Table th={title === 'Produtos' ? productsTh : customersTh}>
        <>
          {apiResult !== undefined &&
            apiResult.map((value, index) => (
              <tr key={index}>
                <td>{value?.id}</td>
                <td style={{ textAlign: 'left' }}>
                  {convertToCapitalize(value?.nome)}
                </td>
                <td>
                  {upDown === 'EM_ALTA' && '+'}
                  {value?.percentual}%
                </td>
                <td>
                  <Arrow />
                </td>
              </tr>
            ))}
        </>
      </Table>
    </TableDashboardStyled>
  )
}

export default TableDashboard
