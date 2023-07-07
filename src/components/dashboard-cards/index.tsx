import { DashboardCardStyled } from './styles'
import DonutChart from '@components/donut'

const DashboardCard = () => {
  return (
    <DashboardCardStyled>
      <DonutChart series={80} />
      <div>
        Total produtos em alta
        <div style={{ display: 'flex', gap: '1rem' }}>
          120
          <div>13%</div>
        </div>
      </div>
    </DashboardCardStyled>
  )
}

export default DashboardCard
