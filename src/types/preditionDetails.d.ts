type PreditionDetailsSort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

type PreditionDetailsPageable = {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  sort: PreditionDetailsSort
  unpaged: boolean
}

type PreditionDetailsItem = {
  id: number
  nome: string
  proximaCompra?: string
  quantidade: number
  ultimaCompra: string
}

type PreditionDetails = {
  content: PreditionDetailsItem[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: PreditionDetailsPageable
  size: number
  sort: PreditionDetailsSort
  totalElements: number
  totalPages: number
}
