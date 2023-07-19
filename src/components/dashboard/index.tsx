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

const Dashboard = (props: Partial<DashboardCardApi>) => {
  const dashboardCards: DashboardCardType[] = [
    {
      series: props?.percentualTotalProdutosAlta,
      productsCustomers: 'produtos',
      lowHigh: 'alta',
      total: props?.quantidadeProdutosAlta,
      percent: props?.percentualVariacaoProdutosAlta
    },
    {
      series: props?.percentualTotalProdutosBaixa,
      productsCustomers: 'produtos',
      lowHigh: 'baixa',
      total: props?.quantidadeProdutosBaixa,
      percent: props?.percentualVariacaoProdutosBaixa
    },
    {
      series: props?.percentualTotalClientesAlta,
      productsCustomers: 'clientes',
      lowHigh: 'alta',
      total: props?.quantidadeClientesAlta,
      percent: props?.percentualVariacaoClientesAlta
    },
    {
      series: props?.percentualTotalClientesBaixa,
      productsCustomers: 'clientes',
      lowHigh: 'baixa',
      total: props?.quantidadeClientesBaixa,
      percent: props?.percentualVariacaoClientesBaixa
    }
  ]
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
            series={value?.series}
            productsCustomers={value.productsCustomers}
            lowHigh={value.lowHigh}
            total={value?.total}
            percent={value?.percent}
          />
        ))}
      </DashboardCardContainer>
    </DashboardStyled>
  )
}

export default Dashboard
