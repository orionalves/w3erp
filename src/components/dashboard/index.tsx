import MonthSelect from '@components/month-select'
import Title from '@components/title'
import {
  DashboardStyled,
  DashboardHeader,
  DashboardCardContainer
} from './styles'
import calendar from '@icons/calendar.svg'
import { color } from '@styles/constants'
import DashboardCard from '@components/dashboard-cards'

const dashboardCards: DashboardCardType[] = [
  {
    series: 80,
    productsCustomers: 'produtos',
    lowHigh: 'alta',
    total: 120,
    percent: 13
  },
  {
    series: 20,
    productsCustomers: 'produtos',
    lowHigh: 'baixa',
    total: 56,
    percent: 29
  },
  {
    series: 72,
    productsCustomers: 'clientes',
    lowHigh: 'alta',
    total: 501,
    percent: 25
  },
  {
    series: 28,
    productsCustomers: 'clientes',
    lowHigh: 'baixa',
    total: 103,
    percent: 15
  }
]

const Dashboard = () => {
  return (
    <DashboardStyled>
      <DashboardHeader>
        <Title title="Dashboard" color={color.white} />
        <div className="select">
          <img src={calendar} alt="Calendário" />
          <p>Mostrar:</p>
          <MonthSelect />
        </div>
      </DashboardHeader>
      <DashboardCardContainer>
        {dashboardCards.map((value, index) => (
          <DashboardCard
            key={index}
            series={value.series}
            productsCustomers={value.productsCustomers}
            lowHigh={value.lowHigh}
            total={value.total}
            percent={value.percent}
          />
        ))}
      </DashboardCardContainer>
    </DashboardStyled>
  )
}

export default Dashboard
