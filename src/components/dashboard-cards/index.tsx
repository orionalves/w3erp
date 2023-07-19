import { DashboardCardStyled, TitleStyled, Numbers, Precent } from './styles'
import DonutChart from '@components/donut'

const DashboardCard = ({
  series,
  productsCustomers,
  lowHigh,
  total,
  percent
}: DashboardCardType) => {
  return (
    <DashboardCardStyled>
      <div>
        <DonutChart series={series !== undefined ? series : 0} />
      </div>
      <div>
        <TitleStyled>
          Total <span className="bold">{productsCustomers}</span> em {lowHigh}
        </TitleStyled>
        <Numbers>
          <p>{total !== undefined ? total : 0}</p>
          <Precent className={lowHigh === 'alta' ? 'high' : 'low'}>
            {lowHigh === 'alta' ? '+' : ''}
            {percent !== undefined ? percent : 0}%
          </Precent>
        </Numbers>
      </div>
    </DashboardCardStyled>
  )
}

export default DashboardCard
