type ChildrenType = {
  children: ReactNode
}

type DashboardCardType = {
  series?: number
  productsCustomers: 'produtos' | 'clientes'
  lowHigh: 'baixa' | 'alta'
  total?: number
  percent?: number
}

type DashboardCardApi = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}

type UpDownType = 'EM_ALTA' | 'EM_BAIXA'

type DashboardTableApiProps = {
  token: string
  upDown: UpDownType
}

type ProductsCustomersData = {
  id: number
  nome: string
  percentual: number
}[]

type TableProductsPage = {
  id: string
  product: string
  status: string
  percent: number
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
  token?: string | null
}

type Me = {
  email: string
  id: number
  nome: string
  papel: string
}
