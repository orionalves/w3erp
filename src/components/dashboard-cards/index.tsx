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
        <DonutChart series={series} />
      </div>
      <div>
        <TitleStyled>
          Total <span className="bold">{productsCustomers}</span> em {lowHigh}
        </TitleStyled>
        <Numbers>
          <p>{total}</p>
          <Precent className={lowHigh === 'alta' ? 'high' : 'low'}>
            {lowHigh === 'alta' ? '+' : '-'}
            {percent}%
          </Precent>
        </Numbers>
      </div>
    </DashboardCardStyled>
  )
}

export default DashboardCard
