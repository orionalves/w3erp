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

type LoginType = {
  email: string
  senha: string
}

type TokenProps = {
  token: string | null
}

type Me = {
  email: string
  id: number
  nome: string
  papel: string
}

type Product = {
  id: number
  nome: string
  proximaCompra: string
}

type Pageable = {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  unpaged: boolean
}

type PredictionsApi = {
  content: {
    classificacao: string
    email: string
    id: number
    nome: string
    percentual: number
    produtos: Product[]
    telefone: string
    whatsapp: string
  }[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: Pageable
  size: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  totalElements: number
  totalPages: number
}
