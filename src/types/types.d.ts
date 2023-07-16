type ChildrenType = {
  children: ReactNode
}

type DashboardCardType = {
  series: number
  productsCustomers: 'produtos' | 'clientes'
  lowHigh: 'baixa' | 'alta'
  total: number
  percent: number
}

type Products = {
  id: string
  product: string
  percent: number
  image: ReactNode
}

type Customers = {
  id: string
  customer: string
  percent: number
  image: ReactNode
}

type LoginType = {
  email: string
  senha: string
}

type TokenProps = {
  token: string
}

type Me = {
  email: string
  id: number
  nome: string
  papel: string
}
