type SortProductsApi = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

type PageableProductsApi = {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  sort: Sort
  unpaged: boolean
}

type ContentProductsApi = {
  classificacao: string
  id: number
  nome: string
  percentual: number
}

type ProductsApi = {
  content: ContentProductsApi[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: PageableProductsApi
  size: number
  sort: Sort
  totalElements: number
  totalPages: number
}
