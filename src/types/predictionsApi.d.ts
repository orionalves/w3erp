type ProductPredictionsApi = {
  id: number
  nome: string
  proximaCompra: string
}

type PageablePredictionsApi = {
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

type PredictionsContent = {
  classificacao: string
  email: string
  id: number
  nome: string
  percentual: number
  produtos: ProductPredictionsApi[]
  telefone: string
  whatsapp: string
}

type PredictionsApi = {
  content: PredictionsContent[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: PageablePredictionsApi
  size: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  totalElements: number
  totalPages: number
}
