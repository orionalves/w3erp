import MonthSelect from '@components/month-select'
import Title from '@components/title'
import { DashboardStyled } from './styles'
import calendar from '@icons/calendar.svg'
import { color } from '@styles/constants'
import DashboardCard from '@components/dashboard-cards'

const Dashboard = () => {
  return (
    <DashboardStyled>
      <div className="header">
        <Title title="Dashboard" color={color.white} />
        <div className="select">
          <img src={calendar} alt="Calendário" />
          <p>Mostrar:</p>
          <MonthSelect />
        </div>
      </div>
      <div className="dashboard">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </DashboardStyled>
  )
}

export default Dashboard
